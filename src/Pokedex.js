"use strict";

import Pokecard from "./Pokecard";

/** Pokedex Component: takes in props and returns a sequence of Pokecard components.
 *
 * props is an array of objects describing different pokemon like:
 *      pokemon: [
 *          { id: 4, name: "Charmander", type: "fire", base_experience: 62 }, ...
 *      ] 
 * */
function Pokedex(props) {
  const { pokemon } = props;

  return (
    <div className="Pokedex">
      <h3 className="Pokedex-title">Pokedex</h3>
      <div>
        {pokemon.map((p) => (
          <div className="Pokedex-card">
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default Pokedex;
