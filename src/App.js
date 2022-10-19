import React from 'react';

import { TagCloud } from 'react-tagcloud';

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
	return (
		SimpleCloud.apply()
	);
}

export default App;
