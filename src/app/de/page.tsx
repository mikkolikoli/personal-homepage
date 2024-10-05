"use client"

import { Box, Stack, Typography } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Stack component="main" 
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Stack component="section"
        direction={{xs: 'column-reverse',md: 'row'}}
        justifyContent="center"
        alignItems="center"
        m={2}
      >
        <Box display={{xs: 'flex', md: 'none'}}>
          <Image src="/static/images/avatar.JPG" alt="Mikko Rajakorpi" width={250} height={250} className='rounded' />
        </Box>
        <Box display={{xs: 'none', md: 'flex'}}>
          <Image src="/static/images/avatar.JPG" alt="Mikko Rajakorpi" width={100} height={100} className='rounded' />
        </Box>
        <Typography 
          variant='h1'
          m={2}
        >
          Mikko Rajakorpi
        </Typography>
      </Stack>
      <Box component="article"
        padding={4}
        sx={{
          border: "0.5px solid whitesmoke"
        }}>
        <Typography>
          Hallo, <br />
          Ich bin Mikko Rajakorpi, ein Informatik Student an der Universität von Tampere <br />
          Meine Interessen im bereich Informatik liegen in front-end development und UX.
        </Typography>
      </Box>
    </Stack>
  )
}
