import { NextComponentType } from 'next'
import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Utility.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Utility: NextComponentType = () => {
   const logo = useRef(null)
   useEffect(() => {
     gsap.fromTo("#img1", 
     {y: 20, opacity: 0},
     
     { scrollTrigger: {trigger: '#img1', start: "top center",},
        y: 0, opacity: 1, duration: 1}
     );
     gsap.fromTo("#img2", 
     {y: 20, opacity: 0},
     { scrollTrigger: {trigger: '#img2', start: "top center",},
     y: 0, opacity: 1, duration: 1, delay: 0.1}
     );
     gsap.fromTo("#img3", 
     {y: 20, opacity: 0},
     { scrollTrigger: {trigger: '#img3', start: "top center",},
     y: 0, opacity: 1, duration: 1, delay: 0.3}
     );
     gsap.fromTo("#txt1", 
     {y: 20, opacity: 0},
     { scrollTrigger: {trigger: '#txt1'},
     y: 0, opacity: 1, duration: 1, delay: 0.4}
     );
     gsap.fromTo("#txt2", 
     {y: 20, opacity: 0},
     { scrollTrigger: {trigger: '#txt2'},
     y: 0, opacity: 1, duration: 1, delay: 0.5}
     );
     gsap.fromTo("#txt3", 
     {y: 20, opacity: 0},
     { scrollTrigger: {trigger: '#txt3'},
     y: 0, opacity: 1, duration: 1, delay: 0.6}
     );
   });
  return (
<section className={styles.utility} id="utility">
   <div className={styles.utilityContainer}>
      <div className={styles.environment}>
       <h2>Utility</h2>
       </div>
      <div className={styles.cardGroup}>
         <div className={styles.card}>
            <div className={styles.cardImg} id="img1"><img src="/media/waterfallskull.gif" alt="Unique Characters"/></div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle} id="txt1">3333 Unique Characters</h3>
            </div>
         </div>
         <div className={styles.card}>
            <div className={styles.cardImg} id="img2"><img src="/media/spearL.gif" alt="HUMAN TOKEN" /></div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle} id="txt2">$HUMAN TOKEN</h3>
            </div>
         </div>
         <div className={styles.card}>
            <div className={styles.cardImg} id="img3"><img src="/media/incubator.gif" alt="P2e-and & Junior Kongs" /></div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle} id="txt3">P2e-and & Junior Kongs</h3>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default Utility