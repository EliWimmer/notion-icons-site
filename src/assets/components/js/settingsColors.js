import "../css/settingsColors.css";

export default function SettingsColors(props) {
  const colors = [
    "gray",
    "brown",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "red",
  ]
  return (
    <>
      {colors.map((color, index) => {
        return (
            <div
              className={`color-option ${color} ${props.iconColor === color ? "active-color" : ""}`}
              onClick={() => props.onClick(color)}
            ></div>
        );
      })}
    </>
  );
}
