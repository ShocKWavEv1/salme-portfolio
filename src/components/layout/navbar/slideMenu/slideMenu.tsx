import { motion } from "framer-motion";
import { SlideMenuProps } from "./model";
import MenuBody from "./menuBody/menuBody";

const SlideMenu: React.FC<SlideMenuProps> = ({ links, isOpen, setOpen }) => {
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
        <MenuBody setOpen={() => setOpen()} />
      </motion.div>
    </motion.div>
  );
};

export default SlideMenu;
