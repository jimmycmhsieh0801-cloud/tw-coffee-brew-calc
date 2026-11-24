function calcCoffee(grams, ratio = 15, cupsToday = 1) {
  const g = Math.max(5, Number(grams) || 18);
  const r = Math.max(10, Number(ratio) || 15);
  const cups = Math.max(0, Number(cupsToday) || 0);
  const totalWater = Math.round(g * r);
  const bloomWater = Math.round(g * 2);
  const caffMg = Math.round(cups * 150);
  const caffPct = Math.round((caffMg / 300) * 100);
  return { totalWater, bloomWater, caffMg, caffPct };
}
if (typeof document !== "undefined") {
  const ids = ["gramsInput", "ratioInput", "cupsInput"];
  function render() {
    const [g, r, c] = ids.map(id => document.getElementById(id).value);
    const res = calcCoffee(g, r, c);
    document.getElementById("totalWaterEl").textContent = `${res.totalWater} g (ml)`;
    document.getElementById("bloomEl").textContent = `${res.bloomWater} g（約 30 秒）`;
    const caffEl = document.getElementById("caffEl");
    caffEl.textContent = `${res.caffMg} mg (${res.caffPct}%)`;
    caffEl.className = "value " + (res.caffMg > 300 ? "danger" : res.caffMg === 300 ? "warn" : "good");
  }
  ids.forEach(id => document.getElementById(id).addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcCoffee };