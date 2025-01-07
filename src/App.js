import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [tab, setTab] = useState("tab1");
  const [profileContent, setProfileContent] = useState("");
  const [settingsContent, setSettingsContent] = useState("");
  const messageRef = useRef();
  return (
    <div className="App">
      {console.log("tab", tab)}
      <Tabs activetab={tab}>
        <TabList>
          <Tab
            id={tab}
            onKeyUp={() => setTab("tab1")}
            // className={tab === "tab1" ? "active" : "inactive"}
          >
            Profile
          </Tab>
          <Tab
            id={tab}
            onKeyUp={() => setTab("tab2")}
            // className={tab === "tab2" ? "active" : "inactive"}
          >
            Settings
          </Tab>
          <Tab
            id={tab}
            onKeyUp={() => setTab("tab3")}
            // className={tab === "tab3" ? "active" : "inactive"}
          >
            Messages
          </Tab>
        </TabList>

        <TabPanel id={tab}>
          <h2>Profile Content</h2>
          <textarea
            value={profileContent}
            onChange={(e) => setProfileContent(e.target.value)}
          ></textarea>
        </TabPanel>
        <TabPanel id={tab}>
          <h2>Settings Content</h2>
          <textarea
            value={settingsContent}
            onChange={(e) => setSettingsContent(e.target.value)}
          ></textarea>
        </TabPanel>
        <TabPanel id={tab}>
          <h2>Message Content</h2>
          <textarea ref={messageRef} value={messageRef.current}></textarea>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
