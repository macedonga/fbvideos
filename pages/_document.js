import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
                    
                    <meta name="title" content="FBVIDEOS- Download Videos from Facebook" />
                    <meta name="description" content="Download videos from Facebook without any difficulty." />
                    <meta name="keywords" content="facebook, video, downloader facebook live, facebook videos, free downloader, free" />
                    <meta name="author" content="FBVIDEOS" />
                    <meta name="copyright" content="FBVIDEOS 2022" />
                    <meta httpEquiv="Reply-to" content="me@marco.win" />
                    <meta httpEquiv="content-language" content="EN" />
                    <meta httpEquiv="Content-Type" content="text/html; iso-8859-1" />
                    <meta name="robots" content="INDEX,FOLLOW" />
                    <meta name="creation_Date" content="01/01/2022" />
                    <meta name="revisit-after" content="7 days" />
                </Head>
                <body className="dark:bg-black dark:text-white text-black bg-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};