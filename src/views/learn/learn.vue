<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-submenu index="1">菜单一</el-submenu>
          <el-menu-item index="1-1">选项一</el-menu-item>
        <el-menu-item index="1-2">选项二</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>

      </el-header>

      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$axios.post("/menu", {
          prdNo: "123",
          amount: 789.00
        }).then(res =>{
          console.log(res);
        })
      }
    }
  }
</script>