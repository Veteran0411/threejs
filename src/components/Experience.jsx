import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css"; 
import {styles} from "../styles";
import {experiences} from '../constants'
import{SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard=({experience})=>(
<VerticalTimelineElement contentStyle={{background:"rgba(255,255,255,0.3)",color:"black"}} 
contentArrowStyle={{borderRight:"7px solid #232631"}} date={experience.date} iconStyle={{background:experience.iconBg}}
icon={
  <div>
    {/* <img src={experience.icon} alt={experience.company_name} className='w-[100%] h-[100%] object-contain flex items-center justify-center' /> */}
  </div>
}
>
<div>
  <h3 className='text-white h-[100px] flex items-center justify-center'>{experience.title}</h3>
</div>
</VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionHeadText} id='project'>Projects </p>
    </motion.div>
    
    <div className='mt-20 flex flex-col'> 
      <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"project");