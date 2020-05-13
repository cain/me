import React from 'react'
import { Grid } from '@chakra-ui/core'

export const Layout = props => {
  return (
    <Grid
      templateColumns="repeat(1, 1fr)" gap={20}
      width="45%"
      margin="auto"
      marginTop="20vh"
      {...props}
    />
  )
}
