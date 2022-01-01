import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>FBVIDEOS - Download Videos from Facebook</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="max-w-4xl mx-auto w-full p-4 my-16">
                <h1 className="text-3xl font-bold text-center">
                    FBVIDEOS - Disclaimer
                </h1>

                <p className="text-sm italic font-semibold mt-2">Last updated: 01/01/2022</p>

                <p className="mt-4">
                    The information provided by FBVIDEOS (“We,” “Us” or “Our”) on FBVIDEOS.DOWNLOAD (the “Website”) is for general informational purposes only. All information on the Website is provided in good faith, however, We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Website.
                </p>

                <br />

                <p>
                    Under no circumstance shall We have any liability to You for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and Your reliance on any information on the Website is solely at Your own risk.
                </p>

                <br />

                <p>
                    FBVIDEOS is a Social Media Services website and is not associated by any means to Facebook or the Facebook brand and doesn't have anything to do with Facebook, Inc.
                </p>

                <h2 className="mt-4 text-2xl font-semibold">1 - Consent</h2>

                <p>
                    By using the Website, You hereby consent to this Disclaimer and agree to its terms.
                    <br />
                    We will not be liable for any damages experienced in connection with the use of Our Website.
                    <br />
                    If You do not agree with this Disclaimer, STOP now and do not access or use this Website.
                </p>

                <h2 className="mt-4 text-2xl font-semibold">2 - External Links Disclaimer</h2>

                <p>
                    The Website may contain (or You may be sent through the Website links to other sites or content belonging to or originating from third parties or links to sites and features in banners or other advertising. We do not investigate, monitor, or check such external links for accuracy, adequacy, validity, reliability, availability or completeness.
                    <br />
                    We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Website or any site or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between You and third-party providers of products or services.
                </p>

                <h2 className="mt-4 text-2xl font-semibold">3 - Fair Use Notice</h2>

                <p>
                    The Website contains copyrighted material the use of which has not always been specifically authorized by the copyright owner. We believe this constitutes a “fair use” of any such copyrighted material as provided for in section 107 of the US Copyright Law. If You wish to use copyrighted material from the Website for purposes of Your own that go beyond fair use, You must obtain permission from the copyright owner.
                </p>

                <h2 className="mt-4 text-2xl font-semibold">4 - Personal Responsibility</h2>

                <p>
                    You acknowledge You are using Our Website voluntarily and that any choices, actions and results now and in the future are solely Your responsibility.
                    <br />
                    We will not be liable to You or any other party for any decision made or action taken in reliance on the information given in the Website.
                </p>

                <h2 className="mt-4 text-2xl font-semibold">5 - Contact Us</h2>

                <p>
                    If You require any more information or have any questions about Our Website's disclaimer, please feel free to contact Us by our contact page or by email at contact@fbdown.net.
                </p>

                <h2 className="mt-4 text-2xl font-semibold">6 - Copyright Information</h2>

                <p>
                    COPYRIGHT 2022 FBVIDEOS. ALL RIGHTS RESERVED.
                </p>
            </div>

            <Footer />
        </div>
    )
}