import iconParser from "./assets/components/iconParser";
import SettingsToggle from "./assets/components/settingsToggle";
import SettingsRadio from "./assets/components/settingsRadio";

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
import brain from "./assets/uiIcons/brain.svg";

import { useState } from "react";
import "./App.css";

function App() {

  // STATES
  const [darkMode, setDarkMode] = useState(false);
  const [downloadMode, setDownloadMode] = useState(false);
  const [iconStyle, setIconStyle] = useState("both");
  const [labelMode, setLabelMode] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  // DATA SETS
  const icons = iconParser();

  // FUNCTIONS

  return (
    <>
      <div className={`App darkmode-${darkMode}`}>


        <div className="settings-bar">
          <div className="main-menu">

          </div>
          <SettingsToggle
            iconURL1={settings}
            iconURL2={settings}
            boolState={menuVisibility}
            darkMode={darkMode}
            label=""
            stateOneText=""
            stateTwoText=""
            onClick={() => setMenuVisibility(!menuVisibility)}
          />
          <div className={`settings-menu darkmode-${darkMode} show-menu-${menuVisibility}`}>
              <SettingsRadio
              options={["simple", "fancy", "both", "brain"]}
              icons={[iconsimple, iconfancy, iconboth, brain]}
              activeOption={iconStyle}
              onClick={(option) => setIconStyle(option)}
              label="Icon Style"
              darkMode={darkMode}
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
              <SettingsToggle
              iconURL1={labelhide}
              iconURL2={labelshow}
              boolState={labelMode}
              darkMode={darkMode}
              stateOneText="Hide"
              stateTwoText="Show"
              onClick={() => setLabelMode(!labelMode)}
              label="Labels"
              tooltipText="Shows or hides icon labels under the icons."
              />
            </div>
        </div>
        <div className="icon-grid">
          {icons.map((icon, index) => (
            <div className="icon" key={index}>
              <img src={icon.url} alt={icon.name} />
              <p className="icon-label label-hide">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
