// import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
// import { IProfile } from '@/types/profile.interface'
// import { createUser } from '@/services/user/authService'
// import { auth } from '@/services/firebase/firebaseService'
// import { dbWrite } from '@/services/firebase/databaseService'

// import styles from './Auth.module.scss'
// import { updateProfile } from '@/services/user/profileService'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import { goBack } from '@/utils/goBack'

// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

// const Register: FC = () => {
// 	const router = useRouter()

// 	const [showingForm, setShowingForm] = useState<'main' | 'info' | 'phone' | 'confirmation'>('main')
// 	const [formValues, setFormValues] = useState<IProfile & { password: string }>({
// 		email: '',
// 		password: '',
// 		phone: '',
// 		name: '',
// 		secondName: ''
// 	})

// 	const [confirmationCode, setConfirmationCode] = useState<string>('')
// 	const [errorMessage, setErrorMessage] = useState<string>('')


// 	const handeCreateUser = (event: FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		const { email, password } = formValues
// 		createUser({ email, password })
// 			.then(() => setShowingForm('phone'))
// 			.catch(error => {
// 				setErrorMessage(error.message)
// 			})
// 	}

// 	const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		const { email, phone, name, secondName, birthDate } = formValues
// 		const uid = auth.currentUser?.uid

// 		console.log(uid)

// 		if (uid) {
// 			await updateProfile(uid, {
// 				email,
// 				phone,
// 				name,
// 				secondName,
// 				birthDate
// 			})
// 		}
// 		await router.push('/')
// 	}

// 	const handlePhoneChange = (value: string) => {
// 		// const cleanedNumber = value.replace(/[\s+]/g, '').slice(2)

// 		console.log(value)

// 		setFormValues(prevFormValues => ({
// 			...prevFormValues,
// 			phone: value
// 		}))
// 	}

// 	const handlePhoneSubmit = async (event: FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		await fetch(`api/auth/register`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				phoneNumber: formValues.phone
// 			})
// 		}).then(response => setShowingForm('confirmation'))
// 	}

// 	const handleConfirmationSubmit = async (event: FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		setErrorMessage('')

// 		const response = await fetch(`api/auth/register`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				phoneNumber: formValues.phone,
// 				code: confirmationCode
// 			})
// 		}).then(response => response.json())

// 		console.log(response)

// 		if (response?.UserToken) {
// 			const userID = auth.currentUser?.uid
// 			await dbWrite(`profiles/${userID}/phone`, formValues.phone)
// 			await dbWrite(`profiles/${userID}/userToken`, response.UserToken)
// 			setShowingForm('info')
// 		} else {
// 			alert(`bad!`)
// 		}
// 	}

// 	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target
// 		setFormValues(prevFormValues => ({
// 			...prevFormValues,
// 			[name]: value
// 		}))
// 	}

// 	return (
// 		<section className={styles.section}>
// 			<PhoneInput
// 				disableDropdown={true}
// 				country={'ru'}
// 				value={formValues.phone}
// 				onChange={handlePhoneChange}
// 			/>
// 			<button onClick={goBack}>
// 				<svg xmlns='http://www.w3.org/2000/svg' width='75' height='34' viewBox='0 0 75 34' fill='none'>
// 					<path d='M60 17.4474H13.3684M13.3684 17.4474L18.7965 11.6316M13.3684 17.4474L18.7965 23.2632' stroke='#1B1B1A'
// 								strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
// 					<rect x='-0.5' y='0.5' width='74' height='33' rx='16.5' transform='matrix(-1 0 0 1 74 0)' stroke='black' />
// 				</svg>
// 			</button>
// 			{showingForm === 'main' && <main>
// 				<h1>Добро пожаловать!</h1>
// 				<form className='flex flex-col gap-1 w-60' onSubmit={handeCreateUser}>
// 					<input
// 						type='email'
// 						name='email'
// 						placeholder='email'
// 						autoComplete='username'

// 						required
// 						value={formValues.email}
// 						onChange={handleChange}
// 					/>
// 					<input
// 						type='password'
// 						name='password'
// 						placeholder='password'
// 						autoComplete='new-password'
// 						required
// 						value={formValues.password}
// 						onChange={handleChange}
// 					/>
// 					<input type='submit' className='bg-black' value='Зарегистироваться' />

// 					<small><Link href='/login'>Уже есть аккаунт? <b>Войти</b></Link></small>
// 				</form>
// 			</main>}


// 			{showingForm === 'info' &&
// 				<main>
// 					<h1>Данные аккаунта</h1>
// 					<form onSubmit={handleUpdateUser}>
// 						<input type='text' name='name' placeholder='Имя' required value={formValues.name}
// 									 onChange={handleChange} />
// 						<input
// 							type='text'
// 							name='secondName'
// 							placeholder='Фамилия'
// 							required
// 							value={formValues.secondName}
// 							onChange={handleChange}
// 						/>
// 						{/* todo отчество и прочие поля */}
// 						{errorMessage && <b className='text-red-500'>{errorMessage}</b>}
// 						<input type='submit' />
// 					</form>
// 				</main>
// 			}

// 			{showingForm === 'phone' &&
// 				<main>
// 					<h1>Подтверждение номера</h1>
// 					<form onSubmit={handlePhoneSubmit}>
// 						<p>
// 							Введите телефон
// 						</p>
// 						{/*<input*/}
// 						{/*	type='tel'*/}
// 						{/*	name='phone'*/}
// 						{/*	placeholder='телефон'*/}
// 						{/*	required*/}
// 						{/*	value={formValues.phone}*/}
// 						{/*	onChange={handleChange}*/}
// 						{/*/>*/}

// 						<PhoneInput
// 							disableDropdown={true}
// 							country={'ru'}
// 							value={formValues.phone}
// 							onChange={handlePhoneChange}
// 						/>


// 						<input type='submit' className='bg-black' />

// 					</form>
// 				</main>
// 			}

// 			{
// 				showingForm === 'confirmation' &&
// 				<main>
// 					<h1>Подтверждение номера</h1>
// 					<form onSubmit={handleConfirmationSubmit}>
// 						<p>
// 							Введите код, который мы отправили на номер <b>+{formValues.phone}</b>
// 						</p>
// 						<input
// 							type='text'
// 							placeholder='Введите код подтвержения номера'
// 							value={confirmationCode}
// 							required
// 							onChange={e => setConfirmationCode(e.target.value)}
// 						/>
// 						<input type='submit' className='bg-black' />
// 					</form>
// 				</main>
// 			}
// 		</section>
// 	)
// }

// export default Register
