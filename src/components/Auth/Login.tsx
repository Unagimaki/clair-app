// import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
// import { signInUser } from '@/services/user/authService'

// import styles from './Auth.module.scss'
// import ForgotPassword from '@/components/Auth/ForgotPassword'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import { goBack } from '@/utils/goBack'

// const Login: FC = () => {
// 	const router = useRouter()
// 	const [isForgotPassword, setIsForgotPassword] = useState(false)

// 	const [formValues, setFormValues] = useState<{ email: string; password: string }>({
// 		email: '',
// 		password: ''
// 	})

// 	const [errorMessage, setErrorMessage] = useState<string>('')

// 	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		setErrorMessage('')
// 		const { email, password } = formValues
// 		signInUser({ email, password }).then(async () => {
// 			await router.push('/')
// 		}).catch(error => {
// 			setErrorMessage(`Неправильный логин или пароль`)
// 		})
// 	}

// 	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target
// 		setFormValues(prevFormValues => ({
// 			...prevFormValues,
// 			[name]: value
// 		}))
// 	}

// 	return !isForgotPassword ? <section className={styles.section}>
// 		<button onClick={goBack}>
// 			<svg xmlns='http://www.w3.org/2000/svg' width='75' height='34' viewBox='0 0 75 34' fill='none'>
// 				<path d='M60 17.4474H13.3684M13.3684 17.4474L18.7965 11.6316M13.3684 17.4474L18.7965 23.2632' stroke='#1B1B1A'
// 							strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
// 				<rect x='-0.5' y='0.5' width='74' height='33' rx='16.5' transform='matrix(-1 0 0 1 74 0)' stroke='black' />
// 			</svg>
// 		</button>

// 		<main>
// 			<h1>Привет!</h1>
// 			<form onSubmit={event => handleFormSubmit(event)}>
// 				{errorMessage && <p className='text-center'>{errorMessage}</p>}

// 				<input
// 					type='email'
// 					name='email'
// 					placeholder='name@email.com'
// 					required
// 					value={formValues.email}
// 					onChange={handleChange}
// 				/>
// 				<input
// 					type='password'
// 					name='password'
// 					placeholder='пароль'
// 					required
// 					value={formValues.password}
// 					onChange={handleChange}
// 				/>
// 				<input type='submit' value='Войти' />
// 				<p><b><Link href='/forgot-password'>Забыли пароль?</Link></b></p>

// 				<small><Link href='/register'>Нет аккаунта? <b>Зарегистрироваться</b></Link></small>

// 			</form>
// 		</main>
// 	</section> : <ForgotPassword />

// }

// export default Login
