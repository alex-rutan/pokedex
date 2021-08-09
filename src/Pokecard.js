function Pokecard(props) {
    const { id, name, type } = props;

    return (
        <div className="Pokecard">
            <h3>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon"></img>
            <div>{type}</div>
        </div>
    )
}