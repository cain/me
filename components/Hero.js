import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="80vh">
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}
