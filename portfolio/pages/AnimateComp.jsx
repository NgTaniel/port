import { motion } from 'framer-motion'

const animation = {
  initial: {opacity: 0, z: 100},
  animate: {opacity: 100, z: 0},
  exit: {opacity: 0, z: -100}
}

const AnimateComp = ({ children }) => {
  return (
    <motion.div variants={animation} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.75 }}>
      {children}
    </motion.div>
  )
}

export default AnimateComp