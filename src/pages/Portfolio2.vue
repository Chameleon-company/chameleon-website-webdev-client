<template>
  <div class="three">
    <Head></Head>
      <div class="head">
        <div></div>
          <div>EV Charger Placement</div>
        <div></div>
      </div>
      <div class="main">
        <p>The EV Charger Placement project is also a sub-project of the EV Adoption Tools initiative. The goal of this sub-project is to use community data such as population, traffic and transit statistics to predict where would be the most suitable to install new charging stations so that they are well located in relation to other stations and have activities or facilities nearby to provide an adequate location to stop and charge. There will also be considerations for nearby residents to improve business foot traffic whilst reducing residential areas from unnecessary visitors. These locations will also be cross-referenced with existing or planned infrastructure to ensure that the stations power requirements can be adequately supported.
The goal of this sub-project is to use community data (population, traffic, transit etc) to predict where would be the most mutually beneficial place to install new charging stations so that: </p>
        <ul>
          <li>-	Stations are well located in relation to other charging stations</li>
          <li>-	People have other reasons to stop there (landmark or facility that people spend time at) </li>
          <li>-	Residents benefit from the installation (business see increased foot traffic & residents are spared extra traffic) </li>
          <li>-	Existing or planned infrastructure can accommodate the stations (power requirements) </li>
        </ul>

        <p>This project will primarily be a data science project that will include: </p>
         <ul>
          <li>-	Identifying data sets that can support this decision-making process. This will include a research process that will determine whether the required data sets are available</li>
          <li>-	The outcomes here will be creating a dashboard and possibly an application or machine learning model that provides these recommendations</li>
        </ul>
        <div class="video-p1">
          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32025882/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_ekdcmax7&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_i5371w05" width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="EVAdoptionToolsShowcaseT12022"></iframe>
        </div>
      </div>
  </div>
</template>
<script>
const Logo= require("@/assets/images/logo2.png");
const Baob= require("@/assets/images/menu.png");
import Head from './Head.vue'
export default {
  name: "PortfolioP2",
  data() {
    return{
       Logo,
      Baob,
      isshow:false
    }
  },
    methods:{
     show(){
      if(this.isshow){
        this.isshow=false;
      }else{
        this.isshow=true;
      }
    }
  },
  components:{
    Head
  }
}
</script>
<style scoped lang="scss">
.three {
   .box{
    float: right;
    margin-right: 20px;
  }
  .port li{
    display: inline-block;
    list-style: none;
    border: 1px solid black;

    a{
      text-decoration: none;
      color:black;
    }
  }
  .port li:hover{
    background-color: black;
  }
  .logo{
    width: 80px;
    height: 80px;
    margin-left: 10px;
  }
  .more{
  width: 40px;
  height: 40px;
  float: right;
  margin-top: 20px;
  }
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
        font-size: 30px;
        font-weight: bold;
      }
      div:last-child {
        flex: 0;
        height: 2px;
        background: #99c854;
      }
  }
  .main {
    margin-top: 40px;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

      p {
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
      }
      ul li {
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        list-style-type: none;
        margin:10px 5px;
      }
    .video-p1 {
      width:100%;
      min-height:200px;
      margin-top:40px;

    }
    .video-p1 iframe {
      width:100%;
      min-height:200px;
    }
  }
}
</style>
