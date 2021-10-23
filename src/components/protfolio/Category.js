import "./Protfolio.css";
import React from "react";
import Button from "@mui/material/Button";

export default function Category({ filterItems }) {
  return (
    <div className="protfolio-category">
      <Button variant="outlined" onClick={() => filterItems("all")}>
        All
      </Button>
      <Button variant="outlined" onClick={() => filterItems("react")}>
        React
      </Button>
      <Button variant="outlined" onClick={() => filterItems("javascript")}>
        Javascript
      </Button>
      <Button variant="outlined" onClick={() => filterItems("html")}>
        HTML
      </Button>
    </div>
  );
}
