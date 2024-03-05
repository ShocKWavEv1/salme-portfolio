import React from "react";
import { MenuBodyProps } from "./model";
import { Box, Heading, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import Image from "next/image";
import { navigation } from "../constants";
import FooterLinks from "@/components/layout/footer/footerLinks/footerLinks";
import main_logo from "../../../../../../public/assets/logo/main_logo.svg";

const MenuBody: React.FC<MenuBodyProps> = ({ setOpen }) => {
  const { SECONDARY_COLOR, colorMode } = useThemeMode();
  return (
    <Box w="100%">
      <Box
        w="100%"
        h="auto"
        p="12px 20px"
        bg={colorMode === "dark" ? "primary.500" : "rgba(0,0,0,0)"}
        display="grid"
        gridTemplateColumns="1fr  1fr"
      >
        <Box w="100%" display="flex" alignItems="center">
          <Text variant="XLBOLD" color={SECONDARY_COLOR}>
            salmeron.
          </Text>
        </Box>
        <Box
          w="100%"
          display="none"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={main_logo} alt="main_logo" width={80} />
        </Box>
        <Box
          as="a"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box w="auto" cursor="pointer" onClick={() => setOpen()}>
            <Text variant="XLBOLD" color={SECONDARY_COLOR}>
              close
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        w="100%"
        borderBottom="1px solid"
        borderBottomColor={SECONDARY_COLOR}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p="25px 20px 0px 20px"
        bg={colorMode === "dark" ? "primary.500" : "rgba(0,0,0,0)"}
      >
        {navigation.map((item: any, idx: number) => {
          return (
            <Box
              key={item.title}
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Heading
                variant="H3BLACK"
                color={SECONDARY_COLOR}
                textTransform="uppercase"
                cursor="pointer"
                className={
                  colorMode === "dark" ? "hoverLightLink" : "hoverLink"
                }
                _hover={{
                  color: colorMode === "dark" ? "primary.200" : "primary.500",
                  transition: "color 0.4s ease-in-out",
                }}
              >
                {item.title}
              </Heading>
            </Box>
          );
        })}
        <Box w="100%" p="10px 10px 0px 10px">
          <FooterLinks />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBody;
