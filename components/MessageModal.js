import React from 'react';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HLink from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: '60vw',
		height: '350px',
		left: '50%',
		top: '20%',
		transform: 'translate(-50%)',
		backgroundColor: theme.palette.background.paper,
		outline: 'none',
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '70vw',
			height: '300px'
		},
		[theme.breakpoints.down('xs')]: {
			width: '80vw',
			height: '250px'
		}
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: theme.typography.bodyFontFamily,
		color: theme.palette.midGreen
	},
	header: {
		fontSize: '50px',
		fontWeight: 'bold',
		marginLeft: '50px',
		[theme.breakpoints.down('md')]: {
			fontSize: '30px',
			marginLeft: '20px'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '20px'
		}
	},
	text: {
		fontSize: '30px',
		fontWeight: 'normal',
		marginLeft: '50px',
		[theme.breakpoints.down('md')]: {
			fontSize: '20px',
			marginLeft: '20px'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '15px'
		}
	},
	joinButton: {
		width: '320px',
		height: '50px',
		backgroundColor: '#775253',
		color: '#F5FFF5',
		fontSize: '20px',
		marginLeft: '50%',
		marginTop: '40px',
		transform: 'translate(-50%)',
		[theme.breakpoints.down('md')]: {
			width: '200px',
			height: '30px',
			fontSize: '15px'
		},
		[theme.breakpoints.down('xs')]: {
			width: '180px',
			height: '20px',
			fontSize: '12px'
		}
	}
}));

export default function MessageModal(props) {
	const classes = useStyles();
	const { modalData, handleClose, open } = props;

	return (
		<Modal open={open} onClose={handleClose}>
			<div className={classes.modal}>
				<Box className={classes.textContainer}>
					<Typography className={classes.header}>{modalData.message.header}</Typography>
					<Typography className={classes.text}>{modalData.message.body}</Typography>
					{modalData.error && (
						<Box>
							<HLink
								className={classes.link}
								href='mailto:hello@tred.earth?subject=Hello%20Tred&body=Please%20keep%20me%20up%20to%20date.%20🌲'
							>
								<Button className={classes.joinButton}>Join our community</Button>
							</HLink>
						</Box>
					)}
				</Box>
			</div>
		</Modal>
	);
}

MessageModal.defaultProps = {
	open: false
};

MessageModal.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
	modalData: PropTypes.shape({
		message: PropTypes.string,
		error: PropTypes.bool
	}).isRequired
};

MessageModal.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func.isRequired,
	modalData: PropTypes.shape({
		message: PropTypes.shape({
			heading: PropTypes.string,
			body: PropTypes.string
		}),
		error: PropTypes.bool
	}).isRequired
};
