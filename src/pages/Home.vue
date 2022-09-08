<template>
  <div class="home">
    <div class="first">
      <div class="loginMessage underline" v-if="$store.state.isUserLoggedIn"><span>{{$store.state.firstName}}'s logged in</span></div>
      <div class="title">Welcome to Chameleon</div>
      <div class="explain">Striving to create a smarter world!</div>

      <div v-if="$store.state.isUserLoggedIn == false" class="button" @click="showLogin">Login</div>
      <div v-else-if="$store.state.isUserLoggedIn" class="button" @click="logout"> Logout</div>
      <div class="right">
        <div class="rightIcon" data-toggle="modal" data-target="#exampleModal"  @click="showModal1">
          <img class="rightIcon2" :src="Ellipse" alt="" />
          <img class="rightIcon3" :src="Megaphone" alt="" />
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  New Product Coming Soon!
                </h5>
                <div @click="hideModal1" class="cancel">
                  <img :src="Multiply" alt="" />
                </div>
              </div>
              <div class="modal-body">
                Get ready for the revolutionary development in the IoT industry.
              </div>
              <div class="modal-footer">
                <div class="readMore" @click="showModal1">Read More</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="second">
      <div class="head">
        <div></div>
        <div>Our Mission</div>
        <div></div>
      </div>
      <div class="main">
        <div class="left">
          <div>
            <p>Given the complexity of energy application</p>
            <p>needs today, IoT systems are being designed</p>
            <p>to address a wide variety of existing problems.</p>
          </div>
          <div>
            <p>In Chameleon, our mission is to research,</p>
            <p>create, test, document and deploy IoT-based</p>
            <p>solutions to enhance life through the</p>
            <p>application of smart city technologies</p>
            <p>including: the building of smarter cities,</p>
            <p>homes, transportation, and energy</p>
            <p>management systems.</p>
          </div>
        </div>
        <div class="right">
          <img :src="pngwing1" alt="" />
        </div>
      </div>
    </div>

    <div class="three">
      <div class="head">
        <div></div>
        <div>Testimonials</div>
        <div></div>
      </div>
      <div class="main">
        <div class="li">
          <div class="top">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </div>
            <div class="img">
              <img :src="leftquotessign1" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div>
              <img :src="Ellipse1" alt="" />
            </div>
            <div>Robert Smith</div>
          </div>
        </div>
        <div class="li liRight">
          <div class="top">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </div>
            <div class="imgRight">
              <img :src="leftquotessign1" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div>
              <img :src="Ellipse2" alt="" />
            </div>
            <div>Jane Fibbs</div>
          </div>
        </div>
      </div>
    </div>

    <div class="four">
      <div class="left">
        <div>
          <div class="title" style="font-size: 35px; font-weight: bold">
            SEND US YOUR REVIEW!
          </div>
          <div class="content">
            <p>Have you worked with us or used any</p>
            <p>of our services in the past? If so, we</p>
            <p>would love to hear from you</p>
          </div>
        </div>
        <div class="img">
          <img :src="image2" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="main">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Full name</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <div class="sendimage">
              <img :src="sendimage" alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>

<footer>
  <div class="footer-image">
    <img src="@/assets/images/logo2.png" class="logo" />
  </div>
    <div class="row primary">
      <div class="column about">
        <div class="footer-first-heading">
          <img src="@/assets/images/pngwing-1.png" class="footer-tail" />
          <div class="footer-first1">CHAMELEON</div>
          <p>Striving to create a Smarter World!</p>
          <div class="center"><a href="">Striving to Create a</a></div>
          <div class="center"><a href="">Smarter World!</a></div>
      </div>
      <div class="footer-first-heading">
          <input type="checkbox" checked>
          <i></i>
          <div class="footer-first">CONTACT US</div>
          <div class="list">+61 3 9244 6100</div>
          <div class="list">chameleon@deakin.edu.au</div>
      </div>
    </div>
    
    <div class="column links">
      <div class="footer-second-heading">
        <input type="checkbox" checked>
        <i></i>
        <div class="footer-second">EXPLORE</div>
        <ul class="link-list-wrapper-class">
          <li><a href="#/web/our-services"> Our services </a></li>
          <li><a href="#/web/portfolio"> Portfolio </a></li>
          <li><a href="#/web/resources"> Resources </a></li>
          <li><a href="#/web/about-us"> About us </a></li>
        </ul>
      </div>
    </div>

      
    <div class="column links">
      <div class="footer-third-heading">
        <input type="checkbox" checked>
        <i></i> 
        <div class="footer-third">HELPFUL LINKS</div>
        <ul class="link-list-wrapper-class">
          <li><a href="#/web/privacy"> Privacy Policy </a></li>
          <li><a href="#/web/terms"> Terms and Conditions </a></li>
        </ul>               
      </div>
      <div class="footer-third-heading">
        <input type="checkbox" checked>
        <i></i> 
        <div class="footer-third">CONNECT WITH US</div>
        <ul>
          <li>
            <div class="button-row-one">
              <img src="@/assets/images/instagram.png" class="sm-icons" />
              <img src="@/assets/images/fb.png" class="sm-icons" />
              <img src="@/assets/images/twitter.png" class="sm-icons" />
            </div>
          </li>
          <li>
            <div class="button-row-two">
              <img src="@/assets/images/yt.png" class="sm-icons" />
              <img src="@/assets/images/wa.png" class="sm-icons" />
              <img src="@/assets/images/msger.png" class="sm-icons" />
            </div>
          </li>
        </ul>               
      </div>      
    </div>

    
    <div class="column subscribe">
    <div class="footer-fourth-heading">
      <div class="footer-fourth">MORE INFROMATION</div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your email"
        />
      </div>
      <button class="button button4">Subscribe Now</button>
  </div>
  </div>
</div>
</footer>
</div>
</template>
<script>
const Ellipse = require("@/assets/images/Ellipse4.png");
const Megaphone = require("@/assets/images/Megaphone.png");
const pngwing1 = require("@/assets/images/pngwing-1.png");
const leftquotessign1 = require("@/assets/images/left-quotes-sign 1.png");
const Ellipse2 = require("@/assets/images/Ellipse2.png");
const Ellipse1 = require("@/assets/images/Ellipse1.png");
const image2 = require("@/assets/images/image2.png");
const image = require("@/assets/images/Image.png");
const sendimage = require("@/assets/images/Group18.png");
import {} from "axios";
const fb = require("@/assets/images/fb.png");
const wa = require("@/assets/images/wa.png");
const yt = require("@/assets/images/yt.png");
const msger = require("@/assets/images/msger.png");
const tt = require("@/assets/images/twitter.png");
const it = require("@/assets/images/instagram.png");
const logo = require("@/assets/images/logo2.png");
const Multiply = require("@/assets/images/Multiply.png");
export default {
  name: "Home",
  data() {
    return {
      Ellipse,
      Megaphone,
      pngwing1,
      leftquotessign1,
      Ellipse2,
      Ellipse1,
      image2,
      image,
      sendimage,
      logo,
      it,
      tt,
      wa,
      fb,
      msger,
      yt,
      Multiply,
      token: $store.state.isUserLoggedIn
    };
  },
  mounted() {},
  methods: {
     showModal1() {
      $("#exampleModal").modal("show");
    },
    hideModal1() {
      $("#exampleModal").modal("hide");
    },
    showLogin() {
      $(location).attr('href','#/web/login')
    },
      logout() {
        this.token = false;
        this.$store.dispatch("setToken", this.token);
        this.$router.push("/web/home");
    },
    showTerms() {
      $(location).attr('href','#/web/terms')
    },
    showPrivacy() {
      $(location).attr('href','#/web/privacy')
    },
  },
};
</script>
<style scoped lang="scss">
.readMore {
  width: 152px;
  height: 43px;
  text-align: center;
  line-height: 43px;
  background: #feb95f;
  border-radius: 17px;
}
.cancel {
  background: #b9d78a;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: -22px;
  right: -10px;
  img {
    width: 35px;
    height: 35px;
  }
}
.loginMessage{
  margin-top: 25px;
  margin-left: 35px;
  font-weight: 500;
  text-decoration-color: black;
}
span {
  color: black;
}
.underline {
  border-bottom: 6px solid currentColor;
  display: inline-block;
  line-height: 1.5;
  color: #99c854;
}
.first {
  background-image: url("../assets/images/Image1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "Poppins", sans-serif;
  height: 90vh;
  .title {
    font-size: 64px;
    font-weight: 600;
    color: #343434;
    padding-left: 70px;
    padding-top: 150px;
  }
  .explain {
    font-weight: 500;
    margin-top: 35px;
    width: 460px;
    font-size: 36px;
    padding-left: 70px;
    padding-top: 0;
    padding-bottom: 15px;
  }
  .button {
    width: 150px;
    height: 40px;
    background: #faad4a;
    text-align: center;
    line-height: 42px;
    color: #fff;
    border-radius: 20px;
    &:hover {
      border: 2px solid #faad4a;
      background: #fff;
      color: #faad4a;
    }
    box-shadow: 0px -1px 2px 0 #065881 inset, 0px 1px 1px 1px #ccc, 0 0 0 1px #ababab, 0px 2px 1px 0px #ddd;
    margin-left: 85px;
    display: block;
    float: left;
  }
  .button-cover {
    width: 150px;
    background: #ff9500;
    color: #fff;
    margin-top: 10px;
  }
  .right {
    text-align: right;
    text-align: -webkit-right;
    padding-right: 40px;
    margin-top: 100px;
    .rightIcon {
      position: relative;
      width: 123px;
      height: 87px;
    }
    .rightIcon3 {
      position: absolute;
      top: 20px;
      left: 30px;
    }
    .modal-footer {
      justify-content: center;
    }
    .modal-title {
      font-weight: bold;
      font-size: 25px;
    }
    .modal-content {
      background: #99c854;
    }
  }
}
.second {
  padding: 40px 40px;
  margin-top: 60px;
  .head {
    display: flex;
    align-items: center;
    div:first-child {
      width: 20%;
      height: 3px;
      background: #99c854;
    }
    div:nth-child(2) {
      padding: 0 20px;
      font-size: 55px;
      font-weight: bold;
    }
    div:last-child {
      flex: 1;
      height: 3px;
      background: #99c854;
    }
  }
  .main {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    .right {
      img {
        height: 350px;
      }
    }
  }
}
.three {
  padding: 40px 40px;
  margin-top: 60px;
  .head {
    display: flex;
    align-items: center;
    div:first-child {
      flex: 1;
      height: 3px;
      background: #99c854;
    }
    div:nth-child(2) {
      padding: 0 20px;
      font-size: 55px;
      font-weight: bold;
    }
    div:last-child {
      flex: 1;
      height: 3px;
      background: #99c854;
    }
  }
  .main {
    display: flex;
    margin-top: 40px;
    .li {
      .top {
        background: #d4d4d4;
        width: 90%;
        border-radius: 30px;
        padding: 30px;
        position: relative;
        .img {
          position: absolute;
          top: 5px;
          left: 16px;
        }
        .imgRight {
          position: absolute;
          top: 5px;
          right: 16px;
        }
        img {
          width: 20px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
      }
    }
    .liRight {
      display: flex;
      flex-direction: column;
      align-items: self-end;
    }
  }
}
.four {
  display: flex;
  height: 878px;
  .left {
    flex: 1;
    background-image: url("../assets/images/Image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      position: absolute;
      top: 0;
      left: 0;
    }
    .title {
      font-size: 35px;
      font-weight: bold;
    }
    .content > p {
      font-weight: bold;
    }
  }
  .right {
    flex: 1;
    background: #f9f9f9;
    .main {
      padding-top: 150px;
      padding-left: 30px;
      padding-right: 100px;
      .sendimage {
        margin-top: 50px;
        img {
          width: 200px;
        }
      }
      textarea {
        height:200px;
      }
    }
  }
}
footer {
  background-color: #C9E2A4;
  font-size: 16px;
  width:auto;
}
footer * {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  border: none;
  outline: none;
}
.row {
  padding: 1em 1em;
}
.logo{
  max-width: 80px;
  max-height: 80px;
  padding-left: 30px;
  padding-top: 10px;
  position: absolute;
}
.row.primary {
  display: grid;
  grid-template-columns:2fr 1fr 1fr 2fr;
  align-items: stretch;
  
}

.footer-second, .footer-third, .footer-fourth{
  font-family:Arial Black;
  color: #60D5E1;
  font-weight: bold;
  font-size: 23px;
  padding-top:70px;
  padding-left:0px;
  flex:1;
  text-align:left;
}

.footer-first, .footer-first1{
  font-family:Arial Black;
  color: #60D5E1;
  font-weight: bold;
  font-size: 23px;
  padding-top:20px;
  padding-left:50px;
  text-align: left;
  flex:1;
  
}
i,p, input[type=checkbox] {
    display:none;
  }
.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2em;
}


ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
li:not(:first-child) {
  margin-top: 0.8em;
}
ul li a, .list {
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-decoration: none;
  padding-left:0px;
}
ul li a:hover {
  color: #2a8ded;
}

input,
button {
  font-size: 1em;
  padding: 1em;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 5px;
}
button {
  background-color: #EBBA79;
  color: grey;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  box-shadow: 0px -1px 2px 0 #065881 inset, 0px 1px 1px 1px #ccc, 0 0 0 1px #ababab, 0px 2px 1px 0px #ddd;
}
a, .list{
  color: Black;
  font-weight: bold;
  text-decoration: none;
  padding-left:50px;
}
 .sm-icons {
    width: 10%;
    margin: 2px 3px 0px 30px;
    border-radius: 90px;
    box-shadow: 0px -1px 2px 0 #065881 inset, 0px 1px 1px 1px #ccc, 0 0 0 1px #ababab, 0px 2px 1px 0px #ddd;
  }
  .footer-tail {
    width: 50%;
    height: 21%;
    margin-left: 100px;
    opacity: 25%;
  }
  @media only screen and(max-width:900px){
    .row.primary{
      grid-template-columns:2fr 2fr;
      width:auto;
    }
    ul li a, .footer-second, .footer-third, .footer-fourth-heading,.button-row-one, .button-row-two{
      padding-left: 50px;
    }
    .footer-first1, .footer-first{
      padding-top:70px;
    }
    .footer-tail{
      display:none;
    }
  
  }

  @media screen and (max-width: 500px) {
  
  footer{
    padding:1px;
    margin-bottom: 0%;
  }
  .logo{
    margin-left:200px;
    display:block;
    max-width:100px;
    max-height:100px;
}

  .row.primary {
    grid-template-columns: auto;
  }
  ul li a, .list{
    padding-left:0px;
  }
  .footer-first1{
    padding-top: 50px;
  }
  .footer-first1, p{
      text-align: center;
      display:block;
    }
    p{
      color: black;
      text-decoration: none;
      font-weight: bold;
      text-decoration: none;
    }
    .footer-first,.footer-second, .footer-third{
    padding: 0;
    position:relative;
    margin:0;
    border-width: 20px;
    padding-top: 15px;
    padding-bottom:10px;
    border-top: 1px solid grey;
  }

  .footer-fourth-heading{
    padding-left:0px;
    border-top: 1px solid grey;
    margin-top: 0px;
  }
  .center{
    display:none;
  }

  i:before,i:after{
    transition:all 0.3s;
  }
  i{
    position: absolute;
    transform: translate(-6px, 0);
    padding-top: 25px;
    right: 50px;
    display:block;
  }
  i:before, i:after {
    content: "";
    position: absolute;
    background-color: #000000;
    width: 3px;
    height: 9px;
  }
  i:before {
    transform: translate(-2px, 0) rotate(45deg);
  }
  i:after {
    transform: translate(2px, 0) rotate(-45deg);
  }
  input[type=checkbox] {
    display:block;
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    touch-action: manipulation;
  }
  input[type=checkbox]:checked ~ .footer-first{
    color:#60D5E1;
  }
  input[type=checkbox]:checked ~ .footer-second{
    color:#60D5E1;
  }
  input[type=checkbox]:checked ~ .footer-third{
    color:#60D5E1;
  }

  input[type=checkbox]:checked ~ ul li {
    margin-top: 0;
    max-height: 0;
    transition: .3s;
    opacity: 0;
    transform: translate(0, 50%);
  }
  input[type=checkbox]:checked ~ .list {
    margin-top: 0;
    max-height: 0;
    transition: .3s;
    opacity: 0;
    transform: translate(0, 50%);
  }

  input[type=checkbox]:checked ~ i:before {
    transform: translate(2px, 0) rotate(45deg);
  }
  input[type=checkbox]:checked ~ i:after {
    transform: translate(-2px, 0) rotate(-45deg);
  }
  .footer-tail{
    display:none;
  }

  }
 
</style>
