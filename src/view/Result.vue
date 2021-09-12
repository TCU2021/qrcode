<template>
  <div>
    <div class="container">
      <div class="content" v-show="props.isSuccess">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chenggong-copy"></use>
        </svg>
        <div class="text">打开成功</div>
      </div>
      <div class="content" v-show="!props.isSuccess">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cuowu-copy"></use>
        </svg>
        <div class="text">打开失败</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isSuccess: {
      type: Boolean,
      default: () => true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}
.content {
  height: 500px;
  width: 500px;
  margin: 0 auto;
}
.text {
  margin-top: 30px;
  font-size: 60px;
}
.icon {
  margin-top: 100px;
  font-size: 180px;
}
</style>
