<template>
  <div class="border">
    <div class="container">
      <div class="header">
        <div class="title">快取餐 智能外卖柜</div>
      </div>
      <div class="main">
        <div class="leftPart">
          <div class="text">请使用快取餐APP</div>
          <div class="text">扫码取餐</div>
        </div>
        <div class="rightPart" @click="open">
          <div id="qrcode" ref="qrCodeUrl"></div>
          <!-- <Result v-show="data.isScan" :isSuccess="false"></Result> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import QRCode from "qrcode2";
import { defineComponent, onMounted, reactive } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const data = reactive({
      isScan: false,
    });
    let qrcode: any = null;
    let target: HTMLElement | null;
    const setQRCode = () => {
      target = document.getElementById("qrcode");
      qrcode = new QRCode(target, {
        text: "http://81.70.2.91:3000/open",
        width: 450,
        height: 450,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    };
    const clearQRCode = () => {
      if (target) {
        target.innerHTML = "";
      }
    };
    const open = () => {
      data.isScan = true;
      setTimeout(() => {
        data.isScan = false;
      }, 3000);
    };
    onMounted(() => {
      setQRCode();
    });
    return { qrcode, setQRCode, clearQRCode, data, open };
  },
});
</script>

<style scoped lang="scss">
.border {
  height: 100%;
  width: 100%;
  background: url("../assets/background.jpg") no-repeat fixed top;
  background-size: 100%;
}
.main {
  align-items: center;
  display: flex;
  margin-top: 70px;
}
.title {
  font-size: 100px;
  padding: 50px 0;
}
.text {
  margin: 60px 0;
  text-align: center;
  font-size: 60px;
}
.header {
  width: 100%;
  text-align: center;
}
.rightPart,
.leftPart {
  flex: 0.5;
}
#qrcode {
  display: flex;
  justify-content: center;
}
</style>
