<template>
  <div class="main">
    <form @submit="onSubmit">
      <div class="admin-left-panel">
        <div class="avator-div">
          <div class="admin-title">Profile Settings</div>

          <div class="admin-img-sub-title">Change Profile Picture</div>
        </div>

        <b-form-file
          v-model="userForm.file1"
          :state="Boolean(userForm.file1)"
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </div>
      <div class="admin-right-panel">
        <div class="label-rows top-row">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            id="fname"
            placeholder="First Name"
            aria-describedby="fnameHelp"
            v-model="userForm.fname"
          />
        </div>
        <div class="label-rows top-row">
          <label>Middle Name</label>
          <input
            type="text"
            class="form-control"
            id="mname"
            placeholder="Middle Name"
            aria-describedby="mnameHelp"
            v-model="userForm.mname"
          />
        </div>
        <div class="label-rows top-row">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lname"
            placeholder="Last Name"
            aria-describedby="lnameHelp"
            v-model="userForm.lname"
          />
        </div>
        <div>
          <div class="select-label-rows">User Type</div>
          <select v-model="userForm.selected">
            <option disabled value="">Please Select User Type</option>
            <option>General</option>
            <option>Employee</option>
            <option>Adminstrator</option>
          </select>
        </div>
        <div class="label-rows username-row">
          <label>Username</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            aria-describedby="emailHelp"
            v-model="userForm.email"
          />
        </div>
        <div class="label-rows passwords">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="userForm.password"
          />
        </div>
        <div class="label-rows passwords">
          <label>Confirm Password</label>
          <input
            type="cnfpassword"
            class="form-control"
            id="cnfpassword"
            placeholder="Confirm Password"
            v-model="userForm.cnfpassword"
          />
        </div>
        <div class="error" v-html="error"></div>
        <b-button type="submit" variant="primary">Save</b-button>
      </div>
    </form>
  </div>
</template>

<script>
const DefaultProfileImg = require("@/assets/images/defaultprofileimg.png");
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "AboutUs",
  data() {
    return {
      DefaultProfileImg,
      userForm: {
        fname: "",
        mname: "",
        lname: "",
        email: "",
        selected: "",
        password: "",
        cnfpassword: "",
        file1: null,
      },
      error: null,
    };
  },
  mounted() {},
  methods: {
    async onSubmit(event) {
      console.log(this.userForm)
      const response = await AuthenticationService.updateProfile(this.userForm);
      alert(response.data);
    },
  },
};
</script>


<style scoped lang="scss">
.main {
  // font-size: 36px;
  color: #3a3a39;
  font-family: "Poppins", sans-serif;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100vh;
  overflow: none;
}

.admin-title {
  flex: auto;
  font-size: 45px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding-top: 70px;
  margin-left: 60px;
  width: 335px;
  display: inline-block;
  -webkit-transform: scale(1.2, 1);
  -moz-transform: scale(1.2, 1);
  -ms-transform: scale(1.2, 1);
  -o-transform: scale(1.2, 1);
  transform: scale(1.2, 1);
}
.admin-left-panel {
  // flex: 1;
  width: 360px;
  height: 100%;
  .avator-div {
    background: #c9e2a4;
  }
  display: block;
  float: left;
}
.admin-right-panel {
  display: block;
  float: left;
  height: 100%;
  margin-left: 120px;
  margin-top: 170px;
}

.admin-profile-img {
  position: relative;
  width: 60%;
  margin-left: 75px;
  margin-top: 40px;
}

.admin-img-sub-title {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  padding-top: 30px;
  margin-left: 75px;
  display: inline-block;
  -webkit-transform: scale(1.2, 1);
  -moz-transform: scale(1.2, 1);
  -ms-transform: scale(1.2, 1);
  -o-transform: scale(1.2, 1);
  transform: scale(1.2, 1);
}

.label-rows,
.select-label-rows,
select {
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  display: inline-block;
  -webkit-transform: scale(1.2, 1);
  -moz-transform: scale(1.2, 1);
  -ms-transform: scale(1.2, 1);
  -o-transform: scale(1.2, 1);
  transform: scale(1.2, 1);
  margin-bottom: 10px;
}

.select-label-rows {
  margin-left: 52px;
  width: 100%;
}

select {
  height: 40px;
  margin-left: 40px;
  width: 82%;
  background-color: rgb(163, 161, 158);
  color: #dee2e6;
}

.top-row label {
  margin-right: 85px;
  width: 180px;
}

.label-rows input {
  width: 80%;
  background-color: rgb(163, 161, 158);
}

.username-row {
  margin-left: 54px;
  margin-top: 15px;
  width: 103%;
}

.passwords {
  width: 48%;
  margin-left: 13px;
  display: block;
  float: left;
}

button {
  float: left;
  margin-left: 285px;
  margin-top: 30px;
  width: 150px;
  height: 40px;
  color: #000000;
  background-color: rgb(248, 180, 23);
  border: rgb(248, 180, 23);
}

button:hover {
  background-color: rgb(250, 218, 142);
  color: #000000;
}
</style>

