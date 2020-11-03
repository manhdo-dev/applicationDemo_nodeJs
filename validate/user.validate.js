module.exports.postCreate = function(req, res, next) {
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

    res.locals.success = true; //tác dụng là lưu trữ dữ liệu trong một vòng đời req, res , ví dụ như chuyển 1 biến từ middleware trước => sau, success là biến

    next();
};