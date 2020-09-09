import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  html: {
    color: theme.palette.midGreen,
    WebkitFontSmoothing: "antialiased",
    scrollBehavior: "smooth",
  },
  root: {
    flexGrow: 1,
    width: "100%",
  },
  topBar: {
    backgroundColor: theme.palette.midGreen,
    color: theme.palette.primary.main,
    position: "fixed",
    top: "0",
    height: "12vh",
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
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  blockTitle: {
    fontWeight: 800,
    fontFamily: "Playfair Display, serif",
    fontSize: theme.titleSmall,
    color: theme.palette.charcoal,
    marginTop: "100px",
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.titleBig,
    },
  },
  content: {
    fontSize: theme.textSmall,
  },
}));

export default function FAQs() {
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
      <Grid alignItems="stretch" spacing={4} m={60} container>
        <Grid item xs={12} m={100}>
          <Card border={0} className={classes.card}>
            <Paper className={classes.paper}>
              <Typography className={classes.blockTitle} variant="h5" p={50}>
                Frequently Asked Questions
              </Typography>
            </Paper>
            <Container className={classes.cardContainer} maxWidth="md">
              <Accordion>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    What is Tred?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    Tred is a platform designed to bring together socially
                    conscious individuals who want to understand more about
                    their impact on the environment, and what can be done to
                    help protect our future.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    At Tred we want to put our money where our mouth is; our app
                    allows you to monitor and understand the impact that your
                    spending has on the environment. Is your grocery shop
                    eco-friendly? What’s the real impact of that holiday you
                    just took? The Tred app provides the answers you need to
                    help you make informed decisions.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    Oh, and we also have lots of brilliant articles and
                    information to keep you up to date on the world of climate
                    change! Whether you’re interested in sustainable fashion,
                    business improvement or modes of transport, we’ve got you
                    covered!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    What is my carbon footprint and why is it important?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    Carbon footprint doesn’t correlate to the size of your foot
                    – but it can tell you all about the environmental impact of
                    the heat, water, plastic and many other things that you use
                    on a daily basis!
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    Every second greenhouse gasses such as carbon dioxide,
                    methane and nitrous oxide are emitted into the atmosphere.
                    The earth needs these to survive, but there is a careful
                    balance, and humans have been upsetting this balance in
                    recent years by increased greenhouse gas emissions, caused
                    by things such as planes and plastics.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    Your carbon footprint is the amount of greenhouse gasses
                    that you as an individual have caused to be released. This
                    could be through anything, from using hot water to buying a
                    plastic bag, to taking a flight halfway around the world.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    Your carbon footprint is measured as an amount of Carbon
                    Dioxide (though the calculation takes the other greenhouse
                    gasses into account too!), which tells you what your overall
                    impact on the environment is.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    How does the carbon footprint calculator work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    The Tred carbon footprint calculator is able create an
                    accurate picture of your personal carbon footprint through
                    your spending. Each different type of purchase, from bananas
                    to bus tickets, generates a different amount of greenhouses
                    gasses, and has its own unique impact on the environment.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    Our algorithm analyses every purchase you make. The first
                    step is to categorise every transaction. Is it a flight?
                    Groceries? Petrol? We then combine this information with a
                    wide variety of data sets which allows us to translate this
                    information into its carbon emissions. We’ve done all the
                    hard work so you don’t have to. This gives you an accurate
                    calculation of your personalised carbon footprint. Not only
                    this – it also gives you a detailed breakdown across
                    different areas, showing your where your impact is greatest
                    and helping nudge you towards a more sustainable way of
                    life.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    What is Carbon Offsetting?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    The world has a delicate ecosystem, and most human actions
                    are putting more greenhouse gasses into the atmosphere. But
                    some actions do the opposite, reducing the amount of
                    greenhouse gasses in the atmosphere. This balances out the
                    greenhouse gasses in a process called carbon offsetting.
                    There are 2 types of carbon offsetting:
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    What offsetting project do you support?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    We have partnered with a UK based tree planting company
                    called ForestCarbon. Together, we are currently supporting
                    the restoration of native woodland in Perthshire, Scotland.
                    We are starting by planting new upland oak wood before other
                    species to support a wide diversity of wildlife. In addition
                    to capturing carbon, this project will increase the overall
                    connectivity of woodland habitats within the highlands and
                    provide and fantastic resource for locals and tourists to
                    enjoy. The project has been certified by the Woodland Carbon
                    Code.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    How can I become Carbon Neutral?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    At Tred we’re striving for a carbon neutral world! This
                    means that all the greenhouses gasses humans produce are
                    being offset through carbon offsetting. This will help stop
                    (or at least slow) the process of climate change and
                    ecological decline that the world is experiencing, and means
                    we can live healthier, happier lives. To become carbon
                    neutral you need to accurately measure your carbon
                    footprint, and then offset this carbon. One of the ways to
                    do this would be planting lots of trees in your garden
                    (though you might run out of space pretty quickly!).
                    <Typography className={classes.content} paragraph={true}>
                      At Tred, we want to help you become carbon neutral so
                      we’ve set up just the right process to help you. We
                      accurately measure your carbon footprint, and for around
                      the price of a couple of coffees (£12/month) we can offset
                      your carbon for you – we’ll make sure all the trees are
                      planted so you can happily continue your day, knowing that
                      you’re supporting mother nature!
                    </Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    I’m just one person how can I make a difference?{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    At Tred we want to dream big. By offsetting your carbon you
                    are doing more than the vast majority of the world and
                    setting a brilliant example to those around you. It’s the
                    individuals who stand up for what they believe and take
                    action that create the tidal wave. By acting and choosing to
                    make a difference you are becoming one of the most important
                    people in the climate change movement today.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    At Tred we want to show each and every person how they can
                    make a difference, and that starts with understanding, and
                    educating yourself. Talk to people about climate change,
                    about carbon offsetting. Understanding what your monthly
                    spend means in terms of greenhouse gases and sharing this
                    with others builds the foundations for a sustainable future.
                    We guarantee you’ll quickly see the difference you can make!
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.content}>
                    I'm linking my bank accounts, how safe is it and who else
                    can see my transactions?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content}>
                    At Tred we take your security seriously. Your transactions
                    are completely private to you and can’t be viewed by anyone
                    else. We don’t store any transaction information; as we
                    said, this is private to you and only you. If you have any
                    other questions about security, please reach out to us.
                    We’re always happy to answer any questions, and love to hear
                    from our community.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className={classes.card}>
                <AccordionSummary
                  className={classes.content}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  my={30}
                >
                  <Typography className={classes.content}>
                    I've got some thought on how to improve the app, can I get
                    in touch?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.card}>
                  <Typography className={classes.content} paragraph={true}>
                    We’d love to hear from you! Drop us an email at
                    hello@tred.earth
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    At Tred we are always striving to improve, and we think that
                    the more open conversations and feedback we can get the
                    better.
                  </Typography>
                  <Typography className={classes.content} paragraph={true}>
                    We’re looking forward to hearing your thoughts!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Container>
          </Card>
        </Grid>
      </Grid>
      <Footer my={10} />
    </div>
  );
}
