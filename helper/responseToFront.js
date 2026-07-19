const responseToFront = (message, status = 404, data = null)=>{
    return {message , status , data}
}
module.exports = responseToFront