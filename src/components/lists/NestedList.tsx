"use client"

import { List } from "@mui/material"
import CollapseableListItem from "./CollapseableListItem";

import { NestedListItem } from "@/types/ListType";

interface ListProps {
  items: NestedListItem[]
}

export default function NestedList({ items }: ListProps) {
  return (
    <List dense>
      {items.map((item) => 
        <CollapseableListItem key={item.name} name={item.name} nestedItems={item.nestedItems} />
      )}
    </List>
  )
}