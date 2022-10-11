<template>
  <el-dialog v-bind="$attrs">
    <template #header>
      {{ $attrs.title }}
    </template>
    <steps :stepArray="stepArray" :stepIndex="stepIndex" />
    <slot />
    <template #footer>
      <el-button v-if="stepIndex > 0" @click="lastStep">上一步</el-button>
      <el-button v-if="stepArray.length - 1 > stepIndex" @click="nextStep"
        >下一步</el-button
      >
      <el-button v-if="stepArray.length - 1 === stepIndex">创建</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
// import { clone } from "lodash-es";
import { defineEmits, defineProps, PropType } from "vue";
import steps from "./steps.vue";
interface Emits {
  (e: "update:stepIndex", val: number): void;
}

const emit = defineEmits<Emits>();
const props = defineProps({
  stepIndex: {
    type: Number
  },
  stepArray: {
    type: Array as PropType<any[]>
  },
  rulesExamine: {
    type: Function
  }
});

const nextStep = () => {
  console.log("props.rulesExamine", props.rulesExamine());

  props.rulesExamine() && emit("update:stepIndex", props.stepIndex + 1);
};

const lastStep = () => {
  emit("update:stepIndex", props.stepIndex - 1);
};
</script>

<style lang="scss">
.el-dialog {
  .el-dialog__header {
    position: relative;
    padding-left: 46px;
    padding-bottom: 0;
    color: #292929;
    font-size: 16px;
    line-height: 41px;

    &::before {
      position: absolute;
      top: 33px;
      left: 33px;
      content: "";
      display: inline-block;
      width: 4px;
      height: 15px;
      background: #315af0;
    }
  }

  .el-dialog__body {
    padding: 0 30px;
  }
}
</style>
