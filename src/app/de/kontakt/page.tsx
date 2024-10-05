"use client"

import { Stack, Typography, List } from "@mui/material"
import IconListItem from "@/components/lists/IconListItem";

import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactPage() {
  return (
    <Stack
      component="main"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      padding={8}
    >
      <Typography 
        variant="h2" 
        component="h1"
      >
        Kontaktinformation
      </Typography>

      <List>
        <IconListItem link to="mailto:mikko@mikkorajakorpi.fi" content="mikko@mikkorajakorpi.fi">
          <EmailIcon />
        </IconListItem>

        <IconListItem link to="https://www.linkedin.com/in/mikko-rajakorpi-825777254/" content="LinkedIn">
          <LinkedInIcon />
        </IconListItem>

        <IconListItem link to="https://github.com/mikkolikoli" content="GitHub">
          <GitHubIcon />
        </IconListItem>

        <IconListItem content="@mikkolikoli">
          <TelegramIcon />
        </IconListItem>
      </List>
    </Stack>
  )
}