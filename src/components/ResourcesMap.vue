<template>
  <div class="resources_map">
    <l-map ref="map" style="height: 600px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-feature-group ref="features">
        <template v-for="resource in resource[resourceType]">
          <l-marker
            @click="abc(resource)"
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
</template>

<script>
import _ from "lodash";
import wellData from "@/assets/open-data/well.json";
import farmwellData from "@/assets/open-data/farmwell.json";
import recycleData from "@/assets/open-data/recycle.json";
import roData from "@/assets/open-data/ro.json";
import carData from "@/assets/open-data/car.json";

export default {
  name: "ResourcesMap",
  data() {
    return {
      display: {
        resource: false,
      },
      resourceType: null,
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
  methods: {
    abc(resource){
      console.log(resource);
    }
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

<style lang="scss" scoped>

</style>