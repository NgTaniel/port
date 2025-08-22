// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import AnimateComp from './AnimateComp';
import { Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import sip1 from '../images/sip1.png';
import sip2 from '../images/sip2.png';
import trek1 from '../images/trek1.png';
import trek2 from '../images/trek2.png';
// import care1 from '../images/care1.png';
import care2 from '../images/care2.png';
import synciety1 from '../images/synciety1.png'
import synciety2 from '../images/synciety2.png'

const Projectpage = () => {
  const navigate = useNavigate();

  const ProjectContainer = styled('div')({
    border: '2px solid white',
    borderRadius: '10px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '75vw',
    margin: '5vh auto',
    padding: '0 3vw',
    color: 'white',
    lineHeight: 1.6
  });

  const Heading = styled('h1')({
    textAlign: 'center',  
    fontWeight: '400'
  });

  const Backbutton = styled('button')({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    position: 'relative',
    top: '2em',
  });

  const Subheading = styled('h3')({
    fontWeight: '400',
    textAlign: 'center'
  });

  const ProjectButton = styled(Button)({
    margin: '0 auto', 
    display: 'flex', 
    width: '30vw'
  });

  const StyledCard = styled(Card)({
    ':hover': {boxShadow: '0px 0px 5px 8px rgba(255, 255, 255, 0.5)'}
  })

  const CardTitle = styled(Typography)({
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', 
    textAlign: 'center',
    fontWeight: 600,
  });

  const CardInfo = styled(Typography)({
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  });

  return (
    <>
    <AnimateComp>
      <ProjectContainer>
        <Backbutton onClick={() => navigate('/port')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </Backbutton>
        <Heading>Past Projects and Works</Heading>
        <Subheading>UI/UX Screen Prototypes</Subheading>
        <ProjectButton  
          href='https://www.figma.com/design/80ivMhy3jkOXciToLXj3ZF/Sip-Sip-Hooray-Figma?node-id=0-1&t=Vr53JOvqKAbcpCIi-1' 
          target='_blank'
        >
          <StyledCard >
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={sip2}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                Sip-Sip Hooray UI
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                23T3 Trainee Project: UI Screen Design Prototype showcasing a drink simulator application, with some multiplayer features such as a shared server code
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>

        <ProjectButton 
          href='https://www.figma.com/design/48lidr4DcCEF5pjbsJV4dq/Trek?node-id=0-1&node-type=canvas&t=ikKIoTSdbjKQaPsF-0' 
          target='_blank'
        >
          <StyledCard>
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={trek2}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                Trek UI
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                Mentored my 24T2 group with an Itinerary application prototype, in recommending and planning destinations from a user&apos;s journey
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>

        <ProjectButton 
          href='https://www.figma.com/design/bT2PC5w8HXGGH3CTl0C5oo/COMP3511-Checkpoint-4-Prototyping-(Final)?node-id=233-1893&t=xp3xXOkkEzWkOVMU-1' 
          target='_blank'
        >
          <StyledCard>
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={care2}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                CareCatalyst
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                COMP3511 Project: Inspired by NGO&apos;s and their website interfaces to develop a screen design to address charitable goals towards particular issues, and utilising user interface concepts
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>

        <ProjectButton 
          href='https://www.figma.com/design/qw4k5GVuTxaP5vURfGy158/Prototype?node-id=0-1&t=xs4dYBnI5BsR7cij-1' 
          target='_blank'
        >
          <StyledCard>
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={synciety2}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                Synciety UI
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                Oversaw and assisted my 24T3 trainee group with a Calender-inspired application screen design, in planning upcoming society events for the user
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>

        <Subheading>Project contributions</Subheading>
        <ProjectButton 
          href='https://github.com/devsoc-unsw/trainee-emperor-24t3' 
          target='_blank'
        >
          <StyledCard>
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={synciety1}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                Synciety
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                Aided my trainee group with a Calender-inspired application as a 24T3 Training Lead with a co-lead, the goal of this planning upcoming society events for the user
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>

        <ProjectButton 
          href='https://github.com/devsoc-unsw/trainee-ranger-24t2' 
          target='_blank'
        >
          <StyledCard>
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={trek1}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                Trek
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                Contributed with my trainee group with a Itinerary application as a 24T2 Training Lead, in recommending destinations from a user&apos;s journey as the main goal and inspiration
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>

        <ProjectButton 
          href='https://github.com/csesoc/trainee-5-23t3' 
          target='_blank'
        >
          <StyledCard>
            <CardMedia
              component='img'
              alt='sip'
              // height='200'
              image={sip1}
            />
            <CardContent>
              <CardTitle gutterBottom variant="h5" component="div" sx={{fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1.5rem',
              }}}>
                Sip-Sip Hooray
              </CardTitle>
              <CardInfo variant="body3" sx={{fontSize: {
                xs: '0.3rem',
                sm: '1rem',
                md: '1rem',
              }, lineHeight: 0}
              }>
                My 23T3 trainee group project which focuses on a drinking simulator, intended to test and track the user&apos;s progress with the quantity and type of drinks interacted in the application
              </CardInfo>
            </CardContent>
          </StyledCard>
        </ProjectButton>
        <br/>
      </ProjectContainer>
      <br/>
    </AnimateComp>
    </>
  )
}

export default Projectpage