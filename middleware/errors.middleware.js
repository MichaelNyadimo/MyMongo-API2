exports.error404 = function(req, res, next){
    next({message: 'Error', status:404});
};

exports.error500 = function(error, req, res, next) {
res.status(error.status || 500);
res.json({
    error: {
        message: error.message
    }
})
};
console.log(exports)