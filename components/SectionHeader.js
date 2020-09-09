import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
	headingBar: {
		backgroundColor: '#627968',
		color: theme.palette.primary.main,
		height: '15vh',
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		marginBottom: '50px',
		paddingLeft: '120px',
		[theme.breakpoints.down('md')]: {
			height: '9vh',
			paddingLeft: '66px'
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '35px'
		}
	}
}));

export default function SectionHeader(props) {
	const classes = useStyles();
	const { header } = props;
	return (
		<>
			<div className={classes.headingBar}>
				<Logo text={header} />
			</div>
		</>
	);
}
