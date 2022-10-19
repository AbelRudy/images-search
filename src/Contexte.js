import { useState } from "react";
import { selectAllContexts } from "./utils/selectionFunctions.js";

function Context() {
  //Définir mon state
  const [listeContext, setListeContext] = useState([]);

  //Récuperer dans une variable la fonction SelectAllContexts
  selectAllContexts().then((contexts) => setListeContext(contexts));

  //Comportement

  //Affichage

  return (
    <ul>
      {listeContext.map((item) => (
        <li>{item.Name}</li>
      ))}
    </ul>
  );
}

export default Context;
