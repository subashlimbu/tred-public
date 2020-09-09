const axios = require('axios');

export default (req, res) => {
	const apiUrl = `https://us10.api.mailchimp.com/3.0/lists/${process.env.MAIL_CHIMP_LIST_ID}/members`;
	const { email, firstName, lastName } = req.body;
	const subscriber = {
		email_address: email,
		status: 'subscribed',
		merge_fields: {
			FNAME: firstName,
			LNAME: lastName
		}
	};
	// insert post to mailchimp
	axios({
		method: 'POST',
		url: apiUrl,
		headers: {
			'Content-type': 'application/json',
			Authorization: `apikey ${process.env.MAIL_CHIMP_API_KEY}`
		},
		data: JSON.stringify(subscriber)
	})
		.then(() => res.status(200).json({ text: 'Email Stored' }))
		.catch((error) => res.status(400).json({ text: error.response.data.detail }));
};
