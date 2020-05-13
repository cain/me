import { Flex, Heading, Avatar, Text, Grid } from '@chakra-ui/core'
export const Hero = ({ title }) => (
  <Grid templateColumns="repeat(1, 1fr)" gap={1}>
    {/* <Avatar
      name="Cain"
      src="https://avatars1.githubusercontent.com/u/15246256?s=460&u=e853d5e368c6cc977ad2c1bffc228bf1158225ff&v=4"
      marginBottom="3"
    /> */}
    <Heading as="h1" size="lg">
      Hey, I'm Cain.
    </Heading>
    <Text fontSize="lg">
      {/* @TODO: This is dummy text for now */}
      I'm a product designer living in Sydney Australia.
    </Text>
    <Text fontSize="lg">
      Creating meaningful and useful products is my passion.
    </Text>
  </Grid>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}
