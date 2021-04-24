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
          <svg
            width="755"
            height="59"
            viewBox="0 0 755 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.580987 27.258H56.762V14.082L50.418 3.041H30.41V6.457L33.399 12.313V13.106H23.944V12.313L26.994 6.457V3.041H6.92499L0.580987 14.082V27.258ZM1.49599 29.515V57.697H55.664V29.515H1.49599ZM19.857 41.715H36.876V45.07H19.857V41.715ZM102.207 17.01V15.302H119.897V3.529H102.207V1.089H81.955V3.529H64.631V15.302H81.955V17.01H64.082V57.758H79.027V29.21H105.318V49.157L103.732 50.865V45.253H98.608V43.667H103.671V35.859H102.207L103.854 31.589V30.43H93.789L92.264 35.859H91.959L90.434 30.43H80.369V31.589L82.016 35.859H80.552V43.667H85.676V45.253H80.491V52.878H85.676V56.843H98.608V52.878H101.902L100.865 54.037V57.758H120.08V17.01H102.207ZM183.764 4.2H174.37V0.722997H157.595V4.2H149.116V19.45H183.764V4.2ZM148.323 38.299V22.988H145.7V20.67H147.53V6.152H145.7V1.638H130.511V6.152H127.339V20.67H130.511V30.613L127.583 32.199V47.815H130.45L130.511 47.754V49.706L127.522 52.634V57.88H145.7V39.702L148.323 38.299ZM181.263 40.617V21.341H150.946V40.617H147.591V57.819H160.34L164.854 52.451V34.7H166.745V52.512L171.137 57.819H184.13V40.617H181.263ZM245.862 2.126H192.06V28.173H245.862V2.126ZM229.575 11.215V12.984H208.347V11.215H229.575ZM208.347 19.816V18.047H229.575V19.816H208.347ZM247.387 41.959H229.941V40.129H246.045V29.82H191.999V40.129H208.103V41.959H190.596V53H208.103V58.063H229.941V53H247.387V41.959ZM303.263 27.624L310.217 20.853V4.871H300.335L293.686 12.557V1.211H274.898V42.874L269.774 51.048V58.185H293.686V44.948L301.555 54.586H310.766V36.042L303.263 27.624ZM272.824 6.335H254.829V26.77H259.77V30.064L254.463 38.177V54.586H264.833L272.824 42.203V6.335ZM366.276 17.376H369.509L373.535 14.387V2.553H354.137V0.844999H341.327L334.983 5.298V17.376H338.643L343.401 14.204V15.973L335.044 21.341V26.099H350.111L353.405 22.866H354.564L357.919 26.099H373.901V20.792L366.276 17.376ZM333.58 1.821H317.964V13.289H333.58V1.821ZM345.597 12.74L347.488 11.459H360.725V12.74H345.597ZM333.58 14.692H323.149L317.964 18.352V26.099H333.58V14.692ZM372.742 51.353V27.502H319.062V51.353H322.356L317.964 54.708V57.941H339.497L342.852 54.098H348.83L352.185 57.941H373.718V54.708L369.326 51.353H372.742ZM355.967 35.005V36.408H335.166V35.005H355.967ZM355.967 41.776H335.166V40.434H355.967V41.776ZM335.166 45.619H355.967V47.022H335.166V45.619ZM396.776 1.882V57.941H406.292L408.793 53.671V13.655H413.246L410.074 17.437V40.007H417.943V58.002H429.411V40.007H436.67V15.241H424.165V13.655H437.646V1.882H396.776ZM381.16 17.681H395.251V2.065H381.16V17.681ZM381.16 35.249H395.251V19.267H381.16V35.249ZM426.239 24.086V25.672H420.932V24.086H426.239ZM426.239 31.894H420.932V30.308H426.239V31.894ZM381.038 42.874V58.002H395.251V36.835H384.332L381.038 42.874ZM409.891 45.558V57.087H416.723V41.349H412.026L409.891 45.558ZM430.692 41.349V57.087H437.585V45.558L435.511 41.349H430.692ZM497.853 21.951L500.598 19.572V2.858H490.96V0.905998H478.821L474.856 4.261V12.618H488.52V14.082L486.568 15.424L484.494 13.96H474.856V20.609L477.418 22.378L474.856 24.33V31.467H484.555L487.544 28.905L491.326 31.467H500.903V24.33L497.853 21.951ZM453.14 28.905V31.467H464.913V28.905L468.268 31.406H473.575V24.574L468.878 22.073H473.514V12.618H465.279V11.276H473.514V2.37H465.279V0.966997H452.835V2.37H444.783V11.276H452.835V12.618H444.661V22.073H449.236L444.478 24.574V31.406H449.785L453.14 28.905ZM452.408 16.522H454.604V18.108H452.408V16.522ZM465.767 18.108H463.571V16.522H465.767V18.108ZM481.749 47.083H499.744V41.532H481.749V40.129H500.415V32.748H444.966V40.129H463.266V48.486H461.802V41.654H446.674V48.486H444.6V57.758H500.842V48.486H481.749V47.083ZM544.762 0.661998H526.706L507.43 9.629V26.099H511.029V29.393H561.354V26.099H565.014V9.629L544.762 0.661998ZM537.686 15.241L543.725 17.559H528.78L534.636 15.241H537.686ZM509.077 58.002H563.245V31.528H509.077V58.002ZM527.438 43.179H544.457V46.046H527.438V43.179ZM625.587 45.314L627.539 43.179V24.33H608.873V13.106H614.18V14.448H610.276V23.049H623.757L627.295 18.169V2.309H595.697V57.88H602.956L607.592 53V33.785H617.779V37.689L615.583 35.127H608.751V43.179L610.825 45.497L608.751 47.754V57.88H615.095L618.206 54.708L621.073 57.758H627.6V47.754L625.587 45.314ZM571.663 58.063H581.301V41.959H584.046V46.961L582.704 48.852V58.063H594.172V2.431H571.663V58.063ZM583.619 16.034V19.755H581.484V16.034H583.619ZM581.484 32.443V29.271H583.619V32.443H581.484ZM681.036 32.138H691.101V24.513L686.892 21.768L690.552 19.084V2.858H675.79V0.966997H663.956L659.747 5.237V13.228H677.498V14.204L674.631 16.217L672.313 14.692H659.747V19.084L664.078 21.89L660.052 24.208V20.853H655.843L658.1 16.522V2.004H634.737V13.045H647.12V13.777L645.656 16.766L644.497 14.692H634.859V17.62L636.567 20.853H634.432V31.467H638.336L634.188 34.456V48.242H636.323L640.105 44.887V47.205L635.896 51.109V57.758H652.183V31.467H653.403V46.839H657.49L658.832 44.094H660.662L656.27 53.61V57.758H670.422L673.655 44.094H676.156V48.547L673.533 50.804V57.758H690.857V33.541H676.949V31.101H671.825L675.546 28.6L681.036 32.138ZM660.052 33.541V32.138H663.285V33.541H660.052ZM716.965 1.882V57.941H728.189V42.447H729.592V54.586H737.827V57.941H754.419V1.882H716.965ZM715.623 31.65H712.146V31.284L715.623 26.709V16.339H711.353V15.912L715.623 9.873V2.004H704.46L698.543 10.544V24.391H701.593V24.696L698.36 29.576V43.24H715.623V31.65ZM742.341 14.143V22.927H740.084L741.121 21.402V15.546H735.875V22.927H734.655V15.546H729.409V21.402L730.446 22.927H728.189V14.143H742.341ZM728.189 31.467H730.751V33.358H728.189V31.467ZM742.341 31.467V33.358H739.169V31.467H742.341ZM740.999 50.987V44.643H737.644V42.447H742.341V49.95L740.999 50.987ZM698.055 47.266V57.758H704.216V44.704H699.641L698.055 47.266ZM705.436 57.758H710.316V44.704H705.436V57.758ZM711.536 57.758H715.684V44.704H711.536V57.758Z"
              fill="white"
            />
          </svg>
        </h1>
        <h3 class="web_info_subtitle">台南水情即時數據及取水情報站</h3>
        <span class="update_time">
          上次更新時間
          <time datetime="2021-04-23T12:00:00">2021.04.23 12:00:00</time>
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
          <div class="reservoir_chart_item" v-for="reservoir in reservoirs">
            <div class="reservoir_name">
              <div>{{ reservoir.ReservoirName }}</div>
              <span
                class="reservoir_counties"
                v-for="city in reservoirInfo[reservoir.ReservoirName].tabs"
                >{{ city }}</span
              >
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
              {{
                getLastEffectiveWaterStorageCapacity(
                  reservoir.ReservoirIdentifier
                )
              }}
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
import "@/assets/style.scss";
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
  components: { Economy },
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
          tabs: ["台南"],
        },
        曾文水庫: {
          ReservoirIdentifier: 30502,
          tabs: ["嘉義", "台南"],
        },
        烏山頭水庫: {
          ReservoirIdentifier: 30501,
          tabs: ["台南"],
        },
        南化水庫: {
          ReservoirIdentifier: 30503,
          tabs: ["台南", "高雄"],
        },
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
  mounted() {
    this.reservoirs = tainanReservoirData;
    this.reservoirLiveData = reservoirLiveData.ReservoirConditionData_OPENDATA;
  },
  computed: {
    totalStorage() {
      return _.reduce(
        this.reservoirInfo,
        (sum, reservoir) => {
          return (sum +=
            this.getLastEffectiveWaterStorageCapacity(
              reservoir.ReservoirIdentifier
            ) * 1);
        },
        0
      );
    },
    totalCapacity() {
      return _.reduce(
        this.reservoirs,
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
        (this.getLastEffectiveWaterStorageCapacity(
          reservoir.ReservoirIdentifier
        ) /
          reservoir.EffectiveCapacity) *
        100
      ).toFixed(2);
    },
    getLastEffectiveWaterStorageCapacity(id) {
      let last = _.findLast(this.reservoirLiveData, (row) => {
        return String(row.ReservoirIdentifier) == String(id);
      });
      return last ? last.EffectiveWaterStorageCapacity : 0;
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
