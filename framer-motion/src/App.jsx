import React from 'react'
import {motion} from 'framer-motion'
import PulsingButton from './components/PulsingButton/PulsingButton';
import BouncingLoader from './components/BouncingLoader/BouncingLoader';


const App = () => {
  return <div>
    {/* <motion.div className="box" 
      initial={{x : 0}} 
      animate={{x:100}}
      transition={{duration: 3}}
      
      /> */}

      {/* <PulsingButton/> */}
      <BouncingLoader/>
  </div>
}

export default App;