interface getServicesData {
	salon_id?: string
	staff_id?: string

}

export const getServices = (data: getServicesData): Promise<never[]> => {
	const { salon_id, staff_id } = data
	return new Promise((resolve) => {
		fetch(`/api/services/book_services`, {
			method: 'POST',
			body: JSON.stringify({
				salon_id,
				staff_id
			})
		}).then(async res => {
			resolve(await res.json())
		}).catch(e => {
			console.error(e)
			resolve([])
		})
	})
}