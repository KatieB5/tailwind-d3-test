import { Image, Stack, Heading, Text, Container } from "@chakra-ui/react";

export const DataSources = () => {
  return (
    <Container
      display="flex"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      alignItems={{ base: "center", sm: "flex-start" }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image of a graph drawn on paper"
        mr={{ sm: "4" }}
      />
      <Stack>
        <Heading size="md" className="text-emerald-700 font-sans">
          Data sources
        </Heading>

        <Text py="2">
          The data for this project were accessed from a number of different
          freely-available sources. These are detailed on the individual pages
          displaying the data.
        </Text>
      </Stack>
    </Container>
  );
};
