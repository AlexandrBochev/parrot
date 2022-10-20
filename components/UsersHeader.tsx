import styles from '../styles/UsersHeader.module.css'

const UsersHeader = () => {
  return (
    <>
    <h2>our users</h2>
    <div className={styles.users_header}>
      <div >photo</div>
      <div>name</div>
      <div>status</div>
      <div>registration</div>
      <div>age</div>
      <div>action</div>
    </div>
    </>
  )
}
 
export default UsersHeader;