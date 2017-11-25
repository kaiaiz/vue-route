Vue.component("custom-menu",{
    props:["menuData"],
    template:`
        <div class="custom-menu">
            <son :menu-data="menuData"></son>
        </div>
`
})

Vue.component("son",{
    props:["menuData"],
    data(){

        return {
            datas:this.menuData
        }
    },
    template:`<ul>
                     <li v-for="item in datas" @click.stop="show(item)">
                         {{item.title}}
                         <son v-if="item.child" v-show="item.flag" :menu-data="item.child"></son>
                     </li>
                  
            </ul>`,
    methods:{
        show(item){
            item.title=Math.random();
            //item.flag=!item.flag;

        }
    }
})