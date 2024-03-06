import React, { useRef } from "react";
import { TitlesProps } from "./model";
import { Box, Heading } from "@chakra-ui/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import useThemeMode from "@/hooks/useThemeMode";

export default function index({
  data,
  setSelectedProject,
  selectedProject,
}: {
  data: any;
  setSelectedProject: any;
  selectedProject: any;
}) {
  const { SECONDARY_COLOR } = useThemeMode();
  return (
    <Box w="100%" borderTop="1px solid" borderTopColor={SECONDARY_COLOR}>
      {data.map((project: any, i: number) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
          />
        );
      })}
    </Box>
  );
}

function Title({
  data,
  setSelectedProject,
  selectedProject,
}: {
  data: any;
  setSelectedProject: any;
  selectedProject: any;
}) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const { SECONDARY_COLOR } = useThemeMode();

  return (
    <Box
      as="a"
      cursor="pointer"
      ref={container}
      borderBottom="1px solid"
      borderBottomColor={SECONDARY_COLOR}
      position="relative"
      zIndex={2}
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      _hover={{
        bg: "primary.500",
        transition: "background-color 0.4s ease-in-out",
      }}
      color="primary.200"
      onMouseOver={() => {
        setSelectedProject(i);
      }}
      onMouseLeave={() => {
        setSelectedProject(null);
      }}
    >
      <Box display="inline-block">
        <motion.p className="reveal" style={{ clipPath: clip }}>
          <Heading
            as="span"
            variant="H5BLACK"
            color={SECONDARY_COLOR}
            textTransform="uppercase"
            p="10px"
          >
            {selectedProject === i ? "" : title}
          </Heading>
        </motion.p>
        <p className="reveal">
          <Heading
            as="span"
            variant="H5BLACK"
            color={SECONDARY_COLOR}
            textTransform="uppercase"
            opacity={selectedProject === i ? 1 : 0.4}
            p="10px"
          >
            {title}
          </Heading>
        </p>
      </Box>
    </Box>
  );
}
