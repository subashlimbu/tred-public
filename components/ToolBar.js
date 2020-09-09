import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./SideBar";
import Logo from "./Logo";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  topBar: {
    backgroundColor: theme.palette.midGreen,
    color: theme.palette.primary.main,
    position: "fixed",
    top: "0",
    height: "12vh",
    display: "flex",
    justifyContent: "center",
  },
  leaf: {
    width: "25px",
    [theme.breakpoints.up("sm")]: {
      width: "30px",
    },
  },
  titleContainer: {
    flexGrow: 1,
  },
  titleLink: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  link: {
    color: theme.palette.primary.main,
    marginRight: "30px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  buttonText: {
    fontSize: "20px",
  },
}));

export default function ToolBar() {
  const router = useRouter();
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, isOpen: open });
  };

  return (
    <AppBar className={classes.topBar} position="static">
      <Toolbar>
        <Box className={classes.titleContainer}>
          <Link
            activeClass="active"
            to="topScroll"
            spy
            smooth
            duration={500}
            offset={-100}
            className={classes.titleLink}
          >
            <Logo text="tred" />
          </Link>
        </Box>
        <Hidden smDown>
          <Link
            className={classes.link}
            activeClass="active"
            to="productScroll"
            spy
            smooth
            offset={-140}
            duration={500}
          >
            <Button color="inherit" className={classes.buttonText}>
              Our Product
            </Button>
          </Link>
          <Link
            className={classes.link}
            activeClass="active"
            to="whyScroll"
            spy
            offset={-120}
            smooth
            duration={500}
          >
            <Button color="inherit" className={classes.buttonText}>
              Why
            </Button>
          </Link>
          <Link
            className={classes.link}
            activeClass="active"
            to="peopleScroll"
            spy
            offset={-120}
            smooth
            duration={500}
          >
            <Button color="inherit" className={classes.buttonText}>
              Who
            </Button>
          </Link>
          <Link
            href="/FAQs"
            className={classes.link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-140}
            duration={500}
          >
            <Button
              onClick={() => router.push("/FAQs")}
              color="inherit"
              className={classes.buttonText}
            >
              FAQs
            </Button>
          </Link>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            onClick={toggleDrawer(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <SideBar toggleDrawer={toggleDrawer} isOpen={state.isOpen} />
    </AppBar>
  );
}
