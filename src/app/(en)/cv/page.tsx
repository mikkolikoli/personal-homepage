"use client"

import { 
  Grid, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Stack,  
  Box
} from "@mui/material"

import RegularList from "@/components/lists/RegularList";
import NestedList from "@/components/lists/NestedList";
import ContactInformationList from "@/components/lists/ContactInformationList";
import Image from "next/image"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { education, experience, languages, skills, volunteering, contact } from "@/data/cv";

export default function CVPage() {

  return (
    <Grid container
      component="main"
      padding={6}
      spacing={4}
    >
      <Grid item 
        xs={12}
      >
        <Stack 
          direction="row"
          spacing={2}
        >
          <Box display={{xs: "none", md: "flex"}}>
            <Image src="/static/images/avatar.JPG" height={175} width={175} alt="Mikko Rajakorpi" />
          </Box>
          <Stack>
            <Typography variant="h1">Mikko Rajakorpi</Typography>
            <Typography variant="h2">About me</Typography>
            <Typography maxWidth={700}>I&apos;m a young software developer interested in web front-end development.
               I work well in a team, but can work alone on projects too if needed. I&apos;m always looking to improve my skills as a developer.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item 
        xs={12}
        md={5}
      >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Contact-information-content"
          >
            <Typography variant="h4" component="h3">Contact information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ContactInformationList 
              email={contact.email} 
              website={contact.website} 
              github={contact.github} />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item
        xs={12}
        md={5}
      >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Skills-content"
          >
            <Typography variant="h4" component="h3">Skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RegularList items={skills} />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item
        xs={12}
        md={5}
      >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Languages-content"
          >
            <Typography variant="h4" component="h3">Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RegularList items={languages} />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item
        xs={12}
        md={5}
      >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Education-content"
          >
            <Typography variant="h4" component="h3">Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedList items={education} />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item
        xs={12}
        md={5}
      >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Experience-content"
          >
            <Typography variant="h4" component="h3">Work experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedList items={experience} />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item
        xs={12}
        md={5}
      >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Volunteering-content"
          >
            <Typography variant="h4" component="h3">Volunteering</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedList items={volunteering} />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}