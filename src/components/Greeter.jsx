import React from "react";

const Greeter = ({ phrase, name }) => {
	return (
		<>
			<div className="card mt-4 shadow border border-primary">
				<div className="card-body">
					<h1>
						{phrase}, {name}!
					</h1>
				</div>
			</div>
		</>
	);
};

export default Greeter;
