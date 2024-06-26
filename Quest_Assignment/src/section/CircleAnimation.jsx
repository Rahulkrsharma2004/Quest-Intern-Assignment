import React from "react";
import { Box, VStack, Text, Image, Heading, Center } from "@chakra-ui/react";
import { motion, transform } from "framer-motion";

const MotionBox = motion(Box);

const CircleAnimation = () => {
  const innerIcons = [
    "https://www.questlabs.ai/assets/snowflack-X_nYrDCM.svg",
    "https://www.questlabs.ai/assets/asicon18-r35Zo0Zo.svg",
    "https://www.questlabs.ai/assets/stack-MxdB7c0M.svg",
    "https://www.questlabs.ai/assets/asicon14-JYAfCffi.svg",
    "https://www.questlabs.ai/assets/asicon17-FILrB608.svg",
    "https://www.questlabs.ai/assets/asicon16-rJRaYGBx.svg",
    "https://www.questlabs.ai/assets/asicon12-t3VxX6RD.svg",
    "https://www.questlabs.ai/assets/segmentIcon-18JVZ7QZ.svg",
  ];

  const outerIcons = [
    "https://www.svgrepo.com/show/514332/mail.svg",
    "https://www.svgrepo.com/show/373458/aws.svg",
    "https://www.svgrepo.com/show/452200/fb-messenger.svg",
    "https://www.svgrepo.com/show/373595/firebase.svg",
    "https://www.svgrepo.com/show/475644/drive-color.svg",
    "https://www.questlabs.ai/assets/asicon14-JYAfCffi.svg",
    "https://www.questlabs.ai/assets/asicon17-FILrB608.svg",
    "https://www.svgrepo.com/show/489946/map.svg",
    "https://www.questlabs.ai/assets/asicon16-rJRaYGBx.svg",
    "https://www.questlabs.ai/assets/asicon12-t3VxX6RD.svg",
    "https://www.svgrepo.com/show/475656/google-color.svg",
    "https://www.questlabs.ai/assets/stack-MxdB7c0M.svg",
  ];

  const innerRadius = 185;
  const outerRadius = 260;

  return (
    <Box
      bg="black"
      color="white"
      overflow="hidden"
      minH="100vh"
      minW="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <VStack spacing={17} align="center" m={10}>
        <Heading fontSize={{ base: "xl", md: "3xl" }} textAlign="center">
          Connects to your <br /> Existing Data Sources
        </Heading>
        <Text fontSize="md" color={"gray.500"} textAlign="center">
          Product usage data is collected from <br /> your existing Product &
          Data stack.
        </Text>
      </VStack>
      <MotionBox
        position="absolute"
        p={20}
        width="330px"
        height="330px"
        margin="auto"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        border="1px solid #1a1a1a"
      >
        {innerIcons.map((icon, index) => {
          const angle = (index / innerIcons.length) * 2 * Math.PI;
          const x = innerRadius * Math.cos(angle);
          const y = innerRadius * Math.sin(angle);
          return (
            <Box
              key={index}
              position="absolute"
              left={`calc(50% + ${x}px)`}
              top={`calc(50% + ${y}px)`}
              transform="translate(-50%, -50%)"
              backgroundColor="#1a1a1a"
              padding="5px"
              boxSize="35px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={icon} boxSize="25px" borderRadius="50%" />
            </Box>
          );
        })}
      </MotionBox>
      <MotionBox
        position="absolute"
        p={30}
        width="450px"
        height="450px"
        margin="auto"
        borderRadius="50%"
        display="flex"
        background="transparent"
        justifyContent="center"
        alignItems="center"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        border="1px solid #1a1a1a"
      >
        {outerIcons.map((icon, index) => {
          const angle = (index / outerIcons.length) * 2 * Math.PI;
          const x = outerRadius * Math.cos(angle);
          const y = outerRadius * Math.sin(angle);
          return (
            <Box
              key={index}
              position="absolute"
              left={`calc(50% + ${x}px)`}
              top={`calc(50% + ${y}px)`}
              transform="translate(-50%, -50%)"
              backgroundColor="#1a1a1a"
              padding="5px"
              boxSize="35px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={icon} boxSize="25px" borderRadius="50%" />
            </Box>
          );
        })}
      </MotionBox>
    </Box>
  );
};
export default CircleAnimation;