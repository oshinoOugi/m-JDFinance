<template lang="html">
    <Panel title="生活服务" :class="$style.panel">
        <ul :class="$style.content">
           <li :class="$style.item">
               <img src="//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
               <p>小白卡</p>
           </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135" alt="">
                <p>白条商城</p>
                <p class="active">全新升级</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135" alt="">
                <p>消费分期</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135" alt="">
                <p>借钱</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135" alt="">
                <p>白条提额</p>
            </li>
        </ul>
    </Panel>
</template>
<script>
import  Panel from  "../core/panel.vue"
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
            @include flex(row);
            box-sizing: border-box;
            padding-bottom:40px;
            .item{
                width:20%;
                text-align:center;
                img{
                    width:90px;
                    height:90px;
                }
                p{
                    font-size: 26px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-top: 12px;
                    &:nth-child(3){
                        color:#f04752;
                     }
                }
            }
        }
    }

</style>