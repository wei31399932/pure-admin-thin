<template>
  <el-dialog v-bind="$attrs">
    <template #header>
      {{ $attrs.title }}
    </template>
    <steps :stepArray="($attrs.stepArray as any)" />
    <slot />
    <template
      #[item]="data"
      v-for="item in Object.keys(omit($slots, 'default'))"
    >
      <slot :name="item" v-bind="data || {}" />
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { omit } from "lodash-es";
import { useAttrs, useSlots } from "vue";
import steps from "./steps.vue";

const attrs = useAttrs();
const slots = useSlots();
console.log("attrs", attrs);
console.log("slots", slots);
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
