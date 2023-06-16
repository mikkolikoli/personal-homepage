import { List, ListItemText } from "@mui/material"

interface ListProps {
  items: string[]
}

export default function RegularList({ items }: ListProps) {
  return (
    <List dense>
      {items.map((item) => <ListItemText key={item} primary={item} />)}
    </List>
  )
}