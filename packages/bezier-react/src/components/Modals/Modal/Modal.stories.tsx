import React, { useState, useEffect } from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle, getObjectFromEnum } from 'Utils/storyUtils'
import { Button, ButtonColorVariant, ButtonStyleVariant } from 'Components/Button'
import { ButtonGroup } from 'Components/ButtonGroup'
import { FormControl } from 'Components/Forms/FormControl'
import { FormLabel } from 'Components/Forms/FormLabel'
import { TextField } from 'Components/Forms/Inputs/TextField'
import { Modal } from './Modal'
import { ModalContent } from './ModalContent'
import { ModalHeader } from './ModalHeader'
import { ModalFooter } from './ModalFooter'
import { ModalTrigger } from './ModalTrigger'
import { ModalProps, ModalContentProps, ModalHeaderProps, ModalTitleSize } from './Modal.types'

export default {
  title: getTitle(base),
  component: Modal,
  subcomponents: {
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalTrigger,
  },
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    zIndex: {
      control: {
        type: 'text',
      },
    },
    titleSize: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(ModalTitleSize),
      },
    },
  },
} as Meta<ModalProps>

const Template: Story<ModalProps & ModalContentProps & ModalHeaderProps> = ({
  show: showProp,
  showCloseIcon,
  width,
  title,
  subTitle,
  description,
  titleSize,
}) => {
  const [show, setShow] = useState(false)

  useEffect(function watchShowToChange() {
    setShow(showProp)
  }, [showProp])

  return (
    <Modal
      show={show}
      onShow={() => setShow(true)}
      onHide={() => setShow(false)}
    >
      <ModalTrigger>
        <Button text="Open Modal" />
      </ModalTrigger>

      <ModalContent
        showCloseIcon={showCloseIcon}
        width={width}
      >
        <ModalHeader
          title={title}
          subTitle={subTitle}
          description={description}
          titleSize={titleSize}
        />

        <FormControl labelPosition="left">
          <FormLabel>Name</FormLabel>
          <TextField />
        </FormControl>

        <ModalFooter
          rightContent={(
            <ButtonGroup>
              <Button
                colorVariant={ButtonColorVariant.MonochromeLight}
                styleVariant={ButtonStyleVariant.Secondary}
                text="Cancel"
                onClick={() => setShow(false)}
              />
              <Button
                colorVariant={ButtonColorVariant.Blue}
                styleVariant={ButtonStyleVariant.Primary}
                text="Save"
                onClick={() => setShow(false)}
              />
            </ButtonGroup>
          )}
        />
      </ModalContent>
    </Modal>
  )
}

export const Composite = Template.bind({})
Composite.args = {
  show: false,
  showCloseIcon: false,
  title: 'Edit profile',
  subTitle: 'Profile Settings',
  description: 'Make changes to your profile here. Click save when you\'re done.',
  titleSize: ModalTitleSize.L,
}
