import React from 'react'
import {motion} from 'framer-motion'
import './PulsingButton.css'


const PulsingButton = () => {
  return <div>
    <motion.button className='btn' animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"]
    }}
    transition={{duration:0.8, ease: "easeInOut", repeat:Infinity}}
    >Click me</motion.button>
    
  </div>

}

export default PulsingButton