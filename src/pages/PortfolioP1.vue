<template>
  <div class="three">
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
          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32026212/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_5msw6mc6&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_6ug7f8q9" width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" title="Chameleon Company"></iframe>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioP1",
  data() {
    return {
    
    }
  }
}
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
        flex: 0;
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
        font-weight: 600;
      }
      ul li {
        font-size: 24px;
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
      min-height:500px;
    } 
  }
}
</style>
