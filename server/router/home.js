
function route(request, response){
    response.status(200);
    response.send("Hello world!\n" + response.statusCode);
}

exports.route = route;