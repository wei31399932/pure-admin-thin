<template>
  <div class="main_box">
    <div class="view_info_box">
      <div class="grid_box">
        <div
          v-for="(item, index) in statisticsArray"
          :key="index"
          class="statistics_item"
        >
          <div class="statistics_title">{{ item.title }}</div>
          <div class="statistics_number">{{ item.number }}</div>
          <div class="statistics_icon" :style="{ backgroundColor: item.color }">
            <img :src="item.icon" alt="" />
          </div>
        </div>
      </div>
      <div class="table_view">
        <el-row :gutter="30">
          <el-col :md="24" :lg="12" :xl="12">
            <div class="client_table">
              <div class="table_top">
                <div class="table_title">跟进客户</div>
                <div class="check_all">查看全部</div>
              </div>
              <el-table :data="moreIntoClientArray" height="400px">
                <el-table-column prop="name" label="姓名" width="250px">
                  <template v-slot="{ row }">
                    {{ logBox(row) }}
                    <div class="user_box">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        alt=""
                      />
                      <div class="right_info">
                        <span class="user_name">{{ row.name }}</span>
                        <span class="user_company">{{ row.company }}</span>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="job" label="职位" width="150px" />
                <el-table-column prop="address" label="地址" />
                <el-table-column
                  prop="phone"
                  label="手机"
                  fixed="right"
                  width="200px"
                />
              </el-table>
            </div>
          </el-col>
          <el-col :md="24" :lg="12" :xl="12">
            <div class="client_table">
              <div class="table_top">
                <div class="select_tab">
                  <div
                    class="tab_item"
                    :class="{ active: activeIndex === 0 }"
                    @click="switchTab(0)"
                  >
                    转交记录
                  </div>
                  <div
                    class="tab_item"
                    :class="{ active: activeIndex === 1 }"
                    @click="switchTab(1)"
                  >
                    分享记录
                  </div>
                </div>
                <div class="check_all">查看全部</div>
              </div>
              <el-table :data="moreIntoClientArray" height="400px">
                <el-table-column prop="name" label="姓名" width="250px">
                  <template v-slot="{ row }">
                    {{ logBox(row) }}
                    <div class="user_box">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        alt=""
                      />
                      <div class="right_info">
                        <span class="user_name">{{ row.name }}</span>
                        <span class="user_company">{{ row.company }}</span>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="job" label="职位" width="150px" />
                <el-table-column prop="address" label="地址" />
                <el-table-column
                  prop="phone"
                  label="手机"
                  fixed="right"
                  width="200px"
                />
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer_box">
      <el-button>创建客户</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { statistics, moreIntoClient } from "types/views/client/index";
// import { BasicTable, useTable } from '/@/components/Table';
import { ref, unref } from "vue";
// // import type { ColumnType } from 'ant-design-vue/lib/table/interface';

// import { BasicColumn } from '/@/components/Table/src/types/table';

import image from "/@/assets/images/client/user.png";
const activeIndex = ref<number>(0);
const statisticsArray = ref<statistics[]>([
  {
    title: "我的联系人",
    icon: image,
    number: 360,
    color: "rgba(234, 230, 253, .62)"
  },
  {
    title: "我的客户",
    icon: image,
    number: 260,
    color: "rgba(218, 243, 242, .54)"
  },
  {
    title: "重点客户",
    icon: image,
    number: 88,
    color: "rgba(253, 229, 230, .72)"
  },
  {
    title: "所有拜访",
    icon: image,
    number: 360,
    color: "rgba(255, 241, 226, .72)"
  },
  {
    title: "待拜访",
    icon: image,
    number: 14,
    color: "rgba(252, 230, 253, .68)"
  },
  {
    title: "分享数量",
    icon: image,
    number: 86,
    color: "rgba(230, 248, 253, 1)"
  },
  {
    title: "转交数量",
    icon: image,
    number: 239,
    color: "rgba(244, 253, 230, 1)"
  },
  {
    title: "客户跟进",
    icon: image,
    number: 18,
    color: "rgba(230, 237, 253, 1)"
  }
]);
const moreIntoClientArray = ref<moreIntoClient[]>([
  {
    name: "张三1",
    job: "副总经理44",
    address: "昆明市盘龙区白云路7345634568号",
    phone: "13888116097",
    avatar: "",
    company: "小禾健康管理有限公司"
  },
  {
    name: "张三2",
    job: "副总经理23",
    address: "昆明市盘龙区白云路782314234号",
    phone: "1388444497",
    avatar: "",
    company: "小禾健康管理有限公司"
  },
  {
    name: "张3三",
    job: "副总经理12",
    address: "昆明市盘龙区白云路784352345号",
    phone: "13888555497",
    avatar: "",
    company: "小禾健康管理有限公司"
  }
]);

const switchTab = index => {
  activeIndex.value = index;
  console.log("activeIndex", unref(activeIndex));
  // console.log("index", index);
};

const logBox = data => {
  console.log("data", data);
};

// const [registerTable] = useTable({
//   // api: demoListApi,
//   columns: moreIntoClientTable as any[],
//   dataSource: moreIntoClientArray,
//   useSearchForm: false,
//   // formConfig: getFormConfig(),
//   showTableSetting: false,
//   // tableSetting: { fullScreen: true },
//   showIndexColumn: false,
//   isCanResizeParent: true,
//   rowKey: 'id',
// });

console.log("moreIntoClientArray", unref(moreIntoClientArray));
</script>

<style scoped lang="scss">
.main_box {
  // flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  .view_info_box {
    flex: 1;
    display: flex;
    flex-direction: column;

    .grid_box {
      margin-bottom: 35px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px 30px;

      .statistics_item {
        padding: 30px 38px;
        background: #ffffff;
        border-radius: 4px;
        position: relative;

        .statistics_title {
          color: #909090;
          font-size: 18px;
        }

        .statistics_number {
          font-size: 54px;
          color: #030303;
        }

        .statistics_icon {
          position: absolute;
          top: 50%;
          right: 34px;
          transform: translateY(-50%);
          width: 74px;
          height: 74px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            margin: 0 auto;
            display: block;
            width: 41px;
            height: 41px;
          }
        }
      }
    }

    .table_view {
      flex: 1;

      .client_table {
        background: #ffffff;
        border-radius: 4px;
        overflow: hidden;
        padding: 0 35px;

        .table_top {
          height: 81px;
          display: flex;
          justify-content: space-between;
          line-height: 90px;

          .table_title {
            font-size: 16px;
            font-weight: bold;
            color: #2b2c2e;
            padding-left: 25px;
            position: relative;

            &::before {
              position: absolute;
              top: 36px;
              left: 5px;
              content: "";
              display: inline-block;
              width: 4px;
              height: 16px;
              background: #3152ef;
            }
          }

          .select_tab {
            user-select: none;
            display: flex;
            position: relative;

            &::before {
              position: absolute;
              top: 36px;
              left: 5px;
              content: "";
              display: inline-block;
              width: 4px;
              height: 16px;
              background: #3152ef;
            }

            .tab_item {
              margin: 0 30px;
              cursor: pointer;
              color: rgba(43, 44, 46, 0.49);
            }

            .active {
              font-weight: 700;
              font-size: 16px;
              color: #3960ee;
            }
          }

          .check_all {
            font-weight: bold;
            color: #3960ee;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }

      .user_box {
        display: flex;

        img {
          display: block;
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        .right_info {
          margin-left: 20px;
          display: flex;
          flex-direction: column;

          .user_name {
            font-size: 14px;
            color: #2b2c2e;
          }

          .user_company {
            color: #9f9f9f;
            font-size: 12px;
          }
        }
      }
    }
  }

  .footer_box {
    padding: 31px 0 0 0;

    button {
      height: 99px;
      background: #3156ee;
      border-radius: 4px;
      width: 100%;
      font-size: 24px;
      color: #fff;
    }
  }
}
</style>
