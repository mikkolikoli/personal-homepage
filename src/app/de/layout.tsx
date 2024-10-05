"use client"

import '../globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Head from 'next/head';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
darkTheme = responsiveFontSizes(darkTheme)
/*
darkTheme.typography.h1 = {
  fontSize: '2.4rem',
  '@media (min-width:600px)': {
    fontSize: '2.6rem',
  },
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};
*/

const inter = Inter({ subsets: ['latin'] })

/*
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <title>Mikko Rajakorpi</title>
        <meta name="description" content="Mikko Rajakorpis persönliche Website" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <header>
            <Navbar lang="de" />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
