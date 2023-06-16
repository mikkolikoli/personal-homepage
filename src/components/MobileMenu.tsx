"use client"

import { useState } from 'react';

import { Box, SwipeableDrawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link'

interface DrawerProps {
  items: string[]
}

const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function MobileMenu({items}: DrawerProps) {
  const [ open, setOpen ] = useState(false)

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/"> 
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        {items.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <Link href={"/" + item.toLowerCase()}> 
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        aria-label="Menu icon"
        aria-controls="menu-appbar"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        color="black"
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}