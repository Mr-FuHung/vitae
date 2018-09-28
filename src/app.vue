<template>
    <div id="app">
        <router-view></router-view>
        <div class="fixedLink">
        <router-link tag="a" to='/one' title="one"></router-link>
        <router-link tag="a" to='/two'  title="two"></router-link>
        <router-link tag="a" to='/three' title='three'></router-link>
        <router-link tag="a" to='/four' title="four"></router-link>
        <router-link tag="a" to='/five' title="five"></router-link>
        <router-link tag="a" to='/six' title="six"></router-link>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" >
*,img,p,ul,li,ol,div,a,span,input,button{
    padding: 0;
    margin: 0;
}
html {
  font-size: calc(100vw / 10.62);
}
html,
body {
  width: 100%;
  height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  //   max-width: 960px;
  //   max-height: 500px;
}
@keyframes bor {
  0% {
    box-shadow: 0 0 0 0.01rem #4797b7;
  }
  100% {
    box-shadow: 0 0 0 0.05rem rgba(255, 255, 255, 0);
  }
}
.fixedLink {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  right: 0.4rem;
  width: 0;
  height: 2rem;
  margin-top: -1rem;
  border-left: 0.01rem dashed #ccc;
  > a {
    display: block;
    border-radius: 50%;
    border: 0.03rem #fff solid;
    width: 0.07rem;
    height: 0.07rem;
    background: #3b7fb9;
  }
  .router-link-active {
    -webkit-animation: bor 1.5s ease infinite;
    animation: bor 1.5s ease infinite;
  }
}
</style>
