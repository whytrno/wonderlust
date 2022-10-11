import Head from 'next/head';
import Header from './header';

export default function Layout({ children, title, auth, loggedIn, subtitle }){
    return(
        <div className='font-popins'>
            <Head>
                <title>{title ? `Wonderlust | ${title}` : 'Wonderlust'}</title>
            </Head>
            {auth ? '' : loggedIn ? <Header loggedIn /> : <Header />}
            <div>{children}</div>
        </div>
    )
}