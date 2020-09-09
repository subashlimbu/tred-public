import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolBar from '../components/ToolBar';
import Landing from '../components/Landing';
import Product from '../components/Product';
import JoinUsModal from '../components/JoinUsModal';
import BulkInformation from '../components/BulkInformation';
import Footer from '../components/Footer';
import MessageModal from '../components/MessageModal';

const useStyles = makeStyles((theme) => ({
	html: {
		WebkitFontSmoothing: 'antialiased',
		scrollBehavior: 'smooth',
		height: '100%',
		width: '100%'
	},
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	shape: {
		display: 'none'
	}
}));

export default function Index() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [messageModal, setMessageModal] = React.useState({
		message: {
			header: '',
			body: ''
		},
		error: false,
		open: false
	});
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const messageModalClose = () => {
		setMessageModal({ open: false, message: { header: '', body: '' }, error: false });
	};

	const landingData = {
		main: 'Go carbon-neutral',
		second: 'Our app helps you track, reduce, and offset your carbon footprint',
		sub: 'Join the community saving our planet'
	};

	const svgData = {
		title: 'Our fight against climate change',
		leftTitle: 'The Problem',
		leftBlock1:
			'To avoid a devastating impact on our planet, we need to half global emissions in the next 10 years.',
		leftBlock2:
			'But how can we help in such a global crisis? It’s really difficult for individuals to track their carbon footprint and to figure out what will and won’t make a difference.',
		rightTitle: 'The Solution',
		rightBlock1:
			'Data is already helping people get fitter and find love, and now with the help of tred, it can help them fight climate change.',
		rightBlock2:
			'At tred, we make it simple to track and reduce carbon footprints and invest in a sustainable future.',
		scroll: 'whyScroll'
	};

	const people = {
		willTitle: 'Will Smith, Co-Founder',
		willText1:
			'Reduced food waste by 10% in a top UK supermarket and helped the healthy get out of hospital quicker across Yorkshire. Will has an MEng from Durham University',
		willText2: 'A keen drummer and a dedicated GB triathlete.',
		peteTitle: 'Peter Kirby, Co-Founder',
		peteText1:
			"Supported the UK government's Covid-19 response, the turnaround of a major UK retailer and the reduction of factory food waste. Peter has a Masters from Durham University.",
		peteText2: 'A Yorkshire fell-runner, cook and cyclist.',
		scroll: 'peopleScroll'
	};

	return (
		<div className='topScroll'>
			<div className={classes.shape} />
			<ToolBar />
			<Landing landingData={landingData} handleOpen={handleOpen} />
			<Product />
			<BulkInformation svgData={svgData} bulkData={people} />
			<Footer />
			<JoinUsModal open={open} handleClose={handleClose} setMessageModal={setMessageModal} />
			<MessageModal
				open={messageModal.open}
				handleClose={messageModalClose}
				modalData={messageModal}
			/>
		</div>
	);
}
