export default function Footer() {
    return (
        <div className="dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-t-2 border-gray-200 w-full mt-auto p-4">
            <p className="font-semibold text-center">
                FBVIDEOS
            </p>
            <p className="max-w-4xl mx-auto text-center text-xs p-2 pb-0">
                <a href="/privacy" className="transition-all text-blue-500 hover:text-blue-400 decoration-dotted underline decoration-2 decoration-blue-500">
                    Privacy policy
                </a>
                {" "}or{" "}
                <a href="mailto:me@marco.win" className="transition-all text-blue-500 hover:text-blue-400 decoration-dotted underline decoration-2 decoration-blue-500">
                    Contact us
                </a>
            </p>
            <p className="max-w-4xl mx-auto text-center text-xs p-2">
                FBVIDEOS <b>does not host any videos on its servers</b>.
                All videos that you download are downloaded from Facebook's CDNs.
                <br />
                FBVIDEOS is a Social Media Services website and is not associated by any means to Facebook or the Facebook brand, and it doesn't have anything to do with Facebook, Inc.
                <br />
                <a href="/disclaimer" className="transition-all text-blue-500 hover:text-blue-400 decoration-dotted underline decoration-2 decoration-blue-500">
                    Read the full disclaimer
                </a>
            </p>
        </div>
    );
}