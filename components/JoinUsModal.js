import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		width: '60%',
		height: 'fit-content',
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 10, 3),
		outline: 'none',
		borderRadius: '5px',
		top: '20%',
		left: '20%',
		[theme.breakpoints.down('md')]: {
			left: '5%',
			width: '90vw',
			top: '10%'
		},
		[theme.breakpoints.down('sm')]: {
			padding: '5vw',
			alignItems: 'center'
		}
	},
	modalInput: {
		marginTop: '15px',
		marginBottom: '15px',
		fontSize: '20px',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			width: '90%'
		}
	},
	modalHeading: {
		color: theme.palette.midGreen,
		fontWeight: 'bold',
		fontSize: '40px',
		marginBottom: '1vh',
		marginTop: '5vh',
		[theme.breakpoints.down('md')]: {
			fontSize: '35px',
			marginTop: '3vh'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
			marginTop: '1vh'
		}
	},
	modalSubheading: {
		color: theme.palette.midGreen,
		fontSize: '25px',
		marginBottom: '2vh',
		[theme.breakpoints.down('md')]: {
			marginBottom: '0vh'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '15px'
		}
	},
	button: {
		backgroundColor: theme.palette.brown,
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		width: '12vw',
		marginLeft: '50%',
		marginTop: '6vh',
		marginBottom: '1vh',
		transform: 'translate(-50%)',
		[theme.breakpoints.down('md')]: {
			marginTop: '3vh'
		},
		[theme.breakpoints.down('sm')]: {
			margin: '0',
			marginTop: '1vh',
			transform: 'translate(0)'
		}
	}
}));

export default function JoinUsModal(props) {
	const classes = useStyles();
	const { open, handleClose, setMessageModal } = props;
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState({ state: false, message: '' });
	const [nameError, setNameError] = useState({ state: false, message: '' });
	const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// this is to reset all errors in the form
	function modalReset() {
		handleClose();
		setFirstName('');
		setLastName('');
		setEmail('');
		setNameError({ status: false, message: '' });
		setEmailError({ status: false, message: '' });
	}

	// submit to the email api
	function handleSubmit(event) {
		event.preventDefault();
		if (firstName === '' && !REGEX_EMAIL.test(email)) {
			setNameError({ status: true, message: 'Please enter a name' });
			setEmailError({ status: true, message: 'Please enter valid email' });
		} else if (firstName === '') {
			setNameError({ status: true, message: 'Please enter a name' });
			setEmailError({ status: false, message: '' });
		} else if (!REGEX_EMAIL.test(email)) {
			// type="email" isn't validating as it should. REGEX is handling validation on frontend
			setEmailError({ status: true, message: 'Please enter valid email' });
			setNameError({ status: false, message: '' });
		} else {
			axios
				.post('api/email', {
					firstName,
					lastName,
					email
				})
				.then(() => {
					modalReset();
					setMessageModal({
						open: true,
						message: {
							header: 'Welcome!',
							body: "we're really excited you've joined our waiting list!"
						},
						error: false
					});
				})
				.catch(() => {
					modalReset();
					setMessageModal({
						open: true,
						message: {
							header: 'Oops!',
							body:
								"Looks like one of our services isn't working properly. Please click below to join our wait list"
						},
						error: true
					});
				});
		}
	}

	return (
		<Modal open={open} onClose={modalReset}>
			<Box className={classes.modal}>
				<Typography className={classes.modalHeading} variant='h5'>
					Join our community
				</Typography>
				<Typography className={classes.modalSubheading}>
					Please enter your email to subscribe to our mailing list.
				</Typography>
				<TextField
					className={classes.modalInput}
					error={nameError.status}
					helperText={nameError.message}
					id='standard-basic'
					label='First Name'
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				<TextField
					className={classes.modalInput}
					label='Last Name (optional)'
					onChange={(e) => setLastName(e.target.value)}
				/>
				<TextField
					className={classes.modalInput}
					error={emailError.status}
					helperText={emailError.message}
					label='Email'
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Button className={classes.button} variant='contained' onClick={(e) => handleSubmit(e)}>
					Submit
				</Button>
			</Box>
		</Modal>
	);
}

JoinUsModal.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	setMessageModal: PropTypes.func.isRequired
};
