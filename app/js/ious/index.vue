<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Welfare></Welfare>
        <Service></Service>

        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./islider.vue"
	import Welfare from "./welfare.vue"
    import Service from "./service.vue"



	export default {
		components:{
			Header,
			Slider,
			Footer,
			Navbar,
			Welfare,
			Service,


		}
	}
</script>
<style lang="css">

</style>
<style lang="scss" module>
    @import '../../css/reset.scss';
    body {
        background-color: #f5f5f5;
    }
</style>