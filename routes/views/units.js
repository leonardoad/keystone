var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'units';

	// Load the areas by sortOrder
	view.query('units', keystone.list('Unit').model.find().sort('sortOrder'));

	// Render the view
	view.render('units');

};
