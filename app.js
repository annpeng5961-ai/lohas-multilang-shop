const $ = (s) => document.querySelector(s);
const money = (n) => "NT$" + n.toLocaleString();
const SAFE = (fn) => { try { return fn(); } catch (e) { return null; } };

let lang = SAFE(() => localStorage.getItem("lang")) || ((navigator.language || "").startsWith("ja") ? "ja" : (navigator.language || "").startsWith("en") ? "en" : "zh");
if (!I18N[lang]) lang = "zh";
let cart = JSON.parse(SAFE(() => localStorage.getItem("cart")) || "{}"); // { 商品id: 數量 }
let filter = "all";
const t = () => I18N[lang];

/* ---------- 語言 ---------- */
function applyLang() {
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t()[el.dataset.i18n]; });
  $("#lang").value = lang;
  SAFE(() => localStorage.setItem("lang", lang));
  renderValues(); renderBrands(); renderFilters(); renderProducts(); renderNews(); renderCases(); renderCart();
}

/* ---------- 內容區塊 ---------- */
function card(emoji, title, text) {
  return `<div class="card"><div class="emoji">${emoji}</div><h4>${title}</h4><p>${text}</p></div>`;
}
const renderValues = () => $("#values").innerHTML = t().values.map((v) => card(...v)).join("");
const brandEmoji = ["🥢", "🍜", "🍝", "🌶️", "🍲"];
const renderBrands = () => $("#brandList").innerHTML = t().brands.map((b, i) => card(brandEmoji[i], b[0], b[1])).join("");
const renderNews = () => $("#newsList").innerHTML = t().news.map((n) => `<li><time>${n[0]}</time><span>${n[1]}</span></li>`).join("");
const renderCases = () => $("#caseList").innerHTML = t().cases.map((c) => card(...c)).join("");

/* ---------- 商品 ---------- */
function renderFilters() {
  const chips = [["all", t().all]].concat(CATS.map((c, i) => [String(i), c[lang]]));
  $("#filters").innerHTML = chips.map(([k, label]) => `<button class="chip ${filter === k ? "on" : ""}" data-f="${k}">${label}</button>`).join("");
}
function renderProducts() {
  const list = PRODUCTS.filter((p) => filter === "all" || String(p.cat) === filter);
  $("#productList").innerHTML = list.map((p) => `
    <div class="card">
      <img class="pimg" src="${p.img}" alt="${p.name[lang]}" loading="lazy">
      <small class="note">${CATS[p.cat][lang]}</small>
      <h4>${p.name[lang]}</h4>
      <p>${p.desc[lang]}</p>
      <div class="price">${money(p.price)} <del>${money(p.list)}</del></div>
      <button class="btn" data-add="${p.id}">${t().add}</button>
    </div>`).join("");
}

/* ---------- 購物車 ---------- */
const saveCart = () => SAFE(() => localStorage.setItem("cart", JSON.stringify(cart)));
const total = () => Object.entries(cart).reduce((s, [id, q]) => s + PRODUCTS.find((p) => p.id === id).price * q, 0);
function renderCart() {
  const ids = Object.keys(cart);
  $("#cartCount").textContent = ids.reduce((s, id) => s + cart[id], 0);
  $("#cartTotal").textContent = money(total());
  $("#cartItems").innerHTML = ids.length ? ids.map((id) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return `<div class="item">
      <img class="thumb" src="${p.img}" alt="">
      <div><div>${p.name[lang]}</div><small class="note">${money(p.price)}</small>
        <div class="qty"><button data-dec="${id}">−</button><span>${cart[id]}</span><button data-inc="${id}">+</button></div></div>
      <div><strong>${money(p.price * cart[id])}</strong><br><button class="rm" data-rm="${id}">${t().remove}</button></div>
    </div>`;
  }).join("") : `<p class="empty">${t().cartEmpty}</p>`;
}
function change(id, d) {
  cart[id] = (cart[id] || 0) + d;
  if (cart[id] <= 0) delete cart[id];
  saveCart(); renderCart();
}
function openCart(on) {
  $("#cart").classList.toggle("on", on);
  $("#overlay").classList.toggle("on", on);
}
function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.classList.add("on");
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("on"), 1800);
}

/* ---------- 事件 ---------- */
document.addEventListener("click", (e) => {
  const b = e.target.closest("button, a");
  if (!b) return;
  if (b.dataset.f !== undefined) { filter = b.dataset.f; renderFilters(); renderProducts(); }
  if (b.dataset.add) { change(b.dataset.add, 1); toast(t().added); }
  if (b.dataset.inc) change(b.dataset.inc, 1);
  if (b.dataset.dec) change(b.dataset.dec, -1);
  if (b.dataset.rm) { delete cart[b.dataset.rm]; saveCart(); renderCart(); }
  if (b.closest("#nav")) $("#nav").classList.remove("open");
});
$("#lang").addEventListener("change", (e) => { lang = e.target.value; applyLang(); });
$("#cartBtn").onclick = () => openCart(true);
$("#cartClose").onclick = $("#overlay").onclick = () => openCart(false);
$("#menuBtn").onclick = () => $("#nav").classList.toggle("open");

$("#checkoutBtn").onclick = () => {
  if (!Object.keys(cart).length) return toast(t().cartEmpty);
  $("#orderTotal").textContent = money(total());
  $("#modal").classList.add("on");
};
$("#modalCancel").onclick = () => $("#modal").classList.remove("on");
$("#orderForm").onsubmit = (e) => {
  e.preventDefault();
  cart = {}; saveCart(); renderCart(); e.target.reset();
  $("#modal").classList.remove("on"); openCart(false);
  toast(t().orderDone);
};
$("#contactForm").onsubmit = (e) => { e.preventDefault(); e.target.reset(); toast(t().sent); };

applyLang();
