import React, { useState } from "react";
import { NavbarProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import useThemeMode from "@/hooks/useThemeMode";
import Image from "next/image";
import main_logo from "../../../../public/assets/logo/main_logo.svg";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import SlideMenu from "./slideMenu/slideMenu";
import ToggleTheme from "@/components/toggleTheme/toggleTheme";

const Navbar: React.FC<NavbarProps> = () => {
  const { SECONDARY_COLOR } = useThemeMode();

  const [isOpen, setOpen] = useState<any>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [initialBG, setInitial] = useState<string>("rgba(0,0,0,0)");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest <= 200) {
      setInitial("rgba(0,0,0,0)");
    } else {
      setInitial("rgba(0,0,0,0)");
    }
    if (isOpen) {
      if (latest > 30) {
        setOpen(false);
      }
    }
  });

  return (
    <Box id="navbar" w="100%" position="absolute" zIndex={5}>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "90px",
          backgroundColor: initialBG,
          position: "fixed",
          zIndex: 4,
          transition: "background-color 0.35s ease-in-out",
        }}
      >
        <Box
          w="100%"
          h="auto"
          p={["5px 10px", "12px 20px", "12px 20px", "12px 20px", "12px 20px"]}
          position="absolute"
          zIndex={5}
          borderBottom="1px solid"
          borderBottomColor={SECONDARY_COLOR}
          bg="rgba(0,0,0,0)"
          backdropFilter="saturate(150%) blur(20px)"
          display="grid"
          gridTemplateColumns="1fr 1fr"
        >
          <Box w="100%" display="flex" alignItems="center">
            <Text
              variant={["LGBOLD", "XLBOLD", "XLBOLD", "XLBOLD", "XLBOLD"]}
              color={SECONDARY_COLOR}
            >
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
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Box>
              <ToggleTheme />
            </Box>
            <Box
              p={[
                "10px 10px",
                "10px 20px",
                "10px 20px",
                "10px 20px",
                "10px 20px",
              ]}
              as="a"
              cursor="pointer"
              onClick={() => setOpen(true)}
            >
              <Box w="50px" h="2px" bg={SECONDARY_COLOR} />
              <Box mt="8px" w="50px" h="2px" bg={SECONDARY_COLOR} />
            </Box>
          </Box>
          <AnimatePresence mode="wait">
            {isOpen && (
              <SlideMenu
                links={[]}
                isOpen={isOpen}
                setOpen={() => setOpen(!isOpen)}
              />
            )}
          </AnimatePresence>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Navbar;
