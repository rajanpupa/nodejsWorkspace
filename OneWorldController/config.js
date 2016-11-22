var inmemoryDb = {
    users : [  {username: "rajan", password: "rajan", role: "admin"},
                {username:"user", password: "pass", role: "user"}
            ],
    get : function (username){
        console.log("configjs: getUsername "+ username);
        return new Promise(function(resolve, reject){
            var user =  this.users.filter(function (usr){
                usr.username === username;
            });

            if(user){
                console.log('user resolved' + user);
                resolve(user);
            }else{
                reject( {messgae: "The requested items could not be found."} );
            }
        });
    },
    put : function(userObj){
        var usr = get(userObj.username);
        if(user){
            return "The user already exists.";
        }
    }
};

module.exports = {
    "db" : "YOUR_ORCHESTRATE_API_KEY",
    "inmemoryDb": inmemoryDb
}