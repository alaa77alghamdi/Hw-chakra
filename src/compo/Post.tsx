import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";


export default function Post(){
  return (
    <Flex
      bg="#E4FFD8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://welcomesaudi.com/uploads/0000/1/2021/07/23/23-new-jeddah-corniche-makkah-province.jpg')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
           Jeddah{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          Events and festivals:
          Red Sea International Film Festival
Jeddah has been selected as a place for the annual Red Sea International Film Festival that will be held in 2020.

Jeddah International Book Fair
Jeddah hosts an annual international book fair called Jeddah international book fair. It is the second largest book fair in Saudi Arabia, and it was first held in 2015.
          </chakra.p>

      
        </Box>
      </Box>


      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://web-assets.bcg.com/dims4/default/0614897/2147483647/strip/true/crop/1798x944+979+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F83%2F35%2Fd31bf7c94a3983c935cdb09281e0%2Fbcg-riyadh-hero.jpg')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            Riyadh{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
         

Riyadh Season
In the framework of the recent Saudi endeavor to promote tourism in the country, Riyadh Season was held as part of the Saudi Seasons initiative. The season took place in October 2019 and lasted until December 2019. It hosted a wide range of sports, musical, theatrical, fashion shows, circus, and various other entertainment activities. 
          </chakra.p>

         
        </Box>
      </Box>
    </Flex>
  );
};

