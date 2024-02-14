const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Routes for acessing the api and the home routes that the user sees
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
