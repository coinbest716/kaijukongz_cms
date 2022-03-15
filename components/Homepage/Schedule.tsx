import { NextComponentType } from 'next'
import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import styles from '../../styles/Schedule.module.css'
gsap.registerPlugin(ScrollTrigger)

const Schedule: NextComponentType = () => {
    useEffect(() => {
        gsap.fromTo("#title", 
        {y: 50, opacity: 0},
        { scrollTrigger: {trigger: '#title', start: "top center",},
        y: 0, opacity: 1, duration: 1, delay: 0.1}
        );
        gsap.fromTo("#table", 
        {y: 50, opacity: 0},
        { scrollTrigger: {trigger: '#table', start: "top center",},
        y: 0, opacity: 1, duration: 1, delay: 0.2}
        );
    }, [])
  return (
<div className={styles.schedule}>
    <div className={styles.scheduleContainer}>
        <h2 id='title'>Burning Schedule</h2>

        <table id='table' className={styles.table}>
            <thead>
            <tr>
                <td>March 17 23:00 UTC</td>
                <td>Listings &lt;0.065 will be burnt </td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>March 18 23:00 UTC</td>
                <td>Listings &lt;0.08 will be burnt</td>
            </tr>
            <tr>
                <td>March 19 23:00 UTC</td>
                <td>Listings &lt;0.16 will be burnt</td>
            </tr>
            <tr>
                <td>March 20 23:00 UTC</td>
                <td>Listings &lt;0.32 will be burnt</td>
            </tr>
            <tr>
                <td>March 21 23:00 UTC</td>
                <td>Listings &lt;0.64 will be burnt</td>
            </tr>
            <tr>
                <td>March 22 23:00 UTC</td>
                <td>Burn mechanism is disabled</td>
            </tr>
            </tbody>
        </table>
  </div>
</div>

  )
}

export default Schedule
