import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const navLinks = [
  { title: `About`, path: `/about-us` },
  { title: `Blog`, path: `/blog` },
  { title: `Contact`, path: `/contact` },
  { title: `More`, path: `/more` },
];

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
