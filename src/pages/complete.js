import { Box, Heading, Text, Button, Flex, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useContext } from "react";
import { useTimer } from "@/contexts/Timer";

function Complete() {
  const router = useRouter();
const { setSeconds } = useTimer();

  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        bg="teal.500"
        color="white"
        p={2}
        position="sticky"
        top="0"
        zIndex="999"
      >
        <Box>
          <Heading as="h1" size="lg">
            Game Name
          </Heading>
        </Box>
        <Box>
          <Text fontSize="sm">Time Completed</Text>
          <Flex alignItems="center">
            <Avatar size="sm" name="Player Name" src="/avatar.jpg" mr={2} />
            <Text fontSize="sm">Email@example.com</Text>
          </Flex>
        </Box>
      </Flex>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        color="teal"
      >
        <Heading as="h1" size="xl" mb={4}>
          Thank You for Playing!
        </Heading>
        <Text fontSize="lg" mb={6}>
          We appreciate your participation in our game.
        </Text>
        <Button
          onClick={() => {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("TheGameUserId")
            window.localStorage.setItem("progressing", false);
            window.localStorage.setItem("timer", 600);
            setSeconds(600);
            router.replace("/");
          }}
        >
          Return to Homepage
        </Button>
      </Box>
    </>
  );
}

export default Complete;
