import Vue from 'vue'
import App from './App.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faTwitter, faGithub, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
