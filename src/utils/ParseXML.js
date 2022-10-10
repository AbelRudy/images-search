import { XMLParser } from "fast-xml-parser";
import axios from "axios";
import ContextsXML from "../assets/Contextes_concepts.xml";
import ConceptsXML from "../assets/Concepts_Videos.xml";

const parser = new XMLParser({
	ignoreAttributes: false,
	attributeNamePrefix: "",
	allowBooleanAttributes: true,
});

/**
 * Passez en paramètre le nom du fichier à récupérer (concept / contexte) et renvoyez le fichier xml parsé
 * @param {String} name nom du fichier XML à analyser
 */
export default async function parseXML(name) {
	name = name.toLowerCase();
	if (name.includes("concept")) {
		return await axios
			.get(ConceptsXML, {
				"Content-Type": "application/xml; charset=utf-8",
			})
			.then((response) => parser.parse(response.data));
	} else if (name.includes("contexte")) {
		return await axios
			.get(ContextsXML, {
				"Content-Type": "application/xml; charset=utf-8",
			})
			.then((response) => parser.parse(response.data));
	}
}
