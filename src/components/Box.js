import React from "react";

const Box = (props) => {
	// const [on, setOn] = React.useState(props.on);

	const styles = {
		backgroundColor: props.on ? "#000000" : "#ffffff",
	};

	return <div className="box" style={styles} onClick={props.onClick}></div>;
};

export default Box;
