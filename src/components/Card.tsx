import styles from "../styles/Card.module.css";

import Image from 'next/image'
import Link from 'next/link'

export default function Card({pokemon}) {


    return (
        <div className={styles.poke_card}>
            <Image src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} height={120} width={120} />
            <div className={styles.pokemon_info}>
                <p>NO. {pokemon.id}</p>
                <h3>{pokemon.name}</h3>
                <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
            </div>

        </div>
    )

}