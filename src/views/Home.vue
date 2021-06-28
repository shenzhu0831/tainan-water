<template>
  <div>
    <div class="popover-container" v-show="display.popoverContainer">
      <div class="popover_area">
        <div class="popover_card">
          <div class="popover_header">
            <h3 class="popover_header_title">水情燈號意義</h3>
            <button
              class="popover_header_close pointer"
              @click="display.popoverContainer = false"
            >
              <img src="@/assets/image/icon/close.png" alt="close bottom" />
            </button>
          </div>
          <div class="popover_body">
            <div class="light_sign">
              <div class="light_sign_info">
                <div class="light_sign_badge green"></div>
                <span class="light_sign_name">水情提醒</span>
              </div>
              <p class="light_sign_content">加強水源調度及研擬措施。</p>
            </div>
            <div class="light_sign">
              <div class="light_sign_info">
                <div class="light_sign_badge yellow"></div>
                <span class="light_sign_name">減壓供水</span>
              </div>
              <p class="light_sign_content">
                減壓供水：離峰及特定時段降低管壓供水 <br />
                停止供水：停供行政機關及國營事業轄管噴水池、澆灌、沖洗外牆、街道及水溝等非急需或非必要之用水。
              </p>
            </div>
            <div class="light_sign">
              <div class="light_sign_info">
                <div class="light_sign_badge orange_400"></div>
                <span class="light_sign_name">減量供水</span>
              </div>
              <p class="light_sign_content">
                停止供水：試放消防栓、露天屋頂放流及其他供水之用 <br />
                減量供水：每月用水超過一千度大用水戶之非工業用水戶減供
                20%、工業用戶減 5~10%，但醫療或其他性質特殊者，不在此限。 <br />
                減量供水：游泳池、洗車、三溫暖、水療業者、及其他不急需之用水，減供
                20%
              </p>
            </div>
            <div class="light_sign">
              <div class="light_sign_info">
                <div class="light_sign_badge orange_600"></div>
                <span class="light_sign_name">分區供水或定點供水</span>
              </div>
              <p class="light_sign_content">
                停止供水：分區輪流或全區停止供水 <br />
                定點供水：優先順序為 1.居民維生 2.醫療 3.國防事業 4.工商事業
                5.其他
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="popover_background"
        @click="display.popoverContainer = false"
      ></div>
    </div>
    <section class="home">
      <div class="web_info">
        <h1 class="web_info_title">
          <laptopLogo></laptopLogo>
        </h1>
        <h1 class="web_info_title phone">
          <phoneLogo></phoneLogo>
        </h1>
        <span class="update_time">
          上次更新時間
          <time :datetime="getLastUpdate">
            {{formatUpdateTime}}
          </time>
        </span>
      </div>
      <div class="reservoir_info">
        <div class="water_regime">
          <span class="water_regime_name">目前水情</span>
          <div class="water_regime_content">
            <div class="water_regime_badge green"></div>
            <span class="water_regime_value">水情提醒</span>
            <div
              class="water_regime_info pointer"
              @click="display.popoverContainer = true"
            >
              <img
                src="@/assets/image/icon/information 1.png"
                alt="water_regime_info"
              />
            </div>
          </div>
        </div>
        <div class="reservoir_regime">
          <span class="reservoir_regime_name">台南水庫總蓄水率</span>
          <span v-if="!errorText">{{ loadingText }}</span>
          <span
            v-if="!loadingText && !errorText"
            class="reservoir_regime_value"
            >
            {{ totalPercentage }}
          </span>
          <span v-else class="error_message">{{
            errorText
          }}</span>
        </div>
      </div>
      <div class="reservoir">
        <div class="reservoir_chart">
          <div class="reservoir_chart_header">
            <span class="reservoir_name head_name">水庫名稱/地區</span>
            <div class="reservoir_storage_info">
              <span class="reservoir_storage">有效容量 <br />(萬立方公尺)</span>
              <span class="reservoir_capacity">有效容量比</span>
            </div>
          </div>
          <div class="reservoir_chart_body">
            <div
              class="reservoir_chart_item"
              v-for="(reservoir, index) in sortReservoir"
            >
              <div class="reservoir_name">
                <div>{{ reservoir.ReservoirName }}</div>
              </div>
              <div class="reservoir_chart_content">
                <div class="reservoir_chart_bar">
                  <div class="reservoir_chart_capacity">
                    <div
                      v-if="index == 0"
                      class="reservoir_chart_value"
                      style="width: 100%"
                    ></div>
                    <div
                      class="reservoir_chart_value"
                      v-else
                      :style="{ width: getReservoirChartValue(reservoir) }"
                    ></div>
                  </div>
                  <p class="reservoir_value">
                    有效蓄水量
                    {{ getEffectiveWaterStorageCapacity(reservoir) }}
                    萬立方公尺
                  </p>
                </div>
              </div>
              <div class="reservoir_storage_info">
                <div class="reservoir_storage">
                  {{ getReservoirCapacity(reservoir) }}
                </div>
                <div class="reservoir_capacity">
                  {{getPercentage(reservoir)}} %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_stand_content">
        <div class="resources_stand" @click="show('recycle')">
          <div class="resources_stand_info">
            <div class="resources_stand_name">水資源回收中心</div>
            <span class="resources_stand_badge">企業取水</span>
            <span class="resources_stand_badge">民眾取水</span>
          </div>
          <div class="resources_stand_value">
            {{ resource.recycle.length }}
          </div>
        </div>
        <div class="resources_stand" @click="show('well')">
          <div class="resources_stand_info">
            <div class="resources_stand_name">抗旱水井</div>
            <span class="resources_stand_badge">企業取水</span>
          </div>
          <div class="resources_stand_value">
            {{ resource.well.length }}
          </div>
        </div>
        <div class="resources_stand" @click="show('farmwell')">
          <div class="resources_stand_info">
            <div class="resources_stand_name">農業水井</div>
            <span class="resources_stand_badge">企業取水</span>
          </div>
          <div class="resources_stand_value">
            {{ resource.farmwell.length }}
          </div>
        </div>
        <div class="resources_stand" @click="show('car')">
          <div class="resources_stand_info">
            <div class="resources_stand_name">民間水車</div>
            <span class="resources_stand_badge">企業取水</span>
          </div>
          <div class="resources_stand_value">
            {{ resource.car.length }}
          </div>
        </div>
        <div class="resources_stand" @click="show('ro')">
          <div class="resources_stand_info">
            <div class="resources_stand_name">RO等級移動式淨水設備</div>
            <span class="resources_stand_badge">企業取水</span>
          </div>
          <div class="resources_stand_value">
            {{ resource.ro.length }}
          </div>
        </div>
        <div class="resources_stand" @click="show('bwater')">
          <div class="resources_stand_info">
            <div class="resources_stand_name">建築工地放流水</div>
            <span class="resources_stand_badge">企業取水</span>
          </div>
          <div class="resources_stand_value">
            {{ resource.bwater.length }}
          </div>
        </div>
      </div>
    </section>
    <Resources
      @changeResourceType="show"
      :display="display"
      :resources="resource"
      :parentResourceType="resourceType"
      ref="map"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import dayjs from "dayjs";
import axios from "axios";
import Bowser from "bowser";

import laptopLogo from "../assets/image/title/logo-laptop.svg";
import phoneLogo from "../assets/image/title/logo-phone.svg";

import VueScrollTo from "vue-scrollto";
import Resources from "@/components/Resources.vue";

export default {
  name: "Home",
  components: {
    laptopLogo,
    phoneLogo,
    Resources,
  },
  data() {
    return {
      display: {
        popoverContainer: false,
        reservoir: false,
        resource: false,
      },
      reservoirs: [],
      reservoirInfo: [
        {
          ReservoirName: "曾文水庫",
          ReservoirIdentifier: "",
          EffectiveCapacity: "",
          EffectiveWaterStorageCapacity: "",
          ObservationTime: "2021-06-28T08:00:00",
        },
        {
          ReservoirName: "南化水庫",
          ReservoirIdentifier: "",
          EffectiveCapacity: "",
          EffectiveWaterStorageCapacity: "",
          ObservationTime: "",
        },
        {
          ReservoirName: "烏山頭水庫",
          ReservoirIdentifier: "",
          EffectiveCapacity: "",
          EffectiveWaterStorageCapacity: "",
          ObservationTime: "",
        },
        {
          ReservoirName: "白河水庫",
          ReservoirIdentifier: "",
          EffectiveCapacity: "",
          EffectiveWaterStorageCapacity: "",
          ObservationTime: "",
        }
      ],
      loadingText: "",
      errorText: "",
      resourceType: null,
      totalStorage: 0,
      resource: {
        well: [],
        farmwell: [],
        recycle: [],
        ro: [],
        car: [],
        bwater: [],
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [22.9920922, 120.1970246],
    };
  },
  async created() {
    const browser = Bowser.getParser(window.navigator.userAgent);
    this.resource = (
      await axios.get("https://goodideas-studio.com/water/resources/?t=3")
    ).data;

    this.loadingText = "計算中請稍後...";
    this.fetchApi()

    if (browser.getBrowserName().includes("Internet Explorer")) {
      alert(
        "如要享有最佳網站體驗，請使用支援的最新版瀏覽器\n例如：Chrome、Firefox、Safari 或 Microsoft Edge"
      );
    }
    return false;
  },
  computed: {
    totalCapacity() {
      return _.reduce(
        this.reservoirInfo,
        (sum, reservoir) => {
          return (sum += reservoir.EffectiveCapacity * 1);
        },
        0
      ).toFixed(2);
    },
    totalPercentage() {
      if (Number.isNaN(Number(this.totalStorage))) {
        return this.errorText = "目前缺少水庫即時資料，無法計算總蓄水率";
      }
      else if(Number(this.totalStorage) == 0) {
        return this.loadingText = "計算中請稍後...";
      }
      else {
        return ((this.totalStorage / this.totalCapacity) * 100).toFixed(2) + "%"
      }
    },
    getLastUpdate() {
      const  zengwenReservoir = _.filter(this.reservoirInfo, {"ReservoirName": "曾文水庫"})
      return zengwenReservoir[0].ObservationTime
    },
    formatUpdateTime(){
      const time = this.getLastUpdate ? dayjs(this.getLastUpdate).format("YYYY.MM.DD HH:mm:ss"): "-"
      return time
    },
    sortReservoir(){
      return _.orderBy(this.reservoirInfo, ["EffectiveWaterStorageCapacity"], ["desc"])
    }
  },
  methods: {
    fetchApi() {
      axios
      .get("https://dashboard.tainan.gov.tw/api/ReservoirApi?api_key=f3133ba5-186d-4a3a-145c-9c54d9ef87b0/")
      .then((res) => {
        this.reservoirInfo = res.data;
        // 測試 api response 失敗
        // this.reservoirInfo = [];
        this.setLastEffectiveWaterStorageCapacity();
        this.setTotalStorage();
        this.loadingText = "";
      })
      .catch((error) => {
        console.log(error);
        this.errorText = "資料接取異常，請重新整理網頁";
      });
    },
    setTotalStorage() {
      let sumEffectiveWaterStorageCapacit = _.reduce(
        this.reservoirInfo,
        (sum, reservoir) => {
          return (this.totalStorage = sum +=
            reservoir.EffectiveWaterStorageCapacity);
        },
        0
      );

      if (Number.isNaN(sumEffectiveWaterStorageCapacit)) {
        return this.totalStorage = "無";
      }
      else if(Number(sumEffectiveWaterStorageCapacit) == 0) {
        return this.totalStorage = "無"
      }
      else {
        return this.totalStorage = sumEffectiveWaterStorageCapacit.toFixed(2);
      }
    },
    showReservoir() {
      this.display.reservoir = true;
      this.display.resource = false;
      this.$nextTick(() => {
        VueScrollTo.scrollTo(this.$refs.reservoir, 500);
      });
    },
    show(resourceType) {
      this.display.reservoir = false;
      this.display.resource = true;
      this.resourceType = resourceType;
      this.$nextTick(() => {
        // 透過原生的 $el 直接選取 component DOM 元素
        VueScrollTo.scrollTo(this.$refs.map.$el, 500);
      });
    },
    getPercentage(reservoir) {
      const percentage = (reservoir.EffectiveWaterStorageCapacity /reservoir.EffectiveCapacity) * 100
      if (Number.isNaN(Number(reservoir.EffectiveWaterStorageCapacity))){
        return `無`;
      }
      else if(Number(reservoir.EffectiveWaterStorageCapacity) == 0){
        return `無`;
      }
      else if(percentage >= 100) {
        return 100
      }
      else {
        return percentage.toFixed(2);
      }
    },
    getEffectiveWaterStorageCapacity(reservoir) {
      if (Number.isNaN(Number(reservoir.EffectiveWaterStorageCapacity))) {
        return `無`;
      }
      else if(Number(reservoir.EffectiveWaterStorageCapacity) == 0){
        return `無`;
      }
      else {
        return reservoir.EffectiveWaterStorageCapacity;
      }
    },
    getReservoirCapacity(reservoir){
      if (Number.isNaN(Number(reservoir.EffectiveWaterStorageCapacity))) {
        return `無`;
      }
      else if(Number(reservoir.EffectiveWaterStorageCapacity) == 0){
        return `無`;
      }
      else {
        return reservoir.EffectiveWaterStorageCapacity;
      }
    },
    getReservoirChartValue(reservoir){
      const reservoirMaxValue = this.sortReservoir.map(value => value.EffectiveWaterStorageCapacity);
      return `${((reservoir.EffectiveWaterStorageCapacity / reservoirMaxValue[0]) * 100).toFixed(2)}%`
    },
    setLastEffectiveWaterStorageCapacity() {
      _.each(this.reservoirInfo, (reservoir, name) => {
        let last = _.findLast(this.reservoirLiveData, (row) => {
          return (
            String(row.ReservoirIdentifier) ==
            String(reservoir.ReservoirIdentifier)
          );
        });
        if (last) {
          reservoir.EffectiveWaterStorageCapacity = parseFloat(
            last.EffectiveWaterStorageCapacity
          );
          console.log("a");
          reservoir.ObservationTime = last.ObservationTime;
        }
      });
    },
    direct(value) {
      window.open(value, "_blank");
    },
    call(value) {
      window.open(`tel:${value}`);
    },
  },
};
</script>
<style lang="scss">
#app {
  position: relative;
}

.hidden {
  display: none;
}

.browser_warning {
  display: none;
  @media (min-width: 1024px) {
    width: fit-content;
    height: fit-content;
    margin: auto;
    padding: 10px 16px;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-radius: 5px;
    background-color: #fff;
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.5;
    text-align: center;
  }
  &_background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}

.home {
  background: url("~@/assets/image/pic/home-bg.png") center/cover no-repeat;
}
.navbar-container {
  width: 100%;
  height: 55px;
  background-color: #00000040;
  position: fixed;
  .navbar {
    line-height: 55px;
    top: 0;
  }
}
.pointer {
  cursor: pointer;
}
.web_info {
  padding: 100px 0;
}
.resources_region_item {
  border: 1px solid #999;
  border-radius: 10px;
  &.active {
    background-color: #333;
    color: #fff;
    path {
      fill: #fff;
    }
  }
  &:last-child {
    margin: 0;
  }
}
.popover {
  top: calc(50% - 240px);
  position: fixed;
}
.icon-disable {
  opacity: 0.3;
  filter: alpha(opacity=30);
  cursor: not-allowed;
}

.green {
  background-color: #27ae60;
}
.yellow {
  background-color: #f2c94c;
}
.orange_400 {
  background-color: #f88824;
}
.orange_600 {
  background-color: #eb5757;
}
</style>
