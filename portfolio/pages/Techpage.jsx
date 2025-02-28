import AnimateComp from './AnimateComp'
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import clogo from '../techlogos/Clogo.png'
import jslogo from '../techlogos/Javascriptlogo.png'
import tslogo from '../techlogos/Typescriptlogo.png'
import javalogo from '../techlogos/Javalogo.png'
import htmllogo from '../techlogos/HTML5logo.png'
import csslogo from '../techlogos/CSSLogo.png'
import pythonlogo from '../techlogos/python.png'
import reactlogo from '../techlogos/reactlogo.png'
import expresslogo from '../techlogos/expresslogo.png'
import styledcomplogo from '../techlogos/styledcomponents.png'
import muilogo from '../techlogos/muilogo.png'
import mantinelogo from '../techlogos/mantineui.png'

import sqllogo from '../techlogos/sqllogo.png'
import firebaselogo from '../techlogos/firebaselogo.png'

import gitlogo from '../techlogos/Giticon.png'
import figmalogo from '../techlogos/Figmalogo.png'
import unreallogo from '../techlogos/UnrealEngine.png'

import styles from '../styles/Techpage.module.css'

const Techpage = () => {
  const navigate = useNavigate()

  const Backbutton = styled('button')({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    position: 'relative',
    top: '2em',
  });

  const TechContainer = styled('div')({
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

  return (
    <>
    <AnimateComp>
      <TechContainer>
        <Backbutton onClick={() => navigate('/port')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </Backbutton>
        <Heading>Languages and Frameworks</Heading>
        <div className={styles.techrow}>
          <div className={styles.techbox}>
            <img src={clogo} alt='c' style={{width: '50%'}}/>
            <h1>C</h1>
          </div>
          <div className={styles.techbox}>
            <img src={jslogo} alt='js' style={{width: '55%'}}/>
            <h1>JavaScript</h1>
          </div>
          <div className={styles.techbox}>
            <img src={tslogo} alt='ts' style={{width: '55%'}}/>
            <h1>TypeScript</h1>
          </div>
        </div>
        <div className={styles.techrow}>
          <div className={styles.techbox}>
            <img src={javalogo} alt='java' style={{width: '35%'}}/>
            <h1>Java</h1>
          </div>
          <div className={styles.techbox}>
            <img src={htmllogo} alt='html' style={{width: '65%'}}/>
            <h1>HTML</h1>
          </div>
          <div className={styles.techbox}>
            <img src={csslogo} alt='css' style={{width: '45%'}}/>
            <h1>CSS</h1>
          </div>
        </div>
        <div className={styles.techrow}>
          <div className={styles.techbox}>
            <img src={pythonlogo} alt='python' style={{width: '50%'}}/>
            <h1>Python</h1>
          </div>
          <div className={styles.techbox}>
            <img src={reactlogo} alt='react' style={{width: '57.5%'}}/>
            <h1>ReactJS</h1>
          </div>
          <div className={styles.techbox}>
            <img src={expresslogo} alt='express' style={{width: '50%'}}/>
            <h1>ExpressJS</h1>
          </div>
        </div>
        <div className={styles.techrow}>
          <div className={styles.techbox}>
            <img src={styledcomplogo} alt='styled' style={{width: '50%'}}/>
            <h1>Styled Components</h1>
          </div>
          <div className={styles.techbox}>
            <img src={muilogo} alt='mui' style={{width: '57.5%'}}/>
            <h1>Material UI</h1>
          </div>
          <div className={styles.techbox}>
            <img src={mantinelogo} alt='mantine' style={{width: '50%'}}/>
            <h1>Mantine UI</h1>
          </div>
        </div>

        <Heading>Databases</Heading>
        <div className={styles.techrow}>
          <div className={styles.techbox}>
            <img src={sqllogo} alt='sql' style={{width: '37.5%'}}/>
            <h1>SQL</h1>
          </div>
          <div className={styles.techbox}>
            <img src={firebaselogo} alt='firebase' style={{width: '50%'}}/>
            <h1>Firebase</h1>
          </div>
        </div>


        <Heading>Tools and Other Software</Heading>
        <div className={styles.techrow}>
          <div className={styles.techbox}>
            <img src={gitlogo} alt='git' style={{width: '55%'}}/>
            <h1>Git</h1>
          </div>
          <div className={styles.techbox}>
            <img src={figmalogo} alt='figma' style={{width: '35%'}}/>
            <h1>Figma</h1>
          </div>
          <div className={styles.techbox}>
            <img src={unreallogo} alt='ue' style={{width: '45%'}}/>
            <h1>Unreal Engine</h1>
          </div>
        </div>



      </TechContainer>
      <br/>
    </AnimateComp>
    </>
  )
}

export default Techpage