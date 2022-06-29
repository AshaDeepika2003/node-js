function verifylogging(user,test,callback){
    if(test=="test1")
        callback(null,"correct login");
    
    else
        callback("incorrect login",null)
    
}
verifylogging("user1","test1",function(err,result){
    if(err)
        console.log(err);
    
    else
        console.log(result)
    
})