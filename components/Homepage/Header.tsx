import { NextComponentType } from 'next'
import styles from '../../styles/Header.module.css'

const Header: NextComponentType = () => {

  return (
    <div className={styles.header} id="home">
        <div className={styles.headerContainer}>
            <img loading="lazy" className={styles.mainLogo} src="/media/kaiju_Full.gif" />
            <h1 className={styles.landingText}>Kaiju Kongz is a 3333 NFT collection with a real-time burn phase. It willl become the first collection to consiste of entirely 1/1s Earn $HUMAN tokens for a ton of utilities from P2E, WL purchase, VX minting, partner project integration and many more</h1>
            
            <a className={styles.buyBtn} href="#" target="_blank" >BUY ON OPENSEA</a>
        </div>
    </div>
  )
}

export default Header