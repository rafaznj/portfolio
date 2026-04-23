import pt from "./pt.json";
import en from "./en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      pt: typeof pt;
      en: typeof en;
    };
  }
}
