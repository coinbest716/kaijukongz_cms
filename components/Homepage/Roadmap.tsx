import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { NextComponentType } from 'next'
import styles from '../../styles/Roadmap.module.css'

gsap.registerPlugin(ScrollTrigger)

const Roadmap: NextComponentType = () => {

   const boxRef = useRef(null);
   const boxRef2 = useRef(null);

   useEffect(() => {
      const el = boxRef.current;
      const el2 = boxRef.current;
      console.log(el)
      gsap.fromTo(
         el,
        {
          translateY: '-100%'
        },
        {
          scrollTrigger: {
            trigger: '#wrapper',
            start: "top top+=200px",
            end: "3000px top",
            scrub: 1,
            // toggleActions: 'play none none reverse',
          },
          translateY: '-0%',
        }
      )
      gsap.fromTo("#road1", 
      {x: 100, opacity: 0},
      { scrollTrigger: {trigger: '#road1', start: "top center", toggleActions: 'play play play play'},
      x: 0, opacity: 1, duration: 1, delay: 0.1}
      );
      gsap.fromTo("#road2", 
      {x: -100, opacity: 0},
      { scrollTrigger: {trigger: '#road2', start: "top center",},
      x: 0, opacity: 1, duration: 1, delay: 0.1}
      );
      gsap.fromTo("#road3", 
      {x: 100, opacity: 0},
      { scrollTrigger: {trigger: '#road3', start: "top center",},
      x: 0, opacity: 1, duration: 1, delay: 0.1}
      );
      gsap.fromTo("#road4", 
      {x: -100, opacity: 0},
      { scrollTrigger: {trigger: '#road4', start: "top center",},
      x: 0, opacity: 1, duration: 2, delay: 0.1}
      );
    }, [])

  return (
<div  className={styles.roadmap} id="roadmap">
   <div className={styles.overlay}></div>
   <h2>Roadmap</h2>
   <div  id="wrapper" className={styles.roadmapWrapper}>
      <div ref={boxRef2} className={styles.lineWrapper}>
         <div ref={boxRef} className={styles.greyLine}>
            <div className={styles.greyDot}><img src="/media/kong.gif" loading="lazy" /></div>
         </div>
      </div>

      <div className={styles.roadmapBlocks}>
         <div className={styles.block}>
            <div className={`${styles.roadmapContent} ${styles.leftPhase}`}>
               <h3 className={styles.percentage}>Phase 1</h3>
            </div>
            <div id='road1' className={styles.roadmapContent}>
            <div className={styles.roadmapContainer}><img src="/media/lavamountain.gif" loading="lazy" width="526"/></div>
               <h4 className={styles.roadmapHeading}>Minting and Burning</h4>
               <p className={styles.aboutPara}>Real-time burn mechanics. Kaiju Kongz NFTs listed on opensea below a certain threshold price will be automatically burnt directly from your wallet. Threshold doubles every 24 hours for 5 Days..</p>
            </div>
         </div>
         <div className={`${styles.block} ${styles.reverse}`}>
            <div id='road2' className={styles.roadmapContent}>
               <div className={styles.roadmapContainer}><img src="/media/waterfallskull.gif" loading="lazy" width="526"/></div>
               <h4 className={styles.roadmapHeading}>$Human Token</h4>
               <p className={styles.aboutPara}>Generate $HUMAN tokens that can be burnt along with their genesis Kong to create a holder designed 1/1. First collection consisting of 3333 custom 1/1s designed by the community!</p>
            </div>
            <div className={`${styles.roadmapContent} ${styles.righPhase}`}>
               <h3 className={styles.percentage}>Phase 2</h3>
            </div>
         </div>
         <div className={styles.block}>
            <div className={`${styles.roadmapContent} ${styles.leftPhase}`}>
               <h3 className={styles.percentage}>Phase 3</h3>
            </div>
            <div id='road3' className={styles.roadmapContent}>
            <div className={styles.roadmapContainer}><img src="/media/combined.gif" loading="lazy" width="526"/></div>
               <h4 className={styles.roadmapHeading}>Skull Island</h4>
               <p className={styles.aboutPara}>Mint Skull Island (1 per genesis kong), Mint Junior Kongz (2 per genesis kong) P2E involving Land NFTs and Junior Kongz (deflationary). Use $HUMAN Tokens directly to steal other Land NFTs Incentivise use of tokens for the game than just to mint new NFTs</p>
            </div>
         </div>
         <div className={`${styles.block} ${styles.reverse}`}>
            <div id='road4' className={styles.roadmapContent}>
               <div className={styles.roadmapContainer}><img src="/media/spearL.gif" loading="lazy" width="526"/></div>
               <h4 className={styles.roadmapHeading}>Future</h4>
               <p className={styles.aboutPara}>$HUMAN for buying WL or enter raffles for other projects Integration into partner gaming projects VX collection for sandbox Hire NFT Alpha & Crypto specialist Many more plans ahead...</p>
            </div>
            <div className={`${styles.roadmapContent} ${styles.righPhase}`}>
               <h3 className={styles.percentage}>Phase 4</h3>
            </div>
         </div>
      </div>
   </div>
   <div className={styles.overlay2}></div>
</div>
  )
}

export default Roadmap