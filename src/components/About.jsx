import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from "../hoc";
const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          scale:3,
          speed:450,
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <p className='font-bold'>{title}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <div className='px-5 py-4'>
      <motion.div variants={textVariant()}>
        {/* <h2 >OverView</h2> */}
        <p className={styles.sectionHeadText} id='about'>About me </p>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam hic asperiores facilis. Exercitationem eum recusandae voluptatum, rem deserunt laboriosam temporibus molestias dolorum modi rerum, perferendis harum tenetur, animi error sed.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-20 justify-evenly'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");