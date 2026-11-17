// Настройки сайта. API_URL — адрес сервера лицензий (Cloudflare Worker); пока пусто, кнопки оплаты выключены.
window.SIDESCREEN = {
  API_URL: "https://sidescreen-api.sidescreen.workers.dev",
  DOWNLOAD_PC: "https://github.com/mangoboom178/sidescreen-site/releases/latest/download/SideScreen-Windows.zip",
  DOWNLOAD_APK: "https://github.com/mangoboom178/sidescreen-site/releases/latest/download/SideScreen.apk",
  SUPPORT_EMAIL: "mangoboom178@gmail.com",
  // способы оплаты на сайте: "crypto" (NOWPayments), "yookassa" (карта/СБП, рубли) — включать по мере подключения
  PAY_METHODS: ["crypto"],
  // цены на случай, если сервер недоступен (настоящие берутся с сервера)
  PRICES: { plans: {
    standard: { rub: { month: 149, year: 1190 }, usd: { month: 1.99, year: 14.99 } },
    max: { rub: { month: 299, year: 2490 }, usd: { month: 3.99, year: 29.99 } },
    business: { rub: { month: 990, year: 8990 }, usd: { month: 12.99, year: 99.99 } },
  } },
};
