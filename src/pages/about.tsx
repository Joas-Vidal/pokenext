import styles from '../styles/About.module.css'

import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/pokeball.png" type="image/x-icon" />
                <title>Sobre</title>
            </Head>
            <div className={styles.about_page}>
                <h1 className="text-4xl font-bold ">Sobre o Projeto</h1>
                <p className="text-lg mb-4">
                    Bem-vindo ao Pokémon Next.js! Este projeto foi criado com o intuito de estudar e explorar as capacidades do framework Next.js.
                    Aqui, você encontrará informações e funcionalidades relacionadas ao universo Pokémon.
                </p>
                <h2 className="text-2xl font-semibold mb-3">Objetivos</h2>
                <ul className="list-disc list-inside mb-4">
                <li>Aprender sobre o funcionamento do Next.js e suas funcionalidades principais.</li>
                <li>Implementar roteamento estático e dinâmico.</li>
                <li>Utilizar o sistema de geração de páginas estáticas (SSG) e renderização no lado do servidor (SSR).</li>
                <li>Integrar APIs externas para obter dados sobre Pokémon.</li>
                <li>Explorar técnicas de otimização de performance e SEO com Next.js.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-3">Tecnologias Utilizadas</h2>
                <ul className="list-disc list-inside mb-4">
                <li>Next.js</li>
                <li>PokéAPI</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-3">Estrutura do Projeto</h2>
                <p className="text-lg mb-4">
                    O projeto é organizado em diferentes páginas e componentes para facilitar a navegação e a manutenção do código.
                    Aqui estão algumas das principais seções:
                </p>
                <ul className="list-disc list-inside mb-4">
                <li><strong>Home:</strong> Página inicial com uma visão geral dos Pokémon.</li>
                <li><strong>Pokémon:</strong> Página de detalhes de um Pokémon específico.</li>
                <li><strong>Sobre:</strong> Esta página, onde você pode aprender mais sobre o projeto.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-3">Contribuidores</h2>
                <p className="text-lg mb-4">
                    Este projeto foi construido com base nas aulas de Matheus Battisti para estudo em desenvolvimento de aplicações web utilizando NextJs.
                </p>
                <h2 className="text-2xl font-semibold mb-3">Contato</h2>
                <p className="text-lg">
                    Para mais informações, entre em contato através do e-mail: <a href="mailto:joasx120@hotmail.com" className="text-blue-600">joasx120@hotmail.com</a>.
                </p>
            </div>
        </>
    )
}