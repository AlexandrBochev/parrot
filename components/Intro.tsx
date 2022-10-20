import styles from '../styles/Intro.module.css'

const videoLink = 'https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s'

const Intro = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.article}>
        <h1>embed RK1K2bCg4J8</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa deserunt dignissimos enim ?</p>
        <a href={videoLink}>{videoLink}</a>
      </div>
      <div className={styles.video}>
        <div className={styles.video__item}></div>
        <iframe className={styles.video__element} src="https://www.youtube.com/embed/RK1K2bCg4J8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
    </>
  )
}
 
export default Intro;