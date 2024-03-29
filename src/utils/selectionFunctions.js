import parseXML from "./ParseXML";

export  async function selectAllContexts() {
	return await parseXML("contexte").then((data) => data.contextes.Contexte);
}

export async function selectContextByName(contextName) {
	return await parseXML("contexte")
		.then((data) => data.contextes.Contexte)
		.then((data) => data.filter((d) => d.Name === contextName))
		.then((data) => data[0]);

}

export async function selectConceptByName(conceptName) {
	return await parseXML("concept")
		.then((data) => data.concepts.concept)
		.then((data) => data.filter((d) => d.Name === conceptName))
		.then((data) => data[0]);
}

export async function selectvideo(conceptName, videoname) {
	return await selectConceptByName(conceptName)
		.then((data) => data.video)
		.then((data) => data.filter((d) => d.Name === videoname))
		.then((data) => data[0]);
}

export async function selectAllConceptsFromContext(contextName) {
	let concepts = [];
	return await selectContextByName(contextName)
		.then((data) => data.concept)
		.then((data) => {
			if (Array.isArray(data))
				return data.map((d) =>
					selectConceptByName(d.ConceptName).then((data) => concepts.push(data))
				);
			else
				return selectConceptByName(data.ConceptName).then((data) =>
					concepts.push(data)
				);
		})
		.then((data) => concepts);
}

export async function selectAllVideo(conceptName) {
	let image = [];
	return await selectConceptByName(conceptName)
		.then((data) => data.video)
		.then((data) => {
			if (Array.isArray(data))
				return data.map((d) =>
					selectvideo(conceptName, d.Name).then((data) => image.push(data))
				);
			else
				return selectvideo(conceptName, data.Name).then((data) =>
					image.push(data)
				);
		})
		.then((data) => image);

}


export function affiche(Name, shot) {
	var img = document.createElement('img');
	img.src = require("../assets/keyframes/" + Name + "/" + shot);
	document.body.appendChild(img);

}



