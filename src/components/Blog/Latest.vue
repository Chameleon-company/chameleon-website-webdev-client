<template>
<section class="latest">
  <h3>Latest Posts</h3>
  <div class="posts">
    <div class="post box1">
      <!-- <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/smart-city.jpg')}')` }"></div> -->
      <img class="post__image":src="smartCity" alt="smart city">
      <h4>Smart City</h4>
    </div>
    <div class="post coll-2 roww-2 box2">
      <!-- <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/ev-charger.jpg')}')` }"></div> -->
      <img class="post__image":src="evCharger" alt="ev charger">
      <h4>EV Charger</h4>
    </div>
    <div class="post roww-2 box3">
      <!-- <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/chameleon-web.jpg')}')` }"></div> -->
      <img class="post__image":src="chameleonWeb" alt="chameleonWeb">
      <h4>Chameleon Website</h4>
    </div>
    <div class="post roww-2 box4">
      <!-- <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/smart-data.jpg')}')` }"></div> -->
      <img class="post__image":src="smartData" alt="smartData">
      <h4>Smart Data</h4>
    </div>
    <div class="post">
      <img class="post__image":src="Deakin" alt="Deakin">
      <!-- <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/Deakin.jpg')}')` }"></div> -->
      <h4>Deakin</h4>
    </div>
    <div class="post coll-2">
      <img class="post__image":src="sit" alt="sit">
      <!-- <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/sit-class.jpg')}')` }"></div> -->
      <h4>SIT374</h4>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'latest',
  data(){
    return{
      smartCity:require('@/assets/images/blogImage/smart-city.jpg'),
      evCharger:require('@/assets/images/blogImage/ev-charger.jpg'),
      chameleonWeb: require('@/assets/images/blogImage/chameleon-web.jpg'),
      smartData: require('@/assets/images/blogImage/smart-data.jpg'),
      Deakin:require('@/assets/images/blogImage/Deakin.jpg'),
      sit: require('@/assets/images/blogImage/sit-class.jpg'),
    }
  }
}
</script>

<style scoped>
.latest {
    display: block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
.posts{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-rows:repeat(3, 0.5fr);
  grid-gap: 30px;
  margin: 15px;

}



.post{
  /* background-color: steelblue; */
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
}

.post__image{
  flex: 1;
  width:100%;

  /* background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */

}

/* .box1{
  grid-column: 2/4;
} */

.box2{
  grid-column: 2/4;
}

.box4{
  grid-row: 2/4;

}


h4{
  font-size:1rem;
  margin:0;
}


</style>
