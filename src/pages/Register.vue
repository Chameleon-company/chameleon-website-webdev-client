<template>
  <div class="background">
    <div class="container-lg">
      <div class="row">
        <form class="col" >
          <div class="form elevation-2">
            <img :src="require('@/assets/images/logo2.png')" width="150" height="150" class="logo" />
            <h1>Get Started</h1>
            <p class="p1">Please enter your details</p>
            <div style="width: 48%; float:left">
              <input type="text" class="form-control" id="fname" placeholder="First Name" v-model="firstName" />
            </div>

            <div style="width: 48%; float:right">
              <input type="text" class="form-control" id="lname" placeholder="Last Name" v-model="lastName" />
            </div>

            <div style="margin-top: 100px" >
              <input type="email" class="form-control" id="email" placeholder="Email"
                aria-describedby="emailHelp" v-model="email" />
            </div>
            <div>
              <input type="password" class="form-control" id="password" placeholder="Password"
                v-model="password" />
            </div>
            <div>
              <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password"
                v-model="confirmPassword" />
            </div>
            <br />
            <div class="error" v-html="error"></div>
            <button @click="register" type="submit" class="btn btn-primary">Sign Up</button>
            <div style="margin-top:20px;">
              <p class="p1">Already have an account?
                <a class="sign-up-btm" href="#/web/login">Log In</a>
              </p>
            </div>
          </div>
        </form>

        <div class="col">
          <div>
            <img :src="require('@/assets/images/IoT.png')" class="marginauto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }
  },
  methods: {
async register() {
      try {
        const response = await AuthenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword

        })
        this.$router.push('/web/login');
        //this.$store.dispatch('setToken', response.data.token);
        //this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error
      }

    }
  }
}
</script>


<style scoped>
.background {
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(185, 215, 138, 1) 100%);
  min-height: 100%;
}

.logo {
  display: block;
  padding-top: 20px;
  margin: auto;
}

h1 {
  text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 400%;
}

.p1 {
  text-align: center;
  font-weight: bold;
}

.btn {
  background-color: #FAAD4A;
  width: 100%;
  border-radius: 25px;
  border-color: #FAAD4A;
  font-weight: bold;
  font-size: 120%;
  color: #ffffff;
  box-shadow: 0px 6px 5px -2px #121212;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open>.btn-primary.dropdown-toggle {
  background-color: transparent;
  color: #FF8F00;
  background-color: #ffffff;
  border-color: #FF8F00;
}

.sign-up-btm {
  color: #99C854;
  font-weight: bold;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  font-size: 120%;
  text-decoration: underline;
  cursor: pointer;
}

.marginauto {
  max-width: 100%;
  min-height: 900px;
  display: block;
  margin: 10px auto 20px;
  padding-left: 10px;
}

.form {
  min-height: 800px;
  max-width: 100%;
  display: block;
  margin-top: 60px;
  border-radius: 25px;
  background: white;
  padding-inline: 40px;
}

.form-control {
  border-color: #99C854;
  border-radius: 10px;
  border-width: 3px;
  margin-top: 20px;
}
</style>
