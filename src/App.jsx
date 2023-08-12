import React from "react";
import Card from "./Cards";

const App = () => {
	return (
		<>
			<div className="mx-5 mt-5">
				<Card greeting={"Hello there"} name={"Chris"} />
				<Card greeting={"Yo"} name={"Kyle"} />
				<Card greeting={"What's up"} name={"Valerie"} />
			</div>
		</>
	);
};

export default App;
