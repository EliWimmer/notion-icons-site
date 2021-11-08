

export default function Changelog() {

    const changelog = [
        {
            version: '1.1.0',
            date: '2021-11-7',
            app: [
                'First implentation of mobile optimized view.',
                'Added info menu with credits, usage guide, and changelog',
                'Added a new splash page on first load that can be revisited if desired.',
                'Update design language and app design overall',
                'Performance improvements'
            ],
            icons : [

            ],
            fixes : [
                'Fixed some unusual behavior with the color picker.',
                'Fixed an issue that would cause the app to flash white on reload even if darkmode is set',
                'Fixed issue with fancy notion icon being too transparent',
                'Fixed miscategorization of Nature & Elements Icons under Food & Drink'
            ]
        },
        {
            version: '1.0.0',
            date: '2021-11-1',
            app: [
                'First implentation of the app.',
            ],
            icons : [
                'Added first icons'
            ],
            fixes : [
                'None',
            ]
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
                                {item.icons.map((icon, index) => (
                                    <li key={index}>{icon}</li>
                                ))}
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
    )
}