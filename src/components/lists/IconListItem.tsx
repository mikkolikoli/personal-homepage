import { ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ReactNode } from "react"

interface IconListItemProps {
  content: string,
  children: ReactNode
}

export default function IconListItem({ content, children }: IconListItemProps) {
  return (
    <ListItem>
      <ListItemIcon>
        {children}
      </ListItemIcon>
      <ListItemText primary={content} />
    </ListItem>
  )
}