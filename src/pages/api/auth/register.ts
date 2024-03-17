import { NextApiRequest, NextApiResponse } from 'next'
import { apiKey, password, PROD_URL, username } from '@/pages/api/config'
import { salon1 } from '@/data/salon_ids'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { phoneNumber, code } = (req.body)


	const URL = `${PROD_URL}/auth/${salon1}`

	const data = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
			apiKey
		},
		body: JSON.stringify({
			login: phoneNumber,
			auth_type: 'sms',
			confirmation_code: code ? code : undefined
		})
	}).then(async res => await res.json())

	console.log(data)

	if (data.Parameters) {
		res.status(200).send(data.Parameters)
	} else {
		res.status(404).send({ error: data.Errors.message })
	}
}

