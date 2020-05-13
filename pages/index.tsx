import React from 'react'
import { withTheme } from 'emotion-theming'
import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container>
    <Hero />
    <DarkModeSwitch />
    <Footer>
      {/* <Text>Next ❤️ Chakra</Text> */}
    </Footer>
  </Container>
)

export default withTheme(Index)
