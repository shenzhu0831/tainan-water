const waterRegimeInfo = document.querySelector(".water_regime_info")
const popoverCloseButton = document.querySelector(".popover_header_close")
const popoverCard = document.querySelector(".popover")
const popoverBackground = document.querySelector(".popover_background")

// 接全台水庫 Data
async function getTainanReservoirData() {
  const response = await fetch("./js/open-data/tainan-reservoir-data.json");
  return response.json();
}


// 計算台南目前蓄水率
async function getTotalReservoir() {
  const reservoirDatum = await getTainanReservoirData();
  const reservoirRegimeValue = document.querySelector(".reservoir_regime_value")

  const effectiveCapacity = reservoirDatum.reduce((accumulator, reservoir) => {
    return Math.round(accumulator + reservoir.EffectiveCapacity);
  }, 0);
  const FullWaterLevel = reservoirDatum.reduce((accumulator, reservoir) => {
    return Math.round(accumulator + reservoir.FullWaterLevel);
  }, 0);

  const reservoirRegimeData = (effectiveCapacity / FullWaterLevel).toFixed(2)

  reservoirRegimeValue.innerText = `${reservoirRegimeData}%`
}

// 計算單一水庫數據
async function getReservoir() {
  const reservoirDatum = await getTainanReservoirData();
  const reservoirChartBody = await document.querySelector(".reservoir_chart_body")
  console.log(reservoirChartBody);
  reservoirChartBody.innerHTML = reservoirDatum.forEach(reservoir => {
    // console.log(reservoir);
    return `
    <div class="reservoir_chart_item">
      <div class="reservoir_name">
        <div></div>
        <span class="reservoir_counties">嘉義</span>
        <span class="reservoir_counties">台南</span>
      </div>
      <div class="reservoir_chart_line">
        <div class="reservoir_chart_value"></div>
      </div>
      <div class="reservoir_capacity">5.6%</div>
      <div class="reservoir_storage">169.10</div>
    </div>
    `
  })
}

// 目前水情元件效果
function popoverOpen(event){
  if(event.target.closest(".water_regime_info")){
    popoverCard.classList.add("open")
    popoverBackground.classList.add("open")
  }
}

function popoverClose(event){
  if(event.target){
    popoverCard.classList.remove("open")
    popoverBackground.classList.remove("open")
  }
}

getTotalReservoir()
getReservoir()

waterRegimeInfo.addEventListener("click", popoverOpen)
popoverCloseButton.addEventListener("click", popoverClose)
popoverBackground.addEventListener("click", popoverClose)