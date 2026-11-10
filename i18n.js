// 多語文字都放在這裡。要新增語言，複製一整組（例如 en）改成新語言代碼即可，
// 再到 index.html 的語言下拉選單加一個 <option>。
const I18N = {
  zh: {
    siteName: "樂活速食坊",
    navAbout: "關於樂活", navBrands: "旗下品牌", navProducts: "商品資訊",
    navNews: "最新資訊", navCases: "成功案例", navContact: "聯絡我們",
    heroTitle: "健康・永續・好滋味",
    heroSub: "以機器人標準化生產與自建中央廚房，把安心的美味送到你手上。",
    heroBtn: "立即選購",
    aboutText: "樂活速食坊以健康與永續的生活型態為宗旨，結合機器人標準化生產、食安控管與網路訂購支付，並建立自主中央廚房，搭配智慧型煮物機推廣食品。",
    valuesTitle: "五大核心價值",
    values: [
      ["🥗", "健康", "（內容待補）"], ["♻️", "永續", "（內容待補）"],
      ["🤖", "標準化", "（內容待補）"], ["🛡️", "食安", "（內容待補）"], ["📱", "便利", "（內容待補）"]
    ],
    brands: [
      ["㗊品軒", "經典中式風味"], ["勝十蘭", "日式精緻拉麵"], ["有義'S", "義式風味與創意料理"],
      ["淘泰郎", "泰式香辣結合台灣口味"], ["韓拾", "韓式經典與現代風味"]
    ],
    all: "全部",
    demoNote: "※ 以下為範例商品與價格，僅供展示。",
    add: "加入購物車", added: "已加入購物車",
    news: [
      ["2024-12-13", "（最新消息標題待補）"], ["2024-12-13", "（最新消息標題待補）"], ["2024-12-13", "（最新消息標題待補）"]
    ],
    cases: [["🏢", "成功案例一", "（內容待補）"], ["🏬", "成功案例二", "（內容待補）"], ["🏪", "成功案例三", "（內容待補）"]],
    company: "樂活速食坊股份有限公司",
    address: "242 新北市新莊區後港一路145、147號",
    fName: "姓名", fEmail: "電子郵件", fMsg: "訊息內容", fSend: "送出",
    fPhone: "電話", fAddr: "收件地址",
    sent: "已收到您的訊息（展示用，尚未真的寄出）",
    browserTip: "建議使用 Chrome、Firefox、Safari 最新版本瀏覽",
    cartTitle: "購物車", subtotal: "小計", checkout: "前往結帳", cartEmpty: "購物車是空的",
    remove: "移除", cancel: "取消", placeOrder: "送出訂單",
    demoCheckout: "※ 展示用結帳，不會真的收款或出貨。",
    orderDone: "訂單已送出（展示）。謝謝您！"
  },
  en: {
    siteName: "LOHAS Fast Food",
    navAbout: "About", navBrands: "Brands", navProducts: "Products",
    navNews: "News", navCases: "Success Stories", navContact: "Contact",
    heroTitle: "Healthy · Sustainable · Delicious",
    heroSub: "Robot-standardized production and our own central kitchen bring safe, tasty food to your table.",
    heroBtn: "Shop Now",
    aboutText: "LOHAS Fast Food is dedicated to a healthy and sustainable lifestyle. We combine robotic standardized production, food-safety control and online ordering with payment, and run our own central kitchen with smart cooking machines.",
    valuesTitle: "Five Core Values",
    values: [
      ["🥗", "Health", "(Content to be added)"], ["♻️", "Sustainability", "(Content to be added)"],
      ["🤖", "Standardization", "(Content to be added)"], ["🛡️", "Food Safety", "(Content to be added)"], ["📱", "Convenience", "(Content to be added)"]
    ],
    brands: [
      ["Ji Pin Xuan", "Classic Chinese flavors"], ["Shoju Ran", "Refined Japanese ramen"], ["Yoshi's", "Italian flavors & creative dishes"],
      ["Tao Tai Lang", "Thai spice meets Taiwanese taste"], ["Han Shi", "Korean classic & modern flavors"]
    ],
    all: "All",
    demoNote: "* Sample products and prices, for demonstration only.",
    add: "Add to Cart", added: "Added to cart",
    news: [
      ["2024-12-13", "(News title to be added)"], ["2024-12-13", "(News title to be added)"], ["2024-12-13", "(News title to be added)"]
    ],
    cases: [["🏢", "Success Story 1", "(Content to be added)"], ["🏬", "Success Story 2", "(Content to be added)"], ["🏪", "Success Story 3", "(Content to be added)"]],
    company: "LOHAS Fast Food Co., Ltd.",
    address: "No. 145, 147, Hougang 1st Rd., Xinzhuang Dist., New Taipei City 242, Taiwan",
    fName: "Name", fEmail: "Email", fMsg: "Message", fSend: "Send",
    fPhone: "Phone", fAddr: "Shipping address",
    sent: "Message received (demo only, not actually sent)",
    browserTip: "Best viewed with the latest Chrome, Firefox or Safari",
    cartTitle: "Shopping Cart", subtotal: "Subtotal", checkout: "Checkout", cartEmpty: "Your cart is empty",
    remove: "Remove", cancel: "Cancel", placeOrder: "Place Order",
    demoCheckout: "* Demo checkout. No payment or shipment.",
    orderDone: "Order placed (demo). Thank you!"
  },
  ja: {
    siteName: "楽活ファストフード",
    navAbout: "会社紹介", navBrands: "ブランド", navProducts: "商品情報",
    navNews: "お知らせ", navCases: "導入事例", navContact: "お問い合わせ",
    heroTitle: "健康・持続可能・おいしさ",
    heroSub: "ロボットによる標準化生産と自社セントラルキッチンで、安心のおいしさをお届けします。",
    heroBtn: "今すぐ購入",
    aboutText: "楽活ファストフードは、健康で持続可能なライフスタイルを目指し、ロボットによる標準化生産、食品安全管理、ネット注文・決済を組み合わせ、自社セントラルキッチンとスマート調理機で商品を展開しています。",
    valuesTitle: "5つのコアバリュー",
    values: [
      ["🥗", "健康", "（内容準備中）"], ["♻️", "持続可能性", "（内容準備中）"],
      ["🤖", "標準化", "（内容準備中）"], ["🛡️", "食の安全", "（内容準備中）"], ["📱", "利便性", "（内容準備中）"]
    ],
    brands: [
      ["㗊品軒", "本格中華の味"], ["勝十蘭", "上品な日本のラーメン"], ["有義'S", "イタリアン＆創作料理"],
      ["淘泰郎", "タイの辛さと台湾の味の融合"], ["韓拾", "韓国の定番とモダンな味"]
    ],
    all: "すべて",
    demoNote: "※ 以下はサンプル商品と価格です（デモ用）。",
    add: "カートに入れる", added: "カートに追加しました",
    news: [
      ["2024-12-13", "（お知らせタイトル準備中）"], ["2024-12-13", "（お知らせタイトル準備中）"], ["2024-12-13", "（お知らせタイトル準備中）"]
    ],
    cases: [["🏢", "導入事例 1", "（内容準備中）"], ["🏬", "導入事例 2", "（内容準備中）"], ["🏪", "導入事例 3", "（内容準備中）"]],
    company: "楽活ファストフード株式会社",
    address: "〒242 新北市新莊區後港一路145、147号",
    fName: "お名前", fEmail: "メールアドレス", fMsg: "メッセージ", fSend: "送信",
    fPhone: "電話番号", fAddr: "お届け先住所",
    sent: "メッセージを受け付けました（デモのため実際には送信されません）",
    browserTip: "Chrome、Firefox、Safari の最新版でご覧ください",
    cartTitle: "ショッピングカート", subtotal: "小計", checkout: "レジに進む", cartEmpty: "カートは空です",
    remove: "削除", cancel: "キャンセル", placeOrder: "注文する",
    demoCheckout: "※ デモ用です。実際の決済・発送は行われません。",
    orderDone: "ご注文を受け付けました（デモ）。ありがとうございます！"
  }
};


// 商品分類（順序對應下方 PRODUCTS 的 cat 欄位）
const CATS = [
  { zh: "燉飯", en: "Risotto", ja: "リゾット" },
  { zh: "筆管麵", en: "Penne", ja: "ペンネ" },
  { zh: "酸菜魚", en: "Sour Cabbage Fish", ja: "酸菜魚" },
  { zh: "咖哩", en: "Curry", ja: "カレー" },
  { zh: "白飯", en: "Steamed Rice", ja: "白ごはん" },
  { zh: "刀削麵圈", en: "Knife-Cut Noodles", ja: "刀削麺" }
];

// 商品資料來自 www.lahasff.com。price＝售價，list＝定價（原價）。
// 圖片放在 images 資料夾，檔名為 p＋原站商品編號。英文與日文為翻譯，請確認。
const PRODUCTS = [
  { id: "p3", cat: 0, img: "images/p3.jpeg", price: 139, list: 209,
    name: { zh: "松露干貝燉飯", en: "Truffle Scallop Risotto", ja: "トリュフ帆立のリゾット" },
    desc: { zh: "濃郁松露香氣撲鼻而來，搭配鮮甜干貝與綿密燉飯，每一口都是香、濃、鮮的療癒享受！一吃就讓人念念不忘~！",
            en: "Rich truffle aroma with sweet scallops and creamy risotto. Every bite is fragrant, rich and fresh, a comforting treat you won't forget!",
            ja: "濃厚なトリュフの香りに、甘い帆立とクリーミーなリゾット。香り高く濃厚で新鮮、一口ごとに癒やされる忘れられない味です！" } },
  { id: "p8", cat: 0, img: "images/p8.jpeg", price: 109, list: 159,
    name: { zh: "青醬培根燉飯", en: "Pesto Bacon Risotto", ja: "バジルソースベーコンのリゾット" },
    desc: { zh: "濃郁青醬香氣搭配鹹香培根，拌入滑順燉飯，每一口都是滿滿香氣！清爽的羅勒香與培根的迷人鹹香完美融合，越吃越涮嘴～！",
            en: "Rich pesto and savory bacon folded into silky risotto. Fresh basil and smoky bacon blend perfectly, and you can't stop eating!",
            ja: "濃厚なバジルソースと塩気のあるベーコンをなめらかなリゾットに。爽やかなバジルの香りとベーコンの旨みが絶妙で、食べるほどやみつきに！" } },
  { id: "p13", cat: 0, img: "images/p13.jpeg", price: 129, list: 209,
    name: { zh: "茄香雞肉燉飯", en: "Tomato Chicken Risotto", ja: "トマトチキンのリゾット" },
    desc: { zh: "酸甜茄香與嫩雞肉完美融合，搭配吸飽醬汁的滑順燉飯，每一口都濃郁又開胃！番茄控絕對不能錯過～！",
            en: "Sweet-tangy tomato and tender chicken with sauce-soaked, silky risotto. Rich and appetizing, a must for tomato lovers!",
            ja: "甘酸っぱいトマトと柔らかなチキン、ソースをたっぷり吸ったなめらかなリゾット。濃厚で食欲をそそる、トマト好きは必食です！" } },
  { id: "p43", cat: 1, img: "images/p43.png", price: 119, list: 169,
    name: { zh: "青醬煙燻臘腸筆管麵", en: "Pesto Smoked Sausage Penne", ja: "バジルソース燻製ソーセージのペンネ" },
    desc: { zh: "青醬控＋臘腸控的夢幻組合！濃郁青醬包裹Q彈筆管麵，搭配鹹香煙燻臘腸，香氣一層疊一層，好吃到停不下來~！",
            en: "A dream combo for pesto and sausage fans! Rich pesto coats chewy penne with savory smoked sausage, layer upon layer of flavor.",
            ja: "バジルソースとソーセージ好きの夢の組み合わせ！濃厚なソースがもちもちのペンネに絡み、燻製ソーセージの香りが幾重にも広がります。" } },
  { id: "p53", cat: 1, img: "images/p53.jpeg", price: 119, list: 169,
    name: { zh: "茄香肉醬筆管麵", en: "Tomato Meat Sauce Penne", ja: "トマトミートソースのペンネ" },
    desc: { zh: "酸甜濃郁的茄香肉醬，完美包裹每一根Q彈筆管麵！麵體紮實有嚼勁，肉醬的鹹香與番茄的酸甜在口中交織，讓人忍不住一口接一口~！",
            en: "Sweet-tangy tomato meat sauce coats every chewy penne. Firm, springy pasta with savory meat and bright tomato in every bite!",
            ja: "甘酸っぱく濃厚なトマトミートソースがもちもちのペンネ一本一本に絡みます。肉の旨みとトマトの酸味が口の中で広がり、止まらない美味しさ！" } },
  { id: "p63", cat: 1, img: "images/p63.jpeg", price: 139, list: 209,
    name: { zh: "松露蕈菇筆管麵", en: "Truffle Mushroom Penne", ja: "トリュフきのこのペンネ" },
    desc: { zh: "濃郁松露香氣撲鼻而來，搭配鮮香多汁的蕈菇，拌入Q彈筆管麵！滑順醬汁與蕈菇的鮮美交織，松露香氣層層散開，越吃越上癮！",
            en: "Rich truffle aroma with juicy mushrooms tossed in chewy penne. Silky sauce, savory mushrooms and layers of truffle, utterly addictive!",
            ja: "濃厚なトリュフの香りとジューシーなきのこをもちもちのペンネに。なめらかなソースときのこの旨みが重なり、トリュフの香りが広がる病みつきの味です！" } },
  { id: "p73", cat: 2, img: "images/p73.jpeg", price: 109, list: 169,
    name: { zh: "樂活酸菜魚", en: "LOHAS Sour Cabbage Fish", ja: "楽活酸菜魚" },
    desc: { zh: "酸香開胃、魚肉鮮嫩！一口酸、一口香，微辣帶勁，越吃越涮嘴～！",
            en: "Tangy, appetizing and tender fish! Sour and fragrant with a mild kick, you'll keep coming back for more.",
            ja: "酸味が食欲をそそり、魚はふっくら柔らか！酸っぱくて香ばしく、ほどよい辛さでやみつきに。" } },
  { id: "p83", cat: 3, img: "images/p83.jpeg", price: 89, list: 139,
    name: { zh: "黃咖哩馬鈴薯嫩雞飯", en: "Yellow Curry Potato Chicken Rice", ja: "イエローカレー・じゃがいもチキンごはん" },
    desc: { zh: "濃郁黃咖哩香氣，搭配嫩雞與鬆軟馬鈴薯，香濃順口、超下飯！",
            en: "Rich yellow curry with tender chicken and soft potatoes. Smooth, savory and perfect with rice!",
            ja: "濃厚なイエローカレーに柔らかいチキンとほくほくのじゃがいも。まろやかでごはんが進みます！" } },
  { id: "p93", cat: 3, img: "images/p93.jpeg", price: 89, list: 139,
    name: { zh: "椰香綠咖哩嫩雞飯", en: "Coconut Green Curry Chicken Rice", ja: "ココナッツグリーンカレー・チキンごはん" },
    desc: { zh: "濃郁椰香融合香辣綠咖哩，搭配鮮嫩雞肉，香辣順口、超涮嘴！",
            en: "Creamy coconut meets spicy green curry with tender chicken. Fragrant, smooth and irresistible!",
            ja: "濃厚なココナッツとスパイシーなグリーンカレー、柔らかなチキン。香り高くまろやかでやみつきに！" } },
  { id: "p103", cat: 3, img: "images/p103.jpeg", price: 99, list: 149,
    name: { zh: "紅咖哩香辣牛肉飯", en: "Red Curry Spicy Beef Rice", ja: "レッドカレー・スパイシービーフごはん" },
    desc: { zh: "濃郁紅咖哩香氣，搭配鮮嫩牛肉，香辣過癮、每一口都超下飯！",
            en: "Rich red curry with tender beef. Spicy, satisfying and great with every spoonful of rice!",
            ja: "濃厚なレッドカレーに柔らかな牛肉。スパイシーで満足感があり、ごはんが止まりません！" } },
  { id: "p113", cat: 4, img: "images/p113.png", price: 20, list: 25,
    name: { zh: "白飯", en: "Steamed Rice", ja: "白ごはん" },
    desc: { zh: "粒粒分明、香Q飽滿，簡單卻百搭，配什麼都好吃~！",
            en: "Fluffy, springy grains. Simple, versatile and good with everything!",
            ja: "一粒一粒しっかり立ったもちもちのごはん。シンプルで何にでも合います！" } },
  { id: "p123", cat: 5, img: "images/p123.png", price: 25, list: 35,
    name: { zh: "刀削麵圈", en: "Knife-Cut Noodle Ring", ja: "刀削麺リング" },
    desc: { zh: "Q彈有嚼勁、口感超帶勁！麵香十足，每一口都讓人越吃越上癮！",
            en: "Springy, chewy and full of wheat flavor. Every bite gets more addictive!",
            ja: "もちもちで歯ごたえ抜群！小麦の香りが豊かで、食べるほどやみつきに！" } }
];
