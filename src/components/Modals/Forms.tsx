import React from 'react';
import {
  FormControl,
  FormLabel,
  Button,
  Text,
  useDisclosure,
  Heading,
  Center,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const Forms = ({ formType }: { formType: string }) => {
  const [size] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const formtoUse = formType;
  var form;
  const handleClick = () => {
    onOpen();
  };
  const handleForms = () => {
    if (formType == 'resourceForm') {
      // console.log('here rsform');
      return <ResourceForm />;
    } else if (formType == 'saveForm') {
      return <EditSaveForm />;
    }
  };

  return (
    <>
      <Text onClick={() => handleClick()} m={4} className="cursor-pointer">
        Create
      </Text>
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay className="transition-opacity" />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>{handleForms()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const ResourceForm = () => {
  return (
    <>
      <Center>
        <Heading size="lg">Resource Edit Form</Heading>
      </Center>
      <FormControl isRequired>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input id="title" type="text" placeholder="title" />
        <FormLabel htmlFor="discription">Discription</FormLabel>
        <Input id="discription" type="textArea" placeholder="discription" />
        <FormLabel htmlFor="link">Links</FormLabel>
        <Input id="link" type="url" placeholder="add links" />
        <FormLabel htmlFor="Image">Upload Images</FormLabel>
        <Input type="file" name="image" />
        <FormLabel htmlFor="tags">Tags</FormLabel>
        <Input type="text" data-role="taginput" data-tag-trigger="Space" />
        <FormLabel htmlFor="author">Author</FormLabel>
        <Input id="author" type="text" placeholder="author" />
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

const EditSaveForm = () => {
  return (
    <>
      <Center>
        <Heading size="lg">Create Resource Form</Heading>
      </Center>
      <FormControl isRequired>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input id="title" type="text" placeholder="title" />

        <FormLabel htmlFor="link">Resource Links</FormLabel>
        <Input id="link" type="url" placeholder="add links" />

        <FormLabel htmlFor="tags">Tags</FormLabel>
        <Input type="text" data-role="taginput" data-tag-trigger="Space" />

        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default Forms;
