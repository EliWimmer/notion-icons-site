import '../css/settingsButton.css'

export default function SettingsButton(props) {
  console.log(props.boolState)
  return (
    <div className={`settings-button darkmode-${props.darkMode} bool-${props.boolState}`} onClick={() => props.onClick()}>
            <img className={`bool-${props.boolState}-rotate-${props.rotateonclick}`} src={props.boolState ? props.icon2 : props.icon} alt="settings" />
    </div>
    );
}
