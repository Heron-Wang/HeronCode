function throttle(fn,time){
    var flag = true;

    return function ( ){
        var args = arguments;

        if(flag){
            fn(...args);
            timer = setTimeout(
                function(){
                    flag=true
                },
            time);
            flag = false;
        }
    }
}



function search(a,b){
    //
}

var wrappedSearch = throttle(search,1000)

setTimeout(
    ()=>{
        wrappedSearch(a,b);
    },10
);