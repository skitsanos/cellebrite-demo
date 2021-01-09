const joi = require('joi');
const {time} = require('@arangodb');

module.exports = {
    contentType: 'application/json',
    name: 'Update phone by id',
    body: {model: joi.object().required()},
    handler: (req, res) =>
    {
        const start = time();
        const {id} = req.pathParams;

        const {update} = module.context;

        update('phones', id, {
            ...req.body,
            updatedOn: new Date().getTime()
        });

        res.send({result: {_key: id}, execTime: time() - start});
    }
};