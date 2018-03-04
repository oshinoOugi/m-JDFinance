<template lang="html">
    <Panel title="众筹新品" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">更多尖货></div>
            <Slider :options="options" :items="items" cname="product-slider">
            </Slider>
        </section>

    </Panel>
</template>
<script>
import Slider from "../core/slider.vue"
import Panel from "../core/panel.vue"

    export default {
	    components:{
	        Panel,
			Slider
	    },
        data(){
	    	return {
	    		items:[{
                    href:"home",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t16591/349/2066779042/42386/92c7a2f6/5a7d5b56N263586c8.jpg?width=335&height=421",
                },{
					href:"home",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421",
				},{
					href:"home",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t16591/349/2066779042/42386/92c7a2f6/5a7d5b56N263586c8.jpg?width=335&height=421",
				},{
					href:"home",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t19438/256/457591773/38627/1f0fb065/5a7d5bd0N656c015c.jpg?width=335&height=421",
				}],
                options:{
					slidesPerView: 2.3,
					spaceBetween: 30,
					freeMode: true,
                },

            }
        }
    }
</script>
<style lang="scss">
.product-slider{
    .swiper-container{
        box-sizing:border-box;
        padding:0 24px;
        .swiper-slide{
            a{
                display:inline-block;
                width:100%;
            }
            img{
                /*width:250px;*/
                display: block;
                height:314px;
                border:1px solid #fafafa;
            }
        }
    }
}

</style>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        position: relative;
        @include panel;
        .content{
            padding-bottom:40px;
            position:relative;
            &>div{
                 position:absolute;
                 font-size: 28px;
                 color: #999;
                 height: 112px;
                 top:-65px;
                 right: 32px;


             }
        }

    }
</style>
<!--css样式活用after元素
放到其他的元素里，用绝对定位移动到上面
组件化思想与css分不开，没有人可以脱离css
-->