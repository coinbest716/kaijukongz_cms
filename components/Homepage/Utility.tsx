import { NextComponentType } from 'next'
import styles from '../../styles/Utility.module.css'

const Utility: NextComponentType = () => {

  return (
<section className={styles.utility} id="utility">
   <div className={styles.utilityContainer}>
      <div className={styles.environment}>
       <h2>Utility</h2>
       </div>
      <div className={styles.cardGroup}>
         <div className={styles.card}>
            <div className={styles.cardImg}><img className="img-fluid" src="/media/waterfallskull.gif" alt="Imagination Unleashed"/></div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>3333 Unique Characters</h3>
                {/* <p>Unleashing of the neighborhood begins here, Each Hall Pass allows 1 MINT.</p> */}
            </div>
         </div>
         <div className={styles.card}>
            <div className={styles.cardImg}><img className="img-fluid" src="/media/spearL.gif" alt="Card image cap" /></div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>$HUMAN TOKEN</h3>
                {/* <p>See the ever expanding world of Clementine. Creatures from all realms of existence vie for dominance of our world -- take a closer look at who they are.</p> */}
            </div>
         </div>
         <div className={styles.card}>
            <div className={styles.cardImg}><img className="img-fluid" src="/media/incubator.gif" alt="Card image cap" /></div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Pre-Land & Junior Kongs</h3>
                {/* <p>We are excited to share with our community where we plan on taking Clementine's Nightmare. Get ready for the excitement to come and the surprises we have in store.</p> */}
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default Utility