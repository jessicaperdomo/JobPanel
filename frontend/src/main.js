import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import { VApp, VContainer, VRow, VCol, VBtn, VImg, VTextField, VCard, VCardText, VCardTitle, VCardSubtitle, VFileInput, VIcon } from 'vuetify/components';

const vuetify = createVuetify();
const app = createApp(App);

app.use(vuetify);
app.use(router);

app.component('VApp', VApp);
app.component('VContainer', VContainer);
app.component('VRow', VRow);
app.component('VCol', VCol);
app.component('VBtn', VBtn);
app.component('VImg', VImg);
app.component('VTextField', VTextField);
app.component('VCard', VCard);
app.component('VCardText', VCardText);
app.component('VCardTitle', VCardTitle);
app.component('VCardSubtitle', VCardSubtitle);
app.component('VFileInput', VFileInput);
app.component('VIcon', VIcon);

app.mount('#app');