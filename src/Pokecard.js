import "./Pokecard.css"

/** Pokecard Component: shows a single pokemon with:
 * 
 *  - Pokemon name
 *  - Pokemon image
 *  - Pokemon type
 *  - Pokemon base_experience
 */

const POKEMON_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

function Pokecard(props) {
// can destructure it as parameters directly: function Pokecard({ id, name, type, base_experience })
  const { id, name, type, base_experience } = props;
  
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-image"
        src={`${POKEMON_IMG_URL}/${id}.png`}
        alt={name}
      ></img>
      <div className="Pokecard-info">{type}</div>
      <div className="Pokecard-info">EXP:{base_experience}</div>
    </div>
  );
}

export default Pokecard;