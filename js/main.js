async function getTainanReservoirData() {
  const response = await fetch("./js/open-data/tainan-reservoir-data.json");
  return response.json();
}

// 計算台南目前蓄水率
async function getReservoir() {
  const reservoirDatum = await getTainanReservoirData();
  const reservoirRegimeValue = document.querySelector(".reservoir_regime_value")

  const effectiveCapacity = reservoirDatum.reduce((accumulator, reservoir) => {
    return Math.round(accumulator + reservoir.EffectiveCapacity);
  }, 0);
  const FullWaterLevel = reservoirDatum.reduce((accumulator, reservoir) => {
    return Math.round(accumulator + reservoir.FullWaterLevel);
  }, 0);

  const x = (effectiveCapacity / FullWaterLevel).toFixed(2)

  reservoirRegimeValue.innerText = `${x}%`
}

getReservoir()