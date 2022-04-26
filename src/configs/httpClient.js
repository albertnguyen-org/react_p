import axios from "axios";


class HttpClient {

	constructor() {
		this.initClient();
	}

	initClient() {
		axios.defaults.baseURL = "";
		// axios.defaults.headers
	}


	async get({ path, params, headers }) {
		await axios.get(path, {
			method: "GET",
			headers: headers,
			params: params || {}
		}).then((res) => {
			await this._responseHandler(res);
		}).catch((error) => {
			await this._errorHandler(error);
		});
	}


	async _errorHandler(error) {
		console.error(error);
		// TODO: do something to handle error here ..... 
	}

	async _responseHandler(response) {
		return response;
	}

	async _intercreptorHandler() { }
}


export default HttpClient;