const routes = [
    {"path":"/","component":con},
    {"path":"/:id","component":con1},
]
const router = new VueRouter({
    mode: 'history',
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el:"#root",
    data:{
        menuData:[]
    },
    router:router,
    created(){
        var that=this;
        fetch("/fetch").then(function (e) {
            return e.json();
        }).then(function(e){
            var arr=e.map(function(a){
                var obj={};
                obj.title=a.cname;
                obj.flag=true;
                obj.url=a.cid.toString();
                return obj;
            })
            that.menuData=arr;
        })
    }
})