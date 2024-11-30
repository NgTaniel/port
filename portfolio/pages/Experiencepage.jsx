import React from 'react'
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

const Experiencepage = () => {
  const navigate = useNavigate();  

  const ExpContainer = styled('div')({
    border: '2px solid white',
    borderRadius: '10px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '50vw',
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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const HeaderCells = styled(TableCell)({
    backgroundColor: 'black', 
    color: 'white'
  })

  return (
    <>
      <ExpContainer>
        <Backbutton onClick={() => navigate('/')}>
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <HeaderCells>Dessert (100g serving)</HeaderCells>
                <HeaderCells align="right">Calories</HeaderCells>
                <HeaderCells align="right">Fat&nbsp;(g)</HeaderCells>
                <HeaderCells align="right">Carbs&nbsp;(g)</HeaderCells>
                <HeaderCells align="right">Protein&nbsp;(g)</HeaderCells>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br/>
      </ExpContainer>
    </>
  )
}

export default Experiencepage