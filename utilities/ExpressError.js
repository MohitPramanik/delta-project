class ExpressError extends Error {
    constructor(status, message) {
        super(message);  // REQUIRED!
        this.status = status;
    }
}

module.exports = ExpressError;