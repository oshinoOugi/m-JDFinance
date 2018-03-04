<template lang="html">
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
                        <h4>打白条<span class="red">享免息</span></h4>
                        <p>立即开通享豪礼</p>
                    </li>
                </ul>
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
    >h4{
        border-bottom: 1px solid #ddd;
        text-align: center;
    }
    .content{
        @include list(row);
        .item{
            box-sizing: border-box;
            width:50%;

            &:first-child{
                padding:32px 20px;
                text-align: center;
                border-right:1px solid #ddd;
                img{
                    width:132px;
                    height:132px;
                    margin:20px
                }

             }
             h4{
                 font-size:26px;
             }
             .red{
                 color:#f00;
             }
             .gray{
                 font-size: 24px;
                 color:#999;
             }
             ul{
                 width:100%;
                 li{
                     height:144px;
                     padding:36px 28px;
                     box-sizing: border-box;
                     width:100%;
                    /*&:first-child{*/
                        /*border-bottom: 1px solid #ddd;*/
                     /*}*/
                     p{
                         margin-top: 12px;
                         font-size: 24px;
                     }
                     h4,p{
                         white-space:nowrap;
                         text-overflow:ellipsis;
                         overflow: hidden;
                         text-align: left;

                     }
                     img{
                         width:80px;
                         height:80px;
                         float:right;
                     }
                 }

             }

        }
    }

}
</style>