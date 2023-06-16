"use client"

import { useState } from "react";

import { 
  List,
  ListItemButton,
  ListItemText,
  Collapse 
} from "@mui/material"

import { NestedListItem } from "@/types/ListType";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function CollapseableListItem({name, nestedItems}: NestedListItem) {
  const [ open, setOpen ] = useState(true)

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={name} primaryTypographyProps={{variant: "h5", component: "h4"}} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          {nestedItems.map((item) => 
            <ListItemText key={item} sx={{ pl: 4 }} primary={item} />)}
        </List>
      </Collapse>
    </>
  )
}