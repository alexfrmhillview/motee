const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)   //originalUrl is the url that the user requested
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => { 
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode; //if the status code is 200, then we set it to 500, otherwise we set it to the status code
    let message = err.message;

    //check Mongoose bad ObjectId

    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found';
        statusCode = 404;
    }
    
    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack, //if we are in production, we don't want to show the stack trace
    });

};

export { notFound, errorHandler };