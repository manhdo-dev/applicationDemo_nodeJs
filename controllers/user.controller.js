const shortid = require('shortid');
const db = require('../db');

module.exports = {
    getAll: function(req, res, next) {
        res.render('users/index', {
            users: db.get('users').value()
        });
    },
    search: function(req, res) {
        var q = req.query.q;
        var matchUsers = db.get('users').value().filter(function(user) {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        })
        res.render('users/index', {
            users: matchUsers
        })
    },
    create: function(req, res) {
        //console.log(req.cookies)
        res.render('users/create');
    },
    getOne: function(req, res) {
        var id = req.params.id;
        var user = db.get('users').find({ id: id }).value();

        res.render('users/view', {
            user: user
        });
    },
    postCreate: function(req, res) {
        req.body.id = shortid.generate();
        req.body.avatar = req.file.path.split('/').slice(1).join('/');
        console.log(res.locals); // kế thừa từ res.locals trong middleware

        db.get('users').push(req.body).write();
        res.redirect('/users');
    }
};