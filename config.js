// Настройки сайта. API_URL — адрес сервера лицензий (Cloudflare Worker); пока пусто, кнопки оплаты выключены.
window.SIDESCREEN = {
  API_URL: "",
  DOWNLOAD_PC: "https://github.com/mangoboom178/sidescreen-site/releases/latest/download/SideScreen-Windows.zip",
  DOWNLOAD_APK: "https://github.com/mangoboom178/sidescreen-site/releases/latest/download/SideScreen.apk",
  SUPPORT_EMAIL: "",
  // цены на случай, если сервер недоступен (настоящие берутся с сервера)
  PRICES: { rub: { month: 299, year: 2490 }, usd: { month: 3.99, year: 29.99 } },
};
