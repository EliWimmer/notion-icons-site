import "../css/iconFolders.css";

export default function IconFolders(props) {
  /*
    *  ICON FOLDERS
    *  =============
    * Arrows
    * Business & Money
    * Body, Health, & Fitness
    * Brands & Logos
    * Calendar & Events
    * Days
    * Weeks
    * Months
    * Years
    * Files, Folders, & Data
    * Food & Drink
    * Internet & Communication
    * Letters
    * Math & Symbols
    * Media, Reading, & Writing
    * Numbers
    * Shapes
    * Tasks, Projects, & Goals
    * Time
    * 

*/

  const folders = [
      {
        name: "All",
        iconFolderTag: "all",
      },
    {
      name: "Arrows",
      iconFolderTag: "arrows",
    },
    {
      name: "Business & Money",
      iconFolderTag: "biz-money",
    },
    {
      name: "Body, Health, & Fitness",
      iconFolderTag: "body-health-fitness",
    },
    {
      name: "Brands & Logos",
      iconFolderTag: "brands-logos",
    },
    {
      name: "Calendar & Events",
      iconFolderTag: "calendar-events",
    },
    {
      name: "Days",
      iconFolderTag: "days",
    },
    {
      name: "Weeks",
      iconFolderTag: "weeks",
    },
    {
      name: "Months",
      iconFolderTag: "months",
    },
    {
      name: "Years",
      iconFolderTag: "years",
    },
    {
      name: "Files, Folders, & Data",
      iconFolderTag: "files-folders-data",
    },
    {
      name: "Food & Drink",
      iconFolderTag: "food-drink",
    },
    {
      name: "Internet & Communication",
      iconFolderTag: "internet-communication",
    },
    {
      name: "Letters",
      iconFolderTag: "letters",
    },
    {
      name: "Math & Symbols",
      iconFolderTag: "math-symbols",
    },
    {
      name: "Media, Reading, & Writing",
      iconFolderTag: "media-reading-writing",
    },
    {
      name: "Numbers",
      iconFolderTag: "numbers",
    },
    {
      name: "Shapes",
      iconFolderTag: "shapes",
    },
    {
      name: "Tasks, Projects, & Goals",
      iconFolderTag: "tasks-projects-goals",
    },
    {
      name: "Time",
      iconFolderTag: "time",
    },
  ];

  return (
    <div className={`icon-folders show-menu-${props.foldersVisibility} darkmode-${props.darkMode}`}>
      {folders.map((folder, index) => {
        return (
          <div
            className={`icon-folder-tags folder-active-${props.activeIconFolder === folder.iconFolderTag}`}
            key={index}
            onClick={() => {
              props.onClick(folder.iconFolderTag);
            }}
          >
            {folder.name}
          </div>
        );
      })}
    </div>
  );
}
