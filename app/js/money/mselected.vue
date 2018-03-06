<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section>
            <ul :class="$style.content">
                <li :class="$style.item">
                    <div :class="$style.wrap">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                        <div>
                            <p>月度理财</p>
                            <p>预期年化收益率4.50%</p>
                        </div>
                    </div>
                    <span>去赚钱></span>
                </li>
                <li :class="$style.item">
                    <div :class="$style.wrap">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                        <div>
                            <p>季度理财</p>
                            <p>历史年化回报率5.50%</p>
                        </div>
                    </div>
                    <span>去赚钱></span>
                </li>
                <li :class="$style.item">
                    <div :class="$style.wrap">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                        <div>
                            <p>一年理财</p>
                            <p>历史年化回报率5.80%</p>
                        </div>
                    </div>
                    <span>去赚钱></span>
                </li>

            </ul>
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
            @include list;
            .item{
                @include flex(row);
                justify-content: space-around;
                box-sizing: border-box;
                padding:24px 0;
                .wrap{
                    img{
                        display: inline-block;
                        width:88px;
                        height: 88px;
                    }
                    div{
                        display: inline-block;
                        width:224px;
                        margin-left: 32px;

                        :first-child{
                            font-size: 32px;
                            color:#333;
                        }
                        :nth-child(2){
                            font-size: 24px;
                            color:#ff3232;
                        }
                        p{
                            height: 44px;
                            line-height: 44px;

                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }
                }
                span{
                    font-size:28px;
                    color:#FF801A;
                    height: 88px;
                    line-height:88px;
                }




            }

        }
    }
</style>