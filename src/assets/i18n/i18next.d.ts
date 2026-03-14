import ptBR from "./pt-br.json";
import en from "./en.json";

declare module "i18next" {

    interface CustomTypeOptions {
        defaultNS: "translation";
        resources: {
            ptBR: typeof ptBR;
            en: typeof en;
        }
    }
}