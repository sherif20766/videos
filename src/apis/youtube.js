import axios from "axios";

const KEY = "AIzaSyDoMO6nn3H10HikyytRzctchdHmlzEhfzY";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});