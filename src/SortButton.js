import React from "react";
import "./SortButton.css";

const SortButton = (props) => {
  return (
    <button onClick={props.changeOrder} className="bg-warning" type="submit">
      SORT COUNTRY SCORES BY TOTAL
    </button>
  );
};

export default SortButton;
