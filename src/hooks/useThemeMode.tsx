import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const useThemeMode = () => {
  const BG = useColorModeValue("black", "primary.200");

  const MAIN_COLOR = useColorModeValue("primary.500", "licorice.900");

  const SECONDARY_COLOR = useColorModeValue("primary.200", "licorice.500");

  const { colorMode, toggleColorMode } = useColorMode();

  return { BG, MAIN_COLOR, SECONDARY_COLOR, colorMode, toggleColorMode };
};

export default useThemeMode;
