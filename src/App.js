//import { selectConceptByName } from "./utils/selectionFunctions"
import { affiche } from "./utils/selectionFunctions"
import { selectAllVideo } from "./utils/selectionFunctions"
import { GetConcepts } from "./utils/selectionFunctions";
import { Allimage } from "./utils/selectionFunctions";

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

	var a = GetConcepts("Actor");
	console.log(a);
	var e = a.video;
	console.log(e);
	var v = e[0]["@_Weight"];
	console.log(parseFloat(v) >= 0.5);

	return (
		<div>
			<p>Hello world</p>
			<button onClick={() => affiche("TRECVID2010_3187", "shot3187_5")}>Click</button>

			<button onClick={() => Allimage("Actor")}>TestFunct</button>

		</div>


	);
}

export default App;
