import { NextComponentType } from 'next'
import styles from '../../styles/Team.module.css'

const Team: NextComponentType = () => {

  return (
<div id="team" className={styles.team}>
   <div className={styles.containerMain}>
      <h2 className="h2">Meet the Team</h2>
      <div className="content-div _1"></div>
      <div className={styles.grid}>
         <div className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/YoriichiHD_1.gif" loading="lazy"/></div>
               <h3>King Kong</h3>
               <p>Founder</p>
            </div>
         </div>
         
         <div className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/kaidoHD.gif" loading="lazy"/></div>
               <h3>Bakayaro</h3>
               <p>Marketing</p>
            </div>
         </div>

         <div className={styles.member}>
            <img src='/media/frame.gif' className={styles.frame}/>
            <div className={styles.memberInfo}>
               <div className={styles.memberImageWrap}><img src="/media/draculaHD.gif" loading="lazy"/></div>
               <h3>James</h3>
               <p>lead Developer</p>
            </div>
         </div>

         <div className={styles.member}>
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