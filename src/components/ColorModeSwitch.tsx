import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root checked={colorMode == "dark"} colorPalette={"purple"}>
        <Switch.HiddenInput onChange={toggleColorMode} />
        <Switch.Control />
      </Switch.Root>
      <Text whiteSpace="nowrap"> Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
