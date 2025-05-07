#!/bin/bash

# This script updates all story files to be compatible with the latest Storybook version
# It will search for all story files in the components directory and update them

# Function to update a story file
update_story_file() {
  local file=$1
  echo "Updating $file..."
  
  # Replace imports
  sed -i '' 's/import { ComponentStory, ComponentMeta } from '\''@storybook\/react'\''/import type { Meta, StoryObj } from '\''@storybook\/react'\''/' "$file"
  
  # Replace export default
  sed -i '' 's/export default {/const meta = {/' "$file"
  sed -i '' 's/} as ComponentMeta<typeof [A-Za-z]*>/} satisfies Meta<typeof Component>\n\nexport default meta\n\ntype Story = StoryObj<typeof meta>/' "$file"
  
  # Replace title with Components/
  sed -i '' 's/title: '\''.*'\''/title: '\''Components\/Component'\''/' "$file"
  
  # Add parameters
  sed -i '' 's/component: \([A-Za-z]*\),/component: \1,\n  parameters: {\n    layout: '\''centered'\'',\n  },\n  tags: ['\''autodocs'\''],/' "$file"
  
  # Replace Template.bind({})
  sed -i '' 's/const Template: ComponentStory<typeof [A-Za-z]*> = (args) => <[A-Za-z]* {...args} \/>//' "$file"
  
  echo "Updated $file"
}

# Find all story files in the components directory
find /Users/xiezhijie/web/BComponentLibrary/src/components -name "*.stories.tsx" | while read -r file; do
  # Skip files that have already been updated
  if grep -q "StoryObj" "$file"; then
    echo "Skipping $file (already updated)"
    continue
  fi
  
  # Update the file
  update_story_file "$file"
done

echo "All story files have been updated!"
