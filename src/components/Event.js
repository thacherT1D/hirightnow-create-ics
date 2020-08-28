import React from "react";

import ICalendarLink from "react-icalendar-link";
import moment from "moment";

import calendar from "../assets/images/icons8-calendar-48-purple.png";

const Event = (props) => {
	return (
		<div style={{ display: "flex" }}>
			<div style={{ justifyContent: "center", alignSelf: "center" }}>
				<ICalendarLink event={props.event}>
					<img src={calendar} alt="calendar" style={{ height: 24 }} />
				</ICalendarLink>
			</div>
			<div
				style={{
					justifyContent: "center",
					alignSelf: "center",
					paddingLeft: 5,
				}}
			>
				{moment(props.event.startTime).local().format("dddd, MMMM Do [@] hh:mm a")}
			</div>
		</div>
	);
};

export default Event;
