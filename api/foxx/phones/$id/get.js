const {time} = require('@arangodb');

module.exports = {
    contentType: 'application/json',
    name: 'Phones - Edit',
    body: null,
    handler: (req, res) =>
    {
        const start = time();
        const {id} = req.pathParams;

        const {get} = module.context;

        const [user] = get('phones', id).toArray();

        if (!Boolean(user))
        {
            res.throw(404, 'Phone not found');
        }

        delete user.password;

        res.send({
            result: user,
            execTime: time() - start
        });

    }
};