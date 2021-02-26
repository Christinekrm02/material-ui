import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Ubuntu, sans-serif",
  },
  register: {
    color: "orange",
  },
  navbarContainer: {
    display: `flex`,
    justifyContent: `space-between`,
    maxWidth: "lg",
  },
  navItems: {
    display: `flex`,
    justifyContent: `flex-end`,
  },
  navLink: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
}));

const navLinks = [
  { title: `About`, path: `/about-us` },
  { title: `Blog`, path: `/blog` },
  { title: `Contact`, path: `/contact` },
  { title: `More`, path: `/more` },
];

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.navbarContainer}>
          <IconButton className={classes.register}>
            <PersonAddIcon fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navItems}>
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.navLink}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
