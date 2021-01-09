const {time} = require('@arangodb');

module.exports = {
    contentType: 'application/json',
    name: 'Delete phone by id',
    handler: (req, res) =>
    {
        const {id} = req.pathParams;

        const start = time();


        const {remove} = module.context;

        const [queryResult] = remove('phones', id).toArray();

        res.send({
            result: queryResult,
            execTime: time() - start
        });
    }
};