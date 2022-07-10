import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Text,
  useDisclosure,
  Flex,
  Heading,
  Center,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';

const Forms = () => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  //   const handleSizeClick = () => {
  //     onOpen();
  //   };
  const [size] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Text
        onClick={() => handleClick()}
        m={4}
        className = 'cursor-pointer'
      >Create</Text>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
          <br/>
          <br/>
          <Center><Heading size='lg'>Create Resource Form</Heading></Center>
            <FormControl isRequired>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input id="title" type="text" placeholder="title" />
              <FormLabel htmlFor="discription">Discription</FormLabel>
              <Input
                id="discription"
                type="textArea"
                placeholder="discription"
              />
              <FormLabel htmlFor="link">Links</FormLabel>
              <Input id="link" type="url" placeholder='add links'/>
              <FormLabel htmlFor="Image">Upload Images</FormLabel>
              {/* <Input id="title" type="upload" /> */}
              <Input type="file" name="image"/>
              <FormLabel htmlFor="tags">Tags</FormLabel>
              <Input type="text" data-role="taginput" data-tag-trigger="Space"/>
              <FormLabel htmlFor="author">Author</FormLabel>
              <Input id="author" type="text" placeholder="author" />
              <Button
                mt={4}
                colorScheme="teal"
                // isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </FormControl>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Forms;
