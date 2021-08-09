imp

function Pokedex(props) {
    const { pokemon } = props;

    return (
        {pokemon.map(p => <div>{pokecard}</div>)}
    )

}