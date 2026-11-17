// Тексты сайта: русский и английский. Язык — из адреса (?lang=en), сохранённого выбора или браузера.
const TEXT = {
  ru: {
    nav_features: "Возможности", nav_pricing: "Тарифы", nav_download: "Скачать",
    hero_title: "Планшет — второй монитор для Windows",
    hero_sub: "Подключите Android-планшет кабелем или по Wi-Fi и перетаскивайте на него окна, как на обычный монитор. Режим разработчика не нужен.",
    hero_download: "Скачать — 7 дней бесплатно", hero_buy: "Тарифы",
    f1_t: "Настоящий второй экран", f1_d: "Windows видит планшет как отдельный монитор: расширение рабочего стола, своё разрешение, расположение слева или справа.",
    f2_t: "Почти без задержки", f2_d: "Аппаратное кодирование видеокартой и низкая задержка — до 60 кадров в секунду.",
    f3_t: "Касания и мышь", f3_d: "Мультитач работает как сенсорный экран Windows. Мышь из игр не убегает на планшет.",
    f4_t: "Кабель или Wi-Fi", f4_d: "По кабелю — через «USB-модем» планшета, без режима разработчика. Wi-Fi — в тарифах «Максимум» и «Бизнес».",
    f5_t: "10 языков и 3 темы", f5_d: "Светлая, тёмная и цветная тема, интерфейс на 10 языках.",
    f6_t: "Без аккаунтов", f6_d: "Никаких регистраций: скачали, подключили, работаете.",
    how_t: "Как начать",
    how1: "Скачайте программу для Windows и запустите SideScreen.exe.",
    how2: "Установите приложение на планшет, подключите кабель и включите «USB-модем» — приложение подскажет, где он.",
    how3: "Готово: планшет стал вторым монитором. Первые 7 дней — бесплатно со всеми функциями.",
    pr_t: "Тарифы", std: "Стандарт", max: "Максимум", free: "Бесплатно",
    std_1: "Планшет как второй монитор", std_2: "Подключение кабелем USB", std_3: "Выбор разрешения", std_4: "Управление касаниями",
    max_0: "Всё из «Стандарта»", max_1: "Подключение по Wi-Fi, без кабеля", max_2: "Частота 30 или 60 Гц",
    max_3: "Дублирование основного экрана", max_4: "Управление как мышью",
    per_month: "/ мес", per_year: "/ год", year_save: "12 месяцев со скидкой",
    buy_t: "Оформить подписку", buy_email: "E-mail для чека и ключа", buy_period: "Срок",
    month: "1 месяц", year: "12 месяцев",
    buy_renew: "Продлить или сменить тариф существующего ключа (необязательно)", buy_renew_ph: "SS-XXXX-XXXX-XXXX-XXXX",
    pay_card: "Картой или СБП", pay_card_note: "ЮKassa, рубли",
    pay_crypto: "Криптовалютой", pay_crypto_note: "USDT, BTC, ETH и др., доллары",
    buy_soon: "Оплата откроется в ближайшие дни.",
    buy_after: "После оплаты вы получите ключ. Введите его в программе: «Тариф» → «Ключ лицензии». Подписка не продлевается автоматически — продлить можно этим же ключом. При смене тарифа оставшиеся дни пересчитываются по цене.",
    agree: "Оплачивая, вы принимаете условия", offer: "публичной оферты",
    err_email: "Введите e-mail.", err_key: "Ключ не найден. Проверьте его или оставьте поле пустым.", err_net: "Не удалось создать платёж. Попробуйте ещё раз.",
    paying: "Переходим к оплате…",
    dl_t: "Скачать", dl_pc: "Программа для Windows", dl_pc_d: "Windows 10/11, 64 бит. Распакуйте архив и запустите SideScreen.exe. 7 дней бесплатно.",
    dl_apk: "Приложение для Android", dl_apk_d: "Android 7 и новее. Также можно установить из программы на ПК по кабелю.",
    dl_btn: "Скачать",
    foot_offer: "Публичная оферта", foot_privacy: "Конфиденциальность", foot_support: "Поддержка",
    ok_t: "Спасибо за покупку!", ok_wait: "Ждём подтверждения оплаты…", ok_key: "Ваш ключ лицензии",
    ok_copy: "Скопировать", ok_copied: "Скопировано", ok_until: "Подписка действует до",
    ok_how: "Откройте SideScreen на компьютере → «Тариф» → вставьте ключ → «Активировать». Сохраните ключ: он нужен для продления.",
    ok_renewed: "Подписка продлена. Программа подхватит новый срок сама в течение нескольких часов (или после перезапуска).",
    ok_fail: "Заказ не найден или оплата не прошла. Если деньги списаны — напишите в поддержку.",
    ok_back: "На главную",
    pr_trial: "Первые 7 дней — бесплатно, со всеми функциями «Максимума». Пробный период включается в программе на компьютере, без карты.",
    biz: "Бизнес",
    popular: "Популярный",
    choose: "Выбрать",
    biz_0: "Всё из «Максимума»",
    biz_1: "Один ключ на 5 компьютеров",
    biz_2: "Оплата по счёту для компаний",
    biz_3: "Несколько планшетов на одном ПК — скоро",
    biz_invoice: "Нужен счёт для компании? Напишите нам",
    buy_plan: "Тариф",
  },
  en: {
    nav_features: "Features", nav_pricing: "Pricing", nav_download: "Download",
    hero_title: "Your tablet as a second monitor for Windows",
    hero_sub: "Connect an Android tablet by cable or Wi-Fi and drag windows onto it like onto a regular monitor. No developer mode needed.",
    hero_download: "Download — 7 days free", hero_buy: "Pricing",
    f1_t: "A real second screen", f1_d: "Windows sees the tablet as a separate monitor: extended desktop, its own resolution, placed left or right.",
    f2_t: "Low latency", f2_d: "Hardware GPU encoding and low latency — up to 60 frames per second.",
    f3_t: "Touch and mouse", f3_d: "Multi-touch works as a Windows touchscreen. The mouse doesn't slip from games onto the tablet.",
    f4_t: "Cable or Wi-Fi", f4_d: "By cable — via the tablet's USB tethering, no developer mode. Wi-Fi is in the Maximum and Business plans.",
    f5_t: "10 languages, 3 themes", f5_d: "Light, dark and color themes, interface in 10 languages.",
    f6_t: "No accounts", f6_d: "No sign-up: download, connect, work.",
    how_t: "Get started",
    how1: "Download the Windows app and run SideScreen.exe.",
    how2: "Install the app on the tablet, connect the cable and turn on “USB tethering” — the app shows where it is.",
    how3: "Done: the tablet is a second monitor. The first 7 days are free with all features.",
    pr_t: "Pricing", std: "Standard", max: "Maximum", free: "Free",
    std_1: "Tablet as a second monitor", std_2: "USB cable connection", std_3: "Resolution choice", std_4: "Touch control",
    max_0: "Everything in Standard", max_1: "Wi-Fi connection, no cable", max_2: "30 or 60 Hz refresh rate",
    max_3: "Duplicate the main screen", max_4: "Control as a mouse",
    per_month: "/ mo", per_year: "/ yr", year_save: "12 months at a discount",
    buy_t: "Subscribe", buy_email: "E-mail for the receipt and key", buy_period: "Period",
    month: "1 month", year: "12 months",
    buy_renew: "Renew or change the plan of an existing key (optional)", buy_renew_ph: "SS-XXXX-XXXX-XXXX-XXXX",
    pay_card: "Card (Russia)", pay_card_note: "YooKassa, rubles",
    pay_crypto: "Cryptocurrency", pay_crypto_note: "USDT, BTC, ETH and more, USD",
    buy_soon: "Payments open in the coming days.",
    buy_after: "After payment you get a key. Enter it in the app: Plan → License key. The subscription doesn't renew automatically — renew with the same key. When you change plans, the remaining days are converted by price.",
    agree: "By paying you accept the", offer: "terms of sale",
    err_email: "Enter your e-mail.", err_key: "Key not found. Check it or leave the field empty.", err_net: "Couldn't create the payment. Please try again.",
    paying: "Going to payment…",
    dl_t: "Download", dl_pc: "Windows app", dl_pc_d: "Windows 10/11, 64-bit. Unzip and run SideScreen.exe. 7 days free.",
    dl_apk: "Android app", dl_apk_d: "Android 7 or newer. You can also install it from the PC app over USB.",
    dl_btn: "Download",
    foot_offer: "Terms of sale", foot_privacy: "Privacy", foot_support: "Support",
    ok_t: "Thank you for your purchase!", ok_wait: "Waiting for payment confirmation…", ok_key: "Your license key",
    ok_copy: "Copy", ok_copied: "Copied", ok_until: "Subscription active until",
    ok_how: "Open SideScreen on your computer → Plan → paste the key → Activate. Keep the key: you need it to renew.",
    ok_renewed: "Subscription renewed. The app picks up the new date by itself within a few hours (or after a restart).",
    ok_fail: "Order not found or the payment failed. If you were charged, contact support.",
    ok_back: "Home",
    pr_trial: "The first 7 days are free, with all Maximum features. Start the trial in the computer app — no card needed.",
    biz: "Business",
    popular: "Popular",
    choose: "Choose",
    biz_0: "Everything in Maximum",
    biz_1: "One key for 5 computers",
    biz_2: "Pay by invoice",
    biz_3: "Several tablets on one PC — coming soon",
    biz_invoice: "Need an invoice? Write to us",
    buy_plan: "Plan",
  },
};

function pickLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && TEXT[q]) return q;
  try { const s = localStorage.getItem("lang"); if (s && TEXT[s]) return s; } catch (e) {}
  return (navigator.language || "en").toLowerCase().startsWith("ru") ? "ru" : "en";
}

let LANG = pickLang();
const t = k => (TEXT[LANG] && TEXT[LANG][k]) || TEXT.en[k] || k;

function applyText() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll("[data-ph]").forEach(el => { el.placeholder = t(el.dataset.ph); });
  document.querySelectorAll(".lang-switch").forEach(el => { el.textContent = LANG === "ru" ? "English" : "Русский"; });
}

function switchLang() {
  LANG = LANG === "ru" ? "en" : "ru";
  try { localStorage.setItem("lang", LANG); } catch (e) {}
  applyText();
  if (window.onLangChange) window.onLangChange();
}
