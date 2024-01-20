"use client"

import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

function Socials({className}: any ) {
  return (
    <div className={`border w-6/12 md:w-2/12 py-3 rounded-md ${className}`}>
          <ul className="flex justify-around">
            <motion.li 
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9 }}
            >
              <a href="https://github.com/UTHRATHITHAN" target="#">
                <FaGithub className="w-6 h-6" />
              </a>
            </motion.li>
            <motion.li
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9 }}
            >
              <a href="https://linkedin.com/in/uthrathithan-m" target="#">
              <FaLinkedinIn className="w-6 h-6" />
              </a>
             
            </motion.li>
            <motion.li
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9}}
            >
              <a href="https://twitter.com/Uthrathithan_M" target="#">
              <FaXTwitter className="w-6 h-6" />
              </a>
              
            </motion.li>
          </ul>
        </div>
  )
}

export default Socials