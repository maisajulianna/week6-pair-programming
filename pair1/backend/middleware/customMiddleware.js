const requestLogger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("Path:  ", req.path);
    console.log("Body:  ", req.body);
    console.log("---");
    next();
};

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, req, res, next) => {
    console.error(error.message);

    response.status(500);
    response.json({ error: error.message });
};

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
};