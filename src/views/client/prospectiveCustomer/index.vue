<template>
  <div class="app-container">
    <div class="main_body">
      <div class="title_box">
        <div class="data_bulk">共1000条数据</div>
        <div class="right_tool">
          <el-input
            v-model="searchValue"
            placeholder="输入关键词搜索"
            class="search_input"
          >
            <template #append>
              <el-button class="search_btn" :icon="Search" />
            </template>
          </el-input>
          <el-button
            class="add_btn"
            type="primary"
            :icon="Search"
            @click="createClientFun"
            >创建潜客</el-button
          >
        </div>
      </div>
      <div class="table_box">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </div>
    <el-pagination layout="slot, prev, pager, next, jumper" :total="1000">
      123
    </el-pagination>

    <createClient ref="createDialogRef" />
  </div>
</template>
<script setup lang="ts">
import { ref, unref } from "vue";
import { Search } from "@element-plus/icons-vue";
import createClient from "../components/createClient.vue";
const createDialogRef = ref(null);
const searchValue = ref<string>("");
const createClientFun = () => {
  console.log("123", unref(createDialogRef).open());
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main_body {
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 3px 21px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .title_box {
    display: flex;
    justify-content: space-between;
    padding: 24px 30px;

    .data_bulk {
      font-size: 16px;
      color: #2b3138;
      line-height: 50px;
    }

    .right_tool {
      display: flex;

      :deep(.search_input) {
        font-size: 14px;

        .el-input__wrapper {
          padding: 0 17px;
        }
      }

      .search_btn {
        width: 55px;
        height: 50px;
        background: #fafafa;
        border: 1px solid #dbdbdb;
        border-left: 0;
        border-radius: 2px;
      }

      .add_btn {
        margin-left: 10px;
        width: 153px;
        height: 50px;
        background: #3156ee;
        border-radius: 2px;
      }
    }
  }

  .table_box {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    overflow-y: auto;

    .el-table {
      flex: 1;
    }
  }
}

.el-pagination {
  display: flex;
  justify-content: right;
  padding: 30px 0;
}
</style>
