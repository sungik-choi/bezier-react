/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { SegmentedControl } from 'Components/Forms/SegmentedControl'
import { RadioGroup, Radio } from 'Components/Forms/RadioGroup'
import { Checkbox } from 'Components/Forms/Checkbox'
import { Text } from 'Components/Text'
import { FormGroup } from 'Components/Forms/FormGroup'
import { FormLabel } from 'Components/Forms/FormLabel'
import { TextField } from 'Components/Forms/Inputs/TextField'
import { TextArea } from 'Components/Forms/Inputs/TextArea'
import { Select } from 'Components/Forms/Inputs/Select'
import { FormHelperText, FormErrorMessage } from 'Components/Forms/FormHelperText'
import { Switch } from 'Components/Forms/Switch'
import FormControl from './FormControl'
import FormControlProps from './FormControl.types'

export default {
  title: getTitle(base),
  component: FormControl,
} as Meta

const Template: Story<FormControlProps> = (args) => (
  <FormControl style={{ width: 400 }} {...args}>
    <FormLabel help="Lorem Ipsum">Label</FormLabel>
    <TextField placeholder="Placeholder" />
    <FormHelperText>Description</FormHelperText>
    <FormErrorMessage>Error!</FormErrorMessage>
  </FormControl>
)

export const Primary: Story<FormControlProps> = Template.bind({})
Primary.args = {
  id: 'form',
  labelPosition: 'top',
  leftLabelWrapperHeight: undefined,
  hasError: false,
  disabled: false,
  readOnly: false,
  required: false,
}

const WithMultiFormTemplate: Story<FormControlProps> = (args) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 500,
  }}
  >
    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextField placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextArea placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel>Label</FormLabel>
      <Select />
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <SegmentedControl>
        { ['Open', 'Snoozed', 'Closed'].map((item) => (
          <Text key={item} bold>{ item }</Text>
        )) }
      </SegmentedControl>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <FormGroup direction="horizontal" spacing={10}>
        <Checkbox>Option</Checkbox>
        <Checkbox>Option</Checkbox>
        <Checkbox>Option</Checkbox>
        <Checkbox>Option</Checkbox>
      </FormGroup>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel>Theme Setting</FormLabel>
      <RadioGroup>
        <Radio value="system">System Preference</Radio>
        <Radio value="light">Light Theme</Radio>
        <Radio value="dark">Dark Theme</Radio>
      </RadioGroup>
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>

    <FormControl {...args}>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <Switch />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </FormControl>
  </div>
)

export const WithMultiForm: Story<FormControlProps> = WithMultiFormTemplate.bind({})
WithMultiForm.args = {
  labelPosition: 'top',
  leftLabelWrapperHeight: undefined,
  hasError: false,
  disabled: false,
  readOnly: false,
  required: false,
}