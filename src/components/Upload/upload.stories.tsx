import React  from 'react'
import { ComponentMeta } from '@storybook/react'
import { Upload } from './upload'
import Button from '../Button/button'
import Icon from '../Icon/icon'

const meta = { 
  title: 'Components/Component',
  id: 'Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    }
  }
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const ASimpleUpload = (args) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  >
    <Button size="lg" btnType="primary"><Icon icon="upload" /> Click to Upload </Button>
  </Upload>  
)
ASimpleUpload.storyName = 'Basic Upload Component'
export const BCheckUpload = (args) => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
  return (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> Cannot upload files larger than 50Kb! </Button>
    </Upload>  
  )
}
BCheckUpload.storyName = 'Check File Size Before Upload'
export const CDragUpload = (args) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="fileName"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br/>
    <p>Click or drag files to this area to upload</p>
  </Upload>
)
CDragUpload.storyName = 'Drag and Drop Upload'