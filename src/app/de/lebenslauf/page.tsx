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

import { education_de, experience_de, languages_de, skills, volunteering_de, contact } from "@/data/cv";

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
            <Typography variant="h2">Wer bin ich?</Typography>
            <Typography maxWidth={700}>Ich bin ein Informatikstudent interessiert in 
              front-end Entwicklung und UX/UI. Ich arbeite sehr gut in Teams sowie alleine. 
              Meine größte Stärke lieget wegen meiner Interesse in beiden in der Interaktion 
              zwischen UX/UI und front-end Entwicklung. <br />
              Im bereich UX/UI habe ich Erfahrung sowie in Design und Planung als auch im 
              Testen und Auswerten von den Prototypen.
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
            <Typography variant="h4" component="h3">Kontaktinformation</Typography>
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
            <Typography variant="h4" component="h3">Sprachen</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RegularList items={languages_de} />
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
            <Typography variant="h4" component="h3">Bildung</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedList items={education_de} />
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
            <Typography variant="h4" component="h3">Berufserfahrung</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedList items={experience_de} />
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
            <Typography variant="h4" component="h3">Freiwilligenarbeit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedList items={volunteering_de} />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}