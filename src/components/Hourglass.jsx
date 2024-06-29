import Navigation from './Navigation';

import '../styles/App.css';
// import React from "react";

// function make2DArray(cols, rows) {
//   let arr = new Array(cols);
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = new Array(rows)
//   }
//   return arr
// }

// let grid;
// let w = 10;
// let cols, rows;

// function setUp() {
//   crea
// }

const Hourglass = () => {
	return (
		<div>
			<div className='navbar'>
				<h1>Hourglass</h1>
				<Navigation />
			</div>
		</div>
	);
};

export default Hourglass;
