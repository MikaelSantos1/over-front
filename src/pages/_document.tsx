import Document, { Html, Main, NextScript, Head } from "next/document";


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://unpkg.com/@silvermine/videojs-quality-selector/dist/css/quality-selector.css" rel="stylesheet" />
                    <script src="./path/to/video.min.js"></script>
                    <script src="https://unpkg.com/@silvermine/videojs-quality-selector/dist/js/silvermine-videojs-quality-selector.min.js"></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
                </Head>


                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}