import '../css/iconGrid.css'
import { React, useState, useEffect } from 'react'

export default function IconGrid(props) {

// get all icons from ../icons
const icons = require.context('../../icons', true, /\.svg$/);

const allIcons = icons.keys().map(icons);

// create an array of indexes in local storage to use for favorite icons

const parsedIcons = allIcons.map(icon => {
    const iconName = icon.default.split(".")[0].split(",")[2]
    const iconStyle = icon.default.split(",")[1].split(".")[0]
    const iconFolder = icon.default.split("/")[3].split(",")[0]
    return {
        iconName,
        iconStyle,
        iconFolder,
        path: icon.default
    }
})
const [activeIcons, setActiveIcons] = useState(parsedIcons);

useEffect(() => {
        if (props.searchQuery === "") {
            setActiveIcons(parsedIcons)
        } else {
        const search = props.searchQuery.toLowerCase()
        const filteredIcons = parsedIcons.filter(icon => {
            return icon.iconName.toLowerCase().includes(search)
        })
        setActiveIcons(filteredIcons)
    }
}, [props.searchQuery])


    return (
        <>
        
        <div className="icon-grid">
            {activeIcons.map((icon, index) => {
                return (
                    <div 
                    className={`icon-container folder-${props.iconFolder === icon.iconFolder || props.iconFolder === "all"} style-${props.iconStyle === icon.iconStyle || props.iconStyle === "both"}`} 
                    key={`${icon.path}`}
                    
                    >
                        {/* if icon is in favoriteIcons show img favorite, if not show image unfavorite     */}
                        <img onClick={(e) => props.handleIconClick({
                        name: icon.iconName,
                        folder: icon.iconFolder,
                        style: icon.iconStyle,
                        icon: e,
                    })} class={`icon-img size-${props.iconSize} ${props.iconColor}`} src={icon.path} alt={icon.iconName}/>
                        <div class={`label-${props.iconLabel}`}>{icon.iconName}</div>
                        </div>
                )
            })}
        </div>
        </>
    )

}
