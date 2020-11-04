const db = require('../db');

module.exports = {
    index: function(req, res) {
        var page = parseInt(req.query.page) || 1; //n (set default page = 1)
        console.log(page);
        var perPage = 8; //x

        // var start = (page - 1) * perPage;
        // var end = page * perPage; //way 1: use slice(start, end)

        var drop = (page - 1) * perPage;
        res.render('products/index', {
            // products: db.get('products').value().slice(start, end)
            products: db.get('products').drop(drop).take(perPage).value() //way 2: use library lodash

        });
    }
};