import Image from "next/image";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.ImageNav}>
                    <Image src="/images/poke_logo.jpg" alt="Vercel Logo" className="" width={128} height={68}/>
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}