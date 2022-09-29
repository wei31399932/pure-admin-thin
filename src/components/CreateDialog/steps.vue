<template>
  <div class="step_box">
    <div
      v-for="(item, index) in stepArray"
      :key="index"
      class="step_item"
      :class="{ highlight: scheduleIndex >= index }"
    >
      <div class="step_number">{{ index + 1 }}</div>
      <div class="step_name">{{ item.stepName }}</div>
      <el-divider v-if="stepArray.length - 1 > index" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface stepData {
  stepName: string;
}

interface PropsType {
  stepArray: stepData[];
}

const props = withDefaults(defineProps<PropsType>(), {
  stepArray: () => {
    return [];
  }
});

const scheduleIndex = ref(0);

console.log("props", props);
</script>

<style lang="scss">
.step_box {
  display: flex;

  .step_item {
    display: flex;
    line-height: 49px;
    margin-right: 21px;

    &:last-of-type {
      margin-right: 0;
    }

    .step_number {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;

      border: 1px solid #efeff6;
      border-radius: 50%;
      line-height: 32px;
      color: #8f8d93;
      font-size: 16px;
      text-align: center;
    }

    .step_name {
      margin: 0 13px;
      color: #292929;
      font-size: 14px;
    }

    .el-divider {
      width: 54px;
    }
  }

  .highlight {
    .step_number {
      background: #3054ed;
      color: #fff;
    }
  }
}
</style>
