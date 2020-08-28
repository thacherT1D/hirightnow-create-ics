import React, { useState } from "react";

import Event from "./components/Event";

const App = () => {
	const [event, setEvent] = useState({
		title: "Hi Right Now East Coast",
		description:
			"Discover ambitious and growth-minded people via a series of quick 1 on 1 video conversations.",
		startTime: "2020-09-02T17:00:00-04:00",
		endTime: "2020-09-02T18:00:00-04:00",
		location: "https://launch.hirightnow.co/events/233",
	});

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				paddingTop: 100,
			}}
		>
			<Event event={event} />
		</div>
	);
};

export default App;
