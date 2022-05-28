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

    <div class="footer">
       
        <div class="footer-image">
          <img class="logo" :src="logo" alt="" />
        </div>
        
        <div class="footer-first-heading">
          <img class="footer-tail" :src="pngwing1" alt="" />
          <div class="footer-first">CHAMELEON</div>
            <div class="footer-writing">Striving to Create a</div>
            <div class="footer-writing">Smarter World!</div>
          <div class="footer-first">CONTACT US</div>
            <div class="footer-writing">+61 3 9244 6100</div>
            <div class="footer-writing">chameleon@deakin.edu.au</div>
        </div>
        
        <div class="footer-second-heading">
          <div class="footer-second">EXPLORE</div>
            <div><a href="#/web/our-services"> Our services </a></div>
            <div><a href="#/web/portfolio"> Portfolio </a></div>
            <div><a href="#/web/resources"> Resources </a></div>
            <div><a href="#/web/about-us"> About us </a></div>
        </div>
        
        <div class="footer-third-heading">
          <div class="footer-third">HELPFUL LINKS</div>
            <div><a href="#/web/privacy">Privacy Policy</a></div>
            <div><a href="#/web/terms">Terms and Conditions</a></div>
          <div class="footer-third">CONNECT WITH US</div>
            <div class="button-row-one">
              <img class="sm-icons" :src="it" alt=""/>
              <img class="sm-icons" :src="fb" alt="" />
              <img class="sm-icons" :src="tt" alt="" />
            </div>
            <div class="button-row-two">
              <img class="sm-icons" :src="yt" alt="" />
              <img class="sm-icons" :src="wa" alt="" />
              <img class="sm-icons" :src="msger" alt="" />
            </div>
        </div>

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
        <div class="@chameloen"></div>

    </div>
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
.footer {
  flex: 1;
  height: 340px;
  background: #C9E2A4;
  display: flex;
  .logo{
    max-width: 80px;
    max-height: 80px;
    padding-left: 30px;
    padding-top: 10px;
    position: absolute;
  }
  .footer-first-heading{
    display: inline;
    width: 25%;
      .footer-first{
      padding-top: 0px;
      padding-left: 40px;
      font-weight: bold;
      font-size: 23px;
      font-family: Arial Black;
      color: #60D5E1;
      flex: 1;
      text-align: left;
    }
  }
  .footer-second-heading{
      display: inline;
      width: 25%;
    .footer-second{
      padding-top: 70px;
      padding-left: 0px;
      font-weight: bold;
      font-size: 23px;
      font-family: Arial Black;
      color: #60D5E1;
      flex: 1;
      text-align: left;

    }
  }
  .footer-third-heading{
      display: inline;
      width: 25%;
    .footer-third{
      padding-top: 70px;
      padding-left: 0px;
      font-weight: bold;
      font-size: 23px;
      font-family: Arial Black;
      color: #60D5E1;
      flex: 1;
      text-align: left;
    }
  }

  .footer-fourth-heading{
      display: inline;
      width: 25%;
      padding-right: 80px;
    .footer-fourth{
      padding-top: 70px;
      padding-left: 0px;
      font-weight: bold;
      font-size: 23px;
      font-family: Arial Black;
      color: #60D5E1;
      flex: 1;
      text-align: left;
    }
    .links{
      font-weight: bold;
      font-size: 20px
    }
    .buttonrow{
      border-radius: 50%;
      display: inline;
    }
  }
  .footer-writing{
    height: auto;
    margin: 0 auto;
    position: relative;
    text-align: left;
    padding-left: 40px;
    font-weight: bold;
  }
  .footer-writing2{
    height: auto;
    margin: 0 auto;
    position: relative;
    text-align: left;
    font-weight: bold;
  }

  .button {
    background-color: #EBBA79;
    border: none;
    color: grey;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 16px 4px;
    font-weight: bold;
    width: 200px;
    box-shadow: 0px -1px 2px 0 #065881 inset, 0px 1px 1px 1px #ccc, 0 0 0 1px #ababab, 0px 2px 1px 0px #ddd;
}
a {
  color: Black;
  font-weight: bold;
  text-decoration: none;
}

 .sm-icons {
    width: 10%;
    margin: 2px 3px 0px 30px;
    border-radius: 90px;
    box-shadow: 0px -1px 2px 0 #065881 inset, 0px 1px 1px 1px #ccc, 0 0 0 1px #ababab, 0px 2px 1px 0px #ddd;
  }

  .footer-tail {
    width: 60%;
    height: 21%;
    margin-left: 130px;
    opacity: 25%;
  }
} 
</style>
