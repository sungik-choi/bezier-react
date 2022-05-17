/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'
import { DarkFoundation, LightFoundation } from '@channel.io/bezier-react-foundation'
import { getTitle } from '@channel.io/bezier-react-utils'

/* Internal dependencies */
import { BezierProvider } from '../src/BezierProvider'
// FIXME-Monorepo(@ed): 의존성 제거
// import { ButtonSize, ButtonStyleVariant, ButtonColorVariant } from 'Components/Button/Button.types'
// import { Button } from 'Components/Button'

interface BezierProviderStorybookProps {
  foundation: 'dark' | 'light'
}

export default {
  title: getTitle(base),
  component: BezierProvider,
  argTypes: {
    foundation: {
      control: {
        type: 'select',
        options: [
          'light',
          'dark',
        ],
      },
    },
  },
} as Meta

// const ButtonWrapper = styled(Button)``

const Template: Story<BezierProviderStorybookProps> = ({ foundation }) => (
  <BezierProvider
    foundation={foundation === 'dark' ? DarkFoundation : LightFoundation}
    // themeVarsScope={ButtonWrapper}
  >
    { /* <ButtonWrapper
      text="Try to switch foundation"
      size={ButtonSize.M}
      styleVariant={ButtonStyleVariant.Primary}
      colorVariant={ButtonColorVariant.Blue}
    /> */ }
  </BezierProvider>
)

export const Primary: Story<BezierProviderStorybookProps> = Template.bind({})
Primary.args = {
  foundation: 'light',
}
