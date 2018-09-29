<template>
    <div id="two">
    <div>
        <nav>
            <img src="./../img/W-bg1.jpg" alt="" :class="{admine:statu}" @mouseleave='statu=false' @mouseenter='statu=true'>
            <p>您好，我叫王立战，22岁，坐标南京。 我并不是计算机专业,但对前端很感兴趣，所以自学前端，今后的职业规划是朝着全栈发展，
                目前在学Thinkphp、AnjularJs。 在实习的五个月来,本人在公司主要负责整个页面的前端开发，
                配合后台人员实现产品前端界面效果与功能。
                写过响应式页面，移动端页面，pc端页面。小的来说，商城，企业网站，视频，音频，评论，地图等都有涉及。</p>
                <p>不浮躁，喜欢前端，执行力，学习能力都棒棒哒！目前，能做点粗糙设计（比如本网站）。</p>
        </nav>
        
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      statu: false
    };
  }
};
</script>

<style lang="scss" scoped>
#two {
  font-size: 0.1rem;
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./../img/W-bg2.jpg") no-repeat;
  background-size: 100% 100%;
  > div {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    > nav {
      width: 5rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      p {
        text-indent: 0.1rem;
        margin-bottom: 0.1rem;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 1rem;
        height: 1rem;
        margin-bottom: 0.3rem;
        border-radius: 50%;
      }
    }
  }
}
@keyframes twobor {
  0% {
    box-shadow: 0 0 0 0.01rem #4797b7;
  }
  100% {
    box-shadow: 0 0 .2rem 0.1rem rgba(151, 166, 248, 0);
  }
}
.admine {
  animation: twobor 1.5s ease infinite;
}
</style>
