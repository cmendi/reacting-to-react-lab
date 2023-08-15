import React from "react";
import Card from "./components/Greeter";
import { useState, useEffect } from "react";

const App = () => {
	const [userName, setUserName] = useState("");
	let [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log("effect");
		setTimeout(() => {
			// Why is this logging twice right away then 1 more time 2 seconds later?
			console.log("timeout");
			setLoaded(true);
		}, 3000);
	}, [loaded]);

	if (!loaded) {
		return (
			<>
				<div className="mt-2 mx-4 card-header d-flex">
					<h1> Website Loading...</h1>
					<div className="mx-4 row align-items-center">
						<div className="spinner-border text-primary"></div>
					</div>
				</div>

				<button className="btn btn-primary mt-2 mx-4" onClick={() => setLoaded(true)}>
					Click Me
				</button>
			</>
		);
	}

	return (
		<>
			<div className="mx-5 mt-5">
				<Card phrase={"Hello there"} name={"Chris"} />
				<Card phrase={"Yo"} name={"Kyle"} />
				<Card phrase={"What's up"} name={"Valerie"} />
			</div>
			{/* can i not use type='text' so you can type in the input field? */}
			<input className="form-control form-control-lg mt-4 w-25 mx-5 shadow border border border-black" value={userName} onChange={(e) => setUserName(e.target.value)} />
			<p className="mx-5 mt-2">Logging in with username: {userName}</p>
		</>
	);
};

export default App;
