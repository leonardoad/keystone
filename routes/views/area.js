var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'area';

	// Load the areas by sortOrder
	view.query('areas', keystone.list('Area').model.find().sort('sortOrder'));

	// Render the view
	view.render('area');

};
