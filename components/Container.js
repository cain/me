import React from 'react'
import { Flex, useColorMode } from '@chakra-ui/core'

export const Container = props => {
  return (
    <Flex
      direction="column"
      width="50%"
      margin="auto"
      marginTop="20vh"
      {...props}
    />
  )
}
