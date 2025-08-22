// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { 
  Table,
  TableBody,
  TableCell, 
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import AnimateComp from './AnimateComp';

const Experiencepage = () => {
  const navigate = useNavigate();  

  const ExpContainer = styled('div')({
    border: '2px solid white',
    borderRadius: '10px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '75vw',
    margin: '5vh auto',
    padding: '0 3vw',
    color: 'white',
    lineHeight: 1.6
  });  

  const Backbutton = styled('button')({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    position: 'relative',
    top: '2em',
  });

  const Heading = styled('h1')({
    textAlign: 'center',  
    fontWeight: '400'
  });

  const Subheading = styled('h3')({
    fontWeight: '400',
  });
  
  const createData = (name, duration, summary) => {
    return { name, duration, summary };
  }

  const data = [
    createData('Software Development Society (DevSoc) Training Lead', 'TERM 2-3 2024',
      [
        'Mentored a team of aspiring computer science and engineering students with application development concepts',
        'Concepts involve but not limited to Vanilla JS, DOM, Figma UI/UX design and prototyping, React.js hooks and CSS',
        'Engaged with the DevSoc internals team with external events like BBQs and Techspire, DevSoc\'s flagship event as an AV tech assistant',
        'Involved as an O-Week stall member (Term 3 2024), demonstrated responsibilities such as welcoming incoming members, communicating information on the society\'s background, and distributing stall prizes'
      ]
    ),
    createData('UNSW CSESoc Dev Trainee', 'TERM 3 2023', 
      ['Began my experiences with React.js and software development', 
        'Gained first interest in frontend, backend development and UI/UX design'
      ]
    ),
    createData('Piano Society Events Subcommittee', 'TERM 2-3 2023',
      [
        'Communicated with executives and subcommittee team to organise and oversee events like termly concerts and practice sessions',
        'Participated as an O-week stall member and welcomed incoming members, sharing insights and further details about the society'
      ]
    )
  ];

  const HeaderCells = styled(TableCell)({
    backgroundColor: 'black', 
    color: 'white',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  });

  const StyledCells = styled(TableCell)({
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: 'white',
    fontWeight: '500'
  });

  return (
    <>
    <AnimateComp>
      <ExpContainer>
        <Backbutton onClick={() => navigate('/port')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </Backbutton>
        <Heading>My Education</Heading>
        <ul>
          <li><b>Bachelor of Computer Science at UNSW,</b> potential option to take up honours from 2026</li>
          <li>
            <b>Non-graduating (exchange) student at NUS (National University of Singapore)</b> from January - May 2025, as part of an exciting exchange opportunity to enhance my personal development and cultural awareness
          </li>
        </ul>

        <Subheading>Experiences</Subheading>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <HeaderCells>Experience</HeaderCells>
                <HeaderCells align="center">Duration</HeaderCells>
                <HeaderCells align="center">Roles&nbsp;and&nbsp;Responsibilities</HeaderCells>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((col, index) => (
                <TableRow
                key={col.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, 
                backgroundColor: index % 2 === 0 ? '#422E8A' : '#543BB0' }}
                >
                  <StyledCells sx={{background: 'none'}} component="th" scope="row">
                    {col.name}
                  </StyledCells>
                  <StyledCells align="left">{col.duration}</StyledCells>
                  <StyledCells align="left">
                    <ul>
                      {col.summary.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </StyledCells>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br/>
      </ExpContainer>
      <br/>
    </AnimateComp>
    </>
  )
}

export default Experiencepage