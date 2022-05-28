<template>
  <div class="reset_background">
    <form>
      <div class="form elevation-2">
        <h2>Reset Password</h2>
        <div>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            v-model="confirmPassword"
          />
        </div>
        <div class="error" v-html="error"></div>
        <div style="margin-top: 5%">
          <button @click="newPassword" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "reset",
  data() {
    return {
      authentication: false,
      password: "",
      confirmPassword: "",
      error: null,
    };
  },
  methods: {
    async reset() {
      const response = await AuthenticationService.resetPassword({
        //Details from the url
        email: this.$route.params.email,
        token: this.$route.params.token,
      });
      if (response.data.code === "Successful match!") {
        this.authentication = true;
      }
      console.log(id);
    },
    async newPassword() {
      if (this.authentication) {
        try {
          const response = await AuthenticationService.newPassword({
            email: this.$route.params.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
          });
          this.error = response.data.error;
          this.$router.push("/web/login");
        } catch (error) {
          console.log(error, error.response);
        }
      }
    },
  },
  //Calls when the page first loads
  beforeMount() {
    this.reset();
  },
};
</script>

<style scoped>
.reset_background {
  height: 75%;
  min-height: 80vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(185, 215, 138, 1) 100%
  );
  padding-top: 15%;
}

.row {
  margin-top: 70px;
}

.form {
  border-top: 100px;
  text-align: center;
  min-height: 400px;
  max-width: 50%;
  display: block;
  padding-top: 20px;
  margin: auto;
  border-radius: 25px;
  background: white;
  padding-inline: 40px;
}

.btn {
  background-color: #faad4a;
  width: 60%;
  border-radius: 25px;
  border-color: #faad4a;
  font-weight: bold;
  font-size: 120%;
  color: #ffffff;
  box-shadow: 0px 6px 5px -2px #121212;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .btn-primary.dropdown-toggle {
  background-color: transparent;
  color: #ff8f00;
  background-color: #ffffff;
  border-color: #ff8f00;
}

.form-control {
  border-color: #99c854;
  border-radius: 10px;
  border-width: 3px;
  margin-top: 3%;
}
</style>
