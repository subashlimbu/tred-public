import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from './SectionHeader';

const useStyles = makeStyles((theme) => ({
	backGround: {
		position: 'relative',
		backgroundColor: '#F5FFF5',
		paddingTop: '0px',
		paddingBottom: '0px'
	},
	cardContainer: {
		paddingBottom: '30px',
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '100px',
		[theme.breakpoints.down('md')]: {
			marginLeft: '30px'
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: '5px'
		}
	},
	block: {
		marginTop: '25px',
		marginBottom: '25px',
		position: 'relative',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			marginTop: '0px',
			marginBottom: '0px',
			alignItems: 'flex-start'
		}
	},
	blockTitle: {
		fontWeight: 800,
		fontFamily: theme.typography.headerFontFamily,
		fontSize: theme.titleDesktop,
		color: theme.palette.midGreen,
		marginBottom: '30px',
		width: '60vw',
		[theme.breakpoints.down('md')]: {
			fontSize: theme.titleTablet,
			marginBottom: '15px'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.titlePhone,
			width: '70vw',
			lineHeight: '20px'
		}
	},
	text: {
		fontWeight: '200',
		fontSize: theme.textDesktop,
		width: '63vw',
		color: theme.palette.midGreen,
		fontFamily: theme.typography.bodyFontFamily,
		lineHeight: '30px',
		[theme.breakpoints.down('md')]: {
			fontSize: theme.textTablet,
			lineHeight: '24px',
			marginBottom: '30px'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.textPhone,
			width: '65	vw'
		}
	},
	mockup1: {
		width: '300px',
		height: '613px',
		position: 'absolute',
		right: '2vw',
		top: '270px',
		[theme.breakpoints.down('md')]: {
			width: '211px',
			height: '459px',
			top: '180px',
			right: '4vw'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	mockup2: {
		width: '300px',
		height: '613px',
		position: 'absolute',
		right: '2vw',
		top: '800px',
		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	icons: {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		right: '5vw'
	}
}));

export default function Product() {
	const classes = useStyles();

	return (
		<Box className={classes.backGround}>
			<SectionHeader header='Our product' />
			<Container className={classes.cardContainer} maxWidth='md'>
				<Element className={classes.scrollLocation} name='productScroll' />
				<Box className={classes.block}>
					<Typography className={classes.blockTitle} variant='h5'>
						Track your carbon footprint
					</Typography>
					<Typography className={classes.text}>
						Tred instantly converts every pound you spend into the amount of carbon emitted. We’ll
						group your carbon footprint into useful categories like &apos;Groceries&apos; and
						&apos;Flights&apos;.
					</Typography>
					<Hidden mdUp>
						<img className={classes.icons} src='img/icons/phone-icon.svg' alt='Cell phone Icon' />
					</Hidden>
				</Box>
				<Box className={classes.block}>
					<Typography className={classes.blockTitle} variant='h5'>
						Reduce your impact
					</Typography>
					<Typography className={classes.text}>
						Some things are unavoidable. Some things can be changed. Where you can change, get
						personalised suggestions. Where you can’t, choose to offset.
					</Typography>
					<Hidden mdUp>
						<img className={classes.icons} src='img/icons/plant-icon.svg' alt='Little plant Icon' />
					</Hidden>
				</Box>
				<Box className={classes.block}>
					<Typography className={classes.blockTitle} variant='h5'>
						Invest in your future
					</Typography>
					<Typography className={classes.text}>
						Find an easy and simple way to invest in sustainable businesses.
					</Typography>
					<Hidden mdUp>
						<img className={classes.icons} src='img/icons/poll-icon.svg' alt='Bar graph Icon' />
					</Hidden>
				</Box>
				<Box className={classes.block}>
					<Typography className={classes.blockTitle} variant='h5'>
						How it works
					</Typography>
					<Typography className={classes.text}>
						All spending has an impact on the environment. At tred, we have developed a way of
						understanding the carbon emissions of every transaction, from a weekly shop to the daily
						commute and even the special one-offs.
						<br />
						<br />
						All you need to do is link your debit and credit cards to the tred app and you’ll see
						your carbon footprint. We’ll give daily updates, monthly summaries and personalised
						suggestions on how to improve, with options to offset where you can’t.
					</Typography>
					<Hidden mdUp>
						<img className={classes.icons} src='img/icons/cc-icon.svg' alt='Credit Card Icon' />
					</Hidden>
				</Box>
			</Container>
			<img className={classes.mockup1} src='/img/phone-mockup-1.png' alt='iPhone mockup' />
		</Box>
	);
}
