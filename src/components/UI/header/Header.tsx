import { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header: FC = () => {

	return(
		<header className={styles.header}>
			<section className={styles.container}>

				<div className={styles.navigation}>
					<button className={styles.logo}><Link href="/"/></button>
					<li className={styles.link}><Link href="/services">Услуги</Link></li>
					<li className={styles.link}><Link href="/shop">Магазин</Link></li>
					<li className={styles.link}><Link href="/news">Новости</Link></li>
					<li className={styles.link}><Link href="/contacts">Контакты</Link></li>
				</div>

				<div className={styles.buttons}>
					<button className={styles.button_date}>Запись</button>

					<button className={styles.cart_icon}/>
					<button className={styles.search_icon}/>
					<button className={styles.date_icon}/>

					<button className={styles.button_profile}>
						<div className={styles.button_inner}>
							<div className={styles.text}>Профиль</div>
							<img className={styles.profile_image} src='./images/header/profile_icon-arrow.svg' alt="arrow" />
							<div className={styles.span_container}>
								<span className={styles.span}></span>
								<span className={styles.span}></span>
								<span className={styles.span}></span>
							</div>
						</div>
					</button>
				</div>

			</section>
		</header>
	)
}

export default Header