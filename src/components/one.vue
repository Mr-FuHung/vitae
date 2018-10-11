<template>
    <div>
       <div class="project" ref="project" @mouseenter='enter'>
				<div class="project__card" ref="card">
					<a href="" class="project__image"></a>
					<div class="project__detail">
						123
					</div>
                    <div class="shine" ref="shine"></div>
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
      this.$refs.card.classList.add("hover-in");
      setTimeout(() => {
        this.$refs.card.classList.remove("hover-in");
      }, 1000);
    }
  },
  mounted() {
    var settings = {
      selector: ".project__card",
      perspective: 1000,
      sensitivity: 20,
      hoverInClass: "hover-in",
      hoverOutClass: "hover-out"
    };

    var project = this.$refs.project,
      card = this.$refs.card,
      shine = this.$refs.shine;

    project.style.perspective = settings.perspective + "px";
    project.style.transformStyle = "preserve-3d";

    // card.style.perspective = settings.perspective + "px";
    // card.style.transformStyle = "preserve-3d";

    function move(event) {
      var w = project.offsetWidth;
      var h = project.offsetHeight,
        ax = -(w / 2 - event.offsetX) / settings.sensitivity,
        ay = (h / 2 - event.offsetY) / settings.sensitivity,
        dy = event.offsetY - h / 2,
        dx = event.offsetX - w / 2,
        theta = Math.atan2(dy, dx),
        angle = (theta * 180) / Math.PI - 90;
        console.log(event.offsetX)
        console.log(ax)

      if (angle < 0) {
        angle = angle + 360;
      }
      // card.style.perspective = settings.perspective + "px";
      // card.style.transformStyle = "preserve-3d";
      card.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";

      shine.style.background =
        "linear-gradient(" +
        angle +
        "deg, rgba(255,255,255," +
        (event.offsetY / h) * 0.5 +
        ") 0%,rgba(255,255,255,0) 80%)";
    }
    function leave() {
      card.classList.add(settings.hoverOutClass);
      // card.style.perspective = settings.perspective + "px";
      // card.style.transformStyle = "preserve-3d";
      card.style.transform = "rotateX(0) rotateY(0)";

      setTimeout(function() {
        card.classList.remove(settings.hoverOutClass);
      }, 1000);
    }

    project.onmousemove = function(event) {
      move(event);
    };

    project.onmouseleave = function() {
      leave();
    };
  }
};
</script>

<style lang="scss" scoped>
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
}

.project__image {
  display: block;
  position: relative;
}

.project__card {
  /* 边框阴影 */
  will-change: transform;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 10px 30px transparent;
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
  position: "absolute";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
}

.project__card.hover-in {
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}

.project__card.hover-out {
  transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;
}

.project:hover .project__card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.project:hover .project__image:after {
  opacity: 1;
}

.project:hover .project__detail {
  border-width: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.project:hover .project__title,
.project:hover .project__category {
  -webkit-transform: translateY(0) scale(1);
  -ms-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
  opacity: 1;
}

// .project__detail {
//   position: absolute;
//   left: 30px;
//   right: 30px;
//   top: 30px;
//   bottom: 30px;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-flex-direction: column;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   -webkit-justify-content: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   text-align: center;
//   pointer-events: none;
//   -webkit-transform: translateZ(30px);
//   transform: translateZ(30px);
//   border: 0 solid #00bcd4;
//   transition: border 0.4s ease;
// }
</style>
