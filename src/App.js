//import { selectConceptByName } from "./utils/selectionFunctions"
import { affiche } from "./utils/selectionFunctions"
import { selectAllVideo } from "./utils/selectionFunctions"
import { GetConcepts } from "./utils/selectionFunctions";
import { Allimage } from "./utils/selectionFunctions";
import "./MyStyle.css";
import { useRef } from "react";



function App() {
	// // Stockez les données dans une variable
	// const jsonData = data;
	// // var promise = selectAllVideo("Entertainment");
	// // promise.then(data => data);
	// //donne tout les concepts
	// const [data, setData] = useState([])
	// //truc qui parse le promise en array
	// useEffect(async () => {
	// 	let da = await selectAllVideo("Entertainment");
	// 	setData(da);
	// 	//affiche("TRECVID2010_3187", "shot3187_5.jpg")

	// }, [])

	// console.log(data)

	// // tout les contextes
	// var a = require("./assets/Context.json");
	// var e = a.contextes.Contexte;
	// console.log(e);

	// //tout les concept
	// var aa = require("./assets/Concepts.json");
	// var ee = aa.concepts.concept;
	// console.log(ee);

	// var a = GetConcepts("Actor");
	// console.log(a);
	// var e = a.video;
	// console.log(e);
	// var v = e[0]["@_Weight"];
	// console.log(parseFloat(v) >= 0.5);

	const divRef = useRef(null);


	function ModifTaille(list) {
		if (divRef.current) {
			list.forEach((item, index) => {
				//console.log(item);
				console.log(divRef.current.style.heigth);
				let heigth = item * 1000 + 200;
				//console.log(heigth);
				let width = item * 1000 + 190;
				divRef.current.style.heigth = heigth + "px";
				divRef.current.style.width = width + "px";

			})
		}
	}

	return (
		<div>
			<div>
				<p>Test de la function </p>
				<button onClick={() => ModifTaille(Allimage("Actor"))}>TestFunct</button>
				<button onClick={() => ModifTaille([0.074])}>ModifTaille</button>
			</div>
			<div>
				<h1 id="h1">TTTT</h1>

				<div id="hexagon-0" ref={divRef}>

				</div>
				<div id="hexagon-1">
				</div>
				<div id="hexagon-2">
				</div>
				<div id="hexagon-3"></div>
				<div id="hexagon-4"></div>
				<div id="hexagon-5"></div>
				<div id="hexagon-6"></div>

			</div>
		</div>


	);
}

export default App;
