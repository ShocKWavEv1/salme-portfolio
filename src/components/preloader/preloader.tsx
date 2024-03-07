import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PreloaderProps } from "./model";
import { curtain, timer } from "./constants";
import { motion } from "framer-motion";

const Preloader: React.FC<PreloaderProps> = () => {
  const SLMRN = ["S", "L", "M", "R", "N"];

  useEffect(() => {
    timer();
    curtain();
  }, []);

  return (
    <Box
      w="100%"
      h="100svh"
      bg="primary.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="fixed"
      zIndex={10}
      className="preloader"
    >
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={["10px 0px", "10px 0px", "10px 20px", "10px 20px", "10px 20px"]}
        >
          {SLMRN.map((item: any, idx: number) => {
            return (
              <Heading
                key={item}
                variant="H1BLACK"
                fontSize={[
                  "calc(20vw - 10px)",
                  "calc(20vw - 10px)",
                  "calc(20vw - 15px)",
                  "calc(20vw - 15px)",
                  "calc(20vw - 20px)",
                ]}
                color="primary.200"
              >
                {item}
              </Heading>
            );
          })}
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: "100%",
              transition: {
                delay: 0,
                duration: 3.15,
                ease: "easeInOut",
              },
            }}
            style={{ width: "50%", height: "8px", backgroundColor: "#FFDDD5" }}
          />
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          p="10px 20px"
        >
          <Heading
            variant={["H5BLACK", "H3BLACK", "H2BLACK", "H1BLACK", "H1BLACK"]}
            color="primary.200"
            className="timer"
          >
            0%
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Preloader;
