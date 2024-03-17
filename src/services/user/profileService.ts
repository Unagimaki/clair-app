import { dbGet, dbUpdate, dbWrite } from '@/services/firebase/databaseService'
import { IProfile } from '@/types/profile.interface'

export const createProfile = async ({ uid, phone, name, secondName }: IProfile & { uid: string }) => {
	await dbWrite(`profiles/${uid}`, {
		phone,
		name,
		secondName
	})
}

export const getProfile = async (uid: string) => {
	if (uid) return await dbGet(`profiles/${uid}`)
	return null
}

export const updateProfile = async (uid: string, newProfile: object) => {
	await dbUpdate(`profiles/${uid}`, newProfile)
}
