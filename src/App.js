import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "./App.css";
import { useState } from "react";

function App() {
  const [tab,setTab] = useState("tab1")
  const [profileContent,setProfileContent] = useState("")
  const [settingsContent,setSettingsContent] = useState("")
  return (
    <div className="App">
      <Tabs defaultActiveTab="tab1">
        <TabList>
          <Tab id={tab} onKeyUp={() => setTab("tab1")} disabled={tab==="tab1"}>Profile</Tab>
          <Tab id={tab} onKeyUp={() => setTab("tab2")} disabled={tab==="tab2"}>Settings</Tab>
          <Tab id={tab} onKeyUp={() => setTab("tab3")} disabled={tab==="tab3"}>Messages</Tab>
        </TabList>
     
          <TabPanel id={tab}><h2>Profile Content 
            </h2>
            <textarea value={profileContent} onChange={(e) => setProfileContent(e.target.value)}></textarea>
          </TabPanel>
          <TabPanel id={tab}>
            <h2>Settings Content</h2>
            <textarea value={settingsContent} onChange={(e) => setSettingsContent(e.target.value)}></textarea></TabPanel>
          <TabPanel id={tab}>Messages Content</TabPanel>
       
      </Tabs>
    </div>
  );
}

export default App;
