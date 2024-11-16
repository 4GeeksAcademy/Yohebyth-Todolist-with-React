import React, { useState } from "react";

const Home = () => {	

	const [need, setNeed] = useState("");
	const handleOnChange = (e) => {	
		if(e.key === "Enter"){
			if(e.target.value.trim() !== ""){
				setNeed(e.target.value.trim());			
			} else alert("The field cannot be empty");
												
		}		
	}	

	return (
		<div className="text-center">
			<h1>Prueba</h1>		
			<input type="text" placeholder="What needs to be done? " onKeyDown={ handleOnChange} />	
			<ul>{need}</ul>
		</div>
	);
};

export default Home;
