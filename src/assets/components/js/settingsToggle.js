import "../css/settingsToggle.css";
import { useRef } from "react";


export default function SettingsToggle(props) {
  
    const toolTip = useRef("toolTip");
    function handleMouseEnter() {
        // show toolTip after 1 second
        toolTip.current.style.display = "none";
        setTimeout(() => {
            toolTip.current.style.opacity = "1";
        }, 700);
    }
    function handleMouseLeave() {
        // hide toolTip after 1 second
        toolTip.current.style.opacity = "0";
        setTimeout(() => {
            toolTip.current.style.display = "none";
        }, 700);
    }

  return (
    <div className="toggle-container" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        
      <div className={`settings-toggle toggle-state-${props.boolState}`} onClick={props.onClick}>
        <div
          className={`settings-toggle-icon icon-one-${props.boolState} darkmode-${props.darkMode} state-${props.boolState}`}
        >
        </div>
        <div
          className={`settings-toggle-icon icon-two-${props.boolState} darkmode-${props.darkMode} state-${props.boolState}`}
        >
        </div>
        <div className={`ghost-icons`}>
          <img class={`active-${props.boolState}-icon1`} src={props.iconURL1} alt="link" />
          <img class={`active-${props.boolState}-icon2`} src={props.iconURL2} alt="download" />
        </div>
      </div>
      <div className="toggle-label">
            {props.label}
        </div>
        <div className={`state-text one-${props.boolState}`}>
            {props.stateOneText}
        </div>
        <div className={`state-text two-${props.boolState}`}>
            {props.stateTwoText}
        </div>
        <div ref={toolTip} className={`tooltip darkmode-${props.darkMode}`}>
            {props.tooltipText}
        </div>
    </div>
  );
}
