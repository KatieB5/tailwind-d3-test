import { Box, Heading } from "@chakra-ui/react";

export const LineGraph = () => {
  return (
    <div className="flex justify-center items-center font-serif">
      <Box w="75%" p={4} m="10" bg="green.50" textAlign="center">
        <Heading
          size="md"
          className="text-emerald-700 font-serif"
          textAlign="left"
        >
          Do you think abortions should be legal under any circumstances, legal
          only under certain circumstances or illegal in all circumstances?
        </Heading>
      </Box>
    </div>
  );
};
