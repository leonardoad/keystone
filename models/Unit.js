var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Unit Model
 * =============
 */

var Unit = new keystone.List('Unit', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Unit.add({
	area: { type: Types.Relationship, ref: 'Area'},
	name: { type: String, required: true },
	location: { type: Types.Location, defaults: { country: 'Canada' } },
	heroImage: { type: Types.CloudinaryImage },
	// images: { type: Types.CloudinaryImages },
	// area: { type: Types.Relationship, ref: 'Area', many: true },
	checkinInfo: {type: Types.Html, wysiwyg: true, height: 400 },
	checkoutInfo: {type: Types.Html, wysiwyg: true, height: 400 },
	garbageInfo: {type: Types.Html, wysiwyg: true, height: 400 },
	houseRules: {type: Types.Html, wysiwyg: true, height: 400 },
});

Unit.register();
