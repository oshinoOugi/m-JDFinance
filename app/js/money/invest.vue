<template lang="html">
    <Panel :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
        </section>
    </Panel>
</template>
<script>
	import Panel from "../core/panel.vue"
	export default {
		components:{
			Panel
		}
	}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    height: 102.39px;
    @include panel;
    >h4{
        display: none;
    }
    .content{
            img{
                width:100%;
            }
        }
    }
</style>