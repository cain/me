import { Flex, Heading, Avatar, Text, Grid, Box } from '@chakra-ui/core'
export const SectionProjects = () => (
  <Grid templateColumns="repeat(1, 1fr)" gap={1}>
    <Heading as="h2" size="lg" mb="2">
      Projects
    </Heading>
    <Box mb="3">
      <Text as="h4" fontWeight="semibold">
        Nuxtjs rollbar sourcemaps
      </Text>
      <Text fontSize="sm" color="gray.500">
        Introducing source maps can greatly improve your debugging for errors. Theres a few small plugins that can greatly help you do this.
      </Text>
    </Box>
    <Box mb="3">
      <Text as="h4" fontWeight="semibold">
        Nuxtjs rollbar sourcemaps
      </Text>
      <Text fontSize="sm" color="gray.500">
        Introducing source maps can greatly improve your debugging for errors. Theres a few small plugins that can greatly help you do this.
      </Text>
    </Box>
    <Box>
      <Text as="h4" fontWeight="semibold">
        Nuxtjs rollbar sourcemaps
      </Text>
      <Text fontSize="sm" color="gray.500">
        Introducing source maps can greatly improve your debugging for errors. Theres a few small plugins that can greatly help you do this.
      </Text>
    </Box>
  </Grid>
)
