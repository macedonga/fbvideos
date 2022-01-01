import { useEffect, useState } from "react";

import InstallPWA from "../components/InstallPWA";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [PWAInstallData, setPWAInstallData] = useState({
    showPrompt: false,
    e: null
  });

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          let reg = await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registration successful with scope: ", reg.scope);
        } catch (err) {
          console.log("Service Worker registration failed: ", err);
        }
      });
    }
  }, []);

  useEffect(() => {
    const infoStyle = "color: blue; font-family:sans-serif; background-color: white; border-radius: 5px; padding: 5px; font-weight: bold;";

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      if (localStorage.getItem("pwa-install-prompt") == 0) return;

      console.log("%cPrompting user to install app.", infoStyle);
      setPWAInstallData({
        showPrompt: true,
        e: e
      });
    });

    window.addEventListener("appInstalled", () => {
      setPWAInstallData({
        showPrompt: false,
        e: null
      });

      console.log("%PWA installed.", infoStyle);
    });
  }, []);

  const installPwa = async () => {
    let e = PWAInstallData.e;
    setPWAInstallData({
      showPrompt: false,
      e: null
    });

    e?.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await e?.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);

  };

  const cancelInstallPwa = () => {
    localStorage.setItem("pwa-install-prompt", 0);
    setPWAInstallData({
      showPrompt: false,
      e: null
    });
  };

  return (<>
    <InstallPWA show={PWAInstallData.showPrompt} install={installPwa} close={cancelInstallPwa} />
    <Component {...pageProps} />
  </>);
}