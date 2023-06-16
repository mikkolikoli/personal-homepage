"use client"

import { Box, Divider, Stack, Typography } from '@mui/material'

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
          <Image src="/avatar.jpg" alt="Mikko Rajakorpi" width={250} height={250} className='rounded' />
        </Box>
        <Box display={{xs: 'none', md: 'flex'}}>
          <Image src="/avatar.jpg" alt="Mikko Rajakorpi" width={100} height={100} className='rounded' />
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
          Hey, <br />
          I&apos;m Mikko Rajakorpi, a computer science student at Tampere University. <br />
          This is my personal website. Here you can look at my 
          <Link className='text-blue-600 visited:text-purple-600 underline' href="/portfolio"> portfolio</Link>, 
          <Link className='text-blue-600 visited:text-purple-600 underline' href="/cv"> CV</Link> or 
          <Link className='text-blue-600 visited:text-purple-600 underline' href="/contact"> contact me</Link>.
        </Typography>
      </Box>
    </Stack>
  )
}
