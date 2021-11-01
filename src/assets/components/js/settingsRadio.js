import '../css/settingsRadio.css'


export default function SettingsRadio(props) {
    console.log(props)
    return (
        <div className="radio-container">
        <div className="settings-radio">
        <div 
                    className={`settings-radio-option-selector darkmode-${props.darkMode}`} 
                    style={{"left": `${props.options.indexOf(props.activeOption) * 40}px`}}
                    />
            {props.options.map((option, index) => {
                return (
                    <>
                    
                    <div 
                    className="settings-radio-option-ghost" 
                    style={option === props.activeOption ? {"opacity" : "1.0"} : {"opacity" : ".2"}} 
                    key={option}
                    onClick={() => props.onClick(option)}
                    >
                        <img src={props.icons[index]} alt={option} />
                    </div>
                    
                    </>
                )
            }
            )}
        </div>
        <div className="radio-label">
            {props.label}
        </div>
        <div className="state-text">
            {props.activeOption}
        </div>
        </div>
    );
}