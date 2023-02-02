import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Text,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Icon,
    IconButton,
    useDisclosure,
    useColorModeValue
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { GiHamburgerMenu } from 'react-icons/gi';
  import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';
  import { BiChevronDown } from 'react-icons/bi';
  import { MdTimeline } from 'react-icons/md';
  import { BsBook } from 'react-icons/bs';
  import { FiSun } from 'react-icons/fi';
  import { IconType } from 'react-icons';
  import { BrowserRouter, Route } from "react-router-dom";
  
  const navLinks = [
    { name: 'Home', path: 'Jed' },
    { name: 'About', path: '#' },
    { name: 'Tourist', path: '#' }
  ];
  

  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const menuProps = {
      bg: useColorModeValue('gray.200', 'gray.700'),
      color: useColorModeValue('blue.500', 'blue.200')
    };
  
    return (
      <Box px={4} boxShadow="lg" width="100%"  bg={"#ba936a"}> 
        <Flex h={20} alignItems="center" justifyContent="space-between" maxW={800} mx="auto">
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Avatar
              href="#"
              as={Link}
              size="sm"
              showBorder={true}
              borderColor="green.400"
              rounded="full"
              src="https://www.seekpng.com/png/detail/300-3007487_teamlogo-saudi-arabia-football-logo.png"
            />
            <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }} alignItems="center">
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
             
            </HStack>
          </HStack>
  
          <IconButton aria-label="Color Switcher" icon={<FiSun />} bg={"#c7b39d"} />
        </Flex>
  
        {/* Mobile Screen Links */}
        {isOpen ? (
          <Box pb={4} display={['inherit', 'inherit', 'none']}>
            <Stack as="nav" spacing={2}>
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    );
  }
  
  // NavLink Component
  interface NavLinkProps {
    name: string;
    path: string;
    onClose: () => void;
  }
  
  const NavLink = ({ name, path, onClose }: NavLinkProps) => {
    const link = {
      bg: useColorModeValue('gray.200', 'gray.700'),
      color: useColorModeValue('blue.500', 'blue.200')
    };
  
    return (
      <Link
        href={path}
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: 'none',
          bg: link.bg,
          color: link.color
        }}
        onClick={() => onClose()}
      >
        {name}
      </Link>
    );
  };
  
  // Dropdown MenuLink Component
  interface MenuLinkProps {
    name: string;
    path: string;
    icon: IconType;
    onClose: () => void;
  }
  
  const MenuLink = ({ name, path, icon, onClose }: MenuLinkProps) => {
    return (
      <Link href={path} onClick={() => onClose()}>
        <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
          <HStack>
            <Icon as={icon} size={18} color="blue.400" />
            <Text>{name}</Text>
          </HStack>
        </MenuItem>
      </Link>
    );
  };