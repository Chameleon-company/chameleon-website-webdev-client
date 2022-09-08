<template>
  <div class="three">
  <Head></Head>
      <div class="head">
        <div></div>
          <div>Smart Cities and Open Data</div>
        <div></div>
      </div>
      <div class="main">
        <p>The City of Melbourne has been an Australian leader in Open Data since 2014. The City of Melbourne initiated this project with Deakin to support greater use of their Open Data by businesses, researchers, and software developers. Open Data is a component of their smart cities' strategy.</p>
        <p>This project delivers an education portal which demonstrates how to leverage Open Data using real world scenarios that may be of interest to industry, government, and researchers. Its long-term goal is to increase the usage of City of Melbourne Open Datasets and drive increased investment across the City of Melbourne council area. </p>
        <p>The short term (trimester) deliverable will be:  </p>
        <ul>
          <li>-	Add additional data science use cases to the Melbourne Open Data Playground portal and GitHub Repo.</li>
          <li>-	Migrate the Melbourne Open Data Playground portal from AWS to Google Cloud Platform (GCP)</li>
          <li>-	Ensure the Melbourne Open Data Playground portal can run on mobile devices</li>
          <li>-	Make Minor cosmetic improvements to the Melbourne Open Data Playground portal</li>
        </ul>
        <p>Long term goals include:</p>
         <ul>
          <li>-	Preparing the Melbourne Open Data Playground portal and GitHub repository for use by the public</li>
          <li>-	Migrating the Pedestrian data use cases and Jupyter notebooks to support a new data provider</li>
          <li>-	Migrating the Open Data access API from SOCRATA to a new platform</li>
        </ul>
        <div class="video-p1">
          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32026212/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_tu93x3dv&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_uo8cf3a5" width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" title="SEBE IT Capstone 2022 T1 - Chameleon City of Melbourne Project Showcase Video"></iframe>
        </div>
      </div>
  </div>
</template>
<script>
const Logo= require("@/assets/images/logo2.png");
const Baob= require("@/assets/images/menu.png");
import Head from "./Head.vue"
export default {
  name: "PortfolioP1",
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
    font-size: 20px;
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
      min-height:500px;
      margin-top:40px;

    }
    .video-p1 iframe {
      width:100%;
      min-height:250px;
    }
  }
}
</style>
