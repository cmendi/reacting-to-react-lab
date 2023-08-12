import React from "react";

const Card = ({ greeting, name }) => {
	return (
		<>
			<div className="card mt-4 shadow border border-primary">
				<div className="card-body">
					<h1>
						{greeting}, {name}!
					</h1>
				</div>
			</div>
		</>
	);
};

export default Card;
