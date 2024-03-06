import React, { useState } from "react";
import { ProjectsProps } from "./model";
import { Box } from "@chakra-ui/react";
import Titles from "./titles/titles";
import { projectsData } from "./constants";

const Projects: React.FC<ProjectsProps> = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <Box w="100%" zIndex={1} position="absolute">
      <Titles data={projectsData} setSelectedProject={setSelectedProject} />
    </Box>
  );
};

export default Projects;
