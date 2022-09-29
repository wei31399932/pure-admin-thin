<template>
  <createDialog
    v-model="displayValue"
    title="创建潜客"
    :stepArray="stepArray"
    width="585px"
  >
    <!-- <template v-slot:header> 测试使用 </template> -->
    <div>12312</div>

    <template #footer>
      <el-button @click="nextStep">下一步</el-button>
      <el-button>创建</el-button>
    </template>
  </createDialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import createDialog from "/@/components/CreateDialog/index.vue";

const displayValue = ref(false);
const open = () => {
  displayValue.value = true;
};

const stepArray = [
  { stepName: "基础信息" },
  { stepName: "潜客信息" },
  { stepName: "666信息" }
];
const nextStep = () => {
  setModalProps;
};

defineExpose({ open });
</script>

<style scoped></style>
