<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Repay></Repay>
        <Recommend></Recommend>
        <Finance-ex></Finance-ex>
        <Selected></Selected>
        <Invest></Invest>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./mslider.vue"
    import Repay from "./repay.vue"
    import Recommend from "./recommend.vue"
    import FinanceEx from "./financeEx.vue"
    import Selected from "./mselected.vue"
    import Invest   from "./invest.vue"

	export default {
		components:{
			Header,
			Footer,
			Slider,
			Navbar,
			Repay,
			Recommend,
			FinanceEx,
			Selected,
			Invest,
		}
	}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';
    body{
        background-color: #f5f5f5;
    }
</style>
