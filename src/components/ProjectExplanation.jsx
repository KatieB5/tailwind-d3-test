import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";

export const ProjectExplanation = () => {
  return (
    <div className="flex justify-center items-center p-10 font-sans">
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Card bg="#dff7e6">
          <CardHeader className="text-emerald-500 font-serif">
            <Heading size="md" className="font-serif">
              Why?
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              This project was initated to practice try some data visualization.
            </Text>
          </CardBody>
        </Card>
        <Card bg="#dff7e6">
          <CardHeader className="text-emerald-500">
            <Heading size="md">What?</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              The project is a web app, built with React to create a dynamic UI.
            </Text>
          </CardBody>
        </Card>
        <Card bg="#dff7e6">
          <CardHeader className="text-emerald-500">
            <Heading size="md">Tech and tools</Heading>
          </CardHeader>
          <CardBody>
            <Text>React, Tailwind CSS, d3.js, Chakra UI.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
};
