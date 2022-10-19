//import { selectConceptByName } from "./utils/selectionFunctions"
import { affiche } from "./utils/selectionFunctions"
import { selectAllVideo } from "./utils/selectionFunctions"

function App() {
	var da = selectAllVideo("Entertainment");
	console.log(da);
	//affiche("TRECVID2010_3187", "shot3187_5.jpg")

	function click() {
		console.log("clik")
	}

	return (
		<div>
			<p>Hello world</p>
			<button onClick={affiche}>Click</button>

		</div>


	);
}

export default App;
