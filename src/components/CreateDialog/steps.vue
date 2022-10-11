<template>
  <div class="step_box">
    <div
      v-for="(item, index) in stepArray"
      :key="index"
      class="step_item"
      :class="{ highlight: stepIndex >= index }"
    >
      <div class="step_number">{{ index + 1 }}</div>
      <div class="step_name">{{ item.stepName }}</div>
      <el-divider v-if="stepArray.length - 1 > index" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, defineProps, PropType } from "vue";
interface stepData {
  stepName: string;
}

// interface PropsType {
//   stepArray: stepData[];
// }

const props = defineProps({
  stepArray: {
    type: Array as PropType<stepData[]>,
    default() {
      return [];
    }
  },
  stepIndex: {
    type: Number,
    required: true
  }
});
// import { inject } from "vue";

// const stepArray = inject("stepArray") as stepData[];
// const scheduleIndex = inject("scheduleIndex") as number;

console.log("scheduleIndex", props.stepIndex);

const attrs = useAttrs();
console.log("newattrs", attrs);
</script>

<style lang="scss">
.step_box {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #e7e7e7;

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
