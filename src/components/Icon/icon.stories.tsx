import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Icon from './icon'
import Button from '../Button'

const meta = { 
  title: 'Components/Icon',
  id: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>
export const ADefaultIcons = () => (
  <>
    <Icon icon="check" size="3x"/>
    <Icon icon="times" size="3x"/>
    <Icon icon="anchor" size="3x"/>
    <Icon icon="trash" size="3x"/>
    <Button size="lg" btnType="primary"><Icon icon="check"/> check </Button>
  </>
)
ADefaultIcons.storyName = "Default Icons"
export const BThemeIcons = () => (
  <>
    <Icon icon="check" size="3x" theme="success"/>
    <Icon icon="times" size="3x" theme="danger"/>
    <Icon icon="anchor" size="3x" theme="primary"/>
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </>
)
BThemeIcons.storyName = "Themed Icons"
export const CCustomIcons = () => (
  <>
    <Icon icon="spinner" size="3x" theme="primary" spin/>
    <Icon icon="spinner" size="3x" theme="success" pulse/>
  </>
)
CCustomIcons.storyName = "Animated Icons"
