import React from 'react';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from './SectionHeader';

const useStyles = makeStyles((theme) => ({
	titleFont: {
		fontWeight: 800,
		fontFamily: theme.typography.headerFontFamily,
		fontSize: theme.titleDesktop,
		color: theme.palette.midGreen,
		marginTop: '50px',
		width: '60vw',
		[theme.breakpoints.down('md')]: {
			fontSize: theme.titleTablet,
			marginBottom: '15px',
			marginTop: '0px'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.titlePhone,
			width: '80vw'
		}
	},
	outer: {
		position: 'relative',
		backgroundColor: '#F5FFF5',
		paddingTop: '0px',
		paddingBottom: '100px',
		marginLeft: '0px',
		[theme.breakpoints.down('md')]: {
			paddingBottom: '50px'
		}
	},
	text: {
		fontWeight: '200',
		fontSize: theme.textDesktop,
		marginTop: '30px',
		width: '60vw',
		color: theme.palette.midGreen,
		fontFamily: theme.typography.bodyFontFamily,
		lineHeight: '30px',
		[theme.breakpoints.down('md')]: {
			fontSize: theme.textTablet,
			lineHeight: '23px',
			marginBottom: '30px',
			marginTop: '0px'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.textPhone
		}
	},
	aboutText: {
		fontWeight: '200',
		fontSize: theme.textDesktop,
		marginTop: '30px',
		width: '80vw',
		color: theme.palette.midGreen,
		fontFamily: theme.typography.bodyFontFamily,
		lineHeight: '30px',
		[theme.breakpoints.down('md')]: {
			fontSize: theme.textTablet,
			lineHeight: '23px',
			marginTop: '0px',
			marginBottom: '30px'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.textPhone
		}
	},
	container: {
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
	mockup: {
		position: 'absolute',
		top: '150px',
		right: '2vw',
		width: '300px',
		height: '613px',
		[theme.breakpoints.down('md')]: {
			width: '211px',
			height: '459px',
			top: '120px',
			right: '4vw'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	box: {
		position: 'relative'
	},
	icons: {
		position: 'absolute',
		right: '3vw',
		top: '50%',
		transform: 'translate(0, -50%)'
	}
}));

export default function BulkInformation(props) {
	const { bulkData, svgData } = props;
	const classes = useStyles();
	return (
		<div>
			<Box className={classes.outer}>
				<SectionHeader header='Our mission' />
				<Container className={classes.container} maxWidth='md'>
					<Element className={classes.scrollLocation} name={svgData.scroll} />
					<Box className={classes.box}>
						<Typography className={classes.titleFont} variant='h5'>
							{svgData.leftTitle}
						</Typography>
						<Typography className={classes.text}>{svgData.leftBlock1}</Typography>
						<Typography className={classes.text}>{svgData.leftBlock2}</Typography>
						<Hidden mdUp>
							<img className={classes.icons} src='img/icons/earth-icon.svg' alt='Earth Icon' />
						</Hidden>
					</Box>
					<Box className={classes.box}>
						<Typography className={classes.titleFont} variant='h5'>
							{svgData.rightTitle}
						</Typography>
						<Typography className={classes.text}>{svgData.rightBlock1}</Typography>
						<Typography className={classes.text}>{svgData.rightBlock2}</Typography>
						<Hidden mdUp>
							<img
								className={classes.icons}
								src='img/icons/devices-icon.svg'
								alt='Computer and phone Icon'
							/>
						</Hidden>
					</Box>
				</Container>
				<img src='img/phone-mockup-3.png' alt='iPhone mockup of app' className={classes.mockup} />
			</Box>

			<Box className={classes.outer}>
				<SectionHeader header='About us' />
				<Container className={classes.container} maxWidth='md'>
					<Element className={classes.scrollLocation} name={bulkData.scroll} />
					<Typography className={classes.titleFont} variant='h5'>
						{bulkData.willTitle}
					</Typography>
					<Typography className={classes.aboutText} my='20px'>
						{bulkData.willText1}
					</Typography>
					<Typography className={classes.aboutText} my='20px'>
						{bulkData.willText2}
					</Typography>
					<Typography className={classes.titleFont} variant='h5'>
						{bulkData.peteTitle}
					</Typography>
					<Typography className={classes.aboutText} my='20px'>
						{bulkData.peteText1}
					</Typography>
					<Typography className={classes.aboutText} my='20px'>
						{bulkData.peteText2}
					</Typography>
				</Container>
			</Box>
		</div>
	);
}
