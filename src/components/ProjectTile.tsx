import { Typography, Grid, IconButton, Stack } from '@mui/material';

import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

interface TileProps {
  name: string,
  code: string,
  link: string | undefined
}

export default function ProjectTile({ name, code, link }: TileProps) {
  /*
  return (
    <Grid 
      container 
      spacing={2}
      justifyContent="center"
      alignItems="center"
      border={"0.5px solid whitesmoke"}
      borderRadius={2}
    >
      <Grid item xs={12}>
        <Typography>{name}</Typography>
      </Grid>

      <Grid item xs={6}>
        <IconButton href={code}>
          <GitHubIcon />
        </IconButton>
      </Grid>
      {link? 
        <Grid item xs={6}>
          <IconButton href={link}>
            <LaunchIcon />
          </IconButton>
        </Grid>:
      null
      }
    </Grid>
  )
  */
  return (
    <Stack
      component="section"
      spacing={2}
      border={"0.5px solid whitesmoke"}
      borderRadius={2}
      justifyContent="center"
      alignItems="center"
      maxWidth={{xs: "90%", sm: "80%", md: "80%"}}
      minHeight={{xs: 200, md: 250}}
      padding={2}
      boxShadow={2}
      bgcolor="#3c3c3c"
      className='hover:bg-dark-gray'
    >
      <Typography 
        variant='h5' 
        component='h2'
        align='center'
      >
        {name}
      </Typography>

      <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton href={code}>
          <GitHubIcon />
        </IconButton>
        {link? 
        <IconButton href={link}>
          <LaunchIcon />
        </IconButton>: null}
      </Stack>
    </Stack>
  )
}