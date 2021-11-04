import '../css/notificationPopup.css'

export default function NotificationPopup(props) {

    
    
    return (
        <>
        {props.message &&
            <div id="notification" className={`notification-show-${props.bool}
            darkmode-${props.darkMode}`}>{props.message}</div>
        }
        </>
    )
  }
