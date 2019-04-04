import axios from "axios";

export default axios.create({

	baseURL: "http://Andy_Taylor.restful.training/api/ping-pong/games/",
	params: {
		key: "cf07196f7da2ccc819094ba07936b56c1bbb7fb5",
	},
	headers: {
		Accept: "application/json",
	},
	
});