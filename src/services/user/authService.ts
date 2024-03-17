import { auth, PERSISTENCE_LOCAL } from '@/services/firebase/firebaseService'

export const createUser = ({ email, password }: { email: string, password: string }) => {
	return new Promise((resolve, reject) => {
		auth
			.setPersistence(PERSISTENCE_LOCAL)
			.then(() => {
				return auth.createUserWithEmailAndPassword(email, password)
			})
			.then(async userCredential => {
				resolve(userCredential.user)
			})
			.catch(error => {
				// const errorCode = error.code
				// const errorMessage = error.message
				reject(error)
			})
	})
}


export const signInUser = (data: { email: string; password: string }) => {
	const { email, password } = data

	return new Promise((resolve, reject) => {
		auth
			.setPersistence(PERSISTENCE_LOCAL)
			.then(() => {
				return auth.signInWithEmailAndPassword(email, password)
			})
			.then(userCredential => {
				const user = userCredential.user
				resolve(user)
			})
			.catch(error => {
				// const errorCode = error.code
				// const errorMessage = error.message
				reject(error)
			})
	})
}

export const signOutUser = () => {
	return auth.signOut()
}

export const sendPasswordRe = {}
