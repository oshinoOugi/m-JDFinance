<template lang="html">
    <Panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送百元礼包</p>
                </div>
                <em><router-link :to="{ name:'home'}">去赚钱></router-link></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em><router-link :to="{ name:'home'}">去赚钱></router-link></em>
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
    }
    .content{
    @include list;
    .item{
    @include flex(row);
        height: 140px;
        align-items:center;
    &:after{
         content:"";
         width:100%;
         height:0;
         border-bottom: 1px solid #ddd;
         margin-left: 150px;
     }
    &:last-child:after{
         border-color: transparent;
     }
    >img{
        width:88px;
        height:88px;
        margin:0 32px;
        display: inline-block;
    }
    >div{
        font-size: 32px;
        color:#333;
        line-height: 1.8;
        width:344px;
    p{
        color:#999;
        font-size: 24px;
        line-height: 1.1;
        width: 224px;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    }
    em{
    a{
        color:#FF801A;
        font-size: 28px;
        text-decoration: none;
    }


    }
    }
    }
    }

</style>

<!--为什么不抽象出该模板？-->
<!--1.并不是数据驱动。根据业务性估计是写死的模板-->
<!--2.抽象出来并不能使复杂度降低-->