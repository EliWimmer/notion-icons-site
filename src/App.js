import SettingsToggle from "./assets/components/js/settingsToggle";
import SettingsRadio from "./assets/components/js/settingsRadio";
import SettingsButton from "./assets/components/js/settingsButton";
import SettingsColors from "./assets/components/js/settingsColors";
import IconFolders from "./assets/components/js/iconFolders";
import IconGrid from "./assets/components/js/iconGrid";

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
import info from "./assets/uiIcons/info.svg";
import logo from "./assets/uiIcons/logo.svg";
import sizesmall from "./assets/uiIcons/sizesmall.svg";
import sizelarge from "./assets/uiIcons/sizelarge.svg";
import folderopen from "./assets/uiIcons/folderopen.svg";
import folderclosed from "./assets/uiIcons/folderclosed.svg";
import coffee from "./assets/uiIcons/coffee.svg";
import twitter from "./assets/uiIcons/twitter.svg";
import person from "./assets/uiIcons/person.svg";

import { useState } from "react";
import "./App.css";


function App() {
  // STATES
  const [infoVisibility, setInfoVisibility] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [foldersVisibility, setFoldersVisibility] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [downloadMode, setDownloadMode] = useState(false);
  const [iconStyle, setIconStyle] = useState("simple");
  const [iconLabel, setIconLabel] = useState(false);
  const [iconColor, setIconColor] = useState("gray");
  const [iconFolder, setIconFolder] = useState("all");
  const [iconSize, setIconSize] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(false);

  // DATA SETS
  
  // FUNCTIONS

  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  function notificationPopup(message) {
    const notification = document.getElementById("notification");
    notification.innerHTML = message;
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }


  function handleIconClick(url) {
    const iconUrl = `https://raw.githubusercontent.com/EliWimmer/notion-icons-repo/main/icons-refresh/${iconColor}/${url.folder}%2C${url.style}%2C${url.name}.png`

    // if download mode is false copy iconUrl to clipboard, else download icon
    if (downloadMode) {
      downloadFile(iconUrl, url.name, url.style, url.folder, iconColor);
      notificationPopup("Downloading...")
    } else {
      copyToClipboard(iconUrl);
      notificationPopup("Copied to clipboard")
    }

    function downloadFile(url, name, style, folder, color) {
      // use fetch to download file
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = `${color}-${style}-${folder}-${name}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });
  
    }

    function copyToClipboard(url) {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  };

  return (
    <>
      <div className={`App darkmode-${darkMode}`}>
        <div className={`App-header darkmode-${darkMode}`}>
          <a href="https://www.eliwimmer.com" target="_blank">
            
          <h2 className="header-left">
          <img src={person} alt="person" />
              Eli Wimmer
          </h2>
          </a>
          <div className="header-right">
            <a href="https://www.buymeacoffee.com/eliwimmer" target="_blank" rel="noopener noreferrer">
              <img src={coffee} alt="Buy me a coffee" />
            </a>
            <a href="https://twitter.com/eliwimm" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        <div id="notification" className={`notification-show-${notification} darkmode-${darkMode}`}></div>
        <div className={`logo ${iconColor}`}>
          <img src={logo} alt="logo" />
        </div>
        <div id="settings-bar" className={`settings-bar darkmode-${darkMode}`}>
          <div id="main-menu" className="main-menu">
            <div className="menu-row-one">
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
            <input value={searchQuery} class="icon-search" type="text" placeholder="Search" 
        onChange={(e) => handleSearch(e)}/>
          </div>
          <div
          id="settings-menu"
            className={`settings-menu darkmode-${darkMode} show-menu-${menuVisibility}`}
          >
            <SettingsToggle
              iconURL1={lightmode}
              iconURL2={darkmode}
              boolState={darkMode}
              darkMode={darkMode}
              stateOneText="Off"
              stateTwoText="On"
              onClick={() => setDarkMode(!darkMode)}
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
            <SettingsButton
              boolState={infoVisibility}
              darkMode={darkMode}
              icon={info}
              onClick={() => notificationPopup("This is a work in progress. I'm working on it!")}
            />
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
    </>
  );
}
export default App;
