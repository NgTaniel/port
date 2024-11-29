import { useNavigate } from 'react-router-dom';
import styles from '../styles/Homepage.module.css';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Nathaniel Tan
      </h1>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
          <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
          <path fillRule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
          <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
        </svg> */}

      <div className={styles.buttoncontainer}>
        <button>About Me</button>
        <button>Education and Experiences</button>
        <button>Projects and Works</button>
        <button onClick={() => navigate('/contact')}>Contact me</button>
      </div>
    </div>
  )
}

export default Homepage