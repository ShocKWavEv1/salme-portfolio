import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { FooterProps } from "./model";
import useThemeMode from "@/hooks/useThemeMode";

const Footer: React.FC<FooterProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      p="0px 50px"
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
          variant="H2BLACK"
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          Any
        </Heading>
        <Heading
          mt="-35px"
          variant="H2BLACK"
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          Project
        </Heading>
        <Heading
          mt="-35px"
          variant="H2BLACK"
          color={SECONDARY_COLOR}
          textTransform="uppercase"
        >
          in mind?
        </Heading>
        <Heading
          mt="-35px"
          variant="H2BLACK"
          color="primary.500"
          textTransform="uppercase"
        >
          get in touch
        </Heading>
      </Box>
      <Box
        w="100%"
        p="30px 0px"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <Box w="100%" display="flex" flexDirection="column">
          <Text
            variant="MDREGULAR"
            color={SECONDARY_COLOR}
            textTransform="uppercase"
          >
            Social Media
          </Text>
          <Box>
            <Text
              variant="MDREGULAR"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Linkedin - Github - Instagram
            </Text>
          </Box>
        </Box>
        <Box w="100%" display="flex" flexDirection="column">
          <Text
            variant="MDREGULAR"
            color={SECONDARY_COLOR}
            textTransform="uppercase"
          >
            Get in touch
          </Text>
          <Box>
            <Text
              variant="MDREGULAR"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              rodd.sal23@gmail.com
            </Text>
          </Box>
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            variant="MDREGULAR"
            color={SECONDARY_COLOR}
            textTransform="uppercase"
          >
            © SLMRN.STUDIO 2024
          </Text>
          <Box>
            <Text
              variant="MDREGULAR"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              ALL RIGHTS RESERVED
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
