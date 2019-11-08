<template>
  <div class="topbar">
      <div class="row">
            <div class="col-1-of-4">
                <span><img src="../assets/life.svg" class="topbar__logo"/>{{currentUser.lives}}</span>
            </div>
            <div class="col-1-of-4">
                  <h3>{{currentUser.name}}</h3>
            </div>
            <div class="col-1-of-4">
                <span><img src="../assets/bitcoin.svg" class="topbar__logo"/>{{currentUser.coins}}</span>
            </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        currentUser: {
            type: Object,
        }
    }
}
</script>

<style>
    .row {
        max-width: 1140px;
        margin: 5px auto;
        margin-left: 33%;
    }
    .row:not(:last-child) {
        margin-bottom: 8rem; }
    .row::after {
        content: "";
        display: table;
        clear: both; }
    .row [class^="col-"] {
        float: left; }
    .row [class^="col-"]:not(:last-child) {
        margin-right: 15px; 
    }
    .row .col-1-of-2 {
        width: calc((100% - 6rem) / 2); }
    .row .col-1-of-3 {
        width: calc((100% - 2 * 6rem) / 3); }
    .row .col-2-of-3 {
        width: calc(2 * ((100% - 2 * 6rem) / 3 ) + 6rem); }
    .row .col-1-of-4 {
        background-color:rgb(49, 49, 49);
        width: calc((100% - 3 * 60px) / 4); 
        color: white;
        font-size: 20px;
        border-radius: 50px;
    }
    .row .col-2-of-4 {
        width: calc(2 * ((100% - 3 * 6rem) / 4 ) + 6rem); }
    .row .col-3-of-4 {
        width: calc(3 * ((100% - 3 * 6rem) / 4 ) + 2 * 6rem); }

    .row .col-1-of-4 span {
        font-size: 20px;
        padding-bottom: 5px;
    }
    .topbar {
        background-color: #995FDE;
        padding: 10px;
        max-height: 10%;
    }

    .topbar--indicator__box {
        width: 5%;
        color: white;
        border: 1px white;
        background-color: rgb(49, 49, 49);
        border-radius: 10px;
        margin-left: 50px;
        font-size: 20px;
    }
    .topbar--indicator__box .topbar-lives__logo {
        max-width: 25px;
        max-height: 25px;
        padding: 15px;
        margin: 5px;
    }
    .topbar__logo {
        max-width: 25px;
        max-height: 25px;
        padding: 15px;
        margin-top: 5px;
        margin-left: 10px;
    }

</style>