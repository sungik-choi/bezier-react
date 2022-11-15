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
import { ModalAction } from './ModalAction'
import { ModalProps, ModalContentProps, ModalTitleSize } from './Modal.types'

export default {
  title: getTitle(base),
  component: Modal,
  subcomponents: { ModalContent, ModalAction },
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

const Template: Story<ModalProps & ModalContentProps> = ({
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
    <>
      <Button
        text="Open Modal"
        onClick={() => setShow(true)}
      />

      <Modal
        show={show}
        showCloseIcon={showCloseIcon}
        width={width}
        onHide={() => setShow(false)}
      >
        <ModalContent
          title={title}
          subTitle={subTitle}
          description={description}
          titleSize={titleSize}
        >
          <FormControl labelPosition="left">
            <FormLabel>Name</FormLabel>
            <TextField />
          </FormControl>
        </ModalContent>

        <ModalAction
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
      </Modal>
    </>
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
