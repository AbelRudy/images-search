//import { selectConceptByName } from "./utils/selectionFunctions"
import { affiche, AllimageData } from "./utils/selectionFunctions";
import "./MyStyle.css";
import { useEffect } from 'react';



function App() {

	const divIds = ["hexagon-0", "hexagon-1", "hexagon-2", "hexagon-3", "hexagon-4", "hexagon-5", "hexagon-6"];
	const results = AllimageData("Adult");
	const listPoids = results.poids;
	const listImage = results.images;
	console.log(listPoids);

	const divList = listPoids.map((number, index) => {
		let h = number * 10 + 200;
		let w = number * 10 + 190;
		// let leftSize = 166.5 + number;
		// let topSize = 100 + number;
		var divStyle;
		// if (index == 1) {
		// 	divStyle = {
		// 		height: `${h}px`,
		// 		width: `${w}px`,
		// 		left: `calc(50% - ${leftSize}px)`,
		// 		top: `calc(50% - ${topSize}px)`
		// 	};
		// }
		// else if (index == 2) {
		// 	console.log(topSize);
		// 	divStyle = {
		// 		height: `${h}px`,
		// 		width: `${w}px`,
		// 		left: `calc(50% + ${leftSize + (number * 100) + 20}px)`,
		// 		top: `calc(50% - ${topSize}px)`
		// 	};
		// }
		// else if (index == 3) {
		// 	console.log(topSize);
		// 	divStyle = {
		// 		height: `${h}px`,
		// 		width: `${w}px`,
		// 		left: `calc(50% + ${number * 100}px)`,
		// 		top: `calc(50% - ${topSize * 2 + 30}px)`
		// 	};
		// }
		// else if (index == 4) {
		// 	console.log(topSize);
		// 	divStyle = {
		// 		height: `${h}px`,
		// 		width: `${w}px`,
		// 		left: `calc(50% + ${number * 100}px)`,
		// 		top: `calc(50% + ${topSize * 2 + 70}px)`
		// 	};
		// }
		// else {
		divStyle = {
			height: `${h}px`,
			width: `${w}px`
		};
		// }
		return <div key={index} id={divIds[index]} style={divStyle} />;
	});

	useEffect(() => { affiche(listImage); }, []);

	return (
		<div>
			<div>
				{divList}
			</div>
		</div>


	);
}

export default App;
