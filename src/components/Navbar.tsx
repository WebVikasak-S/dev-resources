import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../hoc/Layout";
import { trpc } from "../utils/trpc";
import { ThemeSwitch } from "./";
import { About, Forms } from "./index";
// import { colors } from "../utils/theme";

const TextLinks = "cursor-pointer"

const Navbar = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      p="3"
      className="border-b-[3px]"
    >
      <Box p="2">
        <Heading size="md">Dev Resources</Heading>
      </Box>
      <InputGroup width="35rem" className="mx-auto">
        <Input
          borderColor="black"
          focusBorderColor="#319795"
          placeholder="Search for the Resource"
        />
        <InputRightElement children={<Search2Icon />} />
      </InputGroup>
      <Flex gap="5" align="center">
        <About />
        <Forms formType = "resourceForm"/>
        <Text fontSize="md" className="cursor-pointer">
          Import
        </Text>
        <Button colorScheme="teal">Login/SignUp</Button>
        <ThemeSwitch />
      </Flex>
    </Flex>
  );
};

export default Navbar;
