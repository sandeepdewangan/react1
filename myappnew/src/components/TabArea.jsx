import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

export default function TabArea() {
  // state
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = "Please select a topic";

  function handleClick(topic) {
    setSelectedTopic(topic);
  }

  if (selectedTopic) {
    switch (selectedTopic) {
      case "python":
        tabContent = <div>Python is for begineers.</div>;
        break;
      case "c#":
        tabContent = <div>C# is for begineers.</div>;
        break;
      case "js":
        tabContent = <div>JS is for begineers.</div>;
        break;
      case undefined:
        tabContent = "Please select a topic";
    }
  }

  return (
    <>
      <TabButton
        onClick={() => handleClick("python")}
        isSelected={selectedTopic === "python"}
      >
        Python
      </TabButton>
      <TabButton
        onClick={() => handleClick("c#")}
        isSelected={selectedTopic === "c#"}
      >
        C#
      </TabButton>
      <TabButton
        onClick={() => handleClick("js")}
        isSelected={selectedTopic === "js"}
      >
        JavaScript
      </TabButton>

      {tabContent}
    </>
  );
}
