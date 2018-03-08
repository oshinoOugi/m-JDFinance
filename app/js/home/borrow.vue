<template lang="html">
    <Panel title="极速借贷" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{ name:'home' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
            </router-link>
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
        text-align: center;
        padding-bottom:40px;
    img{
        width:100%;
    }
    }
</style>