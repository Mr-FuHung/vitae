<template>
    <div id="app">
       <transition
@after-enter ="afterEnter "
   mode="out-in" >
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
      deg: 1,
      skip: true,
      vueAnimation: ["one", "two", "three", "four", "five", "six"],
      arrInd: 0,
      origin: ""
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
    },
    afterEnter() {
      this.skip = true;
    },
    scrollFunc(e) {
      // var direct = 0;
      e = e || window.event;
      if (this.skip) {
        this.skip = false;
        if (this.arrInd == "0" || this.arrInd == this.vueAnimation.length - 1) {
          this.skip = true;
        }
        if (e.wheelDelta) {
          //判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) {
            //当滑轮向上滚动时
            this.arrInd -= 1;
            this.arrInd = this.arrInd <= 0 ? 0 : this.arrInd;
            window.location.href = `${this.origin}#/${
              this.vueAnimation[this.arrInd]
            }`;
          }
          if (e.wheelDelta < 0) {
            //当滑轮向下滚动时
            this.arrInd += 1;
            this.arrInd =
              this.arrInd >= this.vueAnimation.length
                ? this.vueAnimation.length - 1
                : this.arrInd;
            window.location.href = `${this.origin}#/${
              this.vueAnimation[this.arrInd]
            }`;
          }
        } else if (e.detail) {
          //Firefox滑轮事件
          if (e.detail > 0) {
            //当滑轮向上滚动时
            this.arrInd -= 1;
            this.arrInd = this.arrInd <= 0 ? 0 : this.arrInd;
            window.location.href = `${this.origin}#/${
              this.vueAnimation[this.arrInd]
            }`;
          }
          if (e.detail < 0) {
            //当滑轮向下滚动时

            this.arrInd += 1;
            this.arrInd =
              this.arrInd >= this.vueAnimation.length
                ? this.vueAnimation.length - 1
                : this.arrInd;
            window.location.href = `${this.origin}#/${
              this.vueAnimation[this.arrInd]
            }`;
          }
        }
      }
      // ScrollText(direct);
    }
  },
  mounted() {
    let music = this.$refs.audio;
    music.addEventListener("canplay", () => {
      music.play();
      this.xuanzuan();
    });
  },
  created() {
    if (window.location.protocol == "file:") {
      this.origin = window.location.origin + window.location.pathname;
    } else if (window.location.protocol == "https:") {
      this.origin = window.location.origin + window.location.pathname;
    } else {
      this.origin = window.location.origin + "/";
    }

    console.log(window.location);
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", this.scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  },
  watch: {
    $route(newval, oldvla) {
      let path = newval.path.substr(1);
      this.arrInd = this.vueAnimation.indexOf(path);
    }
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
    margin-left: -0.01rem;
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
.v-leave-to {
  transform: rotateX(90deg);
}
.v-enter {
  transform: rotateX(90deg);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s linear;
}
</style>
