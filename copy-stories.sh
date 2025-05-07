#!/bin/bash

# Copy all story files from vikingship to BComponentLibrary
cp /Users/xiezhijie/web/vikingship/src/components/AutoComplete/autoComplete.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/AutoComplete/
cp /Users/xiezhijie/web/vikingship/src/components/Form/form.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Form/
cp /Users/xiezhijie/web/vikingship/src/components/Icon/icon.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Icon/
cp /Users/xiezhijie/web/vikingship/src/components/Input/input.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Input/
cp /Users/xiezhijie/web/vikingship/src/components/Menu/menu.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Menu/
cp /Users/xiezhijie/web/vikingship/src/components/Select/select.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Select/
cp /Users/xiezhijie/web/vikingship/src/components/Tabs/tabs.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Tabs/
cp /Users/xiezhijie/web/vikingship/src/components/Upload/upload.stories.tsx /Users/xiezhijie/web/BComponentLibrary/src/components/Upload/

# Copy Welcome story if it doesn't exist
mkdir -p /Users/xiezhijie/web/BComponentLibrary/src/components/Welcome
cp /Users/xiezhijie/web/vikingship/src/components/Welcome/Welcome.stories.mdx /Users/xiezhijie/web/BComponentLibrary/src/components/Welcome/

echo "All story files copied successfully!"
