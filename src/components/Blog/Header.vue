<template>
<header>
  <div class="left">

  </div>

  <div class="center">
    <div class="title">
      <h3 class="top"> Latest </h3>
      <h1>Chameleons'</h1>
      <h3 class="bottom">Blog</h3>
    </div>
  </div>

  <div class="right">
    <label for="search-bar">
      <img src="@/assets/images/blogImage/search-icon.png" class="icon" />
      <input type="text" name="search-bar" id="search-bar" placeholder="Type to search" />
    </label>
  </div>

</header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: center;
    padding: 50px 50px 25px;

    .left {
        flex: 1;
        .logo {
            width: 75px;
        }
    }

    .center {
        h3 {
            font-size: 40px;
            font-style: italic;
            font-weight: 400;
            margin: 0;

            &.bottom {
                text-align: right;
            }
        }

        h1 {
            color: #9acb48;
            font-size: 50px;
            margin: 0;
        }

    }

    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        label {
            position: relative;
            display: block;
            width: 300px;

            input {
                width: 100%;
                height: auto;
                background-color: #FFFFFF;
                box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.2);

                margin: 0;
                padding: 5px 0 0 35px;
                box-sizing: border-box;

                appearance: none;
                border: none;
                outline: none;

                color: #171717;
                font-size: 16px;

                &::placeholder {
                    color: #888888;
                }

            }

            .icon{
              position:absolute;
              width:25px;
              margin: 5px;
            }

        }

    }

}
@media(max-width:800px){
  header {
    flex-direction:column;
    align-items: center;
  }

  .right{
    margin-top:10px;
  }

  .search-bar{
    width: 100%;
  }

  .center {
      h3 {
          font-size: 50px;
          font-style: italic;
          font-weight: 400;
          margin: 0;

          &.bottom {
              text-align: right;
          }
      }

      h1 {
          color: #9acb48;
          font-size: 10px;
          margin: 0;
      }

  }


}


</style>
