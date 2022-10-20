import Image from 'next/image';
import styles from '../styles/UsersItem.module.css'
import bubble from '../public/bubble.png';

const UsersItem = () => {
  return (
    <>
    <div className={styles.users_item}>
      <div className={styles.grid1}>
        <div className={styles.face}></div>
      </div>
      <div className={styles.grid2}>Mr. smith</div>
      <div className={styles.grid3}>offline</div>
      <div className={styles.grid4}>Toronto</div>
      <div className={styles.grid5}>35 year</div>
      <div className={styles.grid6}>
        <div className={styles.btn}>Chat</div>
      </div>
    </div>
    </>
  )
}
 
export default UsersItem;