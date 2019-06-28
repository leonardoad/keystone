var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'units';
console.log(req.params.id);
	// Load the areas by sortOrder
	view.query('unit', keystone.list('Unit').model.findById(req.params.id).sort('sortOrder'));

	// Render the view
	view.render('unit');

};
