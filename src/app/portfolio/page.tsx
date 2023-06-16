"use client"

import { Grid } from "@mui/material"
import ProjectTile from "@/components/ProjectTile"

import { projects } from "@/data/projects"

export default function PortfolioPage() {
  return (
    <Grid 
      container 
      component="main"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      padding={4}
    >
      {projects.map((project) => 
        <Grid key={project.name} 
          item
          xs={8}
          sm={6}
          md={4}
        >
          <ProjectTile name={project.name} code={project.code} link={project.link} />
        </Grid>
      )}
    </Grid>
  )
}