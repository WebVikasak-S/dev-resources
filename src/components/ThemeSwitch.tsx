import React from "react";
import { useColorMode, Box, Button, Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <Icon as={MoonIcon} color="gray.400" />
        ) : (
          <Icon as={SunIcon} color="yellow.400" />
        )}
      </Button>
    </Box>
  );
};

export default ThemeSwitch;
