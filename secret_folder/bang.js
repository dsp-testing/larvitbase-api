'use strict';

exports = module.exports = function (req, res, cb) {
	res.data = { foo: 'oh no' };
	cb();
};
