import styles from './Download.module.scss'

const Download = () => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.info}>
                    <div className={styles.title}>скачать приложение</div>
                    <div className={styles.subtitle}>чтобы открыть больше возможностей</div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.image}>
                        <img src="./images/footer/eye.png" alt="eye"/>
                    </div>
                    <button className={styles.button}>
                        <div>Скачать приложение</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Download