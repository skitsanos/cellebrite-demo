const joi = require('joi');
const {query, time} = require('@arangodb');
const crypto = require('@arangodb/crypto');

const schema = joi.object({
    type: joi.string().required(),
    serial: joi.string().default(crypto.genRandomAlphaNumbers(8)),
    color: joi.string().required(),
    meta: joi.object().default({})
}).required();

module.exports = {
    contentType: 'application/json',
    name: 'Phones - add',
    body: {model: schema},
    handler: (req, res) =>
    {
        const start = time();

        const user = query`
            FOR doc in phones
            FILTER doc.serial==${req.body.serial}
            RETURN doc
            `.toArray();

        if (user.length > 0)
        {
            res.throw(409, 'Phone already exists!');
        }

        //create new user in collection
        const {insert} = module.context;

        const doc = {
            ...req.body,
            password: null
        };

        const result = insert('phones', doc).toArray()[0]._key;

        res.send({result: {_key: result}, execTime: time() - start});
    }
};