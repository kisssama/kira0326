<template>
  <div class="hello">
    <img class="loginIcon"
      v-lazy="logoImg"
      @click="introduce = !introduce"
      alt="" />
    <transition enter-active-class="animated fadeInRight"
      leave-active-class="animated2 fadeOutLeft">
      <p v-show="introduce">{{ msg }}</p>
    </transition>
    <transition enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown">
      <div class="gpDetail"
        v-show="introduce">
        瓜皮来自于豆瓣社区一位居于上海网友的爆照分享，头像是一只戴着柚子皮做的帽子的猫，因为小猫背部的皮毛图案呈现非常完美对称的西瓜皮图案，瓜皮因此得名，并在豆瓣圈内获得不小的影响力，后因其两撇与众不同的小眉毛与萌死人不偿命的各种表情红遍整个互联网，被称为论坛上最火的萌猫，并产生了大量衍生图片与聊天表情。其品种为中国本土的中华田园猫。
      </div>
    </transition>
  </div>
</template>
<script>
import logo from "../img/guapiLogo.jpeg";

export default {
  data() {
    return {
      msg: "Hello我是瓜皮,水草快来投稿",
      logoImg: logo,
      introduce: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-weight: 500;
  font-size: 48px;
  color: #42b983;
  margin: 20px 0;
}
.gpDetail {
  width: 80%;
  margin: 30px auto;
  font-size: 30px;
  text-align: left;
}
.animated2 {
  animation-duration: 0.6s;
  animation-fill-mode: both;
}
.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
.loginIcon {
  width: 300px;
  height: 300px;
  margin-top: 60px;
}
</style>
