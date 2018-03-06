<template lang="html">
    <Panel title="每日签到" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">不抢白不抢</div>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
        </section>

    </Panel>
</template>
<script>
	import Panel from "../core/panel.vue"
    export default {
		components:{
			Panel,
		},
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex(row);
            position: relative;
            box-sizing:border-box;
            padding-bottom:40px;
            >img{
                width:50%;
                height: 136px;
            }
            &>div{
                position: absolute;
                top:-70px;
                right:32px;
                 font-size: 28px;
                 color: #999;


             }

        }

    }
</style>