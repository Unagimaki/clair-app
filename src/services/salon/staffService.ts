interface getStaffData {
	salon_id?: string
	service_id?: string

}

export const getStaff = (data: getStaffData): Promise<never[]> => {
	const { salon_id, service_id } = data
	return new Promise((resolve) => {
		fetch(`/api/services/book_staff`, {
			method: 'POST',
			body: JSON.stringify({
				salon_id,
				service_id
			})
		}).then(async res => {
			resolve(await res.json())
		}).catch(e => {
			console.error(e)
			resolve([])
		})
	})
}