const logrequest = (req, res,next) => {
    console.log('log ke API path:', req.path  );
    next();
}

module.exports = logrequest;