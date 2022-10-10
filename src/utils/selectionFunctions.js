import parseXML from "./ParseXML";

export async function selectAllContexts() {
	return await parseXML("contexte").then(data => data.contextes.Contexte);
}
