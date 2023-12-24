import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from "framer-motion";
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from "../hoc";

const ProjectCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("left","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
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
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <h2 >OverView</h2> */}
        <p className={styles.sectionHeadText} id='about'>Blog</p>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-20 justify-evenly'>
        {projects.map((project,index)=>(
          <ProjectCard key={project.title} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"blog");