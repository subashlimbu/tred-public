import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.primary.main,
    fontWeight: 400,
    marginLeft: "10px",
    marginRight: "20px",
    fontFamily: theme.typography.logoFontFamily,
    display: "inline",
    fontSize: "50px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
    },
  },
}));

export default function Logo(props) {
  const classes = useStyles();
  const { text } = props;

  return <Typography className={classes.logo}>{text}</Typography>;
}
