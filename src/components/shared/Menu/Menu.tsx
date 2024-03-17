import { FC } from 'react'

import styles from './Menu.module.scss'
// import useScreen from '@/store/screen'
import Link from 'next/link'
// import useProfile from '@/store/profile'
import { signOutUser } from '@/services/user/authService'

const Menu: FC = () => {
	// const { setShowingScreen } = useScreen()
	// const { profile, setProfile } = useProfile()


	return <section className={styles.menu}>
		<div className={styles.content}>
			<div className={styles.heading}>
				<button>
					<svg xmlns='http://www.w3.org/2000/svg' width='70' height='23' viewBox='0 0 70 23' fill='none'>
						<path fillRule='evenodd' clipRule='evenodd'
									d='M56.3115 3.21052L56.9739 0H53.1939L52.5424 3.21052H56.3115ZM10.6174 22.5434C15.1556 22.5434 19.6938 20.0708 21.2074 15.0619H21.2102L17.5178 13.9374C16.7021 16.2821 14.4001 18.5949 10.7105 18.5949C7.35198 18.5949 3.90318 16.2502 3.90318 11.4649C3.90318 6.67964 6.92499 3.8875 10.7981 3.8875C14.6711 3.8875 16.6063 6.20024 17.515 8.89649L21.2074 7.70816C19.7567 2.56843 15.4594 1.23084e-05 10.8911 1.23084e-05C5.56736 1.23084e-05 0 3.91946 0 11.401C0 18.8825 5.26354 22.5434 10.6174 22.5434ZM22.5267 22.2877H26.2163L30.8148 1.23084e-05H27.032L22.5267 22.2877ZM48.6862 22.2876L51.8942 6.42388H55.6495L52.3759 22.2876H48.6862ZM69.9997 5.93851L69.9991 5.93849L69.9997 5.93561V5.93851ZM69.9991 5.93849L69.2141 9.8231C65.1522 9.2914 62.0373 12.0922 62.0373 14.6113V22.2555H58.2847V6.42372H62.0373V12.7489H62.2179C63.0007 9.36708 65.2779 5.72962 69.9991 5.93849ZM32.0551 9.76257V6.45617H32.0578H46.2773V22.2879H42.9791V14.9343H42.8887C41.6789 19.0455 38.835 22.5465 35.326 22.5465C32.5724 22.5465 30.5141 20.3297 30.5141 17.7613C30.5141 13.6646 35.5395 12.206 39.3742 11.4361L42.9763 10.7126V9.76257H32.0551ZM36.3497 19.4958C38.7392 19.4958 41.5229 16.7415 42.9763 13.9464H42.9736V13.6268C42.7983 13.6591 42.5947 13.6948 42.3684 13.7345C39.7882 14.1865 34.2612 15.1548 34.2612 17.5695C34.2612 18.7259 35.17 19.4958 36.3497 19.4958Z'
									fill='#1B1B1A' />
					</svg>
				</button>

				<button>
					<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
						<rect x='0.5' y='0.5' width='34' height='34' rx='17' stroke='black' />
						<path d='M12 12L23 23' stroke='black' strokeLinecap='round' />
						<path d='M12 23L23 12' stroke='black' strokeLinecap='round' />
					</svg>
				</button>
			</div>

			<ul>
				<li><Link href='/profile'>профиль</Link></li>
				<li><Link href='/shop'>магазин</Link></li>
				<li><Link href='/services'>услуги</Link></li>
				<li><Link href='/корзина'>корзина</Link></li>
				<li><Link href='/салоны'>салоны</Link></li>
				<li><Link href='/news'>новости</Link></li>
				<li><Link href='/контакты'>контакты</Link></li>
			</ul>


			<div className={styles.buttons}>
				{/* {profile === null ? <>
					<button><Link href='/login'>Войти</Link></button>
					<button><Link href='/register'>Зарегистрироваться</Link></button>
				</> : <>
					<p>Вы вошли как <b>{profile?.name}</b></p>
					<button onClick={async () => {
						await signOutUser()
						setProfile(null)
					}}>Выйти
					</button>
				</>} */}
			</div>
		</div>
	</section>
}

export default Menu