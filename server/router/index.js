
const home =require("./home")


function route(server){
    server.get('/', home.route);
}

exports.route = route;