const Comment = require('./models/comments');

const isLoggedIn = (req, res, next) => {
	console.log("REQ.USER" + ':' + req.user, "     ", req.originalUrl)
	if (!req.isAuthenticated()) {
		req.session.returnTo = req.originalUrl
		req.flash('error', 'You must be logged in first!');
		return res.redirect('/');
	}
	next();
}

const isUser = async (req, res, next) => {
	const { id } = req.params;
	const comment = await Comment.findById(id);
	if (req.user === undefined || !comment.user_id.equals(req.user._id)) {
		return res.status(401).send('You do not have permission!!!');
	}
	next();
}

module.exports = { isLoggedIn, isUser };