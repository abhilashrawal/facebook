const home  = function (req, res) {
    return res.end("<h1>your express server and routes files on fire congratulations!!!</h1>")
    
}



const live  = function (req, res) {
    return res.end("<h1>your live score is here please watch here congratulations!!!</h1>")
    
}
module.exports = {home,live}