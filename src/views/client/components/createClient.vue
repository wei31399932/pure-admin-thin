<template>
  <!-- :stepArray="stepArray" -->

  <createDialog
    v-model="displayValue"
    title="创建潜客"
    width="585px"
    :stepArray="stepArray"
    v-model:stepIndex="scheduleIndex"
  >
    <!-- :rulesExamine="rulesExamine" -->
    <!-- <template v-slot:header> 测试使用 </template> -->
    <template v-if="scheduleIndex === 0">
      <el-form
        label-position="top"
        inline
        :model="formInline"
        :rules="rules"
        class="demo-form-inline"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="潜客名称" required prop="user">
              <el-input v-model="formInline.user" placeholder="潜客名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="潜客来源" required prop="region">
              <el-input v-model="formInline.region" placeholder="潜客名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="销售阶段" required prop="aaaaa">
              <el-select v-model="formInline.aaaaa" placeholder="Activity zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="业务人员" required prop="content">
              <el-input v-model="formInline.content" placeholder="潜客名称" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="潜客备注">
              <el-input
                v-model="formInline.content"
                :rows="4"
                type="textarea"
                placeholder="潜客备注"
                resize="none"
              />
            </el-form-item>
          </el-col>
          <!-- <el-col :span="12">
            <el-form-item label="Activity zone">
               </el-form-item
          ></el-col> -->
        </el-row>
      </el-form>
    </template>
    <template v-if="scheduleIndex === 1">
      <el-form
        :inline="true"
        :model="formInline"
        label-position="top"
        class="demo-form-inline"
      >
        <el-form-item label="Approved by">
          <el-input v-model="formInline.user" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formInline.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formInline.aaaaa" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
    </template>
  </createDialog>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import createDialog from "/@/components/CreateDialog/index.vue";
import type { FormRules } from "element-plus";

const stepArray = [{ stepName: "基础信息" }, { stepName: "潜客信息" }];
const scheduleIndex = ref(0);
// provide("stepArray", stepArray);
// provide("scheduleIndex", scheduleIndex);
const formInline = reactive({
  user: "",
  region: "",
  aaaaa: "",
  content: ""
});

const rules = reactive<FormRules>({
  user: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change"
    }
  ],
  aaaaa: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change"
    }
  ],
  content: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change"
    }
  ]
});

const rulesExamine = () => {
  return false;
};

// const { next } = useStep(stepArray);

const displayValue = ref(false);
const open = () => {
  displayValue.value = true;
};

defineExpose({ open });
</script>

<style scoped lang="scss">
.demo-form-inline {
  padding: 30px 0;
}
</style>
