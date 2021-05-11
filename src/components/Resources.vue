<template>
  <section class="resources" v-if="display.resource">
    <div class="resources_title">
      <h3>台南取水資源</h3>
    </div>
    <div class="resources_region"></div>
    <div class="resources_region_sort_laptop">
      <div
        class="resources_region_item"
        :class="{ active: resourceType == 'recycle' }"
        @click="resourceType = 'recycle'"
      >
        <div class="resources_region_icon">
          <recycleIcon />
        </div>
        <span class="resources_region_text">水資源回收中心</span>
      </div>
      <div
        class="resources_region_item"
        :class="{ active: resourceType == 'well' }"
        @click="resourceType = 'well'"
      >
        <div class="resources_region_icon">
          <wellIcon />
        </div>
        <span class="resources_region_text">抗旱水井</span>
      </div>
      <div
        class="resources_region_item"
        :class="{ active: resourceType == 'farmwell' }"
        @click="resourceType = 'farmwell'"
      >
        <div class="resources_region_icon">
          <farmWellIcon />
        </div>
        <span class="resources_region_text">農業水井</span>
      </div>
      <div
        class="resources_region_item"
        :class="{ active: resourceType == 'car' }"
        @click="resourceType = 'car'"
      >
        <div class="resources_region_icon" style="margin: 0 5px;">
          <carIcon />
        </div>
        <span class="resources_region_text">民間水車</span>
      </div>
      <div
        class="resources_region_item"
        :class="{ active: resourceType == 'ro' }"
        @click="resourceType = 'ro'"
      >
        <div class="resources_region_icon">
          <roIcon />
        </div>
        <span class="resources_region_text">RO等級移動式淨水設備</span>
      </div>
      <div
        class="resources_region_item"
        :class="{ active: resourceType == 'bwater' }"
        @click="resourceType = 'bwater'"
      >
        <div class="resources_region_icon">
          <constructionIcon />
        </div>
        <span class="resources_region_text">建築工地放流水</span>
      </div>
    </div>
    <div class="resources_region_list">
      <div class="resources_region_content" :class="{'overflow-hidden': detailDisplay}" v-if="resourceType == 'recycle'">
        <div
          class="resources_region_stand"
          v-for="row in resources[resourceType]"
        >
          <div class="stand_header">
      <div class="stand_name">
        [{{ row["廠別"] }}] {{ row["位置資訊"] }}
        <div class="resources_stand_tag">
          <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
          <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
          <div v-else class="resources_stand_badge gray_300">企業取水</div>
        </div>
        <time class="open_time">00：00 - 24：00</time>
      </div>
      <a
        :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
        target="_blank"
        class="resources_address"
      >
        <img src="@/assets/image/icon/map.png" alt="map icon" />
      </a>
      <a
        :href="`tel:${row.聯絡方式.split('\n')[0]}`"
        class="resources_telephone"
      >
        <img src="@/assets/image/icon/phone.png" alt="" />
      </a>
          </div>
          <div v-if="detailDisplay" class="stand_detail">
            <div @click="toggleDetailDisplay" class="return_list">
              <div class="back_arrow_icon">
                <backArrow />
              </div>
              <span>返回列表</span>
            </div>
            <div class="stand_header">
            <div class="stand_name">
              {{ row["廠別"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡方式.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
            </div>
            <div class="stand_body">
              <div class="stand_info">
                位置資訊：{{ row["地址"] }}
              </div>
              <div class="stand_info">
                取水時間：00：00 - 24：00
              </div>
              <div class="stand_info">
                出水量 : {{row["供水量CMD"]}}
              </div>
              <div class="stand_info">
                是否符合飲用水標準 : {{row["水質"]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_region_content" :class="{'overflow-hidden': detailDisplay}" v-if="resourceType == 'well'">
        <div
          class="resources_region_stand"
          v-for="row in resources[resourceType]"
        >
          <div class="stand_header">
            <div class="stand_name">
              [{{ row["引水地點"] }}] {{ row["引點地段地號"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
          </div>
          <div v-if="detailDisplay" class="stand_detail">
            <div @click="toggleDetailDisplay" class="return_list">
              <div class="back_arrow_icon">
                <backArrow />
              </div>
              <span>返回列表</span>
            </div>
            <div class="stand_header">
            <div class="stand_name">
              {{ row["廠別"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡方式.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
            </div>
            <div class="stand_body">
              <div class="stand_info">
                位置資訊：{{ row["地址"] }}
              </div>
              <div class="stand_info">
                取水時間：00：00 - 24：00
              </div>
              <div class="stand_info">
                出水量 : {{row["供水量CMD"]}}
              </div>
              <div class="stand_info">
                是否符合飲用水標準 : {{row["水質"]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_region_content" :class="{'overflow-hidden': detailDisplay}" v-if="resourceType == 'farmwell'">
        <div
          class="resources_region_stand"
          v-for="row in resources[resourceType]"
        >
          <div class="stand_header">
            <div class="stand_name">
              [{{ row["站名[井號]"] }}] {{ row["地籍"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
          </div>
          <div v-if="detailDisplay" class="stand_detail">
            <div @click="toggleDetailDisplay" class="return_list">
              <div class="back_arrow_icon">
                <backArrow />
              </div>
              <span>返回列表</span>
            </div>
            <div class="stand_header">
            <div class="stand_name">
              {{ row["廠別"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡方式.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
            </div>
            <div class="stand_body">
              <div class="stand_info">
                位置資訊：{{ row["地址"] }}
              </div>
              <div class="stand_info">
                取水時間：00：00 - 24：00
              </div>
              <div class="stand_info">
                出水量 : {{row["供水量CMD"]}}
              </div>
              <div class="stand_info">
                是否符合飲用水標準 : {{row["水質"]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_region_content" :class="{'overflow-hidden': detailDisplay}" v-if="resourceType == 'car'">
        <div
          class="resources_region_stand"
          v-for="row in resources[resourceType]"
        >
          <div class="stand_header">
            <div class="stand_name">
              [{{ row["單位名稱"] }}] {{ row["地址"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡資訊.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
          </div>
          <div v-if="detailDisplay" class="stand_detail">
            <div @click="toggleDetailDisplay" class="return_list">
              <div class="back_arrow_icon">
                <backArrow />
              </div>
              <span>返回列表</span>
            </div>
            <div class="stand_header">
            <div class="stand_name">
              {{ row["單位名稱"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡方式.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
            </div>
            <div class="stand_body">
              <div class="stand_info">
                位置資訊：{{ row["地址"] }}
              </div>
              <div class="stand_info">
                取水時間：00：00 - 24：00
              </div>
              <div class="stand_info">
                出水量 : {{row["供水量CMD"]}}
              </div>
              <div class="stand_info">
                是否符合飲用水標準 : {{row["水質"]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_region_content" :class="{'overflow-hidden': detailDisplay}" v-if="resourceType == 'ro'">
        <div
          class="resources_region_stand"
          v-for="row in resources[resourceType]"
        >
          <div class="stand_header">
            <div class="stand_name">
              [{{ row["名稱"] }}] {{ row["位址"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡電話.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
          </div>
          <div v-if="detailDisplay" class="stand_detail">
            <div @click="toggleDetailDisplay" class="return_list">
              <div class="back_arrow_icon">
                <backArrow />
              </div>
              <span>返回列表</span>
            </div>
            <div class="stand_header">
            <div class="stand_name">
              {{ row["單位名稱"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡方式.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
            </div>
            <div class="stand_body">
              <div class="stand_info">
                位置資訊：{{ row["地址"] }}
              </div>
              <div class="stand_info">
                取水時間：00：00 - 24：00
              </div>
              <div class="stand_info">
                出水量 : {{row["供水量CMD"]}}
              </div>
              <div class="stand_info">
                是否符合飲用水標準 : {{row["水質"]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_region_content" :class="{'overflow-hidden': detailDisplay}" v-if="resourceType == 'bwater'">
        <div
          class="resources_region_stand"
          v-for="row in resources[resourceType]"
        >
          <div class="stand_header">
            <div class="stand_name">
              [{{row["行政區"]}}{{ row["工地名稱"] }}] {{ row["地址"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡電話.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
          </div>
          <div v-if="detailDisplay" class="stand_detail">
            <div @click="toggleDetailDisplay" class="return_list">
              <div class="back_arrow_icon">
                <backArrow />
              </div>
              <span>返回列表</span>
            </div>
            <div class="stand_header">
            <div class="stand_name">
              {{ row["單位名稱"] }}
              <div class="resources_stand_tag">
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
                <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
                <div v-else class="resources_stand_badge gray_300">企業取水</div>
              </div>
              <time class="open_time">00：00 - 24：00</time>
            </div>
            <a
              :href="`http://maps.google.com/?q=${row.緯度},${row.經度}`"
              target="_blank"
              class="resources_address"
            >
              <img src="@/assets/image/icon/map.png" alt="map icon" />
            </a>
            <a
              :href="`tel:${row.聯絡方式.split('\n')[0]}`"
              class="resources_telephone"
            >
              <img src="@/assets/image/icon/phone.png" alt="" />
            </a>
            </div>
            <div class="stand_body">
              <div class="stand_info">
                位置資訊：{{ row["地址"] }}
              </div>
              <div class="stand_info">
                取水時間：00：00 - 24：00
              </div>
              <div class="stand_info">
                出水量 : {{row["供水量CMD"]}}
              </div>
              <div class="stand_info">
                是否符合飲用水標準 : {{row["水質"]}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources_map">
        <b-form-select
          v-model="resourceType"
          :options="options"
        ></b-form-select>

        <l-map
          ref="map"
          style="height: 100%; z-index: 0"
          :zoom="zoom"
          :center="center"
        >
          <l-tile-layer :url="url"></l-tile-layer>
          <l-feature-group ref="features">
            <template v-for="resource in formatResourceDate">
              <l-marker
                :lat-lng="[resource.緯度, resource.經度]"
                v-if="resource.緯度 && resource.經度"
                @click="selectedResource = resource"
              >
                <l-popup>
                  <div
                    v-for="(value, key) in resource"
                    v-if="!hideFields.includes(key)"
                  >
                    {{ key }}: {{ value }}
                  </div>
                  <div
                    v-if="resource.緯度 && resource.經度"
                    class="connect-icon"
                  >
                    <a
                      :href="`http://maps.google.com/?q=${resource.緯度},${resource.經度}`"
                      target="_blank"
                      class="resources_address"
                    >
                      <img
                        class="map-icon"
                        src="@/assets/image/icon/map.png"
                        alt="map icon"
                      />
                    </a>
                  </div>
                  <div v-if="resource.電話" class="connect-icon">
                    <a
                      :href="`tel:${resource.電話.split('\n')[0]}`"
                      class="resources_telephone"
                    >
                      <img
                        class="phone-icon"
                        src="@/assets/image/icon/phone.png"
                        alt=""
                      />
                    </a>
                  </div>
                </l-popup>
              </l-marker>
            </template>
          </l-feature-group>
        </l-map>
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash";

import ResourcesRegionStand from "@/components/ResourcesRegionStand.vue"

import wellIcon from "@/assets/image/icon/well.svg"
import farmWellIcon from "@/assets/image/icon/farm.svg"
import carIcon from "@/assets/image/icon/car.svg"
import recycleIcon from "@/assets/image/icon/recycle.svg"
import roIcon from "@/assets/image/icon/RO.svg"
import constructionIcon from "@/assets/image/icon/onstruction.svg"

export default {
  name: "Resources",
  components: {
    ResourcesRegionStand,
    wellIcon,
    farmWellIcon,
    carIcon,
    recycleIcon,
    roIcon,
    constructionIcon
  },
  props: ["parentResourceType", "resources", "display"],
  data() {
    return {
      detailDisplay: false,
      badgeDisplay: false,
      // newResources: null,
      resourceType: null,
      selectedResource: null,
      options: [
        { value: null, text: "請選擇" },
        { value: "well", text: "抗旱水井" },
        { value: "farmwell", text: "農業水井" },
        { value: "recycle", text: "水資源回收中心" },
        { value: "ro", text: "RO等級移動式淨水設備" },
        { value: "car", text: "民間水車" },
        { value: "bwater", text: "建築工地放流水" }
      ],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [22.9920922, 120.1970246],
      hideFields: ["緯度", "經度", "經度", "緯度"],
    };
  },
  methods: {
    toggleDetailDisplay(){
      this.detailDisplay = !this.detailDisplay
    },
    getBadgeDisplay(){
      if(this.resourceType === "recycle") {
        return true
      } else {
        return false
      }
    },
  },
  computed : {
    formatResourceDate(){
      if(this.resourceType == "recycle"){
        return this.resources[this.resourceType].map(stand => {
          
          let {_id, 位置資訊, 聯絡電話, ...rest} = {電話: stand.聯絡方式, 地址: stand.位置資訊, ...stand }
          return {...rest}
        })
      }
      else if(this.resourceType == "well"){
        return this.resources[this.resourceType].map(stand => {
          
          let {_id, 水井座標X_TWD67, 水井座標Y_TWD67, ...rest} = stand
          return {...rest}
        })
      }
      else if(this.resourceType == "farmwell"){
        return this.resources[this.resourceType].map(stand => {
          
          delete stand["_id"]
          delete stand["編號"]
          delete stand["X座標[TW97]"]
          delete stand["Y座標[TW97]"]
          delete stand["備註"]
          return stand
        })
      }
      else if(this.resourceType == "car"){
        return this.resources[this.resourceType].map(stand => {
          
          let {_id, 聯絡資訊, ...rest} = { 電話: stand.聯絡資訊, ...stand}
          return {...rest}
        })
      }
      else if(this.resourceType == "ro"){
        return this.resources[this.resourceType].map(stand => {
          
          let {_id, 位置資訊, 聯絡電話, ...rest} = {電話: stand.聯絡電話, 地址: stand.名稱, ...stand }
          return {...rest}
        })
      }
      else if(this.resourceType == "bwater"){
        return this.resources[this.resourceType].map(stand => {
          
          let {_id,聯絡電話, ...rest} = {電話: stand.聯絡電話, ...stand }
          return {...rest}
        })
      }
    }
  },
  watch: {
    parentResourceType(newValue) {
      this.resourceType = newValue;
    },
    resourceType(newValue) {
      this.$nextTick(() => {
        try {
          this.$refs.map.mapObject.invalidateSize();
          this.$refs.map.fitBounds(this.$refs.features.mapObject.getBounds());
        } catch (error) {
            console.error("取水站點經緯度遺失", error)
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select::v-deep {
  width: 95%;
  margin: auto;
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 1;
}
.connect-icon {
  margin-top: 10px;
  display: inline-block;
  img {
    width: 32px;
    &.phone-icon {
      height: 30px;
    }
  }
}
</style>