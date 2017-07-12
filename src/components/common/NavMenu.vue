<template lang="html">
  <el-menu default-active="1" id="nav-menu" theme="dark">
    
    <el-submenu index="1" >
      <template slot="title"><i class="el-icon-plus"></i>导航一</template>
      <el-menu-item index="1-1"  v-for="item in  menuList"><router-link v-bind:to="item.to" class="nav-link"><i class="el-icon-document">{{item.text}}</i></router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><router-link to="/table" class="nav-link"><i class="el-icon-document"></i>表格</router-link></el-menu-item>
  </el-menu>
</template>
<script>
 export default{
        data(){
            return {
                menuList:[{text:'a',to:'/question'},{text:'b',to:'/user'},{text:'c',to:'/table'},{text:'d',to:'/form'}]
            }
        }
    }

</script>
