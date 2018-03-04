<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }} <span :class="$style.red">{{item.sub}}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
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
    				title:"定期理财",
                    sub:"理财首选",
                    rate:"5.60%",
                    text:"历史年化回报率"
                },{
					title:"小白理财",
					sub:"理财首选",
					rate:"4.22%",
					text:"历史年化回报率"
				},{
					title:"月月盈",
					sub:"养老保障",
					rate:"5%",
					text:"七日年化收益率"
				},{
					title:"小白基金",
					sub:"天天赚钱",
					rate:"4.27%",
					text:"7日年化收益率"
				}],
            }
        }
    }
//tips:活数据用data返回
</script>
<style lang="scss" module >
@import "../../css/element.scss";
    .panel{
        @include panel;
        >h4{
            text-align:center;
        }
        .content{
            @include flex(row);
            justify-content: space-around;
            box-sizing:border-box;
            &:after{
                content:"";
                height:0;
                width:100%;
                border-bottom: 1px solid #eee;
                position:relative;
                top: -205px;
             }
            .item{
                /*@include list(column);*/
                position:relative;
                box-sizing: border-box;
                padding:34px 32px;
                width:50%;
            /*中间的竖线*/
                &:after{
                    content:"";
                    width:1px;
                    height:136px;
                    display: block;
                    position:absolute;
                    top:50%;
                    right:0;
                    margin-top: -68px;
                    border-right:1px solid #eee;
                 }
                 /*去掉最右两根线*/
                 &:nth-child(2n){
                    &:after{
                         display: none;
                     }
                  }
                dt{
                    font-size: 30px;
                    font-weight: bold;
                    line-height: 42px;

                    color:#333;
                    span{
                        border:1px solid #FF5155;
                        font-size: 24px;
                        color:#FF5155;
                    }
                }
                dd{
                    &:nth-child(2){
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #FF5154;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &:nth-child(3){
                         font-size: 24px;
                         height: 34px;
                         line-height: 34px;
                         color: #999;
                         white-space: nowrap;
                         text-overflow: ellipsis;
                         overflow: hidden;

                     }
                }


                /*dd{*/
                    /*font-size: 44px;*/
                    /*height: 58px;*/
                    /*line-height: 58px;*/
                    /*color: #FF5154;*/
                    /*white-space: nowrap;*/
                    /*text-overflow: ellipsis;*/
                    /*overflow: hidden;*/
                /*}*/
            }
        }

    }
</style>
<!--tips：活用html标签作为选择器
    与以前每个样式都起类名相比，这样省去很多麻烦
    但都是为了样式不混淆

 本案例中也可以用ul，li写
 这种结构中用dt dd更好-->

<!--本次设计中，在设计列表时不被横线css影响，先抽象，后细节，觉得无法模块化的线条后期单独加上去-->