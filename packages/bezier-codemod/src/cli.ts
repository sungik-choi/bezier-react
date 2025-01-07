#!/usr/bin/env node

import { Command } from 'commander'

import { transformers } from './transforms/index.js'

export interface Options {
  dry?: boolean
  print?: boolean
}

const program = new Command()

program
  .name('npx @channel.io/bezier-codemod')
  .description('Codemod CLI for Bezier Design System')
  .argument('<transform>', 'Transform to run (e.g., icons-to-bezier-icons)')
  .argument('<path>', 'Files to transform (glob pattern)')
  .option('--dry', 'Dry run (no changes are made)', false)
  .option('--print', 'Print transformed files', false)
  .action(async (transformName: string, path: string, options: Options) => {
    const transformer = transformers[transformName]

    if (!transformer) {
      throw new Error(`
        Transform "${transformName}" not found

        Available transforms:
        ${Object.keys(transformers)
          .map((name) => `- ${name}`)
          .join('\n')}
      `)
    }

    try {
      console.log(`Running transform: ${transformName}`)
      console.log(`Target files: ${path}`)

      if (options.dry) {
        console.log('Dry run: no changes will be made')
      }

      const results = await transformer.execute(path, options)

      console.log('\nTransformation complete:')
      console.log(`Files processed: ${results.length}`)
      console.log(`Files changed: ${results.filter((r) => r.changed).length}`)

      if (options.print) {
        console.log('\nChanged files:')
        results
          .filter((r) => r.changed)
          .forEach((r) => console.log(`- ${r.filePath}`))
      }
    } catch (error) {
      throw new Error(`\nTransform failed: ${error}`)
    }
  })

if (!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit(0)
}

program.parse()
