<template>
<div class="">

  <Header/>
  <Latest/>
  <Posts/>
  
</div>
</template>

<script>
import Header from '../components/Blog/Header'
import Latest from '../components/Blog/Latest'
import Posts from '../components/Blog/Posts'


export default {
  name: "Blog",
  components:{
    Header,
    Latest,
    Posts

  },
  data() {
    return {

    }
  }
}
</script>

<style lang = "scss" scoped>
body{
  background-color:#F3F3F3;
  font-family: "Rockwell", serif;
}

h3{
  color:#171717;
  font-size:28px;
  font-weight:700;
}

</style>
