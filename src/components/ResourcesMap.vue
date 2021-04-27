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

export default {
  name: "ResourcesMap",
  props: ['resourceType', 'resource'],
  data() {
    return {
      display: {
        resource: false,
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [22.9920922, 120.1970246],
    };
  },
  methods: {
    abc(resource){
      console.log(resource);
    },
    test(resource) {
      console.log('test', resource);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>