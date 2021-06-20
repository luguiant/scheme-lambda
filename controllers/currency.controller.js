const { validationResult } = require('express-validator');

exports.AssetTickers = (req, res, next) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const body = req.body;

    res.status(201).json({ message: 'tickers', body: JSON.parse(body) });
}