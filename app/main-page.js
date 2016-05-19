exports.loaded=function(args){
    getData();
}
function getData(){
    fetch("https://httpbin.org/get").then(function (r) {
        console.log('success');
        console.log(r);
        //onsole.dump(r);
    }, function (e) {
        console.log('error', e)
    });
    
}