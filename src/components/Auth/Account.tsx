// import React, { ChangeEvent, FC, useEffect, useState } from 'react'
// import { signOutUser } from '@/services/user/authService'
// import { IProfile } from '@/types/profile.interface'
// import { updateProfile } from '@/services/user/profileService'
// import { auth } from '@/services/firebase/firebaseService'
// // import useProfile from '@/store/profile'

// const Account: FC = () => {
// 	const [formValues, setFormValues] = useState<IProfile & { password: string }>({
// 		email: '',
// 		name: '',
// 		secondName: '',
// 		phone: '',
// 		birthDate: '',
// 		imageUrl: '',
// 		password: ''
// 	})

// 	useEffect(() => {
// 		fetch(`api/phoneConfirm`).then(result => console.log(result))
// 	})

// 	// TODO redux-saga or firebase mb
// 	// const { profile, setProfile } = useProfile()
// 	const user = auth.currentUser

// 	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target
// 		setFormValues(prevFormValues => ({
// 			...prevFormValues,
// 			[name]: value
// 		}))
// 	}

// 	const handleSubmit = async (key: keyof IProfile) => {
// 		if (user?.uid) {
// 			await updateProfile(user.uid, formValues[key], key)
// 			profile &&
// 			setProfile({
// 				...profile,
// 				[key]: formValues[key]
// 			})
// 			setFormValues(prevFormValues => ({
// 				...prevFormValues,
// 				[key]: ''
// 			}))
// 		}
// 	}

// 	const handleUpdateEmail = () => {
// 		user?.updateEmail(formValues.email)
// 	}

// 	const handleUpdatePassword = () => {
// 		user?.updatePassword(formValues.password)
// 	}

// 	return (
// 		<>
// 			{user && (
// 				<div className='border-2 text-center mt-10'>
// 					<h2>ID: {user?.uid}</h2>
// 					<p>
// 						Email: {user?.email}
// 						<input type='email' name='email' value={formValues.email} onChange={handleChange} />
// 						<button onClick={() => handleUpdateEmail()}>OK</button>
// 						<button onClick={() => user.sendEmailVerification()}>Verify</button>
// 					</p>
// 					<p>
// 						Pass:
// 						<input
// 							type='password'
// 							name='password'
// 							placeholder='new password'
// 							value={formValues.password}
// 							onChange={handleChange}
// 						/>
// 						<button onClick={() => handleUpdatePassword()}>OK</button>
// 					</p>
// 					<p>
// 						Name: {profile?.name}
// 						<input type='text' name='name' value={formValues.name} onChange={handleChange} />
// 						<button onClick={() => handleSubmit('name')}>OK</button>
// 					</p>
// 					<p>
// 						Phone: {profile?.phone}
// 						<input type='tel' name='phone' value={formValues.phone} onChange={handleChange} />
// 						<button onClick={() => handleSubmit('phone')}>OK</button>
// 					</p>
// 					<p>
// 						SecondName: {profile?.secondName}
// 						<input type='text' name='secondName' value={formValues.secondName} onChange={handleChange} />
// 						<button onClick={() => handleSubmit('secondName')}>OK</button>
// 					</p>

// 					<p>
// 						BirthDate: {profile?.birthDate}
// 						<input type='text' name='birthDate' value={formValues.birthDate} onChange={handleChange} />
// 						<button onClick={() => handleSubmit('birthDate')}>OK</button>
// 					</p>
// 					<p>
// 						ImageUrl: {profile?.imageUrl}
// 						<input type='text' name='imageUrl' value={formValues.imageUrl} onChange={handleChange} />
// 						<button onClick={() => handleSubmit('imageUrl')}>OK</button>
// 					</p>
// 					<button onClick={() => signOutUser()}>Sign out</button>
// 				</div>
// 			)}
// 		</>
// 	)
// }

// export default Account
