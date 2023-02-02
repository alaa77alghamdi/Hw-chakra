import * as React from 'react';
import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  IconButton,
  Divider,
  Flex,
  Box,
  Center
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const About = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }} mx="auto">
      <Center>
        <VStack spacing={4} px={2} alignItems={{ base: 'center', sm: 'flex-start' }}>
          <Stack justifyContent="center" alignItems="center">
        
           
          </Stack>
          <Heading
            textAlign='center'
            
            width={{ base: '23rem', sm: 'auto' }}
            fontSize={{ base: '5rem', sm: '5rem' }}
          >
                                                  About Saudi Arabia
          </Heading>
          <Text textAlign="center"  fontSize={{ base: '5rem', sm: '2rem' }}>The Kingdom of Saudi Arabia is the largest country in the Arabian Peninsula. It occupies an area about the size of the United States east of the Mississippi River. Saudi Arabia's population is 27 million, including 8.4 million foreign residents (2010 census), and its capital city is Riyadh.

Snippet by</Text>
          <Divider />
          <Flex alignItems="center" justify="center" w="100%">
           
          </Flex>
        </VStack>
      </Center>
    </Container>
  );
};




export default About;