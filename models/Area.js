var keystone = require('keystone');

/**
 * Area Model
 * =============
 */

var Area = new keystone.List('Area', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Area.add({
	name: { type: String, required: true },
});

Area.register();
