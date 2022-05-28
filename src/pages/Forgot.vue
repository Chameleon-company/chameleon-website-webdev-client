<template>
  <div class="forgot_background">
    <form @submit.prevent="forgot">
      <div class="form elevation-2">
        <h2>Forgot Password</h2>

        <div class="form-group">
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Email"
          />
        </div>
        <div style="margin-top: 10%">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "forgot",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async forgot() {
      const response = await AuthenticationService.forgot({
        email: this.email,
      });

      console.log(response);
    },
  },
};
</script>



<style scoped>
.forgot_background {
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
  margin-top: 10%;
}
</style>

