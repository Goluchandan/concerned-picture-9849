import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import "./Navtop.css";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="topnavbar">
        <div></div>
        <div>
          <NavLink>Back to Toggl Global</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Our mission</NavLink>
          <NavLink>Working at Toggl</NavLink>
        </div>
      </div>
    </>
  );
}
