
exports.login = (req, res) => {
    res.json(req.session);

    req.app.locals.io.emit("user", req.user.id || req.user._id);
};

exports.getTest = (req, res) => {
    res.json(req.user);
};