<template>
  <div class="three">
    <Head></Head>
      <div class="head">

        <div></div>
          <div>Chameleon Website Development</div>
        <div></div>
      </div>
      <div class="main">
        <p>Like any other company, the Chameleon company requires a website to be its digital public facing space. The main goal of the website is to promote Chameleon’s projects, products, and the services that it provides. As the project implementation progresses additional features and functionalities will be added such as blogs, events calendar, and a clients 'area.</p>
        <p>The goal for this trimester is to :</p>
        <ul>
          <li>-	Identify the hosting infrastructure and setup the DevOps pipelines</li>
          <li>-	Identify the web development tools and SDLC processes to follow</li>
          <li>-	Propose an initial website layout and style</li>
          <li>-	Include an initial list of standard pages (including links to other Chameleon projects) and start working on their contents </li>
          <li>-	The website pages will be static where the content is hardcoded not database driven</li>
          <li>-	A basic subscribe, announcement and login feature with implementation of security</li>
          <li>-	User profile section with AI/ML componenet for image recognition</li>
          <li>-	Basic steps to integrate a blogging platform for users</li>
        </ul>
        <div class="video-p1">
          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32026212/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_ld34wf56&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_3xwefd5d" width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *"  frameborder="0" title="Chameleon Website Showcase (T1 2022)"></iframe>
        </div>
      </div>
  </div>
</template>
<script>
const Logo= require("@/assets/images/logo2.png");
const Baob= require("@/assets/images/menu.png");
import Head from "./Head.vue"
export default {
  name: "PortfolioP3",
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
