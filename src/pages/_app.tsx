import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../app/page.module.css'
import { AppProps } from 'next/app'
import '../app/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <div>
          <Navbar />
          <main className={styles.main_conteiner}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
    </>
  )
}

export default MyApp;
