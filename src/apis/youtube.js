import axios from "axios";

const KEY = "AIzaSyD1AKGwE4Ww7LSUeS_d-pIfy9BuKQuJBCg";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
