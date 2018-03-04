<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Welfare></Welfare>
        <More></More>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./wslider.vue"
    import Welfare from "./welfare.vue"
    import More from "./moreService.vue"



	export default {
		components:{
			Header,
			Slider,
			Footer,
			Navbar,
			Welfare,
            More,
		}
	}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';
    body{
        background-color: #f5f5f5;
    }
</style>
