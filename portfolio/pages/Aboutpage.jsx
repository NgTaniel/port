import React from 'react'
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
// import styles from '../styles/Aboutpage.module.css'


const Aboutpage = () => {
  const navigate = useNavigate()
  
  const AboutContainer = styled('div')({
    border: '2px solid white',
    borderRadius: '10px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '50vw',
    margin: '5vh auto',
    padding: '0 3vw',
    color: 'white',
    lineHeight: 1.6
  });

  const NoteIcon = styled('div')({
    // margin: '0 auto',
    textAlign: 'center'
  })

  const Heading = styled('h1')({
    textAlign: 'center',  
    fontWeight: '400'
  })

  const Subheading = styled('h3')({
    fontWeight: '400',
    textDecoration: 'underline'
  })

  const Backbutton = styled('button')({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    position: 'relative',
    top: '2em',
  })
  
  return (
    <>
      <AboutContainer>
        <Backbutton onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </Backbutton>
        <Heading>About me</Heading>
        <NoteIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
            <path fillRule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
          </svg>
        </NoteIcon>
        <p>Hello, I am Nathaniel</p>
        <p>
          I am a fourth year student at the University of New South Wales (UNSW) undergoing my Bachelor of Computer Science, with an option to potentially take an honours research thesis from the start of next year. As a current and aspiring undergraduate, I tend to explore many areas of computer science and software engineering, where during this exploration I have engaged in application development and user interface design. When developing applications, I learnt how outstanding user interface (UI) is important to appeal to the users and to provide a comfortable user experience (UX) whenever a user visits and interacts with an application to achieve their goals.
        </p>
        <p>
          Outside of my software development studies, I am an intermediate piano player for leisure, where I completed my Certificate of Performance in November 2022 and continued to explore online piano covers to learn.
        </p>
        <Subheading>Interests</Subheading>
        <p>
          Some of my particular interests involve website application development (including frontend and backend development), UI/UX design and recently, I studied engaging areas of cybersecurity such as website security and exploitation methods, which I am considering to explore further.
        </p>
        <Subheading>Some work experiences</Subheading>
        <p>
          I previously worked as a tutor across multiple tutoring centres teaching subjects such as English and Mathematics, to students from primary and secondary levels.
        </p>
      </AboutContainer>
      <br/>
    </>
  )
}

export default Aboutpage