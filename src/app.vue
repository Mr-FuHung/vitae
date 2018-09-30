<template>
    <div id="app">
        <transition>
          <router-view></router-view>
        </transition>
        <div class="fixedLink">
        <router-link tag="a" to='/one' title="one"></router-link>
        <router-link tag="a" to='/two'  title="two"></router-link>
        <router-link tag="a" to='/three' title='three'></router-link>
        <router-link tag="a" to='/four' title="four"></router-link>
        <router-link tag="a" to='/five' title="five"></router-link>
        <router-link tag="a" to='/six' title="six"></router-link>
        <div class="audio" @click="audio" ref="audioimg">
          <p></p>
        </div>
        </div>
        <audio src="./audio.mp3"  ref="audio" autoplay loop></audio>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ding: "",
      deg: 1
    };
  },
  methods: {
    audio() {
      let music = this.$refs.audio;
      //音频播放事件

      if (music.paused) {
        // 播放
        clearInterval(this.ding);
        music.play();
        this.xuanzuan();
      } else {
        //暂停
        clearInterval(this.ding);
        music.pause();
      }
    },
    xuanzuan() {
      this.ding = setInterval(() => {
        this.deg++;
        this.$refs.audioimg.style.transform = "rotate(" + this.deg + "deg)";
      }, 50);
    }
  },
  mounted() {
    let music = this.$refs.audio;
    music.addEventListener("canplay", () => {
      music.play();
      this.xuanzuan();
    });
  }
};
</script>
<style lang="scss" >
*,
img,
p,
ul,
li,
ol,
div,
a,
span,
input,
button {
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
    margin-left: -.01rem;
  }
  .router-link-active {
    -webkit-animation: bor 1.5s ease infinite;
    animation: bor 1.5s ease infinite;
  }
  > .audio {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: url("./img/love.jpg");
    background-size: 100% 100%;
    transform: rotate(0);
    &:hover {
      cursor: pointer;
    }
    p {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      // background: url('./img/iocn.png') no-repeat 0 0;
      transition: all 1s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.26);
      }
    }
  }
}
#app {
  width: 100%;
  height: 100%;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  // width: 0;
  // height: 0;
  // transform: translateY(50%)
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
</style>
