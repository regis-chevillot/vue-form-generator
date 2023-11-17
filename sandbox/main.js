import { createApp } from "vue";
import VueFormGenerator from "../src";
import App from "./app.vue";
import Multiselect from "vue-multiselect";
import FieldAwesome from "./fieldAwesome.vue";

export const app = createApp(App);

app.component("multiselect", Multiselect);
app.component("fieldAwesome", FieldAwesome);
app.component("VueFormGenerator", VueFormGenerator.component);

app.mount('#app');
