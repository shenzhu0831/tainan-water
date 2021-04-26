<template>
  <div>
    <div class="popover-container" v-if="display.popoverContainer">
      <div class="popover">
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
              <div class="light_sign_badge green"></div>
              <span class="light_sign_name">水情提醒</span>
              <p class="light_sign_content">加強水源調度及研擬措施。</p>
            </div>
            <div class="light_sign">
              <div class="light_sign_badge yellow"></div>
              <span class="light_sign_name">減壓供水</span>
              <p class="light_sign_content">
                減壓供水：離峰及特定時段降低管壓供水 <br />
                停止供水：停供行政機關及國營事業轄管噴水池、澆灌、沖洗外牆、街道及水溝等非急需或非必要之用水。
              </p>
            </div>
            <div class="light_sign">
              <div class="light_sign_badge orange_400"></div>
              <span class="light_sign_name">水情提醒</span>
              <p class="light_sign_content">
                停止供水：試放消防栓、露天屋頂放流及其他供水之用 <br />
                減量供水：每月用水超過一千度大用水戶之非工業用水戶減供
                20%、工業用戶減 5~10%，但醫療或其他性質特殊者，不在此限。 <br />
                減量供水：游泳池、洗車、三溫暖、水療業者、及其他不急需之用水，減供
                20%
              </p>
            </div>
            <div class="light_sign">
              <div class="light_sign_badge orange_600"></div>
              <span class="light_sign_name">水情提醒</span>
              <p class="light_sign_content">
                停止供水：分區輪流或全區停止供水 <br />
                定點供水：優先順序為 1.居民維生 2.醫療 3.國防事業 4.工商事業
                5.其他
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="popover_background"></div>
    </div>

    <section class="home">
      <div class="navbar-container hidden">
        <nav class="navbar">
          <a href="#">水庫狀況</a>
          <a href="#">取水資源</a>
          <a href="#">節約用水</a>
        </nav>
      </div>

      <div class="web_info">
        <h1 class="web_info_title">
          <laptopLogo></laptopLogo>
        </h1>
        <h1 class="web_info_title sm-size">
          <phoneLogo></phoneLogo>
        </h1>
        <span class="update_time">
          上次更新時間
          <time :datetime="reservoirInfo.曾文水庫.ObservationTime">{{
            getLastUpdate()
          }}</time>
        </span>
      </div>
      <div class="reservoir_info">
        <div class="water_regime">
          <span class="water_regime_name">目前水情</span>
          <div class="water_regime_content">
            <div class="water_regime_badge"></div>
            <span class="water_regime_value">減量供水</span>
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
          <span
            class="reservoir_regime_value resources_stand_value"
            @click="showReservoir()"
            >{{ totalPercentage }}</span
          >
        </div>
      </div>
      <div class="resources_stand_info">
        <div class="resources_stand">
          <div class="resources_stand_name">抗旱水井</div>
          <div class="resources_stand_value" @click="show('well')">
            {{ resource.well.length }}
          </div>
        </div>
        <div class="resources_stand">
          <div class="resources_stand_name">農業水井</div>
          <div class="resources_stand_value" @click="show('farmwell')">
            {{ resource.farmwell.length }}
          </div>
        </div>
        <div class="resources_stand">
          <div class="resources_stand_name">RO等級移動式淨水設備</div>
          <div class="resources_stand_value" @click="show('ro')">
            {{ resource.ro.length }}
          </div>
        </div>
        <div class="resources_stand">
          <div class="resources_stand_name">民間水車</div>
          <div class="resources_stand_value" @click="show('car')">
            {{ resource.car.length }}
          </div>
        </div>
        <div class="resources_stand">
          <div class="resources_stand_name">水資源回收中心</div>
          <div class="resources_stand_value" @click="show('recycle')">
            {{ resource.recycle.length }}
          </div>
        </div>
      </div>
    </section>
    <section ref="reservoir" class="reservoir" v-if="display.reservoir">
      <div class="reservoir_title">
        <h3>台灣水庫蓄水情況</h3>
      </div>
      <div class="total_storage">
        <h4>總蓄水量</h4>
        <span class="total_storage_value">{{ totalStorage }}</span>
        <span class="total_storage_unit">萬立方公尺</span>
      </div>
      <div class="reservoir_chart">
        <div class="reservoir_chart_header">
          <span class="reservoir_name header">水庫名稱/地區</span>
          <span class="reservoir_capacity">有效容量比</span>
          <span class="reservoir_storage">有效蓄水量/萬立方公尺</span>
        </div>
        <div class="reservoir_chart_body">
          <div
            class="reservoir_chart_item"
            v-for="(reservoir, ReservoirName) in reservoirInfo"
          >
            <div class="reservoir_name">
              <div>{{ ReservoirName }}</div>
              <span class="reservoir_counties" v-for="city in reservoir.tabs">{{
                city
              }}</span>
            </div>
            <div class="reservoir_chart_line">
              <div
                class="reservoir_chart_value"
                :style="{ width: getPercentage(reservoir) + '%' }"
              ></div>
            </div>
            <div class="reservoir_capacity">
              {{ getPercentage(reservoir) }}%
            </div>
            <div class="reservoir_storage">
              {{ reservoir.EffectiveWaterStorageCapacity }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section ref="resource" class="resources" v-if="display.resource">
      <div class="resources_title">
        <h3>台南取水資源</h3>
        <!-- <button class="reserv_button">預約取水系統</button> -->
      </div>
      <div class="resources_map">
        <l-map ref="map" style="height: 400px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url"></l-tile-layer>
          <l-feature-group ref="features">
            <template v-for="resource in resource[resourceType]">
              <l-marker
                :lat-lng="[resource.Latitude, resource.Longitude]"
                v-if="resource.Latitude && resource.Longitude"
              >
                <l-popup>
                  <div v-for="(value, key) in resource">
                    {{ key }}: {{ value }}
                  </div>
                </l-popup>
              </l-marker>
            </template>
          </l-feature-group>
        </l-map>
      </div>
      <div class="resources_region"></div>
      <div class="resources_region_list">
        <div class="resources_region_sort">
          <div
            class="resources_region_item pointer"
            :class="{ active: resourceType == 'well' }"
            @click="resourceType = 'well'"
          >
            <div class="resources_region_icon">
              <img
                src="@/assets/image/icon/drought-well.png"
                alt="drought-well"
              />
            </div>
            <span>抗旱水井</span>
          </div>
          <div
            class="resources_region_item pointer"
            :class="{ active: resourceType == 'farmwell' }"
            @click="resourceType = 'farmwell'"
          >
            <div class="resources_region_icon">
              <img
                src="@/assets/image/icon/agricultural-well.png"
                alt="agricultural-well"
              />
            </div>
            <span>農業水井</span>
          </div>
          <div
            class="resources_region_item pointer"
            :class="{ active: resourceType == 'recycle' }"
            @click="resourceType = 'recycle'"
          >
            <div class="resources_region_icon">
              <img
                src="@/assets/image/icon/water-recycling-center.png"
                alt="water-recycling-center"
              />
            </div>
            <span>水資源回收中心</span>
          </div>
          <div
            class="resources_region_item pointer"
            :class="{ active: resourceType == 'ro' }"
            @click="resourceType = 'ro'"
          >
            <div class="resources_region_icon">
              <img src="@/assets/image/icon/RO-icon.png" alt="RO-icon" />
            </div>
            <span>RO等級移動式淨水設備</span>
          </div>
          <div
            class="resources_region_item pointer"
            :class="{ active: resourceType == 'car' }"
            @click="resourceType = 'car'"
          >
            <div class="resources_region_icon">
              <img
                src="@/assets/image/icon/water-wheel.png"
                alt="water-wheel"
              />
            </div>
            <span>民間水車</span>
          </div>
        </div>
        <div class="resources_region_content" v-if="resourceType == 'well'">
          <div
            class="resources_region_stand"
            v-for="row in resource[resourceType]"
          >
            <div class="stand_info">
              [{{ row["引水地點"] }}] {{ row["引點地點[地段地號]"] }}
              <span class="open_time">00：00 - 24：00</span>
            </div>
            <button class="resources_address icon-disable">
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </button>
            <button class="resources_telephone icon-disable">
              <img src="@/assets/image/icon/phone.png" alt="" />
            </button>
          </div>
        </div>
        <div class="resources_region_content" v-if="resourceType == 'farmwell'">
          <div
            class="resources_region_stand"
            v-for="row in resource[resourceType]"
          >
            <div class="stand_info">
              [{{ row["站名[井號]"] }}] {{ row["地籍"] }}
              <span class="open_time">00：00 - 24：00</span>
            </div>
            <button
              class="resources_address"
              @click="
                direct(
                  `http://maps.google.com/?q=${row.Latitude},${row.Longitude}`
                )
              "
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </button>
            <button class="resources_telephone icon-disable">
              <img src="@/assets/image/icon/phone.png" alt="" />
            </button>
          </div>
        </div>
        <div class="resources_region_content" v-if="resourceType == 'recycle'">
          <div
            class="resources_region_stand"
            v-for="row in resource[resourceType]"
          >
            <div class="stand_info">
              [{{ row["廠別"] }}] {{ row["位置資訊"] }}
              <span class="open_time">00：00 - 24：00</span>
            </div>
            <button
              class="resources_address"
              @click="
                direct(
                  `http://maps.google.com/?q=${row.Latitude},${row.Longitude}`
                )
              "
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </button>
            <button
              class="resources_telephone"
              @click="call(row.聯絡方式.split('\n')[0])"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </button>
          </div>
        </div>
        <div class="resources_region_content" v-if="resourceType == 'ro'">
          <div
            class="resources_region_stand"
            v-for="row in resource[resourceType]"
          >
            <div class="stand_info">
              [{{ row["名稱"] }}] {{ row["位址"] }}
              <span class="open_time">{{ row["可取水時間"] }}</span>
            </div>
            <button
              class="resources_address"
              @click="
                direct(
                  `http://maps.google.com/?q=${row.Latitude},${row.Longitude}`
                )
              "
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </button>
            <button class="resources_telephone icon-disable">
              <img src="@/assets/image/icon/phone.png" alt="" />
            </button>
          </div>
        </div>
        <div class="resources_region_content" v-if="resourceType == 'car'">
          <div
            class="resources_region_stand"
            v-for="row in resource[resourceType]"
          >
            <div class="stand_info">
              [{{ row["單位名稱"] }}] {{ row["地址"] }}
              <span class="open_time">08：00 - 17：00</span>
            </div>
            <button
              class="resources_address"
              @click="
                direct(
                  `http://maps.google.com/?q=${row.Latitude},${row.Longitude}`
                )
              "
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </button>
            <button
              class="resources_telephone"
              @click="call(row.聯絡資訊.split('\n')[0])"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <Economy></Economy>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import dayjs from "dayjs";
import axios from "axios";

import laptopLogo from "../assets/image/title/logo-laptop.svg";
import phoneLogo from "../assets/image/title/logo-phone.svg";

import tainanReservoirData from "@/assets/open-data/tainan-reservoir-data.json";
import reservoirLiveData from "@/assets/open-data/reservoir-live-data.json";
import wellData from "@/assets/open-data/well.json";
import farmwellData from "@/assets/open-data/farmwell.json";
import recycleData from "@/assets/open-data/recycle.json";
import roData from "@/assets/open-data/ro.json";
import carData from "@/assets/open-data/car.json";

import VueScrollTo from "vue-scrollto";
import Economy from "@/components/Economy.vue";

export default {
  name: "Home",
  components: { 
    laptopLogo,
    phoneLogo,
    Economy
  },
  data() {
    return {
      display: {
        popoverContainer: false,
        reservoir: false,
        resource: false,
      },

      reservoirs: [],
      reservoirLiveData: null,
      reservoirInfo: {
        白河水庫: {
          ReservoirIdentifier: 30401,
          EffectiveCapacity: 1173.45,
          tabs: ["台南"],
        },
        曾文水庫: {
          ReservoirIdentifier: 30502,
          EffectiveCapacity: 50956,
          tabs: ["嘉義", "台南"],
        },
        烏山頭水庫: {
          ReservoirIdentifier: 30501,
          EffectiveCapacity: 7876.5,
          tabs: ["台南"],
        },
        南化水庫: {
          ReservoirIdentifier: 30503,
          EffectiveCapacity: 9097.9,
          tabs: ["台南", "高雄"],
        },
      },
      resourceType: null,
      totalStorage: 0,
      resource: {
        well: wellData,
        farmwell: farmwellData,
        recycle: recycleData,
        ro: roData,
        car: _.filter(carData, (row) => row["縣市"] == "臺南市"),
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [22.9920922, 120.1970246],
    };
  },
  mounted() {
    this.reservoirs = tainanReservoirData;
    // this.reservoirLiveData = reservoirLiveData.ReservoirConditionData_OPENDATA;
    axios.get("https://goodideas-studio.com/water/").then((res) => {
      this.reservoirLiveData = res.data.ReservoirConditionData_OPENDATA;
      this.setLastEffectiveWaterStorageCapacity();
      this.setTotalStorage();
    });
  },
  computed: {
    totalCapacity() {
      return _.reduce(
        this.reservoirInfo,
        (sum, reservoir) => {
          return (sum += reservoir.EffectiveCapacity * 1);
        },
        0
      );
    },
    totalPercentage() {
      return ((this.totalStorage / this.totalCapacity) * 100).toFixed(2) + "%";
    },
  },
  methods: {
    getLastUpdate() {
      return this.reservoirInfo.曾文水庫.ObservationTime
        ? dayjs(this.reservoirInfo.曾文水庫.ObservationTime).format(
            "YYYY.MM.DD HH:mm:ss"
          )
        : "-";
    },
    setTotalStorage() {
      this.totalStorage = _.reduce(
        this.reservoirInfo,
        (sum, reservoir) => {
          return (sum += reservoir.EffectiveWaterStorageCapacity);
        },
        0
      );
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
        VueScrollTo.scrollTo(this.$refs.resource, 500);
      });
    },
    getPercentage(reservoir) {
      return (
        (reservoir.EffectiveWaterStorageCapacity /
          reservoir.EffectiveCapacity) *
        100
      ).toFixed(2);
    },
    setLastEffectiveWaterStorageCapacity() {
      _.each(this.reservoirInfo, (reservoir) => {
        let last = _.findLast(this.reservoirLiveData, (row) => {
          return (
            String(row.ReservoirIdentifier) ==
            String(reservoir.ReservoirIdentifier)
          );
        });
        reservoir.EffectiveWaterStorageCapacity = parseFloat(
          last.EffectiveWaterStorageCapacity
        );
        reservoir.ObservationTime = last.ObservationTime;
      });
    },
    direct(value) {
      window.open(value, "_blank");
    },
    call(value) {
      window.open(`tel:${value}`);
    },
  },
  watch: {
    resourceType() {
      this.$nextTick(() => {
        this.$refs.map.mapObject.invalidateSize();
        this.$refs.map.fitBounds(this.$refs.features.mapObject.getBounds());
      });
    },
  },
};
</script>
<style lang="scss">
.hidden {
  display: none;
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
.resources_stand_value {
  @extend .pointer;
  text-decoration: underline;
}
.resources_region_item {
  margin-bottom: 10px;
  border: 1px solid transparent;
  &.active,
  &:hover {
    border-color: #999;
    border-radius: 10px;
  }
}
.resources_map {
  margin-bottom: 30px;
  text-align: center;
  img {
    width: 80%;
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
</style>
