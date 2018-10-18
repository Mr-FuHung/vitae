<template>
    <div class="swiper">
       <div class="project" @mouseleave='leave' @mousemove='move' @mouseenter='enter'>
				<div class="project__card" >
					<a href="" class="project__image"></a>
					<div class="project__detail">
						Baron
					</div>
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
    enter() {
      // this.card.classList.add("hover-in");
      // setTimeout(() => {
      //   this.card.classList.remove("hover-in");
      // }, 100);
    },
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
      this.shine.style.background = `radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, rgba(255, 255, 255,.7), transparent)`;
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
.swiper{
  width: 100%;
  height: 100%;
  background-color: #aaa;

}
a {
  text-decoration: none;
  color: #9999ff;
}

.project {
  width: 6rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -1.5rem;
  margin-left: -3rem;
  // background-color: rgba(170, 170, 170, 0.336);
  border-radius: 0.2rem;
  perspective: 2000px;
  -webkit-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.project__card {
  /* 边框阴影 */
  will-change: box-shadow;
  -webkit-transition: box-shadow 0.5s linear;
  -o-transition: box-shadow 0.5s linear;
  -moz-transition: box-shadow 0.5s linear;
  -ms-transition: box-shadow 0.5s linear;
  transition: box-shadow 0.5s linear;
  box-shadow: 0 10px 30px transparent;
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
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
.project:hover .project__detail {
  border-width: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
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
.project:hover .project__title,
.project:hover .project__category {
  -webkit-transform: translateY(0) scale(1);
  -o-transform: translateY(0) scale(1);
  -moz-transform: translateY(0) scale(1);
  -ms-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
  opacity: 1;
}

.project__detail {
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  -webkit-transform: translateZ(30px);
  transform: translateZ(30px);
  border: 0 solid #00bcd4;
  transition: border 0.4s ease;
}
</style>
