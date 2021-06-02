/* External dependencies */
import {
  useState,
  useEffect,
} from 'react'

enum ImageEventType {
  Load = 'load',
  Error = 'error',
}

export interface CacheImage {
  src: string
  isLoaded: boolean
}

type ImageCacheType = Map<string, CacheImage>

const defaultImageCache = new Map<string, CacheImage>()

function getInitialSource(src: string, imageCache: ImageCacheType) {
  const cachedImage = imageCache.get(src)
  if (!cachedImage) { return null }
  return cachedImage
}

export default function useProgressiveImage(
  src: string,
  defaultSrc: string,
  imageCache: ImageCacheType = defaultImageCache
) {
  const [source, setSource] = useState<CacheImage | null>(() => getInitialSource(src, imageCache))

  useEffect(function updateSource() {
    if (source?.src === src) { return undefined }

    if (imageCache.get(src)?.isLoaded) {
      setSource({ src, isLoaded: true })
    }

    const image = new Image()
    image.src = src

    function loadImage(event: Event) {
      const cachedImage = {
        src,
        isLoaded: event.type === ImageEventType.Load,
      }
      setSource(cachedImage)
      imageCache.set(src, cachedImage)
    }

    image.addEventListener(ImageEventType.Load, loadImage)
    image.addEventListener(ImageEventType.Error, loadImage)

    return function cleanup() {
      image.removeEventListener(ImageEventType.Load, loadImage)
      image.removeEventListener(ImageEventType.Error, loadImage)
    }
  }, [
    src,
    source,
  ])

  if (!source || !source.isLoaded) {
    return defaultSrc
  }

  return source.src
}

