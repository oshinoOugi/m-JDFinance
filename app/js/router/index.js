import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import White from "../white/index.vue"
import Funding from "../funding/index.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/white",
            name: "white",
            component: White,
        },
        {
            path: "/funding",
            name: "funding",
            component: Funding,
        },
    ],
})
