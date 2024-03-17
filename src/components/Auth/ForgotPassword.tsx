// import React, { FC, FormEvent, useState } from 'react'
// import { auth } from '@/services/firebase/firebaseService'

// import styles from './Auth.module.scss'
// import useScreen from '@/store/screen'
// import { goBack } from '@/utils/goBack'

// const ForgotPassword: FC = () => {
// 	const { setShowingScreen } = useScreen()
// 	const [email, setEmail] = useState('')
// 	const [message, setMessage] = useState('')
// 	const [error, setError] = useState('')

// 	const handleSubmit = (e: FormEvent) => {
// 		e.preventDefault()
// 		auth
// 			.sendPasswordResetEmail(email)
// 			.then(() => {
// 				setMessage(`Письмо с восстановлением было отправлено на ваш email`)
// 			})
// 			.catch(e => setError(e.message))
// 	}

// 	return (
// 		<section className={styles.section}>
// 			<button onClick={goBack}>
// 				<svg xmlns='http://www.w3.org/2000/svg' width='75' height='34' viewBox='0 0 75 34' fill='none'>
// 					<path d='M60 17.4474H13.3684M13.3684 17.4474L18.7965 11.6316M13.3684 17.4474L18.7965 23.2632' stroke='#1B1B1A'
// 								strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
// 					<rect x='-0.5' y='0.5' width='74' height='33' rx='16.5' transform='matrix(-1 0 0 1 74 0)' stroke='black' />
// 				</svg>
// 			</button>
// 			<main>
// 				<h1>Забыли пароль</h1>
// 				{!message ? (
// 					<form onSubmit={e => handleSubmit(e)}>
// 						<p>Введите email на который нужно отправить ссылку на восстановление</p>
// 						<input type='email' required value={email} onChange={e => setEmail(e.target.value)} />
// 						<input type='submit' />
// 						{error && (
// 							<div>
// 								<span className='text-red-500'>{error}</span>
// 							</div>
// 						)}
// 					</form>
// 				) : (
// 					<form onSubmit={(event) => {
// 						event.preventDefault()
// 						setShowingScreen(null)
// 					}}>
// 						<p>{message}</p>
// 						<input type='submit' value='ok' />
// 					</form>
// 				)}
// 			</main>
// 		</section>
// 	)
// }

// export default ForgotPassword
