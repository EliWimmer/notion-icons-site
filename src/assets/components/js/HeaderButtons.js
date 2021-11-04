import "../css/headerButtons.css"
import gumroad from "../../uiIcons/gumroad.svg"
import github from "../../uiIcons/github.svg"
import coffee from "../../uiIcons/coffee.svg"
import twitter from "../../uiIcons/twitter.svg"

export default function HeaderButtons() {

    const buttons = [
        {
            name: "gumroad",
            icon: gumroad,
            link: "https://eliwimm.gumroad.com/l/rXzvN",
            label: "Download all icons",
            color: "red"
        },
        {
            name: "coffee",
            icon: coffee,
            link: "https://www.buymeacoffee.com/eliwimmer",
            label: "Buy me a coffee",
            color: "brown"
        },
        {
            name: "twitter",
            icon: twitter,
            link: "https://twitter.com/eliwimm",
            label: "Twitter",
            color: "blue",
        },
        {
            name: "github",
            icon: github,
            link: "https://github.com/EliWimmer/notion-icons-site",
            label: "GitHub",
            color: "purple"
        },
    ]



    return (
        <div className="header-buttons">
            {buttons.map(button => (
                <a className={`${button.name} ${button.color}`} href={button.link} target="_blank" rel="noopener noreferrer" key={button.name}>
                    <img src={button.icon} alt={button.name} />
                    <span>{button.label}</span>
                </a>
            ))}
        </div>
    )
}

