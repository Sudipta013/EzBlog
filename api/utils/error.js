//error handler getting custom statuscode and message

export const errorHandler = (statusCode, message) => {
    const error = new Error() //using Error constructor in js to create the error as we dont have any error
    error.statusCode = statusCode
    error.message = message
    return error
}