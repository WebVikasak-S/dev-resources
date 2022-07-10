import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
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
      //   gap="2"
      p="3"
      className="border-b-[3px]"
    >
      <Box p="2">
        <Heading size="md">Dev Resources</Heading>
      </Box>
      {/* <Spacer /> */}
      <InputGroup width="35rem" className="mx-auto">
        <Input
          borderColor="black"
          focusBorderColor="#319795"
          placeholder="Search for the Resource"
        />
        <InputRightElement children={<Search2Icon />} />
      </InputGroup>
      {/* <Spacer /> */}
      <Flex gap="5" align="center">
        {/* <Text fontSize="md">About</Text> */}
        <About />
        {/* <Text fontSize="md" className="cursor-pointer">
          Create
        </Text> */}
        <Forms/>
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
