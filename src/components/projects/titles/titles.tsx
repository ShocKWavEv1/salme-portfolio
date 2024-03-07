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
import Link from "next/link";

const ProjectsLines: React.FC<TitlesProps> = ({
  data,
  setSelectedProject,
  selectedProject,
}: {
  data: any;
  setSelectedProject: any;
  selectedProject: any;
}) => {
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
};

export default ProjectsLines;

function Title({
  data,
  setSelectedProject,
  selectedProject,
}: {
  data: any;
  setSelectedProject: any;
  selectedProject: any;
}) {
  const { title, speed, i, link } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const { SECONDARY_COLOR } = useThemeMode();

  return (
    <Link href={link} target="_blank">
      <Box
        w="100%"
        as="button"
        cursor="pointer"
        ref={container}
        borderBottom="1px solid"
        borderBottomColor={SECONDARY_COLOR}
        position="relative"
        zIndex={2}
        h={["36px", "55px", "70px", "70px", "80px"]}
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
        <Box display="inline-block" textAlign="left">
          <motion.p className="reveal" style={{ clipPath: clip }}>
            <Heading
              as="span"
              variant={["H9BLACK", "H8BLACK", "H7BLACK", "H6BLACK", "H5BLACK"]}
              color={SECONDARY_COLOR}
              textTransform="uppercase"
              p={["0px 10px", "10px", "10px", "10px", "10px"]}
            >
              {selectedProject === i ? "" : title}
            </Heading>
          </motion.p>
          <p className="reveal">
            <Heading
              as="span"
              variant={["H9BLACK", "H8BLACK", "H7BLACK", "H6BLACK", "H5BLACK"]}
              color={SECONDARY_COLOR}
              textTransform="uppercase"
              opacity={selectedProject === i ? 1 : 0.4}
              p={["0px 10px", "10px", "10px", "10px", "10px"]}
            >
              {title}
            </Heading>
          </p>
        </Box>
      </Box>
    </Link>
  );
}
