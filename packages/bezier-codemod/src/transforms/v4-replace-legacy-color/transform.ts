import { type SourceFile, SyntaxKind } from 'ts-morph'

// 레거시 컬러 토큰 패턴
const SEMANTIC_COLOR_PATTERN =
  '(?:bg|bgtxt|txt|bdr|shdw)(?:-[a-z-]+)*(?:-(?:\\d{3}(?:-\\d{1,2})?|(?:high|normal|low|dim|dark(?:er|est)?|light(?:er|est)?|base|small|medium|large|xlarge|inner-base)))?'
const PALETTE_COLOR_PATTERN =
  '(?:grey|blue|cobalt|teal|green|olive|yellow|orange|red|pink|purple|navy|white|black)-\\d{2,3}(?:-\\d{1,2})?'
const LEGACY_COLOR_TOKEN_PATTERN = new RegExp(
  `^--(?:${SEMANTIC_COLOR_PATTERN}|${PALETTE_COLOR_PATTERN})`
)

// props-helpers.ts의 매핑 테이블
const legacyToAlphaColorTokenMap = {
  'txt-black-darkest': 'fg-black-darkest',
  'txt-black-darker': 'fg-black-darker',
  'txt-black-dark': 'fg-black-dark',
  'txt-black-pure': 'fg-black-pure',
  'txt-white-normal': 'fg-white-normal',
  'bg-header': 'bg-white-higher',
  'bg-header-float': 'bg-white-alpha-lightest',
  'bg-navi': 'bg-grey-alpha-dark',
  'bg-gnb': 'bg-grey-alpha-darkest',
  'bg-lounge': 'bg-grey-alpha-darker',
  'bg-grey-dim-lightest': 'bg-grey-alpha-light',
  'bg-white-high': 'bg-white-highest',
  'bg-white-low': 'bg-white-higher',
  'bg-white-dim-light': 'bg-white-alpha-light',
  'bg-white-dim-dark': 'bg-white-alpha-lighter',
  'bgtxt-blue-normal': 'bg-blue-normal',
  'bgtxt-blue-light': 'bg-blue-light',
  'bgtxt-blue-lighter': 'bg-blue-lighter',
  'bgtxt-blue-lightest': 'bg-blue-lightest',
  'bgtxt-blue-dark': 'bg-blue-dark',
  'bgtxt-cobalt-normal': 'bg-cobalt-normal',
  'bgtxt-cobalt-light': 'bg-cobalt-light',
  'bgtxt-cobalt-lighter': 'bg-cobalt-lighter',
  'bgtxt-cobalt-lightest': 'bg-cobalt-lightest',
  'bgtxt-cobalt-dark': 'bg-cobalt-dark',
  'bgtxt-red-normal': 'bg-red-normal',
  'bgtxt-red-light': 'bg-red-light',
  'bgtxt-red-lighter': 'bg-red-lighter',
  'bgtxt-red-lightest': 'bg-red-lightest',
  'bgtxt-red-dark': 'bg-red-dark',
  'bgtxt-orange-normal': 'bg-orange-normal',
  'bgtxt-orange-light': 'bg-orange-light',
  'bgtxt-orange-lighter': 'bg-orange-lighter',
  'bgtxt-orange-lightest': 'bg-orange-lightest',
  'bgtxt-orange-dark': 'bg-orange-dark',
  'bgtxt-green-normal': 'bg-green-normal',
  'bgtxt-green-light': 'bg-green-light',
  'bgtxt-green-lighter': 'bg-green-lighter',
  'bgtxt-green-lightest': 'bg-green-lightest',
  'bgtxt-green-dark': 'bg-green-dark',
  'bgtxt-teal-normal': 'bg-teal-normal',
  'bgtxt-teal-light': 'bg-teal-light',
  'bgtxt-teal-lighter': 'bg-teal-lighter',
  'bgtxt-teal-lightest': 'bg-teal-lightest',
  'bgtxt-teal-dark': 'bg-teal-dark',
  'bgtxt-olive-normal': 'bg-olive-normal',
  'bgtxt-olive-light': 'bg-olive-light',
  'bgtxt-olive-lighter': 'bg-olive-lighter',
  'bgtxt-olive-lightest': 'bg-olive-lightest',
  'bgtxt-olive-dark': 'bg-olive-dark',
  'bgtxt-yellow-normal': 'bg-yellow-normal',
  'bgtxt-yellow-light': 'bg-yellow-light',
  'bgtxt-yellow-lighter': 'bg-yellow-lighter',
  'bgtxt-yellow-lightest': 'bg-yellow-lightest',
  'bgtxt-yellow-dark': 'bg-yellow-dark',
  'bgtxt-pink-normal': 'bg-pink-normal',
  'bgtxt-pink-light': 'bg-pink-light',
  'bgtxt-pink-lighter': 'bg-pink-lighter',
  'bgtxt-pink-lightest': 'bg-pink-lightest',
  'bgtxt-pink-dark': 'bg-pink-dark',
  'bgtxt-purple-normal': 'bg-purple-normal',
  'bgtxt-purple-light': 'bg-purple-light',
  'bgtxt-purple-lighter': 'bg-purple-lighter',
  'bgtxt-purple-lightest': 'bg-purple-lightest',
  'bgtxt-purple-dark': 'bg-purple-dark',
  'bgtxt-navy-normal': 'bg-navy-normal',
  'bgtxt-navy-light': 'bg-navy-light',
  'bgtxt-navy-lighter': 'bg-navy-lighter',
  'bgtxt-navy-lightest': 'bg-navy-lightest',
  'bgtxt-navy-dark': 'bg-navy-dark',
  'bgtxt-absolute-black-dark': 'bg-absolute-black-dark',
  'bgtxt-absolute-black-normal': 'bg-absolute-black-normal',
  'bgtxt-absolute-black-light': 'bg-absolute-black-light',
  'bgtxt-absolute-black-lighter': 'bg-absolute-black-lighter',
  'bgtxt-absolute-black-lightest': 'bg-absolute-black-lightest',
  'bgtxt-absolute-white-dark': 'bg-absolute-white-dark',
  'bgtxt-absolute-white-normal': 'bg-absolute-white-normal',
  'bgtxt-absolute-white-light': 'bg-absolute-white-light',
  'bgtxt-absolute-white-lighter': 'bg-absolute-white-lighter',
  'bgtxt-absolute-white-lightest': 'bg-absolute-white-lightest',
  'bdr-black-lightest': 'bg-black-lightest',
  'bdr-black-light': 'bg-black-light',
  'bdr-grey-light': 'bg-grey-light',
  'bdr-white': 'bg-white-highest',
  'bdr-black-dark': 'bg-black-dark',
  'shdw-inner-base': 'shadow-base-inner',
  'shdw-base': 'shadow-base',
  'shdw-small': 'shadow-small',
  'shdw-medium': 'shadow-medium',
  'shdw-large': 'shadow-large',
  'shdw-xlarge': 'shadow-xlarge',
} as const

function isLegacyColorToken(token: string): boolean {
  return LEGACY_COLOR_TOKEN_PATTERN.test(token)
}

function transformCssVarString(text: string): string {
  // var(--...) 패턴에서 토큰 추출
  const matches = text.match(/var\((--[^)]+)\)/)
  if (!matches) return text

  const token = matches[1]
  if (!isLegacyColorToken(token)) return text

  // 토큰 이름에서 '--' 제거
  const tokenName = token.replace(/^--/, '')

  // 매핑 테이블에서 변환된 토큰 찾기
  const mappedToken =
    legacyToAlphaColorTokenMap[
      tokenName as keyof typeof legacyToAlphaColorTokenMap
    ]

  // 매핑된 토큰이 있으면 사용하고, 없으면 alpha- 프리픽스 추가
  const alphaToken = mappedToken
    ? `--alpha-${mappedToken}`
    : token.replace(/^--/, '--alpha-')
  return text.replace(token, alphaToken)
}

function transformAllCssVars(text: string): string {
  let result = text
  const varPattern = /var\(--[^)]+\)/g
  const matches = text.match(varPattern)

  if (matches) {
    matches.forEach((match) => {
      const transformed = transformCssVarString(match)
      if (transformed !== match) {
        result = result.replace(match, transformed)
      }
    })
  }

  return result
}

const transform = (sourceFile: SourceFile) => {
  // 문자열 리터럴 노드 찾기
  const stringLiterals = sourceFile.getDescendantsOfKind(
    SyntaxKind.StringLiteral
  )

  stringLiterals.forEach((node) => {
    const text = node.getText()
    // var(--...) 패턴 체크
    if (text.includes('var(--')) {
      const newText = transformAllCssVars(text.slice(1, -1)) // 따옴표 제거
      if (newText !== text.slice(1, -1)) {
        node.replaceWithText(`'${newText}'`)
      }
    }
  })

  // 템플릿 리터럴 노드 찾기
  const templateExpressions = sourceFile.getDescendantsOfKind(
    SyntaxKind.TemplateExpression
  )
  const noSubstitutionTemplates = sourceFile.getDescendantsOfKind(
    SyntaxKind.NoSubstitutionTemplateLiteral
  )

  templateExpressions.forEach((node) => {
    const text = node.getText()
    if (text.includes('var(--')) {
      const newText = transformAllCssVars(text.slice(1, -1))
      if (newText !== text.slice(1, -1)) {
        node.replaceWithText(`\`${newText}\``)
      }
    }
  })

  noSubstitutionTemplates.forEach((node) => {
    const text = node.getText()
    if (text.includes('var(--')) {
      const newText = transformAllCssVars(text.slice(1, -1))
      if (newText !== text.slice(1, -1)) {
        node.replaceWithText(`\`${newText}\``)
      }
    }
  })
}

export default transform
