import Image from 'next/image'

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async() => {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon';

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    // Params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: {
                pokemonId: (index + 1).toString()
            },
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {

    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: {pokemon: data},
    }

}

export default function Pokemon({pokemon}) {
    return (
        <div className={styles.pokemon_details}>
            <h1 className={styles.pokemon_name}>{pokemon.name}</h1>
            <Image src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} height={200} width={200} />
            <div className={styles.poke_id}>
                <h3>Numero:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div className={styles.poke_types}>
                <h3>Tipo:</h3>
                <div className={styles.poke_type}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.poke_data}>
                <div className={styles.poke_alt}>
                    <h3>Altura:</h3>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.vertical_divisor}></div>
                <div className={styles.poke_weight}>
                    <h3>Peso:</h3>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
            <div className={styles.poke_moves}>
                <h3>Movimentos:</h3>
                <div className={styles.moves}>
                    {pokemon.moves.map((item, index) => (
                        <span key={index}>{item.move.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}