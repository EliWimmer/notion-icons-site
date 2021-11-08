import '../css/settingsExtras.css'

import info from '../../uiIcons/info.svg'
import bulk from '../../uiIcons/bulk.svg'
import notion from '../../uiIcons/notion.svg'

export default function SettingsExtras(props) {
    return (
        <>
            <div 
                className="little-button"
                onClick={() => {
                    props.onClick('Detailed info & credits coming soon')
                }}
            >
                <img src={info} alt="info" />
                <p>Info</p>
            </div>
            <div 
                className="little-button"
                onClick={() => {
                    props.onClick('Apply icons to multiple pages at once via API: Coming Soon.')
                }}
            >
                <img src={bulk} alt="bulk" />
                <p>Bulk Apply</p>
            </div>
            <div 
            className="little-button"
            onClick={() => {
                props.onClick('Log in with Notion to use Bulk Apply and save favorites: Coming Soon.')
            }}
            
            >
                <img src={notion} alt="notion" />
                <p>Login</p>
            </div>
        </>
    )
}