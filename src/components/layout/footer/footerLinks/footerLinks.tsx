import React from "react";
import { FooterLinksProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";

const FooterLinks: React.FC<FooterLinksProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();
  return (
    <Box w="100%" p="30px 0px" display="grid" gridTemplateColumns="1fr 1fr 1fr">
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
  );
};

export default FooterLinks;
