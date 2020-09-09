import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import { Element } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundColor: "#F5FFF5",
    marginTop: "80px",
    padding: "20px",
  },
  topBar: {
    backgroundColor: theme.palette.midGreen,
    color: theme.palette.primary.main,
    position: "fixed",
    top: "0",
    height: "12vh",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    color: theme.palette.primary.main,
    fontWeight: 400,
    textAlign: "left",
    paddingLeft: "32px",
    textTransform: "lowercase",
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
  cardContainer: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
  block: {
    marginBottom: "10px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
  },
  blockTitle: {
    fontWeight: 500,
    fontFamily: theme.typography.headerFontFamily,
    fontSize: theme.titleDesktop,
    color: theme.palette.midGreen,
    width: "60vw",
    marginTop: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.titleTablet,
      marginBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.titlePhone,
      width: "70vw",
      lineHeight: "20px",
    },
  },
  subTitle: {
    fontWeight: 500,
    fontFamily: theme.typography.headerFontFamily,
    fontSize: theme.titleTablet,
    color: theme.palette.midGreen,
    width: "60vw",
    marginTop: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.titleTablet,
      marginBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.titlePhone,
      width: "70vw",
      lineHeight: "20px",
    },
  },
  text: {
    marginBottom: "20px",
    fontWeight: "200",
    fontSize: theme.textDesktop,
    width: "63vw",
    color: theme.palette.midGreen,
    fontFamily: theme.typography.bodyFontFamily,
    lineHeight: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.textTablet,
      lineHeight: "24px",
      marginBottom: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.textPhone,
      width: "65	vw",
    },
  },
}));

export default function Product() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      <AppBar className={classes.topBar} position="static">
        <Button
          onClick={() => router.push("/")}
          color="inherit"
          className={classes.logo}
        >
          tred
        </Button>
      </AppBar>
      <Box className={classes.backGround}>
        <Container className={classes.cardContainer} maxWidth="md">
          <Element className={classes.scrollLocation} name="productScroll" />
          <Box className={classes.block}>
            <Typography className={classes.blockTitle} variant="h5">
              Privacy Policy
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              Last Update: September 9th, 2020
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              We are glad that you are interested in Tred Earth. In order to
              provide you with Our Service, We might need certain information
              about you (including personally identifiable information -
              information that identifies you personally). This Privacy Policy
              explains what information We collect about you, for what purpose
              and what We use it for. It also explains what rights you have with
              regard to the data processing operations affecting you.
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              This page informs you of Our policies regarding the collection,
              use and disclosure of personal data when you use Our Service and
              the choices you have associated with that data.
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              We use your data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this policy. Unless otherwise defined in this
              Privacy Policy, the terms used in this Privacy Policy have the
              same meanings as in Our Terms and Conditions.
            </Typography>
          </Box>
          <Box className={classes.block}>
            <Typography className={classes.subTitle} variant="h5">
              Definitions
            </Typography>
            <Typography className={classes.text}>
              Tred instantly converts every pound you spend into the amount of
              carbon emitted. We’ll group your carbon footprint into useful
              categories like &apos;Groceries&apos; and &apos;Flights&apos;.
            </Typography>
          </Box>
          <Box className={classes.block}>
            <Typography className={classes.blockTitle} variant="h5">
              Retention of Data
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              Tred Earth will retain your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your Personal Data to the extent necessary to
              comply with Our legal obligations (for example, if We are required
              to retain your data to comply with applicable laws), resolve
              disputes and enforce Our legal agreements and policies.
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              Tred Earth will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer periods.
            </Typography>
          </Box>
          <Box className={classes.block}>
            <Typography className={classes.blockTitle} variant="h5">
              Transfer of Data
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
            </Typography>
            <Typography className={classes.text} paragraph={true}>
              We will take all the steps reasonably necessary to ensure that
              your data is treated securely and in accordance with this Privacy
              Policy, and no transfer of your Personal Data will take place to
              an organisation or a country unless there are adequate controls in
              place, including the security of your data and other personal
              information.
            </Typography>
          </Box>
          <Box className={classes.block}>
            <Typography className={classes.blockTitle} variant="h5">
              Security of Data
            </Typography>
            <Typography className={classes.text}>
              The security of your data is important to Us. But remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While We strive to use commercially
              acceptable means to protect your Personal Data, We cannot
              guarantee its absolute security.
            </Typography>
          </Box>
          <Box className={classes.block}>
            <Typography className={classes.blockTitle} variant="h5">
              Changes to This Privacy Policy
            </Typography>
            <Typography className={classes.text}>
              We may update Our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              <br />
              <br />
              We will let you know via email prior to the change becoming
              effective and update the "effective date" at the top of this
              Privacy Policy.
              <br />
              <br />
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
