import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Text,
  useDisclosure,
  Heading,
  Center,
} from '@chakra-ui/react';

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeClick = () => {
    onOpen();
  };

  return (
    <>
      <Text
        fontSize="md"
        onClick={() => handleSizeClick()}
        className="cursor-pointer"
      >
        About
      </Text>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay className='transition-opacity'/>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <br />
            <br />
            <Center>
              <Heading>About Us</Heading>
            </Center>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            fugiat ipsum ipsam! Iusto est dolorum pariatur eveniet dignissimos?
            Libero illum voluptatum dicta ducimus autem aspernatur, omnis minima
            repudiandae exercitationem vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda expedita similique a beatae
            debitis totam impedit iusto exercitationem itaque ipsum. Quos porro
            numquam, veniam alias sunt voluptates sequi doloremque error?
          </ModalBody>
          <ModalBody>
            <Heading size='lg' className = 'my-1'>Para-1</Heading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            fugiat ipsum ipsam! Iusto est dolorum pariatur eveniet dignissimos?
            Libero illum voluptatum dicta ducimus autem aspernatur, omnis minima
            repudiandae exercitationem vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda expedita similique a beatae
            debitis totam impedit iusto exercitationem itaque ipsum. Quos porro
            numquam, veniam alias sunt voluptates sequi doloremque error?
          </ModalBody>
          <ModalBody>
            <Heading size='lg' className = 'my-1'>Para-2</Heading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            fugiat ipsum ipsam! Iusto est dolorum pariatur eveniet dignissimos?
            Libero illum voluptatum dicta ducimus autem aspernatur, omnis minima
            repudiandae exercitationem vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda expedita similique a beatae
            debitis totam impedit iusto exercitationem itaque ipsum. Quos porro
            numquam, veniam alias sunt voluptates sequi doloremque error?
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default About;
