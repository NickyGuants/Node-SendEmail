const express = require( 'express' );
const {sendEmail} = require('../controllers/mailController')

const router = express.Router();

router.post( '/', sendEmail );

module.exports = router