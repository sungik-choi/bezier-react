import { type SourceFile } from 'ts-morph'

import project from '../project.js'

import type { Options, TransformResult, Transformer } from './base.js'

export abstract class JavascriptTransformer implements Transformer {
  abstract transform(sourceFile: SourceFile): boolean | void

  async execute(path: string, options: Options): Promise<TransformResult[]> {
    const sourceFiles = project.addSourceFilesAtPaths(path)
    const results: TransformResult[] = []

    for (const sourceFile of sourceFiles) {
      if (!sourceFile.getFilePath().match(/\.[jt]sx?$/)) continue

      try {
        const changed = this.transform(sourceFile)

        if (!options.dry && changed) {
          await sourceFile.save()
        }

        results.push({
          filePath: sourceFile.getFilePath(),
          changed: Boolean(changed),
        })
      } catch (error) {
        results.push({
          filePath: sourceFile.getFilePath(),
          changed: false,
          error: error instanceof Error ? error : new Error(String(error)),
        })
      }
    }

    return results
  }
}
