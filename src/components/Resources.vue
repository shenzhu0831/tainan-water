<template>
  <section class="resources" v-if="display.resource">
    <div class="resources_title">
      <h3>台南取水資源</h3>
      <!-- <button class="reserve_button">預約取水系統</button> -->
    </div>
    <div class="resources_region"></div>
    <div class="resources_region_list">
      <div class="resources_region_sort_laptop">
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
          :class="{ active: resourceType == 'car' }"
          @click="resourceType = 'car'"
        >
          <div class="resources_region_icon">
            <img src="@/assets/image/icon/water-wheel.png" alt="water-wheel" />
          </div>
          <span>民間水車</span>
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
          :class="{ active: resourceType == 'bwater' }"
          @click="resourceType = 'bwater'"
        >
          <div class="resources_region_icon">
            <img src="@/assets/image/icon/construction-icon.png" alt="construction-icon" />
          </div>
          <span>建築工地放流水</span>
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
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${row.緯度},${row.經度}`"
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
      </div>
      <div class="resources_region_content" v-if="resourceType == 'well'">
        <div
          class="resources_region_stand"
          v-for="row in resource[resourceType]"
        >
          <div class="stand_info">
            [{{ row["引水地點"] }}] {{ row["引點地段地號"] }}
            <span class="open_time">00：00 - 24：00</span>
          </div>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${row.緯度},${row.經度}`"
            target="_blank"
            class="resources_address"
          >
            <img src="@/assets/image/icon/map.png" alt="map icon" />
          </a>
          <a href="javascript:void(0)" class="resources_telephone icon-disable">
            <img src="@/assets/image/icon/phone.png" alt="" />
          </a>
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
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${row.緯度},${row.經度}`"
            target="_blank"
            class="resources_address"
          >
            <img src="@/assets/image/icon/map.png" alt="map icon" />
          </a>
          <a href="javascript:void(0)" class="resources_telephone icon-disable">
            <img src="@/assets/image/icon/phone.png" alt="" />
          </a>
        </div>
      </div>
      <div class="resources_region_content" v-if="resourceType == 'car'">
        <div
          class="resources_region_stand"
          v-for="row in resource[resourceType]"
        >
          <div class="stand_info">
            [{{ row["單位名稱"] }}] {{ row["地址"] }}
            <span class="open_time">{{ row["可取水時間"] }}</span>
          </div>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${row.緯度},${row.經度}`"
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
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${row.緯度},${row.經度}`"
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
      </div>
      <div class="resources_region_content" v-if="resourceType == 'bwater'">
        <div
          class="resources_region_stand"
          v-for="row in resource[resourceType]"
        >
          <div class="stand_info">
            [{{ row["工地名稱"] }}] {{ row["地址"] }}
            <span class="open_time">{{ row["可取水時間"] }}</span>
          </div>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${row.緯度},${row.經度}`"
            target="_blank"
            class="resources_address"
          >
            <img src="@/assets/image/icon/map.png" alt="map icon" />
          </a>
          <a href="javascript:void(0)" class="resources_telephone icon-disable">
            <img src="@/assets/image/icon/phone.png" alt="" />
          </a>
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
            <template v-for="resource in resource[resourceType]">
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
                      :href="`https://www.google.com/maps/search/?api=1&query=${resource.緯度},${resource.經度}`"
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
                  <div v-if="resource.聯絡方式" class="connect-icon">
                    <a
                      :href="`tel:${resource.聯絡方式.split('\n')[0]}`"
                      class="resources_telephone"
                    >
                      <img
                        class="phone-icon"
                        src="@/assets/image/icon/phone.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div v-if="resource.聯絡資訊" class="connect-icon">
                    <a
                      :href="`tel:${resource.聯絡資訊.split('\n')[0]}`"
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

export default {
  name: "Resources",
  props: ["parentResourceType", "resource", "display"],
  data() {
    return {
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
  methods: {},
  watch: {
    parentResourceType(newValue) {
      this.resourceType = newValue;
    },
    resourceType(newValue) {
      this.$nextTick(() => {
        this.$refs.map.mapObject.invalidateSize();
        this.$refs.map.fitBounds(this.$refs.features.mapObject.getBounds());
      });
      // console.log(this.resourceType);
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