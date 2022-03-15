import gsap from 'gsap';
import { NextComponentType } from 'next'
import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Header.module.css'

const Header: NextComponentType = () => {
  const logo = useRef(null)
  useEffect(() => {
    gsap.fromTo(".Header_mainLogo__jhZUe", 
    {y: 20, opacity: 0},
    {y: 0, opacity: 1, duration: 1}
    );
    gsap.fromTo(".Header_landingText__ylDia", 
    {y: 20, opacity: 0},
    {y: 0, opacity: 1, duration: 1, delay: 0.4}
    );
  });
  return (
    <div className={styles.header} id="home">
        <div className={styles.headerContainer}>
            <img loading="lazy" className={styles.mainLogo} src="/media/kaiju_Full.gif" />
            <h1 className={styles.landingText}>Kaiju Kongz is a 3333 NFT collection with a real-time burn phase. It willl become the first collection to consiste of entirely 1/1s Earn $HUMAN tokens for a ton of utilities from P2E, WL purchase, VX minting, partner project integration and many more</h1>
            
            <a className={styles.buyBtn} href="#" target="_blank" rel="noreferrer">COMING SOON</a>
        </div>
    </div>
  )
}

export default Header
