import React from "react";
import { LayoutProps } from "./model";
import { Box } from "@chakra-ui/react";
import WebGl from "../particles/particles";
import Navbar from "./navbar/navbar";
import useThemeMode from "@/hooks/useThemeMode";
import Footer from "./footer/footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { BG } = useThemeMode();
  return (
    <Box w="100%" display="flex" flexDirection="column" bg={BG}>
      <Box className="canvas">
        <WebGl />
      </Box>
      <Navbar />
      <Box position="relative" overflowX="hidden" zIndex={3} w="100%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
