<template>
  <div class="ResourcesRegisonStand">
    <div class="stand_header">
      <div class="stand_name">
        [{{ row["名稱"] }}] {{ row["地址"] }}
        <div class="resources_stand_tag">
          <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
          <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
          <div v-else class="resources_stand_badge gray_300">民眾取水</div>
        </div>
        <time class="open_time">00：00 - 24：00</time>
      </div>
      <a
        :href="`https://www.google.com/maps/search/?api=1&query=${row.Latitude},${row.Longitude}`"
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
        {{ row["名稱"] }}
        <div class="resources_stand_tag">
          <div v-if="getBadgeDisplay()" class="resources_stand_badge gray_300">企業取水</div>
          <div v-else-if="getBadgeDisplay()" class="resources_stand_badge gray_300">民眾取水</div>
          <div v-else class="resources_stand_badge gray_300">民眾取水</div>
        </div>
        <time class="open_time">00：00 - 24：00</time>
      </div>
      <a
        :href="`https://www.google.com/maps/search/?api=1&query=${row.Latitude},${row.Longitude}`"
        target="_blank"
        class="resources_address"
      >
        <img src="@/assets/image/icon/map.png" alt="map icon" />
      </a>
      <a
        :href="`tel:${row.電話}`"
        class="resources_telephone"
      >
        <img src="@/assets/image/icon/phone.png" alt="" />
      </a>
      </div>
      <div class="stand_body">
        <div class="stand_info">
          地址：{{ row["地址"] }}
        </div>
        <div class="stand_info">
          取水時間：00：00 - 24：00
        </div>
        <div class="stand_info">
          出水量 : {{row["出水量"]}}
        </div>
        <div class="stand_info">
          是否符合飲用水標準 : {{row["水質"]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backArrow from "@/assets/image/icon/back-arrow.svg";
export default {
  name: "ResourcesRegionStand",
  components: {
    backArrow
  },
  props: {
    row: {
      type: Object,
      required: true
    },
    resourceType: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      detailDisplay: false,
      badgeDisplay: false
    }
  },
  methods:{
    toggleDetailDisplay(){
      this.detailDisplay = !this.detailDisplay
      this.$emit("detailOnClick", this.detailDisplay)
    },
    getBadgeDisplay(){
      if(this.resourceType === "recycle") {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>