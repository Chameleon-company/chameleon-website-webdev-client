<template>
      <div class="three">
      <div class="head">
        <div></div>
        <div>About Us</div>
        <div></div>
      </div>
      <div class="main">
        <p>Chameleon aims to utilise the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart devices such as phones, suburban traffic systems and domestic appliances, that all use embedded systems, such as processors, sensors, and communication hardware, to collect, send and act on data they acquire from their environments. </p>
        <p>We hope to harness the data generated by these systems through researching, creating, testing, documenting and deploying IoT-based solutions which aim to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.</p>
        <p>If you would like to learn more about what this looks like in practice, navigate to our Portfolio section!</p>
        <div class="li-container">
          <div class="li">
            <div class="imgtxt-container">
              <img :src="Building" alt="" />
              <div class="img-txt">50,000+</div>
            </div>
            <div class="imgtxt-container">
              <img :src="Hand" alt="" />
              <div class="img-txt">10,000+</div>
            </div>
          </div>
          <div class="li liRight">
            <div class="imgtxt-container">
              <img :src="User" alt="" />
              <div class="img-txt">43,850</div>
            </div>
            <div class="imgtxt-container">
              <img :src="Globe" alt="" />
              <div class="img-txt">12</div>
            </div>        
          </div>
        </div>
         <div class="video-p1">
          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32026212/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_dh8w0mac&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_sx57bihq" width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *"  frameborder="0" title="Chameleon Company Projects Showcase (T1 2022)"></iframe>
        </div>
      </div>
    </div>
</template>

<script>
const Hand = require("@/assets/images/hand.png");
const Building = require("@/assets/images/building.png");
const Globe = require("@/assets/images/globe.png");
const User = require("@/assets/images/user.png");

export default {
  name: "AboutUs",
  data() {
    return {
      Hand,
      Building,
      Globe,
      User
    };
  },
  mounted() {},
  methods: {
    },
};
</script>

<style scoped lang="scss">
.three {
  padding: 40px 40px;
  .head {
    display: flex;
    align-items: center;
    div:first-child {
      flex: 1;
      height: 2px;
      background: #99c854;
    }
    div:nth-child(2) {
      padding: 0 20px;
      font-size: 50px;
      font-weight: bold;
    }
    div:last-child {
      flex: 1;
      height: 2px;
      background: #99c854;
    }
  }
  .main {
    margin-top: 40px;
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    p {
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
    }
   
   .li{
    float: left;
    margin-top: 2%;
    width:50%;
   }
   
   .imgtxt-container{
     width:332px;
     height: auto;
     float: left;
     margin-bottom: 50px;
     text-align: center;
     margin-right: 100px;
   }
   .img-txt{
     float:right;
     margin-top: 60px;
   }

   .li-container{
     margin-left: 20%;
   }
   .video-p1 {
      width:100%;
      min-height:500px;
      margin-top:40px;

    } 
    .video-p1 iframe {
      width:100%;
      min-height:500px;
    } 
  }  
}
</style>

