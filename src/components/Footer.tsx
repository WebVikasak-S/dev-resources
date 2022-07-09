import React from "react";
import {
  Box,
  HStack,
  VStack,
  Link,
  Text,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box w="100%" p={4} className="mt-auto sticky bottom-0">
      <VStack spacing="15px">
        <HStack>
          <Text>Made with - </Text>
          <Link href="https://create.t3.gg/" isExternal>
            create-t3-app <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
        <Text>All Rights Reserved &copy; WebVikasaks</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
