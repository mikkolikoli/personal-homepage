"use client"

import { useRouter } from 'next/router';

import { Avatar, AppBar, Box, Toolbar, Typography, Container, Tooltip, IconButton } from '@mui/material';

import MobileMenu from './MobileMenu';
import Link from 'next/link'
import { Language } from '@mui/icons-material';

const pages = ['CV', 'Portfolio', 'Contact'];
const pages_de = ['Lebenslauf', 'Portfolio', 'Kontakt']

interface NavBarProps {
  lang: 'de' | 'en' | 'fi'
}

export default function Navbar({lang}: NavBarProps) {
  const router = useRouter()

  const swapLanguage = () => {
    lang === 'en'? router.push('/de'): router.push('/')
  }

  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Link href="/">
            <Avatar alt='Mikko Rajakorpi' src="/static/images/avatar.JPG" />
          </Link>
          <Link href={lang === 'en'? '/': '/de'} className='hover:text-gray-500 ml-4'>
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
            <MobileMenu items={lang === 'en'? pages: pages_de} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {lang === 'en'? pages.map((page) => (
              <Link 
                key={page} 
                href={`/${page.toLowerCase()}`}
                className="hover:text-gray-500 mx-4">{page}</Link>
            )):
            pages_de.map((page) => (
              <Link 
                key={page} 
                href={`/${page.toLowerCase()}`}
                className="hover:text-gray-500 mx-4">{page}</Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title = { lang === 'en'? 'Deutsch': 'English' }>
              <IconButton aria-label = { lang === 'en'? 'Auf Deutsch wechseln': 'Swap to English' }>
                <Language />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}