<template>
  <div class="ResourcesRegisonStand">
    <div @click="display.standDetil = true" class="stand_header">
      <div class="stand_name">
        [{{ row["廠別"] }}] {{ row["位置資訊"] }}
        <div class="resources_stand_tag">
          <div class="resources_stand_badge gray_300">企業取水</div>
          <div class="resources_stand_badge gray_300">民眾取水</div>
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
        :href="`tel:${row.聯絡方式.split('\n')[0]}`"
        class="resources_telephone"
      >
        <img src="@/assets/image/icon/phone.png" alt="" />
      </a>
    </div>
    <div v-if="display.standDetil" class="stand_detail">
      <div @click="display.standDetil = false" class="return_list">
        <div class="back_arrow_icon">
          <backArrow />
        </div>
        <span>返回列表</span>
      </div>
      <div class="stand_header">
      <div class="stand_name">
        {{ row["廠別"] }}
        <div class="resources_stand_tag">
          <div class="resources_stand_badge gray_300">企業取水</div>
          <div class="resources_stand_badge gray_300">民眾取水</div>
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
        :href="`tel:${row.聯絡方式.split('\n')[0]}`"
        class="resources_telephone"
      >
        <img src="@/assets/image/icon/phone.png" alt="" />
      </a>
      </div>
      <div class="stand_body">
        <div class="stand_info">
          地址：{{ row["位置資訊"] }}
        </div>
        <div class="stand_info">
          電話：{{ row["聯絡方式"] }}
        </div>
        <div class="stand_info">
          取水時間：00：00 - 24：00
        </div>
        <div class="stand_info">
          出水量 : {{row["供水量CMD"]}}
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
    }
  },
  data(){
    return {
      display: {
        standDetil: false
      }
    }
  }
  // methods:{
  //   showStandDetail(){
  //     this.display = true;
  //   }
  // }
}
</script>

<style>

</style>