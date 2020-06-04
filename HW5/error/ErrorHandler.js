module.exports = class ErrorHandler extends Error{
    constructor(message,status,customeCode) {
        super(message);
                //this.message = message,
                this.status = status,
                this.customeCode = customeCode

        Error.captureStackTrace(this, this.constructor)
    }
};