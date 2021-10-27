import { useState } from 'react';
import lightmode from './assets/lightmode.svg'
import darkmode from './assets/darkmode.svg'
import coloroptionimage from './assets/coloroption.svg'
import copylink from './assets/link.svg'
import download from './assets/download.svg'
import tagbutton from './assets/tagbutton.svg'
import logo from './assets/logo.svg';
import coffee from './assets/coffee.svg';
import './App.css';


function App() {
  const [colorMode, setColorMode] = useState('light');
  const [iconColors, setIconColors] = useState('gray');
  const colorOptions = ["gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red"];
  const tags = [
    {
      name: "All",
      folder: "all"
    },
    {
      name: "Letters",
      folder: "letters",
    },
    {
      name: "Numbers",
      folder: "numbers",
    },
    {
      name: "Date & Events",
      folder: "date-events",
    },
    {
      name: "Years",
      folder: "years",
    },
    {
      name: "Months",
      folder: "months",
    },
    {
      name: "Days",
      folder: "days",
    },
    {
      name: "Weeks",
      folder: "weeks",
    },
    {
      name: "Time",
      folder: "time",
    },
    {
      name: "Shapes",
      folder: "shapes",
    },
    {
      name: "Arrows",
      folder: "arrows",
    },
    {
      name: "Business & Money",
      folder: "biz-money",
    },
    {
      name: "Media, Reading, & Writing",
      folder: "media-reading-writing",
    },
    {
      name: "Files, Folders, & Data",
      folder: "files-folders-data",
    },
    {
      name: "Internet & Communication",
      folder: "internet-communication",
    },
    {
      name: "Math & Symbols",
      folder: "math-symbols",
    },
    {
      name: "Tasks & Office",
      folder: "tasks-office",
    },
    {
      name: "Misc",
      folder: "misc",
    },
  ];
  const [downloadMode, setDownloadMode] = useState("link");
  const [activeTag, setActiveTag] = useState("all");
  const [tagsVisible, setTagsVisible] = useState(false);
  function importAll(r) {
    return r.keys().map(r);
  }
  const letters = importAll(require.context(`../icons/svg/letters`, false, /\.(svg)$/));
  const numbers = importAll(require.context(`../icons/svg/numbers`, false, /\.(svg)$/));
  const dateEvents = importAll(require.context(`../icons/svg/date-events`, false, /\.(svg)$/));
  const years = importAll(require.context(`../icons/svg/years`, false, /\.(svg)$/));
  const months = importAll(require.context(`../icons/svg/months`, false, /\.(svg)$/));
  const days = importAll(require.context(`../icons/svg/days`, false, /\.(svg)$/));
  const weeks = importAll(require.context(`../icons/svg/weeks`, false, /\.(svg)$/));
  const time = importAll(require.context(`../icons/svg/time`, false, /\.(svg)$/));
  const shapes = importAll(require.context(`../icons/svg/shapes`, false, /\.(svg)$/));
  const arrows = importAll(require.context(`../icons/svg/arrows`, false, /\.(svg)$/));
  const bizMoney = importAll(require.context(`../icons/svg/biz-money`, false, /\.(svg)$/));
  const mediaReadingWriting = importAll(require.context(`../icons/svg/media-reading-writing`, false, /\.(svg)$/));
  const filesFoldersData = importAll(require.context(`../icons/svg/files-folders-data`, false, /\.(svg)$/));
  const internetCommunication = importAll(require.context(`../icons/svg/internet-communication`, false, /\.(svg)$/));
  const mathSymbols = importAll(require.context(`../icons/svg/math-symbols`, false, /\.(svg)$/));
  const tasksOffice = importAll(require.context(`../icons/svg/tasks-office`, false, /\.(svg)$/));
  const misc = importAll(require.context(`../icons/svg/misc`, false, /\.(svg)$/));
  

  function confirmNotification(message) {
    // create a new notification wrapped in innerHTML div below class options-container
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
      <div class="notification-message ${colorMode}">${message}</div>
    `;
    // append the notification to the options-container
    document.querySelector('.options-container').appendChild(notification);
    // remove the notification after 3 seconds
    setTimeout(() => {
      document.querySelector('.options-container').removeChild(notification);
    }, 3000);
  }

  function handleIconClick(icon, e) {
    var fileName = icon.substring(icon.lastIndexOf('/') + 1, icon.indexOf('.'));
    // get attribute folder of clicked icon
    var folder = e.target.getAttribute('folder');
    const iconURL = `https://raw.githubusercontent.com/EliWimmer/notion-icons-repo/main/icons/${iconColors}/${folder}/${fileName}.png`;

    // if downloadMode is link copy link to clipboard
    if (downloadMode === "link") {
      navigator.clipboard.writeText(iconURL).then(() => {
      confirmNotification("Copied to clipboard!");


      }).catch(err => {
        console.log('Something went wrong', err);
      });
      //if downloadMode is file download icon
    } else if (downloadMode === "file") {
      // use fetch to download icon
      fetch(iconURL)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `${fileName}.png`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });

        confirmNotification("Downloading...");
    }
  }

  return (
    <>
      <div className={`body-wrapper ${colorMode}`}>
        <div className="header">
              <h2><a href="https://www.eliwimmer.com" target="_blank" rel="noopener noreferrer">Eli Wimmer</a></h2>
                {/* small coffee.svg icon that says Buy me a coffee next to it*/}
                <a class="bmac" href="https://www.buymeacoffee.com/eliwimmer" target="_blank" rel="noopener noreferrer">
                  <img src={coffee} alt="Buy me a coffee" />
                </a>
                </div>
        <div className={`main-body ${colorMode}`}>
          <div className={`logo ${iconColors}`} ><img src={logo} alt="logo" /></div>
          <div className={`options-container ${colorMode}`}>
            <div className="settings-container">
              <button
                className={`display-mode ${colorMode}`}
                type="button"
                onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              >{
                  colorMode === 'dark' ? <img src={lightmode} alt="lightmode" /> : <img src={darkmode} alt="darkmode" />
                }</button>
              
              <button
                className={`tag-button ${tagsVisible}`}
                onClick={() => setTagsVisible(!tagsVisible)}
              >
                <img
                  src={tagbutton}
                  alt="tag-button"
                />
              </button>
              <div className={`options-divider`} />

              {colorOptions.map((color, index) => {
                return (
                  <button className={`color-option ${colorMode} ${color}`} type="button" onClick={() => setIconColors(color)}>
                    <img src={coloroptionimage} alt="coloroption" />

                  </button>
                )
              }
              )
              }
              <div className={`options-divider`} />

              <button className={`copy-link ${downloadMode}`} type="button"
                onClick={
                  () => {
                    setDownloadMode("link")
                  }}>
                <img src={copylink} alt="copy link" />
              </button>
              <button className={`download ${downloadMode}`} type="button"
                onClick={
                  () => {
                    setDownloadMode("file")
                  }}
              >
                <img src={download} alt="download" />
              </button>
            </div>
            <div className={`category-tags ${tagsVisible}`}>
              {tags.map((tag, index) => {
                return (
                  <div
                    className={`tag ${tag.folder === activeTag ? "active" : 'inactive'}`}
                    onClick={() => setActiveTag(tag.folder)}
                  >{tag.name}</div>
                )
              }
              )
              }
            </div>
          </div>



          <div className="icon-grid">

            {
              activeTag === "all" || activeTag === "letters" ?
                letters.map(icon => {
                  return (
                    <div
                      className={`icon-wrapper ${iconColors} active`}
                      onClick={(e) => handleIconClick(icon.default, e)}
                    >
                      <img folder={"letters"} src={icon.default} alt="icon" />
                    </div>
                  );
                }
                )
                :
                null
            }
              {/* create nao of numbers */}
              {
                activeTag === "all" || activeTag === "numbers" ?
                  numbers.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"numbers"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create shapes icons */}
              {
                activeTag === "all" || activeTag === "shapes" ?
                  shapes.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"shapes"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create date-events  icons */}
              {
                activeTag === "all" || activeTag === "date-events" ?
                  dateEvents.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"date-events"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create days  icons */}
              {
                activeTag === "all" || activeTag === "days" ?
                  days.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"days"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create weeks  icons */}
              {
                activeTag === "all" || activeTag === "weeks" ?
                  weeks.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"weeks"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create months  icons */}
              {
                activeTag === "all" || activeTag === "months" ?
                  months.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"months"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create years  icons */}
              {
                activeTag === "all" || activeTag === "years" ?
                  years.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"years"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create biz-money  icons */}
              {
                activeTag === "all" || activeTag === "biz-money" ?
                  bizMoney.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"biz-money"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create files-folders-data  icons */}
              {
                activeTag === "all" || activeTag === "files-folders-data" ?
                  filesFoldersData.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"files-folders-data"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create time icons */}
              {
                activeTag === "all" || activeTag === "time" ?
                  time.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"time"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create math-symbols icons */}
              {
                activeTag === "all" || activeTag === "math-symbols" ?
                  mathSymbols.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"math-symbols"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create arrows icons */}
              {
                activeTag === "all" || activeTag === "arrows" ?
                  arrows.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"arrows"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create media-reading-writing icons */}
              {
                activeTag === "all" || activeTag === "media-reading-writing" ?
                  mediaReadingWriting.map(icon => {
                    return (
                      <div

                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"media-reading-writing"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }

              {/* create internet-communication icons */}
              {
                activeTag === "all" || activeTag === "internet-communication" ?
                  internetCommunication.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"internet-communication"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create tasks-office icons */}
              {
                activeTag === "all" || activeTag === "tasks-office" ?
                  tasksOffice.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"tasks-office"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }
              {/* create misc icons */}
              {
                activeTag === "all" || activeTag === "misc" ?
                  misc.map(icon => {
                    return (
                      <div
                        className={`icon-wrapper ${iconColors} active`}
                        onClick={(e) => handleIconClick(icon.default, e)}
                      >
                        <img folder={"misc"} src={icon.default} alt="icon" />
                      </div>
                    );
                  }
                  )
                  :
                  null
              }



          </div>
        </div>
      </div>
    </>
  )

}
export default App;
