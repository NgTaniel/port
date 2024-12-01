// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import AnimateComp from './AnimateComp';

const Projectpage = () => {
  const navigate = useNavigate();

  const ProjectContainer = styled('div')({
    border: '2px solid white',
    borderRadius: '10px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '50vw',
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

  return (
    <>
    <AnimateComp>
      <ProjectContainer>
        <Backbutton onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </Backbutton>
        <Heading>Past Projects and Works</Heading>
        <Subheading>UI/UX Screen Prototypes</Subheading>
        <Subheading>Project contributions</Subheading>
      </ProjectContainer>
    </AnimateComp>
    </>
  )
}

export default Projectpage