import { database } from '@/services/firebase/firebaseService'

export const dbGet = async (path: string) => {
	return database
		.ref(path)
		.get()
		.then(snapshot => {
			if (snapshot.exists()) {
				return snapshot.val()
			}
		})
		.catch(error => {
			return error
		})
}

export const dbWrite = async (path: string, data: unknown) => {
	await database.ref(path).set(data)
}

export const dbUpdate = async (path: string, data: object) => {
	await database.ref(path).update(data)
}