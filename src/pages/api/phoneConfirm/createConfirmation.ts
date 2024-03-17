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

const generateRandomNumber = (): number => Math.floor(Math.random() * 900000) + 100000

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { uid, phoneNumber } = req.body
		await admin
			.database()
			.ref(`confirmCodes/${uid}`)
			.set(generateRandomNumber())
			.then(() => {
				// TODO отправка сообщения на номер phoneNumber
				res.status(200).send({ status: true })
			})
			.catch(e => res.status(200).send({ status: false }))
	}
}
