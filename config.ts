import { extendDeploymentConfig } from "scripts";
import { loadEncryptedConfig } from "scripts";

/** TZ config extends the default config **/
const config = extendDeploymentConfig({ name: "plh_teens_tz", parent: "plh_teens" });

config.google_drive = {
  sheets_folder_ids: [
    "1n221Zv9LYuwxmjhiboq8vhQg67_K9L5f", // RCT
 //   "1_r77FxTtub64tbHL1EgF2CZDkQShxaES", // Scale Up
    "1e8-inTLEHkdskV3OAtes7QNsiL7Rwr5v", // Facebook Ad Campaign
    "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo" // Library field values
  ],
  assets_folder_ids: [
    "1dp9QAQ84m8pm0IBQTSPXe1ramyynKPNn", // RCT
 //   "1bT13rBBqxkzAw-kl_T5rbijT6rysLfLB" // Scale Up
  ], 
};


config.app_data!.sheets_filter_function = (flow) =>
  !["debug", "component_demo", "example_hardcoded", "campaign_rows_debug"].includes(
    flow.flow_subtype!
  );

config.translations!.filter_language_codes = ["tz_en", "tz_sw"];

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-teens-app-tz-content.git",
  content_tag_latest: "1.2.1",
};

config.android = {
  app_id:'international.idems.plh_teens_tz',
  app_name:'PLH Teens TZ',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios = {
  app_id: "international.idems.plh-teens-tz",
  app_name: "PLH Teens TZ",
};

config.api.db_name = "plh";
config.web.favicon_asset = "./app_data/assets/web/favicon.png";
config.app_data.output_path = "./app_data";

// Override constants
config.app_config!.APP_LANGUAGES!.default = "tz_sw";
config.app_config!.APP_SIDEMENU_DEFAULTS!.title = "ParentApp (TZ)";
config.error_logging = { dsn: "https://a2fb8833a9814e349432edb70448da40@app.glitchtip.com/6888" };

export default config;
