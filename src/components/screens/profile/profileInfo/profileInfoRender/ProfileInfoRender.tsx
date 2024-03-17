import styles from './ProfileInfoRender.module.scss'

const ProfileInfoRender = () => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.profile_container}>
                    <div className={styles.profile_inner}>
                        <div className={styles.image}>
                            <img src="./images/profile/profile.png" alt="image" />
                        </div>
                        <div className={styles.name}>Марина</div>
                        <div className={styles.description}>Любимый гость</div>
                        <button className={styles.change_button}>Изменить профиль</button>
                        <button className={styles.out_button}>Выйти</button>
                    </div>
                </div>

                <div className={styles.balance_container}>
                    <div className={styles.balance_inner}>
                        <div className={styles.balance}>3000</div>
                        <div className={styles.balance_text}>Баланс</div>
                        <button className={styles.balance_button}>Пополнить баланс</button>
                        <button className={styles.sertificate_button}>Купить сертификат</button>
                        <div className={styles.code_container}>
                            <div className={styles.code_image}>
                                <img src='./images/profile/qr.png' alt='qr-code'/>
                            </div>
                            <div className={styles.code_text}>Пригласи друга <br/> и получи бонус</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfoRender