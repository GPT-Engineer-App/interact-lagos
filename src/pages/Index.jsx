import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.700">
          Welcome to Lagos State Government Interaction Platform
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">
          Your gateway to engaging with the Lagos state government. Get information, provide feedback, and stay connected.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Button colorScheme="blue" size="lg" m={2}>
            Get Information
          </Button>
          <Button colorScheme="green" size="lg" m={2}>
            Provide Feedback
          </Button>
          <Button colorScheme="teal" size="lg" m={2}>
            Contact Us
          </Button>
        </Flex>
        <Box width="100%" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Contact Information
          </Heading>
          <Flex justifyContent="space-around" wrap="wrap">
            <Box textAlign="center" m={2}>
              <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" isRound />
              <Text mt={2}>+234 123 456 7890</Text>
            </Box>
            <Box textAlign="center" m={2}>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" isRound />
              <Text mt={2}>info@lagosstate.gov.ng</Text>
            </Box>
            <Box textAlign="center" m={2}>
              <IconButton aria-label="Location" icon={<FaMapMarkerAlt />} size="lg" isRound />
              <Text mt={2}>Alausa, Ikeja, Lagos</Text>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;