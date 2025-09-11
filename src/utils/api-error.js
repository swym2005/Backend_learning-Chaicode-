// You don’t need to memorize every line of how it’s built. 
// This is a template — you’ll reuse it again and again in most
// projects that need structured error handling.

class ApiError extends Error{
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "")
    {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(stack)
        {
            this.stack = stack;
        }
        else
        {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError }