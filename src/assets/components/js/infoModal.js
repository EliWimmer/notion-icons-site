import '../css/infoModal.css'

export default function InfoModal(props) {

    // if click outside of moda-content-true, close modal
    const handleClickOutside = (e) => {
        if (e.target.className === 'modal-true') {
            props.onClick()
        }
    }



    return (
        <>
        <div 
        className={`help-button help-${props.boolState}`}
        onClick={props.onClick}
        >
            ?
        </div>
        <div 
        className={`modal-${props.boolState}`}
        onClick={handleClickOutside}
        >
            <div className={`modal-content-${props.boolState} darkmode-${props.darkMode}`}>
                <span className="close" onClick={props.onClick}>&times;</span>
                {props.children}
            </div>
        </div>
        </>
    )
}
