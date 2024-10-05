"use client"

import { List } from "@mui/material"
import IconListItem from "./IconListItem";

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from "@mui/icons-material/GitHub";

import { ContactInformation } from "@/types/ContactInformation"

export default function ContactInformationList({ email, website, github }: ContactInformation) {
  return (
    <List dense>
      <IconListItem content={email}><EmailIcon /></IconListItem>
      <IconListItem content={website}><LanguageIcon /></IconListItem>
      <IconListItem content={github}><GitHubIcon /></IconListItem>
    </List>
  )
}