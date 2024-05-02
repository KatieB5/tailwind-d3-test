import { Box, Heading } from "@chakra-ui/react";
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import { LineChart } from "./LineGraph";

export const LineGraphBox = () => {
  return (
    <div className="flex justify-center items-center font-sans">
      <Box w="75%" p={4} m="10" bg="green.50" textAlign="center">
        <Heading
          size="md"
          className="text-emerald-700 font-serif"
          textAlign="left"
        >
          Do you think abortions should be legal under any circumstances, legal
          only under certain circumstances or illegal in all circumstances?
        </Heading>
        <LineChart/>
      </Box>
    </div>
  );
};
