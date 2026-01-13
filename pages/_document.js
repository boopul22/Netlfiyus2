import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                {/* Hidden form for Netlify build-time detection */}
                <form name="claim-form" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="tel" name="phone" />
                    <input type="email" name="email" />
                    <textarea name="details"></textarea>
                    <input type="checkbox" name="terms" />
                </form>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
