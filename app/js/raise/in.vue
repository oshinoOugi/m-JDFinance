<template lang="html">
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.catogry">
                <img :src="item.catogry" alt="">
                <section :class="$style.list" >
                    <div :class="$style.product" v-for="product in item.list" :key="product.img">
                        <div :class="$style.wrap">
                            <img :src="product.img" alt="">
                            <p :class="$style.title">{{product.title}}</p>
                            <p :class="$style.price"><em>{{product.price}}</em>起</p>
                            <article class="">
                                <div :class="$style.wrapper">
                                    <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
                                </div>
                                <p>{{product.progress}}%</p>
                            </article>
                            <label v-if="product.jingxuan">精选</label>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </Panel>
</template>
<script>
	import Panel from "../core/panel.vue"
	export default {
		components:{
			Panel,
		},
        data(){
			return {
				items:[{
					catogry:"//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                    list:[{
                        img:"//img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg",
                        title:"电动牙刷",
                        price:"79.00",
                        progress:"179",
						jingxuan:1,
                        },{
                        img:"//img30.360buyimg.com/cf/s250x250_jfs/t16168/161/1968909024/148686/2a85179/5a7be4bdN01533e62.jpg",
                        title:"胶囊咖啡机",
                        price:"11.00",
                        progress:"30",
						jingxuan:0,
					}]
                },{
					catogry:"//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                    list:[{
						img:"//img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg",
						title:"智能后视镜",
						price:"90.00",
						jingxuan:0,
                    },{
						img:"//img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg",
						title:"GPD口袋电脑",
						price:"75.00",
						progress:"0",
						jingxuan:0,
                    }]
                },
                {
					catogry:"//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                    list:[{
						img:"//img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg",
						title:"层层轻薄雪花酥",
						price:"29.00",
						progress:"373",
						jingxuan:0,
                    },{
						img:"//img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg",
						title:"华礼脸茶",
						price:"29.00",
						progress:"270",
						jingxuan:0,
                    }]
                }]
			}

        }
	}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex;
            .item{
                margin-bottom:40px;
                img{
                    display: block;
                    height:170px;
                    width: 100%;
                }
                .list{
                    padding:0 20px;
                    justify-content: space-between;
                    @include flex(row);
                    .product{
                        width: 290px;

                        box-sizing: border-box;


                        text-align:center;
                        .wrap{
                            height:396px;
                            background: rgba(0,0,0,0.02);
                            position: relative;
                            padding-top: 44px;
                            box-sizing: border-box;
                            label{
                                position: absolute;
                                left: 0px;
                                top:0;
                                width:48px;
                                height:32px;
                                line-height:32px;
                                font-size: 20px;
                                text-align: center;
                                /*box-sizing: border-box;*/
                                padding: 4px 8px;
                                color:red;
                                background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);
                            }
                            img{
                                margin:0px auto 20px;
                                width:180px;
                                height:180px;
                            }
                            .title{
                                color:#444;
                                font-weight: bold;
                                font-size: 28px;
                                height:40px;
                                line-height:40px;
                            }
                            .price{
                                margin-bottom: 16px;
                                font-family: PingFangSC-Semibold;
                                font-size: 20px;
                                color: #999;
                            em{
                                margin-right: 4px;
                                font-weight: 700;
                                font-size: 36px;
                                color:#FF3232;
                                &:before{
                                     content:"￥";
                                     font-size: 28px;
                                     color: #FF3232;
                                 }
                                }
                            }
                            article{
                                justify-content: space-around;
                                @include flex(row);
                            .wrapper{
                                width:144px;
                                height: 10px;
                                margin-top: 10px;
                                background: #F6E6E6;
                                border-radius: 11px;
                                .inner{
                                    max-width:100%;
                                    height: 10px;
                                    background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                                    border-radius: 11px;
                                }
                            }
                            p{
                                font-weight: 700;
                                font-size: 24px;
                                color: #999;
                            }
                            }
                        }


                    }

                }
            }
        }
    }

</style>