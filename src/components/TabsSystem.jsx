import React from "react";
import BackButton from './utils/BackButton'

const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>

      <BackButton />
    </div>
  );
};
export default Tabs;