<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Sign></Sign>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./fslider.vue"
    import Sign from "./sign.vue"




	export default {
		components:{
			Header,
			Slider,
			Footer,
			Navbar,
			Sign,

		}
	}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';
    body{
        background-color: #f5f5f5;
    }
</style>
