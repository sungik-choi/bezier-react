import { type TransformedToken } from 'style-dictionary'
import tinycolor from 'tinycolor2'

export const toCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())

export const toKebabCase = (str: string) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase()

export const extractNumber = (str: string) =>
  str.match(/-?\d+(\.\d+)?/g)?.join('')

export const toCSSDimension = (value: string) =>
  /^0[a-zA-Z]+$/.test(value) ? 0 : value

const clip = (value: number) => Math.min(Math.max(value, 0), 1)

export const getHoveredColor = (value: string, theme: 'dark' | 'light') => {
  const color = tinycolor(value)
  const { h, s, l, a } = color.toHsl()

  let alpha = a
  let lightness = l
  let saturation = s

  const isAchromatic = saturation <= 0.1

  if (a === 0) {
    alpha = isAchromatic ? 0.05 : 0.1
  } else if (a <= 0.2) {
    alpha = alpha * 1.5
  }

  if (a !== 0) {
    if (theme === 'light') {
      if (l <= 0.17) {
        lightness = isAchromatic
          ? (lightness + 0.1) * 1.1
          : (lightness + 0.07) * 1.1
        saturation += 0.05
      } else {
        lightness *= 0.93
        saturation -= 0.03
      }
    } else {
      if (l >= 0.83) {
        lightness = isAchromatic
          ? (lightness - 0.04) * 0.97
          : (lightness - 0.2) * 0.98
        saturation -= 0.03
      } else {
        lightness = (lightness + 0.04) * 1.005
        saturation += 0.05
      }
    }

    if (isAchromatic || s >= 0.9) {
      saturation = s
    }
  }

  const res = tinycolor.fromRatio({
    h,
    s: clip(saturation),
    l: clip(lightness),
    a: clip(alpha),
  })

  return res.toHex8String()
}

export const shouldMakeHoveredToken = ({ type, filePath }: TransformedToken) =>
  type === 'color' &&
  (filePath.includes('functional') || filePath.includes('semantic'))
