/* External dependencies */
import React from 'react'
import { FoundationProvider, GlobalStyle, ThemeVars } from '@channel.io/bezier-react-foundation'
import type { ThemeVarsAdditionalType, Foundation, GlobalStyleProp } from '@channel.io/bezier-react-foundation'
import { EnableCSSHoudini } from '@channel.io/bezier-react-worklets'

interface BezierProviderProps {
  foundation: Foundation & GlobalStyleProp
  children: React.ReactNode
  themeVarsScope?: ThemeVarsAdditionalType['scope']
}

export function BezierProvider({
  foundation,
  children,
  themeVarsScope,
}: BezierProviderProps) {
  EnableCSSHoudini({ smoothCorners: true })

  return (
    <FoundationProvider foundation={foundation}>
      <GlobalStyle foundation={foundation} />
      <ThemeVars
        foundation={foundation}
        scope={themeVarsScope}
      />
      { children }
    </FoundationProvider>
  )
}
