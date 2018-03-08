<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <ADa></ADa>
        <Money></Money>
        <ADb></ADb>
        <Finance></Finance>
        <Footer :fname="$style.mfooter"></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./mslider.vue"
	import ADa from "./ada.vue"
	import Money from "./money.vue"
	import ADb from "./adb.vue"
	import Finance from "./finance.vue"



	export default {
		components:{
			Header,
			Slider,
			Footer,
			Navbar,
            ADa,
            Money,
            ADb,
			Finance,

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

    /*.mfooter{*/
        /*ul{*/
            /*li:first-child{*/
                /*display: none;*/
            /*}*/
        /*}*/
    /*}*/

</style>