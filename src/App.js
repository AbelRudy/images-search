import React from 'react';

import { TagCloud } from 'react-tagcloud';
//import { selectConceptByName } from "./utils/selectionFunctions"
import { affiche } from "./utils/selectionFunctions"
import { selectAllVideo } from "./utils/selectionFunctions"

const data = [
    { value: 'Bastios Beez', count: 38 },
    { value: 'Ghost', count: 30 },
    { value: 'Caramel', count: 28 },
    { value: 'Gremier 95', count: 25 },
    { value: 'Sophia', count: 33 },
    { value: 'Amine', count: 18 },
    { value: 'Eliza', count: 20 },
  ]

  const SimpleCloud = ()=>(
    <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        onClick={tag => alert(`'${tag.value}' sélectionné!`)}
        />
  )

function App() {

	var da = selectAllVideo("Entertainment");
	console.log(da);
	//affiche("TRECVID2010_3187", "shot3187_5.jpg")



	return (

		SimpleCloud.apply()
		<div>
			<p>Hello world</p>
			<button onClick={() => affiche("TRECVID2010_3187", "shot3187_5.jpg")}>Click</button>

		</div>

	);
}

export default App;
