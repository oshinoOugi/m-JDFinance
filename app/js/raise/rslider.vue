<template lang="html">
    <Panel title="金融头条" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>百万白条免费送！ <em>></em> </swiper-slide>
                <swiper-slide>签到领流量！<em>></em></swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>
<script>
	import Panel from "../core/panel.vue"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components:{
			Panel,
			swiper,
			swiperSlide,
		},
        data(){
			return {
				options:{
					autoplay:true,
                    loop:true,
					direction: 'vertical',
                }
            }
        }
	}
</script>
<style lang="scss">
.swiper-container-vertical{
    height: 72px;
    .swiper-slide{
        font-weight:bold;
        font-size: 28px;
        color:#333;
        em{
            color:#ddd;
            float:right;
            margin-right: 20px;
        }
    }
}

</style>
<style lang="scss" module>
    @import "../../css/element.scss";
.panel{
    @include panel;
    >h4{
        display: none;
    }
    .content{
        height: 72px;
        line-height:72px;
        overflow: hidden;
        margin-top: 120px;
        padding-left: 40px;

    }
}

</style>
<!--二者功能，表现形式不同，没必要塞到一个组件里，硬抽象-->
<!--如果后期复杂化，一个横向一个竖向，可以考虑做一个组件抽象出来放slot-->