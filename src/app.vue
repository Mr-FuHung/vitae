<template>
    <div id="app">
       <div id="bgc">{{exhibition}}</div>
      <!--  -->
       <transition mode="out-in" @after-enter ="afterEnter " @enter='enter' 
       enter-active-class='animated  rollIn' 
       :duration='1000' 
       leave-active-class='animated rollOut'>
          <router-view></router-view>
        </transition>
        <div class="fixedLink">
        <router-link tag="a" to='/one' title="one"></router-link>
        <router-link tag="a" to='/two'  title="two"></router-link>
        <router-link tag="a" to='/three' title='three'></router-link>
        <router-link tag="a" to='/four' title="four"></router-link>
        <router-link tag="a" to='/five' title="five"></router-link>
        <router-link tag="a" to='/six' title="six"></router-link>
        <div class="audio" @click="audio" >
          <p ref="audioimg"></p>
          <span :class="{spanPlay:!playStatus,spanStop:playStatus}"></span>
        </div>
        </div>
        <audio src="./550e8400-e19b-41d4-a716-446655440000.img" ref="audio"  loop></audio>
 
 <transition enter-active-class='animated  slideInRight' :duration='1000' leave-active-class='animated slideOutRight'>
<div class="navbar" v-show="showNav" ref="navbar">
<ul>
 <router-link tag="li" to='/one' title="one">one
 </router-link>
        <router-link tag="li" to='/two'  title="two">two
        </router-link>
        <router-link tag="li" to='/three' title='three'>three
        </router-link>
        <router-link tag="li" to='/four' title="four">four
        </router-link>
        <router-link tag="li" to='/five' title="five">five
        </router-link>
        <router-link tag="li" to='/six' title="six">six
        </router-link>
</ul>
<div class="smallShow" ref="smallShow">
<img src="./img/F.png" alt="F" style="width:.6rem">
<p>符</p>
<p>
  <span>·Rieko's resume</span>
  <span>QQ:1002150110</span>
</p>
<p>洪</p>
</div>
</div>
        </transition>
        <div class="title" @click="title" >
          <span ref="title"></span>
        </div>
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
      origin: "",
      exhibition: "",
      playStatus: false,
      showNav: false
    };
  },
  methods: {
    audio() {
      let music = this.$refs.audio;
      //音频播放事件

      if (music.paused) {
        // 播放
        this.playStatus = false;
        clearInterval(this.ding);
        music.play();
        this.xuanzuan();
      } else {
        //暂停
        this.playStatus = true;
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
    enter() {
      this.exhibition = "";
    },
    scrollFunc(e) {
      // var direct = 0;
      e = e || window.event;
      if (this.skip) {
        this.skip = false;

        if (e.wheelDelta) {
          //判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) {
            //当滑轮向上滚动时
            if (this.arrInd == "0") {
              this.skip = true;
            }
            this.arrInd -= 1;
            this.arrInd = this.arrInd <= 0 ? 0 : this.arrInd;
            window.location.href = `${this.origin}#/${
              this.vueAnimation[this.arrInd]
            }`;
          }
          if (e.wheelDelta < 0) {
            //当滑轮向下滚动时
            if (this.arrInd == this.vueAnimation.length - 1) {
              this.skip = true;
            }
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
            if (this.arrInd == "0") {
              this.skip = true;
            }
            //当滑轮向上滚动时
            this.arrInd -= 1;
            this.arrInd = this.arrInd <= 0 ? 0 : this.arrInd;
            window.location.href = `${this.origin}#/${
              this.vueAnimation[this.arrInd]
            }`;
          }
          if (e.detail < 0) {
            //当滑轮向下滚动时
            if (this.arrInd == this.vueAnimation.length - 1) {
              this.skip = true;
            }
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
    },
    title() {
      if (this.showNav) {
        this.$refs.title.classList.remove("showSpan");
        // this.$refs.navbar.style.right = "-10rem";
        // this.$refs.navbar.style.borderBottomWidth = "0px";
        // this.$refs.navbar.style.width = "0rem";
        // this.$refs.navbar.style.borderLeftWidth = " 0";
        this.showNav = false;
      } else {
        this.$refs.title.classList.add("showSpan");
        // this.$refs.navbar.style.borderBottomWidth = window.innerHeight + "px";
        // this.$refs.navbar.style.width = "3rem";
        // this.$refs.navbar.style.right = "0";
        // this.$refs.navbar.style.borderLeftWidth = " 2.1rem";

        this.showNav = true;
      }
    }
  },
  mounted() {
    let music = this.$refs.audio;
    music.addEventListener("canplay", () => {
      music.play();
      this.xuanzuan();
    });
    document.body.removeChild(document.getElementById("Loading"));
    this.$refs.navbar.style.borderBottomWidth = window.innerHeight + "px";

    this.$refs.smallShow.style.marginBottom =
      -(window.innerHeight - 50) + "px";
    // console.log(this.$refs.navbar);
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

    // document.oncontextmenu = function() {
    //   return false;
    // };
    // document.onkeydown = function(event) {
    //   var ev = event || window.event || arguments.callee.caller.arguments[0];
    //   if (ev.keyCode == "123") {
    //     window.location.href =
    //       "https://baijiahao.baidu.com/s?id=1605742984765506500&wfr=spider&for=pc";
    //     return false;
    //   }
    // };
    window.onresize = () => {
      this.$refs.navbar.style.borderBottomWidth = window.innerHeight + "px";
      this.$refs.smallShow.style.marginBottom =
        -(window.innerHeight - 50) + "px";
    };
  },
  watch: {
    $route(newval, oldvla) {
      let path = newval.path.substr(1);
      this.arrInd = this.vueAnimation.indexOf(path);
      this.exhibition = `欢迎来到${path}页面`;
    }
  }
};
</script>
<style lang="scss" >
.navbar {
  z-index: 8888;
  position: absolute;
  right: 0;
  top: 0;
  width: 3rem;
  border-bottom: solid #e4e2e3;
  border-left: 2.1rem solid transparent;
  font-size: 0.2rem;
  ul {
    width: 2rem;
    height: 4rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(80%);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    li {
      cursor: pointer;
      position: relative;
      color: #686967;
      padding: 10% 30px;
      display: inline-block;
      -webkit-transition: all 0.4s ease-in;
      -o-transition: all 0.4s ease-in;
      -moz-transition: all 0.4s ease-in;
      -ms-transition: all 0.4s ease-in;
      transition: all 0.4s ease-in;

      &::before {
        transform: rotateY(90deg);
        display: inline-block;
        width: 100%;
        height: 0.02rem;

        position: absolute;
        top: 50%;
        left: 0;
        margin: 0 auto;
        right: 0;
        bottom: 0;
        -webkit-transition: all 1s;
        -o-transition: all 1s;
        -moz-transition: all 1s;
        -ms-transition: all 1s;
        transition: all 1s;
        background-color: #337ab7;
        border-radius: 0.1rem;
        content: "";
      }
      &:hover::before {
        transform: rotateY(0);
      }
    }
  }

  .router-link-active {
    color: #337ab7;
    &::before {
      display: inline-block;
      width: 100%;
      height: 0.02rem;
      transform: rotateY(0);
      position: absolute;
      top: 50%;
      left: 0;
      margin: 0 auto;
      right: 0;
      bottom: 0;

      background-color: #337ab7;
      border-radius: 0.1rem;
      content: "";
    }
  }
}
.title {
  position: absolute;
  top: 10%;
  right: 0.31rem;
  z-index: 9999;
  width: 0.6rem;
  height: 0.6rem;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0 0.04rem 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  transition: all 1s;

  &:hover {
    background-color: rgb(15, 122, 183);
  }
  span {
    width: 0.3rem;
    height: 0.04rem;
    background-color: white;
    border-radius: 2px;
    position: absolute;
    top: 0.28rem;
    left: 0.15rem;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    transition: all 1s;
    &:after,
    &:before {
      width: 0.3rem;
      height: 0.04rem;
      background-color: white;
      border-radius: 0.1rem;
      content: "";
      position: absolute;
      left: 0;
      -webkit-transition: all 1s;
      -o-transition: all 1s;
      -moz-transition: all 1s;
      -ms-transition: all 1s;
      transition: all 1s;
    }
    &:before {
      top: -0.09rem;
    }
    &:after {
      top: 0.09rem;
    }
  }
}
.title > .showSpan {
  width: 0;
  &:after {
    transform: translateY(-0.09rem) rotate(-45deg);
  }

  &:before {
    transform: translateY(0.09rem) rotate(45deg);
  }
}
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
ul,
ol,
dl {
  list-style: none;
}
html {
  font-size: calc(100vw / 18.58);
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
    box-shadow: 0 0 0 0.02rem #4797b7;
  }
  100% {
    box-shadow: 0 0 0 0.12rem rgba(255, 255, 255, 0);
  }
}
.fixedLink {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  right: 0.6rem;
  z-index: 888;
  width: 0;
  height: 3rem;
  margin-top: -1.5rem;
  border-left: 0.01rem dashed #ccc;
  > a {
    display: block;
    border-radius: 50%;
    border: 0.04rem #fff solid;
    width: 0.06rem;
    height: 0.06rem;
    background: #3b7fb9;
    margin-left: -0.01rem;
  }
  .router-link-active {
    -webkit-animation: bor 1.5s ease infinite;
    animation: bor 1.5s ease infinite;
  }
  > .audio {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    position: relative;
    &:hover {
      cursor: pointer;
    }
    p {
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      // background: url('./img/iocn.png') no-repeat 0 0;
      background: url("./img/love.jpg");
      transform: rotate(0);

      background-size: 100% 100%;
    }
    span {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      top: 0;
      left: 0;
      z-index: 9;
      opacity: 0;
      transition: all 1s;
      &:hover {
        opacity: 1;
      }
    }

    .spanStop {
      background: url("./img/iocn1.png") center center no-repeat;
      background-color: rgba(222, 222, 222, 0.4);

      background-size: 70% 70%;
    }
    .spanPlay {
      background: url("./img/iocn.png") center center no-repeat;
      background-color: rgba(222, 222, 222, 0.4);

      background-size: 70% 70%;
    }
  }
}
#app {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "VINERITC";
  src: url("./font/VINERITC.ttf");
}
.smallShow {
  font-family: "Microsoft YaHei";
  width: 3rem;
  height: 1rem;
  position: absolute;
  // margin-bottom: -5rem;
  right: 0;
  bottom: 0;
  background-color: transparent;
  display: flex;
  // flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  p {
    font-family: "Microsoft YaHei";
    font-size: 0.38rem;
    font-weight: 300;
    color: #202020;
    span {
      text-align: center;
      display: block;
      font-size: 0.19rem;
      &:nth-of-type(2) {
        font-family: "Microsoft YaHei";
        color: #fff;
        background-color: #000;
      }
    }
  }
}
</style>
