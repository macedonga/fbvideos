import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

import { ArrowCircleDownIcon as DownloadIcon, ExclamationIcon } from "@heroicons/react/solid";

import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [BlobData, setBlob] = useState(null);
  const [Error, setError] = useState(null);
  const [ShowError, setShowError] = useState(false);
  const [Url, setUrl] = useState("");
  const [TimeoutError, setTimeoutError] = useState(null);

  const setErrorData = (err) => {
    if (TimeoutError) {
      TimeoutError.map(e => clearTimeout(e));
    }

    setLoading(false);
    let response = err.response.data;
    if (response && response.error) {
      document.getElementById("url-input").classList.add("shake");
      let timeout = setTimeout(() => {
        document.getElementById("url-input").classList.remove("shake");
      }, 1000);

      let timeout1 = setTimeout(() => {
        setShowError(false);
      }, 5000);

      setTimeoutError([timeout, timeout1]);
      setShowError(true);
      return setError(response.error);
    }
  }

  const fetchData = async () => {
    setLoading(true);

    let res;
    try {
      res = await axios.post("/api/download", {
        url: Url
      });
    } catch (err) {
      return setErrorData(err);
    }

    let video;
    try {
      video = await axios({
        url: res.data.videoUrl,
        method: 'GET',
        responseType: 'blob'
      });
    } catch (err) {
      return setErrorData(err);
    }

    const url = URL.createObjectURL(new Blob([video.data]));
    setBlob(url);

    setData(res.data);
    setLoading(false);
  };

  const startDownload = async () => {
    if (!BlobData) alert("Blob not available");

    const link = document.createElement("a");
    link.href = BlobData;
    link.setAttribute("download", `${Data.title.trim()} - Downloaded from FBVIDEOS.CC.${Data.type.split("/")[1]}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <Head>
        <title>FBVIDEOS - Download Videos from Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="max-w-4xl mx-auto w-full p-4">
        <div
          onClick={() => {
            location.href = "https://github.com/macedonga/fbvideos";
          }}
          className="my-8 rounded-lg p-2 bg-gray-100 border-2 border-gray-200 text-sm dark:bg-gray-900 dark:border-gray-700 max-w-max mx-auto alert cursor-pointer"
        >
          <span className="lg:inline-flex hidden uppercase p-1 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-md font-bold text-xs mr-2">
            Info
          </span>
          This website is open source. <b className="alert_link transition-all">Check it out on GitHub</b>
        </div>

        <h1 className="text-3xl font-bold text-center">
          Download Videos from Facebook
        </h1>

        {
          !Data &&
          <div
            id="url-input"
            className="inline-flex w-full mx-auto p-2 dark:bg-gray-900 dark:border-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg cursor-text mt-4"
            onClick={() => {
              document.getElementById("fb-input").focus();
            }}
          >
            <input
              id="fb-input"
              onChange={(e) => setUrl(e.target.value)}
              value={Url}
              className="w-full bg-transparent focus:outline-none px-2 mr-4"
              placeholder="Insert a Facebook video URL"
            />
            <button onClick={fetchData} className="rounded-lg dark:bg-gray-700 dark:text-white text-black bg-gray-300 py-2 px-4">
              {
                Loading && <svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              }
              {
                !Loading && <DownloadIcon className="w-6 h-6" />
              }
            </button>
          </div>
        }

        {
          Data && <>
            <div
              className="dark:border-gray-700 dark:bg-gray-900 bg-gray-100 border-2 border-gray-200 rounded-lg p-4 mt-4 flex"
            >
              <img className="h-32 rounded-lg bg-gray-500 border-2 dark:border-gray-700 border-gray-200 my-auto" src={Data.thumbnail} />
              <div className="ml-6 h-auto flex flex-col w-full">
                <h2 className="text-2xl font-semibold">
                  {Data.title}
                </h2>
                <h3 className="font-semibold">
                  {Data.description}
                </h3>
                <button onClick={startDownload} className="flex rounded-lg dark:bg-gray-700 dark:text-white text-black bg-gray-300 py-2 px-4 mt-auto ml-auto">
                  <DownloadIcon className="w-6 h-6 mr-1" /> Download now
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setData(null);
                setBlob(null);
                setUrl("");
              }}
              className="flex w-full rounded-lg dark:border-gray-700 dark:bg-gray-900 bg-gray-100 border-2 border-gray-200 py-2 px-4 mt-4"
            >
              <DownloadIcon className="w-6 h-6 mr-1" />
              <span className="mx-auto">Download another video</span>
            </button>
          </>
        }

        <p className={"mt-4 text-red-400 font-semibold text-center transition-all " + (ShowError ? "opacity-1" : "opacity-0")}>
          {Error || '\u00A0'}
        </p>

        <About />
      </div>

      <Footer />
    </div>
  )
}
