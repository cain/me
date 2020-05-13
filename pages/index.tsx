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
import { Layout } from '../components/Page/Layout'
import { SectionWriting } from '../components/SectionWriting'
import { SectionProjects } from '../components/SectionProjects'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'

const Index = () => (
  <Layout>
    <Hero />
    <SectionWriting />
    <SectionProjects />
    <DarkModeSwitch />
    <Footer>
      {/* <Text>Next ❤️ Chakra</Text> */}
    </Footer>
  </Layout>
)

export default withTheme(Index)
