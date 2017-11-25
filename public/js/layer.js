Vue.component("layer",{
    props:["width","menuData"],
    computed:{
         leftw(){
             return {width:this.width.left}
         },
         rightw(){
             return {width:this.width.right}
         }
    },
    template:`<div class="layer">
                    <div class="left" :style="leftw">
                        
                                   <custom-menu :menu-data="menuData"></custom-menu>
                          
                          
                    </div>
                    <div class="right" :style="rightw">
                   
                    <router-view></router-view>
                    </div>
              </div>`
})



Vue.component("custom-menu",{
    props:["menuData"],
    template:`
        <div class="custom-menu">
            <son :menu-data="menuData" :margin="0"></son>
        </div>
`
})

Vue.component("son",{
    props:["menuData","margin"],
    data(){
        return {
            marginNum:this.margin+20
        }
    },
    template:`<ul :style="{marginLeft:marginNum+'px'}">
                     <li v-for="item in menuData" @click.stop="show(item)">
            
                         <router-link :to="item.url">{{item.title}}</router-link>
                          
                         <son v-if="item.child" v-show="item.flag" :menu-data="item.child" :margin="marginNum"></son>
                     </li>
                  
            </ul>`,
    methods:{
        show(item){

            item.flag=!item.flag;
        }
    }
})

var con=Vue.component("con",{
    template:"<div>con</div>"
})
var con1=Vue.component("con",{
    data(){
        return {
            con:[],
        }
    },

    created(){
        var id=this.$route.params.id;

        var that=this;
        fetch("/fetch/"+id).then(function(e){
            return e.json()
        }).then(function(e){
            console.log(e);
            that.con=e;
            //next();
        })

    },
    beforeRouteUpdate(to,from,next){

        var id=to.path.slice(1);

        var that=this;
        fetch("/fetch/"+id).then(function(e){
            return e.json()
        }).then(function(e){
            console.log(e);
                that.con=e;
                next();
        })
    },
    template:`<ul>

       <li v-for="item in con">
            <h1>{{item.title}}</h1>
            <p>{{item.con}}</p>
       </li>
</ul>`
})