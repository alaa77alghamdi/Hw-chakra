import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Jed = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
        
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
          
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      
      <Container maxW={'5xl'} py={12}>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
           
            <Heading>Balad in Jeddah</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            When you arrive at the colourful painted posts that welcome tourists to Jeddah's Al Balad district, take a moment to get your bearings. This will be handy once you step inside the World Heritage Site, where every street looks alike and where the buildings come with stories that will draw you in for hours
            </Text>
           
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://www.agoda.com/wp-content/uploads/2019/05/Things-to-do-in-Jeddah-Saudi-Arabia-Al-Balad.jpg'
              }
              objectFit={'cover'}
            />
            
          </Flex>
          <Stack spacing={4}>
           
           <Heading> Fakieh Aquarium </Heading>
           <Text color={'gray.500'} fontSize={'lg'}>
           Tourists of all ages will enjoy a trip to Fakieh Aquarium, Saudi Arabia’s only public aquarium. This aquatic zoo in Jeddah houses over 200 marine species including sharks, stingrays, sea lions, and seahorses. Visitors can also enjoy a live dolphin show or even the opportunity to swim with the friendly dolphins for an extra fee. After the aquarium tour, pick up a fun souvenir at one of the many retail shops then enjoy fresh seafood at Blue Ocean Restaurant.
           </Text>
          
         </Stack>
         <Flex>
           <Image
             rounded={'md'}
             alt={'feature image'}
             src={
               'https://res.cloudinary.com/qidz/image/upload/q_80/v1645621324/nm67ltld6pzwr6rwglwa.jpg'
             }
             objectFit={'cover'}
           />
           
         </Flex>


         <Stack spacing={4}>
           
           <Heading> Boulevard City</Heading>
           <Text color={'gray.500'} fontSize={'lg'}>
 

           Joy and fun await you in the largest entertainment centre in Riyadh,  Riyadh Boulevard, where endless fun destinations can be found in one place. In addition to the luxury shopping places where you can obtain pieces from the finest stores of international brands to your own closet, along with dishes that amaze your senses with flavours of local and international cuisine. Riyadh Boulevard offers fun, joy and enthusiasm for adults and children.           </Text>
          
         </Stack>
         <Flex>
           <Image
             rounded={'md'}
             alt={'feature image'}
             src={
               'https://www.arabnews.jp/en/wp-content/uploads/sites/2/2021/12/DSC9895-1024x683.jpg'
             }
             objectFit={'cover'}
           />
           
         </Flex>



         <Stack spacing={4}>
           
           <Heading> Riyadh Park</Heading>
           <Text color={'gray.500'} fontSize={'lg'}>
           Riyadh Park Mall is one of the biggest and most popular malls in Riyadh. It is a conveniently located shopping center that is quite bustling in the evening, especially on the weekends. The mall is designed to offer an unparalleled shopping and dining experience.            </Text>
          
         </Stack>
         <Flex>
           <Image
             rounded={'md'}
             alt={'feature image'}
             src={
               'https://benoycdn.azureedge.net/files/news/2019/04/riyadh-park-mall-wins-at-cityscape-2019/_mediumImage/rm.jpg'
             }
             objectFit={'cover'}
           />
           
         </Flex>
        </SimpleGrid>
      </Container>
    );
  }