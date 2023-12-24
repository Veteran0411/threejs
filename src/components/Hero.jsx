import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 flex items-start gap-14 top-[120px] max-w-7xl`}>
        <div className='flex flex-col justify-center items-center '>
          <div className='w-5 h-5 rounded-full bg-[#7432dfde]' />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className=""><h1 className={`${styles.heroHeadText}`}>Vet<span className='text-purple-600'>er</span>an</h1></div>
        {/* <div className="w-[100%] h-[100%] flex justify-end items-center text-right font-bold text-xl bg-[rgba(0,0,0,0.4)] rounded-2xl box-border p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipis elit. Illo aperiam unde vel odit! Nesciunt odio, vitae blanditiis volupt ipsum iure ipsam quod praesentium. </div> */}
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero