export default function Changelog() {
  const changelog = [
    {
      version: '1.2.0',
      date: '2021-08-11',
      app: [
        "Changed how icons both download and render. Copying link will provide icons that look incredibly sharp in Notion, and load instantly.",
        "Small UI Update."
      ],
      icons: ["-"],
      fixes: [
        "-"
      ]
    },
    {
      version: "1.1.0",
      date: "2021-11-7",
      app: [
        "First implentation of mobile optimized view.",
        "Added info menu with credits, usage guide, and changelog",
        "Added a new splash page on first load that can be revisited if desired.",
        "Update design language and app design overall",
        "Performance improvements",
      ],
      icons: [
        // 'daimond-alt',
        // 'scales',
        // 'speech-bubble-simple',
        // 'speech-bubble-filled',
        // 'speech-bubble-filled-alt',
        // 'sword',
        // 'printer',
        // 'gavel',
        // 'landscape',
        // 'musical-note',
        // 'cloudy-day',
        // 'cloudy-night',
        {
          name: "outline-daimond-alt",
          category: "shapes",
        },
        {
          name: "filled-daimond-alt",
          category: "shapes",
        },
        {
          name: "scales",
          category: "biz-money",
        },
        {
          name: "speech-bubble-simple",
          category: "internet-communication",
        },
        {
          name: "speech-bubble-filled",
          category: "internet-communication",
        },
        {
          name: "speech-bubble-filled-alt",
          category: "internet-communication",
        },
        {
          name: "sword",
          category: "science-history",
        },
        {
          name: "printer",
          category: "files-folders-data",
        },
        {
          name: "gavel",
          category: "biz-money",
        },
        {
          name: "landscape",
          category: "nature-elements",
        },
        {
          name: "musical-note",
          category: "media-reading-writing",
        },
        {
          name: "cloudy-day",
          category: "nature-elements",
        },
        {
          name: "cloudy-night",
          category: "nature-elements",
        },
      ],
      fixes: [
        "Fixed some unusual behavior with the color picker.",
        "Fixed an issue that would cause the app to flash white on reload even if darkmode is set",
        "Fixed issue with fancy notion icon being too transparent",
        "Fixed miscategorization of Nature & Elements Icons under Food & Drink",
      ],
    },
    {
      version: "1.0.0",
      date: "2021-11-1",
      app: ["First implentation of the app."],
      icons: ["Added first icons"],
      fixes: ["None"],
    },
  ];

  return (
    <>
      {/* <h3>v1.1</h3>
          <div className="modal-changelog">
              <div className="changelog-category">
                <h4>App Design</h4>
                <ul>
                  <li>Added Dark Mode</li>
                </ul>
                </div>
              <div className="changelog-category">

                <h4>App Features</h4>
                <ul>
                  <li>Added Dark Mode</li>
                </ul>
                </div>
              <div className="changelog-category">
                <h4>Icons</h4>
                <ul>
                  <li>Added Dark Mode</li>
                </ul>
              </div>
              </div> */}

      {changelog.map((item, index) => (
        <div className="modal-changelog" key={index}>
          <h3>v {item.version}</h3>
          <div className="changelog-category">
            <h4>App</h4>
            <ul>
              {item.app.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>
          <div className="changelog-category">
            <h4>Icons</h4>
            <ul>
              {item.icons.map((icon, index) =>
                icon.name ? (
                  <>
                    <img
                      style = {{"margin":"4px","height":"24px"}}
                      className="gray"
                      key={index + icon.category + "fancy"}
                      src={`https://raw.githubusercontent.com/EliWimmer/notion-icons-site/master/src/assets/icons/${icon.category},simple,${icon.name}.svg`}
                      alt={icon.name}
                    />
                    <img
                      style = {{"margin":"4px","height":"24px"}}
                      className="gray"
                      key={index + icon.name + "simple"}
                      src={`https://raw.githubusercontent.com/EliWimmer/notion-icons-site/master/src/assets/icons/${icon.category},fancy,${icon.name}.svg`}
                      alt={icon.name}
                    />
                  </>
                ) : (
                  <li key={index}>{icon}</li>
                )
              )}
            </ul>
          </div>
          <div className="changelog-category">
            <h4>Fixes</h4>
            <ul>
              {item.fixes.map((fix, index) => (
                <li key={index}>{fix}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
