import React from "react";
import { Box, VStack, Text, Image, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

  const innerRadius = 140;
  const outerRadius = 200;

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
      <VStack spacing={8} align="center" zIndex={1} textAlign="center">
        <Heading fontSize={{ base: "xl", md: "3xl" }}>
          Connects to your <br /> Existing Data Sources
        </Heading>
        <Text fontSize="md" color="gray.500">
          Product usage data is collected from <br /> your existing Product & Data stack.
        </Text>
      </VStack>
      <MotionBox
        position="absolute"
        width="280px"
        height="280px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
              bg="gray.900"
              p="5px"
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
        width="400px"
        height="400px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
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
              bg="gray.900"
              p="5px"
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
