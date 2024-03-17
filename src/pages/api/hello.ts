// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const username = 'clair-krasota.ru'
	const password = 'TO3de2wo'
	const authString = `${username}:${password}`
	const encodedAuthString = btoa(authString)


	const headers = new Headers()
	headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`)

	const data = await fetch(`http://83.139.173.173:85/Salon/hs/api/v1/auth/3335604d-1bfa-11ea-9cad-e8d0fcfd9182`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
			apiKey: 'f06a0e79-1727-4a05-8cd0-9bece8530906'
		}
	}).then(async res => res.json())


	if (data) {
		res.status(200).send(data)
	} else {
		res.status(404).send({ error: 'Error' })
	}
}
