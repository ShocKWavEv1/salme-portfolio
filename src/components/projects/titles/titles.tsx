import React, { useRef } from "react";
import { TitlesProps } from "./model";
import { Box } from "@chakra-ui/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

export default function index({
  data,
  setSelectedProject,
}: {
  data: any;
  setSelectedProject: any;
}) {
  return (
    <Box w="100%" borderTop="2px solid" borderTopColor="primary.200">
      {data.map((project: any, i: number) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </Box>
  );
}

function Title({
  data,
  setSelectedProject,
}: {
  data: any;
  setSelectedProject: any;
}) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <Box
      ref={container}
      borderBottom="1px solid"
      borderBottomColor="primary.200"
      position="relative"
      zIndex={2}
    >
      <Box
        display="inline-block"
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p style={{ clipPath: clip }}>{title}</motion.p>
        <p>{title}</p>
      </Box>
    </Box>
  );
}
