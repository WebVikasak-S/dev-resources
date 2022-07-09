import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box,
  VStack,
  Checkbox,
  Stack,
} from '@chakra-ui/react';

const SideBar = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <Box w="20%" p={4} borderRight="2px">
      <VStack spacing={4} align="stretch">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Checkbox
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) =>
                      setCheckedItems([e.target.checked, e.target.checked, e.target.checked])
                    }
                  >
                    Parent Checkbox
                  </Checkbox>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack pl={6} mt={1} spacing={1}>
                <Checkbox
                  isChecked={checkedItems[0]}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, checkedItems[1]])
                  }
                >
                  Child Checkbox 1
                </Checkbox>
                <Checkbox
                  isChecked={checkedItems[1]}
                  onChange={(e) =>
                    setCheckedItems([checkedItems[0], e.target.checked])
                  }
                >
                  Child Checkbox 2
                </Checkbox>
                <Checkbox
                  isChecked={checkedItems[2]}
                  onChange={(e) =>
                    setCheckedItems([
                      checkedItems[0],
                      checkedItems[1],
                      e.target.checked,
                    ])
                  }
                >
                  Child Checkbox 3
                </Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default SideBar;
