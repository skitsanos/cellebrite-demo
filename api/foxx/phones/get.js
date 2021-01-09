const {query, time} = require('@arangodb');

module.exports = {
    contentType: 'application/json',
    name: 'Get phones',
    handler: (req, res) =>
    {
        const {filter} = module.context.utils;

        const {skip = 0, pageSize = 10, q} = req.queryParams;

        const start = time();

        let dataQuery;

        try
        {
            const payload = decodeURI(q);
            if (payload.trim().startsWith('{'))
            {
                dataQuery = JSON.parse(payload);
            }
            else
            {
                dataQuery = [
                    {
                        key: 'serial',
                        op: '?',
                        value: `%${q}%`
                    }
                ];
            }
            //console.log(dataQuery)
        } catch (e)
        {
            dataQuery = !q
                ? []
                : [
                    {
                        key: 'serial',
                        op: '?',
                        value: `%${q}%`
                    }
                ];
        }

        const queryResult = query`      
         LET skip=${Number(skip)}
         LET pageSize=${Number(pageSize)}
        
        LET ds = (
            FOR doc IN phones
                ${filter(dataQuery)}
                SORT doc._key DESC
                LIMIT skip,pageSize
            RETURN merge(
                UNSET(doc,"_rev","_id", "password"),
                {
                   
                })
        )
        
        LET total = (FOR doc IN phones 
            ${filter(dataQuery)}
            COLLECT WITH COUNT INTO totalFound 
            RETURN totalFound)[0]
        
        RETURN {data: ds, total: total, pageSize: ${Number(pageSize)}, skip: ${Number(skip)} }          
        `.toArray()[0];

        res.send({result: queryResult, execTime: time() - start});
    }
};