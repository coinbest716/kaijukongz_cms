import { NextComponentType } from 'next'
import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import styles from '../../styles/Team.module.css'
gsap.registerPlugin(ScrollTrigger)

const Team: NextComponentType = () => {
   useEffect(() => {
      gsap.fromTo("#member1", 
      {y: 50, opacity: 0},
      { scrollTrigger: {trigger: '#member1', start: "top center",},
      y: 0, opacity: 1, duration: 1, delay: 0.1}
      );
      gsap.fromTo("#member2", 
      {y: 50, opacity: 0},
      { scrollTrigger: {trigger: '#member2', start: "top center",},
      y: 0, opacity: 1, duration: 1, delay: 0.2}
      );
      gsap.fromTo("#member3", 
      {y: 50, opacity: 0},
      { scrollTrigger: {trigger: '#member3', start: "top center",},
      y: 0, opacity: 1, duration: 1, delay: 0.3}
      );
      gsap.fromTo("#member4", 
      {y: 50, opacity: 0},
      { scrollTrigger: {trigger: '#member4', start: "top center",},
      y: 0, opacity: 1, duration: 2, delay: 0.4}
      );
    }, [])
  return (
<div id="team" className={styles.team}>
   <div className={styles.containerMain}>
      <h2 className="h2">Meet the Team</h2>
      <div className="content-div _1"></div>
      <div className={styles.grid}>

         <div id="member1" className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/YoriichiHD_1.gif" loading="lazy"/></div>
               <h3>King Kong</h3>
               <p>Founder</p>
            </div>
         </div>
         
         <div id="member2" className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/kaidoHD.gif" loading="lazy"/></div>
               <h3>Bakayaro</h3>
               <p>Marketing</p>
            </div>
         </div>

         <div id="member3" className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/draculaHD.gif" loading="lazy"/></div>
               <h3>James</h3>
               <p>lead Developer</p>
            </div>
         </div>

         <div id="member4" className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/KyubiHD.gif" loading="lazy"/></div>
               <h3>Hafiz</h3>
               <p>Lead Artist</p>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default Team