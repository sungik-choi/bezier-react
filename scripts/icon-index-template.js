const _ = require('lodash')
const path = require('path')

const ICON_SUFFIX = "Icon"
const SUFFIX_REGEX = new RegExp(`(${ICON_SUFFIX})`, 'g')
const SUFFIX_LENGTH = ICON_SUFFIX.length

function hasValidFileName(basename) {
  return basename.search(SUFFIX_REGEX) !== -1
}

function deleteIconSuffix(basename) {
  return basename.slice(0, basename.length - SUFFIX_LENGTH)
}

function defaultIndexTemplate(filePaths) {
  const importEntries = []
  const mappedFies = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))

    if (!hasValidFileName(basename)) {
      throw new Error('The svg icon file name must have a "-icon" suffix.')
    }

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    importEntries.push(`import ${exportName} from './${basename}'`)
    mappedFies.push(`  '${_.kebabCase(deleteIconSuffix(basename))}': ${exportName},`)
  })

  const icons = `/* eslint-disable */

const icons = {
${mappedFies.join('\n')}
}
`

  return `
${importEntries.join('\n')}
${icons}
export type IconName = keyof typeof icons

/* eslint-enable */
export default icons
`
}

module.exports = defaultIndexTemplate
