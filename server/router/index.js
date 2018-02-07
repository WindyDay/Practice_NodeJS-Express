
const home =require("./home")


function route(server){
    server.get('/', function (req, res){
        res.redirect("/home");
    });

    server.use('/', home.route);
}

exports.route = route;