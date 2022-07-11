import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react';
import CheckBoxList from './FilterSection/CheckBoxList';

const SideBar = () => {
  const categories = ['FrontEnd', 'Backend', 'DataBase', 'Designing', 'Cloud'];

  return (
    <Box w="20%" p={4} borderRight="2px" className="overflow-auto">
      <VStack spacing={4} align="stretch">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  FrontEnd
                  {/* {categories.slice(0, 5).map((category) => {
                    return <Text>{category}</Text>;
                  })} */}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckBoxList />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  BackendEnd
                  {/* {categories.slice(0, 5).map((category) => {
                    return <Text>{category}</Text>;
                  })} */}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckBoxList />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default SideBar;
