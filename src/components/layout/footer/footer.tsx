import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { FooterProps } from "./model";
import useThemeMode from "@/hooks/useThemeMode";
import FooterLinks from "./footerLinks/footerLinks";

const Footer: React.FC<FooterProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      p={[
        "0px 12px 0px 12px",
        "0px 25px 0px 25px",
        "0px 30px 0px 30px",
        "0px 30px 0px 30px",
        "0px 50px 0px 50px",
      ]}
      position="relative"
      zIndex={3}
    >
      <Box
        w="100%"
        p="30px 0px"
        borderBottom="1px solid"
        borderBottomColor={SECONDARY_COLOR}
      >
        <Heading
          variant={["H8BLACK", "H6BLACK", "H5BLACK", "H4BLACK", "H3BLACK"]}
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          Any
        </Heading>
        <Heading
          mt={["-15px", "-20px", "-20px", "-30px", "-35px"]}
          variant={["H8BLACK", "H6BLACK", "H5BLACK", "H4BLACK", "H3BLACK"]}
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          Project
        </Heading>
        <Heading
          mt={["-15px", "-20px", "-20px", "-30px", "-35px"]}
          variant={["H8BLACK", "H6BLACK", "H5BLACK", "H4BLACK", "H3BLACK"]}
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          in mind?
        </Heading>
        <Heading
          mt={["-15px", "-20px", "-20px", "-30px", "-35px"]}
          variant={["H8BLACK", "H6BLACK", "H5BLACK", "H4BLACK", "H3BLACK"]}
          color="primary.500"
          textTransform="uppercase"
          as="button"
          cursor="pointer"
          className="hoverLink"
        >
          get in touch
        </Heading>
      </Box>
      <FooterLinks />
    </Box>
  );
};

export default Footer;
