import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.info}>
					<div className={styles.social}>
						<div className={styles.number}>8 473 202-97-77</div>
						<button className={styles.icon_link}>
							<img src="./images/footer/inst.svg" alt="inst" />
						</button>
						<button className={styles.icon_link}>
							<img src="./images/footer/facebook.svg" alt="facebook" />
						</button>
					</div>
					<div className={styles.text}>
						Все права защищены, 2023 <br />
						Мед. лицензия №ЛО-36-01-002467 <br />
						<a href="#">Кликабельная ссылка для различной документации</a>
					</div>
				</div>
				<div className={styles.logo_container}>
					<div className={styles.logo}>
						<img src="./images/footer/logo.png" alt="logo" />
					</div>
					<button className={styles.button}>
						Скачать <br /> приложение
						<img src="./images/footer/eye.png" alt="eye" />
					</button>
				</div>
			</div>
		</footer>
	)
}

export default Footer