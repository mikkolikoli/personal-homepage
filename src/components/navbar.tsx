"use client"

import { Avatar, AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

import MobileMenu from './MobileMenu';
import Link from 'next/link'


const pages = ['CV', 'Portfolio', 'Contact'];

export default function Navbar() {
  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Link href="/">
            <Avatar alt='Mikko Rajakorpi' src='avatar.jpg' />
          </Link>
          <Link href="/" className='hover:text-gray-500 ml-4'>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
              }}
            >
              Mikko Rajakorpi
            </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MobileMenu items={pages} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
              <Link 
                key={page} 
                href={"/" + page.toLowerCase}
                className="hover:text-gray-500 mx-4">{page}</Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}