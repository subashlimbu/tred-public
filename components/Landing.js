import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		textAlign: 'left-align',
		[theme.breakpoints.down('xs')]: {}
	},
	landing: {
		position: 'relative',
		backgroundColor: theme.palette.primary.main,
		backgroundImage: 'url("/img/big-leaves-desktop.png")',
		backgroundSize: 'cover',
		marginTop: '12vh',
		height: '88vh',
		minHeight: '88vh',
		width: '100%',
		paddingTop: '12vh',
		[theme.breakpoints.down('md')]: {
			backgroundImage: 'url("/img/big-leaves-tab.png")',
			paddingLeft: '5vw',
			paddingTop: '10vh',
			paddingBottom: '5vh',
			minHeight: 'fit-content',
			height: '520px'
		},
		[theme.breakpoints.down('sm')]: {
			backgroundImage: 'url("/img/big-leaves-mobile.png")',
			paddingBottom: '5vh',
			minHeight: 'fit-content',
			height: '320px',
			paddingLeft: '0px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	},
	textSecondary: {
		color: theme.palette.primary.main
	},
	tred: {
		display: 'inline-block',
		fontSize: '80px',
		width: 'max-content',
		fontWeight: 600,
		fontFamily: theme.typography.bodyFontFamily,
		[theme.breakpoints.down('md')]: {
			fontSize: '55px'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '32px'
		}
	},
	subText: {
		display: 'inline-block',
		marginLeft: '0px',
		fontSize: '35px',
		fontFamily: theme.typography.bodyFontFamily,
		fontWeight: 200,
		width: 'max-content',
		[theme.breakpoints.down('md')]: {
			fontSize: '25px',
			width: '80vw'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '17px',
			marginTop: '1vh'
		}
	},
	subTextBold: {
		fontWeight: 600
	},
	icon: {
		height: '250px',
		width: '250px'
	},
	top: {
		marginTop: '10vh',
		marginBottom: '15vh'
	},
	link: {
		color: 'white',
		margin: '0 20px',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none'
		}
	},
	button: {
		fontSize: '17px',
		backgroundColor: theme.palette.brown,
		borderRadius: '5px',
		color: theme.palette.primary.main,
		width: '345px',
		marginTop: '5vh',
		[theme.breakpoints.down('md')]: {
			width: '300px'
		},
		[theme.breakpoints.down('sm')]: {
			width: '200px',
			fontSize: '15px'
		}
	}
}));

export default function Landing(props) {
	const { landingData, handleOpen } = props;
	const classes = useStyles();

	return (
		<Box className={classes.landing} minHeight='100vh'>
			<Container className={classes.top} maxWidth='lg'>
				<Grid className={classes.topGrid} container alignItems='center'>
					<Grid item className={classes.grid} xs={12} sm={6}>
						<Box className={classes.textSecondary}>
							<Typography className={classes.tred}>{landingData.main}</Typography>
						</Box>
						<Box className={classes.textSecondary}>
							<Typography className={classes.subText}>
								Our app helps you
								<span className={classes.subTextBold}> track, reduce, and offset </span>
								your carbon footprint
							</Typography>
						</Box>
						<Button onClick={handleOpen} className={classes.button} variant='contained'>
							Join our community
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
