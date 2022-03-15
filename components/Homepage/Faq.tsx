import { motion } from 'framer-motion'
import { NextComponentType } from 'next'
import { useState } from 'react'
import styles from '../../styles/Faq.module.css'
import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const Faq: NextComponentType = () => {
    const [opened, setOpened] = useState<boolean[]>([false, false, false, false, false])
    const open = (index:number) => {
        const newOpened = [...opened]
        newOpened[index] = !opened[index];
        setOpened(newOpened)
    }
    useEffect(() => {
        gsap.fromTo(".Faq_faqWrapper__2fAiG", 
        {y: 50, opacity: 0},
        { scrollTrigger: {trigger: '.Faq_faqWrapper__2fAiG', start: "top center",},
        y: 0, opacity: 1, duration: 1, delay: 0.1}
        )
    }, [])
    const variants = {
        initial: { height: 0 },
        animate: {
            height: 'auto',
            transition: {
                type: "spring",
                duration: 1,
            }
        }
    }
    const variant = {
        initial: { transform: 'rotateZ(0deg)' },
        animate: {
            transform: 'rotateZ(180deg)',
            transition: {
                type: "ease-in-out",
                duration: 0.3,
            }
        }
    }
    return (
    <div id="Faqs" className={styles.faq}>
    <div className={styles.faqContainer}>
        <div className={styles.faqWrapper}>
            <div className={styles.textBlock}>
                <h2 className="partners-heading">Frequently Asked Questions</h2>
            </div>
            <div className="faqs-wrapper">
                <div className={styles.faqWrapper2}>
                <div className={styles.titleAndArrow} onClick={() => open(0)}>
                    <p className={styles.paragraph}>What is Kaiju Kongz ?</p>
                    <motion.img variants={variant}
                    initial="initial"
                    animate={opened[0] ? "animate" : "initial"}
                    src="/media/arrow.png" alt="" className={styles.arrowFaq}/>
                </div>
                <motion.div variants={variants}
                    initial="initial"
                    animate={opened[0] ? "animate" : "initial"} className={styles.faqDescription}>
                    <p className={styles.paragraphSmall}>First of all kaiju means monsters in Japanese: King Kong, Godzilla, Mothra, Ghidorah and many more. We represent the iconic King Kong Kaijus, a collection of 3333 pixelated NFTs aiming to take over the pixel world.<br/></p>
                </motion.div>
                </div>
                <div className={styles.faqWrapper2}>
                <div className={styles.titleAndArrow} onClick={() => open(1)}>
                    <p className={styles.paragraph}>Where is the Discord</p>
                    <motion.img variants={variant}
                        initial="initial"
                        animate={opened[1] ? "animate" : "initial"}
                        src="/media/arrow.png" alt="" className={styles.arrowFaq}/>
                </div>
                <motion.div variants={variants}
                    initial="initial"
                    animate={opened[1] ? "animate" : "initial"} className={styles.faqDescription}>
                    <p className={styles.paragraphSmall}>Discord is locked and is a place exclusive to strong community members. We regularly remove the inactive and when we do, we will provide access to new people.<br/></p>
                </motion.div>
                </div>
                <div className={styles.faqWrapper2}>
                <div className={styles.titleAndArrow} onClick={() => open(2)}>
                    <p className={styles.paragraph}>When Mint?</p>
                    <motion.img variants={variant}
                        initial="initial"
                        animate={opened[2] ? "animate" : "initial"}
                        src="/media/arrow.png" alt="" className={styles.arrowFaq}/>
                </div>
                <motion.div variants={variants}
                    initial="initial"
                    animate={opened[2] ? "animate" : "initial"} className={styles.faqDescription}>
                    <p className={styles.paragraphSmall}>Mint date is expected to be 17th of March </p>
                </motion.div>
                </div>
                <div className={styles.faqWrapper2}>
                <div className={styles.titleAndArrow} onClick={() => open(3)}>
                    <p className={styles.paragraph}>Mint details?</p>
                    <motion.img variants={variant}
                        initial="initial"
                        animate={opened[3] ? "animate" : "initial"}
                        src="/media/arrow.png" alt="" className={styles.arrowFaq}/>
                </div>
                <motion.div variants={variants}
                    initial="initial"
                    animate={opened[3] ? "animate" : "initial"} className={styles.faqDescription}>
                    <p className={styles.paragraphSmall}>0.065ETH for both presale and public mint 1 Mint per wallet for 90% of the whitelisted</p>
                </motion.div>
                </div>
                <div className={styles.faqWrapper2}>
                <div className={styles.titleAndArrow} onClick={() => open(4)}>
                    <p className={styles.paragraph}>How does the burn mechanism work?</p>
                    <motion.img variants={variant}
                        initial="initial"
                        animate={opened[4] ? "animate" : "initial"}
                        src="/media/arrow.png" alt="" className={styles.arrowFaq}/>
                </div>
                <motion.div variants={variants}
                    initial="initial"
                    animate={opened[4] ? "animate" : "initial"} className={styles.faqDescription}>
                    <p className={styles.paragraphSmall}>Your NFT will be burnt directly from your wallet with no refunds if listed below the threshold price. See Burn schedule for details</p>
                </motion.div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faq
