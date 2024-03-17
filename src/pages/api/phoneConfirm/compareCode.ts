import { NextApiRequest, NextApiResponse } from 'next'
import * as admin from 'firebase-admin'

const serviceAccount = require('../credentials.json')

try {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: 'https://ecommerce-68035-default-rtdb.europe-west1.firebasedatabase.app'
	})
} catch (error) {
	admin.app()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { uid, userCode } = req.body

		const serverCode = await admin
			.database()
			.ref(`confirmCodes/${uid}`)
			.get()
			.then(snapshot => snapshot.val())

		console.log(userCode)
		console.log(serverCode)

		if (userCode == serverCode) {
			console.log(userCode, serverCode)
			res.status(200).send({ status: true })
			// TODO удаление кода из базы
		} else res.status(200).send({ status: false })
	}
}
