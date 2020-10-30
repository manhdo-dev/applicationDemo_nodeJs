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
        var errors = [];

        if (!req.body.name) {
            errors.push('Name is required');
        }

        if (!req.body.email) {
            errors.push('Email is required');
        }

        if (!req.body.address) {
            errors.push('Address is required');
        }

        if (errors.length) {
            res.render('users/create', {
                errors: errors,
                values: req.body
            });
            return;
        }
        db.get('users').push(req.body).write();
        res.redirect('/users');
    }
};