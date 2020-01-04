import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onTermSubmit = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term //where "q" is query parameters
			}
		});

		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	const onVideoSelect = video => {
		setSelectedVideo(video);
	};

	useEffect(() => {
		onTermSubmit("piano cat");
	}, []);

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>

					<div className="five wide column">
						<VideoList
							videos={videos}
							onVideoSelect={onVideoSelect}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
