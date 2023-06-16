import { ListItem, ListItemIcon, ListItemText, ListItemButton} from "@mui/material"
import { ReactNode } from "react"

interface IconListItemProps {
  content: string,
  children: ReactNode,
  link?: boolean
  to?: string
}

export default function IconListItem({ content, children, link=false, to }: IconListItemProps) {
  if (!link) {
    return (
      <ListItem>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={content} />
      </ListItem>
    )
  }
  else {
    return (
      <ListItemButton component="a" href={to}>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={content} />
      </ListItemButton>
    )
  }
}