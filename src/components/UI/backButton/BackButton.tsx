import styles from './BackButton.module.scss'

const BackButton = () => {
    return(
        <div className={styles.container}>
            <img src='./images/UI/backButton/arrow.png' className={styles.img}/>
            <div className={styles.text}>Назад</div>
        </div>
    )
}

export default BackButton