import styles from '../styles/UsersItem.module.css'

const UsersItem = () => {
  return (
    <>
    <div className={styles.users_item}>
      <div className={styles.grid}>
        <div className={styles.face}></div>
      </div>
      <div className={styles.grid}>Mr. smith</div>
      <div className={styles.grid}>offline</div>
      <div className={styles.grid}>Toronto</div>
      <div className={styles.grid}>35 year</div>
      <div className={styles.grid}>action</div>
    </div>
    </>
  )
}
 
export default UsersItem;