import axios from 'axios'
const baseUrl = '/payment'

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const __1__ = async (___) => {
	const config = {
		headers: { Authorization: token },
	}

	const response = await axios.post(baseUrl, ___, config)
	return response.data
}

const __2__ = async (___, ___) => {
	const config = {
		headers: { Authorization: token },
	}

	const response = await axios.put(`${baseUrl}/${___}`, ___, config)
	return response.data
}

export default { setToken, __1__, __2__ }