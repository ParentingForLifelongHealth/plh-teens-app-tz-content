import { extendDeploymentConfig, loadEncryptedConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_teens_tz", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-teens-app-tz-content.git",
  content_tag_latest: "1.3.15",
};

config.google_drive.sheets_folder_ids = [
  "19wSspWYMbRc75een-kS0q0aq24--75u8", // library_app_menu
  "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", // library_field_values
  "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", // kids_global
  "1GnKk8luhnYcWobeeEfbR23ZSoZakcNF9", // kids_teens_global
  "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", // library PLH onboarding
  "1jTQBDciOZaQdLuXUk-YDO9r3yUrtX5uY" // teens_tz (GT)
];
config.google_drive.assets_folder_ids = [
  "13COzYq0iK7sXXZYekPgkwloWtuGoxBNt", // kids_teens_global
  "1DnLu9oZg7OgbGoaWrWCekCvgt67DNm7V" // teens_tz
];

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
}

config.android = {
  app_id:'international.idems.plh_teens_tz',
  app_name:'FurahaApp',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios = {
  app_id: "international.idems.plh-teens-tz",
  app_name: "FurahaApp",
};

config.auth = {
  provider: 'firebase',
}

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// To reduce app size, exclude uncompressed and unused assets
config.app_data.assets_filter_function = (fileEntry) => 
  !fileEntry.relativePath.includes("uncompressed")&&
  !fileEntry.relativePath.includes("unused")&&
  !fileEntry.relativePath.includes("/flags/")&& // custom path to remove stubborn files that are not visible in drive
  !fileEntry.relativePath.includes("modules/connect"); // custom path to remove stubborn files that are not visible in drive

config.api.db_name = "plh_teens_tz";
config.app_data.output_path = "./app_data";
config.web.favicon_asset = "images/logos/plh_logomark.png";

config.app_config.APP_LANGUAGES.default = "tz_sw";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "FurahaApp";
config.app_config.APP_HEADER_DEFAULTS.title = "FurahaApp";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from FurahaApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from FurahaApp";
config.app_config.APP_THEMES.available = ["plh_kids_teens_za"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_za";
config.error_logging = { dsn: "https://a2fb8833a9814e349432edb70448da40@app.glitchtip.com/6888" };


export default config;