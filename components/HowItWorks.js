import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardIcon from './icons/CardIcon';

const useStyles = makeStyles((theme) => ({
	textSecondary: {
		color: theme.palette.textPrimary.main,
		fontWeight: 200,
		fontSize: '16px',
		paddingBottom: '20px',
		paddingTop: '20px',
		[theme.breakpoints.up('sm')]: {
			paddingTop: '80px',
			paddingBottom: '80px'
		}
	},
	paper: {
		backgroundColor: theme.palette.beige
	},
	titleFont: {
		fontWeight: 800,
		fontFamily: theme.typography.headerFontFamily,
		fontSize: theme.titleSmall,
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.textDesktop
		}
	},
	card: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: theme.palette.beige
	},
	block: {
		paddingTop: '20px',
		paddingBottom: '20px',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			paddingTop: '40px',
			paddingBottom: '40px'
		}
	},
	icon: {
		height: '180px',
		width: '180px',
		marginBottom: '10px',
		[theme.breakpoints.up('sm')]: {
			marginBottom: '0px'
		}
	},
	paragraph: {
		marginTop: '20px',
		marginBottom: '0px',
		fontSize: theme.textSmall,
		[theme.breakpoints.up('sm')]: {
			marginTop: '20px',
			marginBottom: '40px',
			fontSize: theme.textDesktop
		}
	},
	text: {
		fontSize: theme.textSmall,
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.textDesktop
		}
	}
}));

export default function HowItWorks() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} square>
			<Container className={classes.textSecondary} maxWidth='md'>
				<Grid className={classes.block} alignItems='stretch' spacing={4} container>
					<Grid xs={12} sm={8} square item>
						<Typography className={classes.titleFont} align='center' variant='h5'>
							How it works
						</Typography>
						<Box className={classes.text} mt='40px'>
							All spending has an impact on the environment. At tred, we have developed a way of
							understanding the carbon emissions of every transaction, from a weekly shop to the
							daily commute and even the special one-offs.
						</Box>
						<Box className={classes.paragraph} mt='20px' mb='40px'>
							All you need to do is link your debit and credit cards to the tred app and you’ll see
							your carbon footprint. We’ll give daily updates, monthly summaries and personalised
							suggestions on how to improve, with options to offset where you can’t.
						</Box>
					</Grid>
					<Grid className={classes.cardContainer} xs={12} sm={4} square item>
						<Card border={0} className={classes.card}>
							<CardIcon className={classes.icon} />
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Paper>
	);
}
