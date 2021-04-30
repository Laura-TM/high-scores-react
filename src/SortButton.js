import React from "react";
import "./SortButton.css";

const SortButton = (props) => {
  return (
    <button onClick={props.changeOrder} className="bg-warning" type="submit">
      SORT COUNTRY SCORES BY TOTAL <span className="bg-warning arrow-icon">&#8597;</span>
    </button>
  );
};

export default SortButton;
