import React from 'react';
import { Box, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';

const CheckBoxList = () => {
  const tags = [
    'HTML',
    'CSS',
    'JS',
    'ES 6',
    'JavaScript',
    'React',
    'React JS',
    'React Native',
    'Tailwind',
    'Tailwind CSS',
    'Microsoft',
    'Microsoft Office',
    'TS',
    'Typescript',
    'Git',
    'Github',
    'Python',
    'GFG',
    'Geegforgeeks',
    'Learning',
    'Online COurse',
    'Courses',
    'Udemy',
    'Coding',
    'Competitive Coding',
    'Editors',
    'online editors',
    'Editing Softwares',
    'Softwares',
    'PDF editors',
    'Convertors',
    'File Convertors',
    'Liberary',
    'Colors',
    'Colors Liberary',
    'Resume',
    'Transfer',
    'File Transfer',
    'SVG',
    'PNG',
    'JPEG',
    'JPG',
    'Photoes',
    'Online Photoes',
    'HD Photoes',
    'Wallpapers',
    'Fonts',
    'Icons',
    'SVG Icons',
    'UI',
    'UX',
    'UI/UX',
    'GIFS',
    'Media',
    'API',
    'Dummy API',
    'SnadBoxes',
    'Code Editors',
    'Languages',
    'Programming Languages',
    'Frontend Languages',
    'Backend Languages',
    'Database',
    'DB',
    'SQL',
    'MY SQL',
    'Localhost',
    'Anime',
    'Torrents',
    'Networking',
    'Security',
    'Network Security',
    'Cloud',
    'Cloud Storage',
    'Investment',
    'Investing',
    'Books',
    'Youtube',
    'Youtube Videos',
    'Careers',
    'Pinterest',
  ];

  return (
    <Box className="p-4">
      <CheckboxGroup colorScheme="teal">
        <Stack direction="column">
          {tags.slice(0, 10).map((tag) => {
            return <Checkbox value="naruto">{tag}</Checkbox>;
          })}
          {/* <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox> */}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default CheckBoxList;
