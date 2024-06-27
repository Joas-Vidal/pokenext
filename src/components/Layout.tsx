import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

// components/Layout.tsx
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
};

export default function Layout(children) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="../../public/images/pokeball.png" type="image/x-icon" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}