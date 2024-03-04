import { motion } from "framer-motion";
import { SlideMenuProps } from "./model";
import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import Image from "next/image";
import main_logo from "../../../../../public/assets/logo/main_logo.svg";
import FooterLinks from "../../footer/footerLinks/footerLinks";

const SlideMenu: React.FC<SlideMenuProps> = ({ links, isOpen, setOpen }) => {
  const { SECONDARY_COLOR, colorMode } = useThemeMode();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="full-screen-menu"
      onClick={() => setOpen()}
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="full-screen-submenu"
      >
        <Box
          w="100%"
          h="auto"
          p="12px 20px"
          bg={colorMode === "dark" ? "primary.500" : "rgba(0,0,0,0)"}
          display="grid"
          gridTemplateColumns="1fr  1fr"
        >
          <Box>
            <Text variant="XLSEMIBOLD" color={SECONDARY_COLOR}>
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
              <Text variant="XLSEMIBOLD" color={SECONDARY_COLOR}>
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
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Home
            </Heading>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Laboratory
            </Heading>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Showcase
            </Heading>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading
              variant="H3BLACK"
              color={SECONDARY_COLOR}
              textTransform="uppercase"
            >
              Contact me
            </Heading>
          </Box>
          <Box w="100%" p="10px 10px 0px 10px">
            <FooterLinks />
          </Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default SlideMenu;
