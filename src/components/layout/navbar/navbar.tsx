import React from "react";
import { NavbarProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import Image from "next/image";
import main_logo from "../../../../public/assets/logo/main_logo.svg";

const Navbar: React.FC<NavbarProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();
  return (
    <Box
      w="100%"
      h="auto"
      p="12px 20px"
      position="fixed"
      zIndex={5}
      borderBottom="1px solid"
      borderBottomColor={SECONDARY_COLOR}
      bg="rgba(0,0,0,0)"
      backdropFilter="saturate(150%) blur(20px)"
      display="grid"
      gridTemplateColumns="1fr  1fr"
    >
      <Box>
        <Text variant="XLSEMIBOLD" color={SECONDARY_COLOR}>
          salmeron.
        </Text>
      </Box>
      <Box w="100%" display="none" alignItems="center" justifyContent="center">
        <Image src={main_logo} alt="main_logo" width={80} />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Box p="10px 20px" as="a" cursor="pointer">
          <Box w="50px" h="2px" bg={SECONDARY_COLOR} />
          <Box mt="8px" w="50px" h="2px" bg={SECONDARY_COLOR} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
