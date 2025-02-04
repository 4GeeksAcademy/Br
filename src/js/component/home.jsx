import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<div className="row">
				<div className="col fs-1 bg-dark border" style={{height:"100px",color:"white"}}><i className="fa fa-clock"></i></div>
				<div className="col fs-1 bg-dark border" style={{height:"100px",color:"white"}}>{props.millar}</div>
				<div className="col fs-1 bg-dark border" style={{height:"100px",color:"white"}}>{props.centenas}</div>
				<div className="col fs-1 bg-dark border" style={{height:"100px",color:"white"}}>{props.decimal}</div>
				<div className="col fs-1 bg-dark border" style={{height:"100px",color:"white"}}>{props.unidad}</div>
				
			</div>
		</div>
	);
};

export default Home;
