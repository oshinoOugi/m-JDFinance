<template lang="html">
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200" alt="">
            <div :class="$style.item">
                <div :class="$style.wrap">
                    <img src="//img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg" alt="">
                    <p>电动牙刷</p>
                    <p>￥79.00起</p>
                    <div :class="$style.progress">
                        1221
                    </div>
                </div>
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"
export default {
    components:{
        Panel,
    }
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            /*width:100%;*/
            img{
                height:171px;
                width: 100%;
            }
            .item{
                border:1px solid red;
                width:50%;
                padding:0 10px 0 20px;
                height: 404px;
                box-sizing:border-box;
                .wrap{
                    border:1px solid red;
                    background: rgba(0,0,0,.02);
                    text-align: center;
                    height:404px;
                    img{
                        width:180px;
                        height:180px;
                    }
                    p{
                        font-size: 28px;
                        &:nth-child(2){
                            font-weight: bold;
                             height: 40px;
                             line-height: 40px;
                         }
                        &:nth-child(3){
                            color:#FF3232;
                            font-size: 36px;
                            font-weight: 400;
                             height: 48px;
                             line-height: 48px;
                        }

                    }


                }
            }

        }
    }

</style>