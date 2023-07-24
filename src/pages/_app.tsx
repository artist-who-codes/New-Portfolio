import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

const font = Nunito({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={font.className}>
            <Component {...pageProps} />
        </main>)

}
