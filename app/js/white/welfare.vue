<template lang="html">
    <Panel title="白条福利" :class="$style.panel">
        <section>
            <ul :class="$style.content">
                <li :class="$style.item">
                    <div :class="$style.wrap">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                        <div>
                            <p>开通白条</p>
                            <p>送百元元礼包</p>
                        </div>
                    </div>
                    <span>立即查看></span>
                </li>
                <li :class="$style.item">
                    <div :class="$style.wrap">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                        <div>
                            <p>白条提额</p>
                            <p>金融app专享提额礼包</p>
                        </div>
                    </div>
                    <span>&nbsp;&nbsp;去提额></span>
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
    color:#999999;
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