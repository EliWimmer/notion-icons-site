import SettingsToggle from "./assets/components/js/settingsToggle";
import SettingsRadio from "./assets/components/js/settingsRadio";
import SettingsButton from "./assets/components/js/settingsButton";
import SettingsColors from "./assets/components/js/settingsColors";
import IconFolders from "./assets/components/js/iconFolders";
import IconGrid from "./assets/components/js/iconGrid";
import HeaderButtons from "./assets/components/js/HeaderButtons";
import SettingsExtras from "./assets/components/js/SettingsExtras";
import NotificationPopup from "./assets/components/js/NotificationPopup";
import InfoModal from "./assets/components/js/infoModal";
import Changelog from "./assets/components/js/changelog";
import domtoimage from "dom-to-image";

import link from "./assets/uiIcons/link.svg";
import download from "./assets/uiIcons/download.svg";
import lightmode from "./assets/uiIcons/lightmode.svg";
import darkmode from "./assets/uiIcons/darkmode.svg";
import iconsimple from "./assets/uiIcons/iconsimple.svg";
import iconfancy from "./assets/uiIcons/iconfancy.svg";
import iconboth from "./assets/uiIcons/iconboth.svg";
import labelshow from "./assets/uiIcons/labelshow.svg";
import labelhide from "./assets/uiIcons/labelhide.svg";
import settings from "./assets/uiIcons/settings.svg";
import logo from "./assets/uiIcons/logo.svg";
import sizesmall from "./assets/uiIcons/sizesmall.svg";
import sizelarge from "./assets/uiIcons/sizelarge.svg";
import folderopen from "./assets/uiIcons/folderopen.svg";
import folderclosed from "./assets/uiIcons/folderclosed.svg";
import person from "./assets/uiIcons/person.svg";
import phone from "./assets/uiIcons/phone.svg";
import mic from "./assets/uiIcons/mic.svg";
import sun from "./assets/uiIcons/sun.svg";
import notionbg from "./assets/uiIcons/notionbg.svg";
import logonotext from "./assets/uiIcons/logonotext.svg";
import chevdown from "./assets/uiIcons/chevdown.svg";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // LAYOUT STATES
  const [iconFolder, setIconFolder] = useState("all");
  const [infoVisibility, setInfoVisibility] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [foldersVisibility, setFoldersVisibility] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationVisibility, setNotificationVisibility] = useState(false);
  const [splashPage, setSplashPage] = useState(
    localStorage.getItem("splashPage") ? false : true
  );
  console.log(localStorage.getItem("darkMode"));
  // SETTINGS STATES
  const [darkMode, setDarkMode] = useState(true);
  const [iconSize, setIconSize] = useState(false);
  const [iconStyle, setIconStyle] = useState("simple");
  const [iconLabel, setIconLabel] = useState(false);
  const [iconColor, setIconColor] = useState("gray");
  const [downloadMode, setDownloadMode] = useState(false);

  // load settings states from local storage if available
  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    }
    if (localStorage.getItem("iconSize")) {
      setIconSize(JSON.parse(localStorage.getItem("iconSize")));
    }
    if (localStorage.getItem("iconStyle")) {
      setIconStyle(JSON.parse(localStorage.getItem("iconStyle")));
    }
    if (localStorage.getItem("iconLabel")) {
      setIconLabel(JSON.parse(localStorage.getItem("iconLabel")));
    }
    if (localStorage.getItem("iconColor")) {
      setIconColor(JSON.parse(localStorage.getItem("iconColor")));
    }
    if (localStorage.getItem("downloadMode")) {
      setDownloadMode(JSON.parse(localStorage.getItem("downloadMode")));
    }
    // if (localStorage.getItem("splashPage")) {
    //   setSplashPage(JSON.parse(localStorage.getItem("splashPage")));
    // }
  }, []);

  // make settings states persistent
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("iconSize", JSON.stringify(iconSize));
    localStorage.setItem("iconStyle", JSON.stringify(iconStyle));
    localStorage.setItem("iconLabel", JSON.stringify(iconLabel));
    localStorage.setItem("iconColor", JSON.stringify(iconColor));
    localStorage.setItem("downloadMode", JSON.stringify(downloadMode));
    localStorage.setItem("splashPage", JSON.stringify(splashPage));
  }, [
    darkMode,
    iconSize,
    iconStyle,
    iconLabel,
    iconColor,
    downloadMode,
    splashPage,
  ]);

  useEffect(() => {
    if (notification !== "") {
      setNotificationVisibility(true);
      setTimeout(() => {
        setNotificationVisibility(false);
      }, 3000);
    }
  }, [notification]);

  useEffect(() => {
    if (!notificationVisibility) {
      setTimeout(() => {
        setNotification("");
      }, 100);
    }
  }, [notificationVisibility]);

  // FUNCTIONS


  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  // get the innerHTML of the webpage src

  async function handleIconClick(url) {
    const colorList = [
      { name: "gray", colorHex: "#9FA4A9" },
      { name: "brown", colorHex: "#D49675" },
      { name: "orange", colorHex: "#E98D36" },
      { name: "yellow", colorHex: "#CA9D46" },
      { name: "green", colorHex: "#71B283" },
      { name: "blue", colorHex: "#66AADA" },
      { name: "purple", colorHex: "#B098D9" },
      { name: "pink", colorHex: "#DF84D1" },
      { name: "red", colorHex: "#EA878C" },
    ];

    const color = colorList.find((color) => color.name === iconColor);

    function getter(urlPath) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", urlPath, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        };
        xhr.onerror = () => {
          reject(xhr.statusText);
        };
        xhr.send();
      });
    }
    // const getImgData = (url) => new Promise((res,rej) => fetch(url).then(res => res.blob()).then(blob => {
    //   const reader = new FileReader();
    //   reader.onload = (e) => res(e.target.result);
    //   console.log(res.blob)
    //   reader.readAsDataURL(blob);
    // }));

    const baseSvg = await getter(url.icon.target.src);
    const convertedSvg = "data:image/svg+xml;base64," + 
    btoa(
        baseSvg
          .replaceAll('fill="black"', `fill="${color.colorHex}"`)
          .replace('width="48" height="48"', `width="512" height="512"`)
          )
    //copy converted svg to clipboard
    if (!downloadMode) {
     // copy converted svg to clipboard
      navigator.clipboard.writeText(convertedSvg);
      setNotification("Copied to clipboard");

    } else {
      domtoimage.toPng(
        url.icon.target,
        {
          width: 512,
          height: 512,
        }
      )
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = url.name + ".png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error);
        });
        setNotification("Downloading...");
    }
  }

  return (
    <>
      <div className={`App darkmode-${darkMode}`}>
        <div className={`logo ${iconColor} show-splash-${splashPage}`}>
          <img src={logo} alt="logo" />
          <h3>Handcrafted icons, just for Notion.</h3>
          <div
            className="welcome-button"
            onClick={() => {
              setSplashPage(false);

              // document.getElementById("search-bar").scrollIntoView({
              //   behavior: "smooth",
              //   block: "start",
              // });
            }}
          >
            <div>Get started</div>
            <img src={chevdown} alt="chevdown" />
          </div>
          <img src={phone} alt="phone" className="phone" />
          <img src={mic} alt="mic" className="mic" />
          <img src={sun} alt="sun" className="sun" />
          <img src={notionbg} alt="notionbg" className="notionbg" />
        </div>
        <div className={`App-header darkmode-${darkMode}`}>
          <div className="header-left-container">
            <div
              className={`logo-container splash-toggle-${splashPage}`}
              onClick={() => setSplashPage(!splashPage)}
            >
              <img src={logonotext} alt="logonotext" />
            </div>
            <a
              href="https://www.eliwimmer.com"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="header-left">
                <img src={person} alt="person" />
                Eli Wimmer
              </h2>
            </a>
          </div>
          <div className="header-right">
            <HeaderButtons />
          </div>
        </div>
        <NotificationPopup
          message={notification}
          darkMode={darkMode}
          bool={notificationVisibility}
        />

        <div id="settings-bar" className={`settings-bar`}>
          <div id="main-menu" className="main-menu">
            <div className={`menu-row-one show-colors-${splashPage}`}>
              <SettingsButton
                boolState={menuVisibility}
                darkMode={darkMode}
                icon={settings}
                icon2={settings}
                onClick={() => {
                  foldersVisibility === true && setFoldersVisibility(false);
                  setMenuVisibility(!menuVisibility);
                }}
                rotateonclick={true}
              />
              <SettingsColors
                iconColor={iconColor}
                onClick={(color) => setIconColor(color)}
              />
              <SettingsButton
                boolState={foldersVisibility}
                darkMode={darkMode}
                icon={folderclosed}
                icon2={folderopen}
                onClick={() => {
                  menuVisibility === true && setMenuVisibility(false);
                  setFoldersVisibility(!foldersVisibility);
                }}
              />
            </div>
            <input
              value={searchQuery}
              id="search-bar"
              class={`icon-search darkmode-${darkMode}`}
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearch(e)}
              onClick={() =>
                // scroll to this element
                document.getElementById("search-bar").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            />
          </div>
          <div
            id="settings-menu"
            className={`settings-menu show-menu-${menuVisibility}`}
          >
            <div className="menu-row-three">
              <SettingsToggle
                iconURL1={lightmode}
                iconURL2={darkmode}
                boolState={darkMode}
                darkMode={darkMode}
                stateOneText="Off"
                stateTwoText="On"
                onClick={() => {
                  setDarkMode(darkMode === null ? true : !darkMode);
                  localStorage.setItem("darkMode", darkMode);
                }}
                label="Dark Mode"
                tooltipText="For visual purposes only. The downloaded icon will be the same."
              />
              <SettingsRadio
                options={["simple", "fancy", "both"]}
                icons={[iconsimple, iconfancy, iconboth]}
                activeOption={iconStyle}
                onClick={(option) => setIconStyle(option)}
                label="Icon Style"
                darkMode={darkMode}
              />
              <SettingsToggle
                iconURL1={sizelarge}
                iconURL2={sizesmall}
                boolState={iconSize}
                darkMode={darkMode}
                stateOneText="Large"
                stateTwoText="SMall"
                onClick={() => setIconSize(!iconSize)}
                label="Icon Size"
                tooltipText="For visual purposes only. The downloaded icon will be the same."
              />
              <SettingsToggle
                iconURL1={link}
                iconURL2={download}
                boolState={downloadMode}
                darkMode={darkMode}
                onClick={() => setDownloadMode(!downloadMode)}
                label="Dl Mode"
                stateOneText="Copy Link"
                stateTwoText="Save File"
                tooltipText="Determines what happens when you click an icon"
              />

              <SettingsToggle
                iconURL1={labelhide}
                iconURL2={labelshow}
                boolState={iconLabel}
                darkMode={darkMode}
                stateOneText="Hide"
                stateTwoText="Show"
                onClick={() => setIconLabel(!iconLabel)}
                label="Labels"
                tooltipText="Shows or hides icon labels under the icons."
              />
            </div>
            <div className="menu-row-two">
              <SettingsExtras
                onClick={(message) => {
                  setNotification(message);
                }}
              />
            </div>
          </div>

          <IconFolders
            activeIconFolder={iconFolder}
            onClick={(folder) => setIconFolder(folder)}
            iconColor={iconColor}
            foldersVisibility={foldersVisibility}
            darkMode={darkMode}
          />
        </div>
        <div className="icon-grid-body">
          <IconGrid
            iconColor={iconColor}
            iconFolder={iconFolder}
            iconStyle={iconStyle}
            iconSize={iconSize}
            iconLabel={iconLabel}
            searchQuery={searchQuery}
            handleIconClick={(url) => handleIconClick(url)}
          />
        </div>
      </div>
      <InfoModal
        boolState={infoVisibility}
        onClick={() => setInfoVisibility(!infoVisibility)}
        darkMode={darkMode}
      >
        <div className="modal-left modal-scroller">
          <h2>Credits</h2>
          <h3>About</h3>
          <div className="credits-extras modal-paragraph">
            <div>
              Notion Icons is a web app developed by Eli Wimmer. It solves a few
              main problems with other options for icons: Ease of use,
              performance, and quality. Dead simple and fast to get icons into
              Notion, these icons load <i>instantly</i>, and they are visually
              sharper and clearer in Notion than any other icon library.
            </div>
            <div>
              I do not charge a penny for this project, so all donations, either
              through downloading all the icons, or buying me a coffee, are
              greatly appreciated.
            </div>
            <div>Notion Icons is a free, open-source project.</div>
            <div>Notions Icons is not affiliated with Notion.</div>
          </div>
          <h3>Credits</h3>
          <div className="modal-credits modal-paragraph">
            <ul className="credits-keys">
              <li>Icons by:</li>
              <li style={{ opacity: "0" }}>-</li>
              <li>Web App by:</li>
              <li style={{ opacity: "0" }}>-</li>
              <li>License:</li>
            </ul>
            <ul className="credits-values">
              <li>Eli Wimmer</li>
              <li style={{ opacity: ".5" }}>Made with Figma</li>
              <li>Eli Wimmer</li>
              <li style={{ opacity: ".5" }}>Made with React.js</li>
              <li>MIT</li>
            </ul>
          </div>
        </div>
        <div className="modal-center modal-scroller">
          <h2>Settings</h2>
          <h3>
            <img src={lightmode} alt="lightmode" />
            Dark Mode
          </h3>
          <div className="modal-paragraph">
            <p>
              Dark Mode changes the color theme of the app between light and
              dark, matching the app colors of Notion so you know just how the
              icons will look in app.
            </p>
            <p>
              Dark Mode only changes the background, not the icons. The icons
              downloaded are the same regardless of the dark mode.
            </p>
          </div>
          <h3>
            <img src={iconfancy} alt="iconfancy" />
            Icon Style
          </h3>
          <div className="modal-paragraph">
            <p>
              Icon Style switches between simple, fancy, and both styles. Simple
              is default. There is complete parity between styles. If you are
              having performance issues, don't use the option to show both.
            </p>
          </div>
          <h3>
            <img src={sizelarge} alt="sizelarge" />
            Icon Size
          </h3>
          <div className="modal-paragraph">
            <p>
              Icons Size, when set to small, is intedended to be used as a
              reference for how icons will look in Notion. However, it is an
              approximation, as in Notion they do not have a fixed size.
            </p>
            <p>
              This setting does not affect the size of the icons downloaded.
            </p>
          </div>
          <h3>
            <img src={download} alt="download" />
            Download Mode
          </h3>
          <div className="modal-paragraph">
            <p>
              Download Mode determines what happens when you click an icon. Copy
              Link will copy the URL to your clipboard. Save File will download
              the icon to your computer.
            </p>

            <p>
              <b>
                The performance and visual benefits of Notion Icons only work in
                Copy Link mode.
              </b>
            </p>

            <p>All icons are downloaded as 512x512px PNG files.</p>
          </div>
        </div>
        <div className="modal-right modal-scroller">
          <h2>Change Log</h2>
          <Changelog />
        </div>
      </InfoModal>
    </>
  );
}
export default App;
