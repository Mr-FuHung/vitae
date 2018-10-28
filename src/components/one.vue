<template>
    <div class="one">
      <div class="swiper">
        <!-- <div  class="swiper_1">
          <img src="./../img/lun2.jpg" alt="">
        </div>
        <div class="swiper_2">
          <img src="./../img/lun2.jpg"  alt="">
        </div>
        <div class="swiper_3">
          <img src="./../img/lun2.jpg"  alt="">
        </div> -->
        <iframe src="./swe.html" width="100%" height="100%" scrolling='no' seamless frameborder="0"></iframe>
      </div>
      <div class="black">
      <div class="white">
      <div class="black"></div>
      <div class="white"></div>

      </div>

      </div>
       <div class="project" @mouseleave='leave' @mousemove='move'>
				<div class="project__card" >
				<p class="englishName">Hello, I'm Baron</p>
				<p class="mag loveWord">Life doesn’t get easier, you just get stronger</p>
				<p class="mag chineseName">我叫符洪</p>
				<p class="mag work">一名前端开发工程师</p>
				<p class="mag email">VFuHung@163.com</p>
						
                    <div class="shine" ></div>
				</div>
			</div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    leave() {
      this.card.classList.add("hover-out");
      this.card.style.transform = "rotateX(0) rotateY(0)";
      this.shine.style.background = `radial-gradient(circle at 0px 0px, transparent, transparent)`;
      setTimeout(() => {
        this.card.classList.remove("hover-out");
      }, 1000);
    },
    move(event) {
      var w = this.project.offsetWidth;
      var h = this.project.offsetHeight,
        ax = (w / 2 - event.offsetX) / 40,
        ay = -(h / 2 - event.offsetY) / 20;

      this.card.style.transform = `scale(1.02) translate(${ax}px , ${ay}px) rotateY(${ax}deg) rotateX(${ay}deg)`;
      this.shine.style.background = `radial-gradient(circle at ${
        event.offsetX
      }px ${
        event.offsetY
      }px, rgba(255, 255, 255,.4) 10%,  rgba(222, 222, 222,.3) 30%,rgba(210, 210, 210,.2) 50%,rgba(199, 199, 199,.1) 70%,transparent 100%)`;
    }
  },
  mounted() {
    this.project = document.getElementsByClassName("project")[0];
    this.card = document.getElementsByClassName("project__card")[0];
    this.shine = document.getElementsByClassName("shine")[0];
  }
};
</script>

<style lang="scss" scoped>
.one {
  width: 100%;
  height: 100%;
  background-color: #aaa;
}
a {
  text-decoration: none;
  color: #9999ff;
}

.project {
  width: 720px;
  height: 290px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -145px;
  margin-left: -360px;
  // background-color: rgba(170, 170, 170, 0.336);
  border-radius: 20px;
  perspective: 20rem;
  -webkit-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  z-index: 99;
}

.project__card {
  /* 边框阴影 */
  will-change: box-shadow;
  -webkit-transition: box-shadow 0.5s linear;
  -o-transition: box-shadow 0.5s linear;
  -moz-transition: box-shadow 0.5s linear;
  -ms-transition: box-shadow 0.5s linear;
  transition: box-shadow 0.5s linear;
  box-shadow: 0 0.1rem 0.3rem transparent;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  letter-spacing: 0.02rem;
  text-align: center;
 .mag{
    margin-top: 10px;
  }
  .englishName {
    font-family: 'VINERITC';
    font-size: 70px;
    font-weight: 900;
  }
  .loveWord {
    font-size: 25px;
    font-weight: 900;
  }
  .chineseName {
  }
  .work {
  }
  .email {
    color: #7d2704;
  }
}

body:hover .project__card {
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.4);
}

.shine {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  border-radius: 0.2rem;
}
// .project:hover .project__detail {
//   border-width: 10px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
// }
.project__card.hover-out {
  will-change: transform;

  transition: -webkit-transform 0.5s linear;
  transition: transform 0.5s linear;
  transition: transform 0.5s linear, -webkit-transform 0.5s linear;
}
.project__card.hover-in {
  will-change: transform;
  transition: -webkit-transform 0.1s linear;
  transition: transform 0.1s linear;
  transition: transform 0.1s linear, -webkit-transform 0.1s linear;
}

.white {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(222, 222, 222, 0.021);
}
.black {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.021);
}
.swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
