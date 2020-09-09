import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backGround: {
		backgroundColor: 'transparent',
		color: theme.palette.charcoal
	}
}));

export default function Flow() {
	const classes = useStyles();

	return <Box className={classes.backGround} />;
}
