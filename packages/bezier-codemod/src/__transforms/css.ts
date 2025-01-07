import { readFile, writeFile } from 'fs/promises'

import fg from 'fast-glob'
import postcss, { type Plugin, type Root } from 'postcss'
import scss from 'postcss-scss'

import type { Options, TransformResult, Transformer } from './base.js'

export abstract class CssTransformer implements Transformer {
  abstract transform(root: Root): void

  private createPlugin(): Plugin {
    return {
      postcssPlugin: this.constructor.name,
      Once: (root) => this.transform(root),
    }
  }

  async execute(path: string, options: Options): Promise<TransformResult[]> {
    const files = await fg(path, {
      absolute: true,
    }).then((files) => files.filter((file) => /\.(css|scss)$/.test(file)))

    const results: TransformResult[] = []

    for (const file of files) {
      try {
        const content = await readFile(file, 'utf8')
        const isSass = file.endsWith('.scss')

        const result = await postcss([this.createPlugin()]).process(content, {
          from: file,
          syntax: isSass ? scss : undefined,
        })

        const changed = result.css !== content

        if (!options.dry && changed) {
          await writeFile(file, result.css)
        }

        results.push({
          filePath: file,
          changed,
        })
      } catch (error) {
        results.push({
          filePath: file,
          changed: false,
          error: error instanceof Error ? error : new Error(String(error)),
        })
      }
    }

    return results
  }
}
