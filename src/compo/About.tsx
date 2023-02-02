import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
         About Saudi Arabia{' '}
          <Text as={'span'} color={'green.400'}>
          Saudi Arabia
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        The Kingdom of Saudi Arabia is the largest country in the Arabian
                        Peninsula. It occupies an area about the size of the United States east of the Mississippi
                        River. Saudi Arabia's population is 27 million, including 8.4 million foreign residents (2010
                        census), and its capital city is Riyadh.
        </Text>
        <Stack spacing={6} direction={'row'}>
        </Stack>
        <Flex w={'full'}>
        
        </Flex>
      </Stack>
    </Container>
  );
}


