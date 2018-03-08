<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <!--<Recommend></Recommend>-->
        <In></In>
        <More></More>
        <Footer :fname="$style.mfooter"></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./rslider.vue"
	import In from "./in.vue"
	import More from "./more.vue"
//	import Recommend from "./recommend.vue"



	export default {
		components:{
			Header,
			Slider,
			Footer,
			Navbar,
//			Recommend,
            In,
			More,


		}
	}
</script>
<style lang="css">

</style>
<style lang="scss" module>
    @import '../../css/reset.scss';
    body{
        background-color: #f5f5f5;
        .mfooter{
            ul{
                li:first-child{
                    display: none;
                }
            }
        }
    }


</style>