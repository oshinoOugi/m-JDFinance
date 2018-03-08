<template lang="html">
    <section :class="[panelClass,cname]">
        <h4>- {{title}} -</h4>
        <slot></slot>
    </section>


</template>
<script>
	export default {
		props:{
			cname:{
				type:String,
				default:"",
			},
			title:{
				type:String,
				default:""
			}
		},
		data(){
			return{
				panelClass:'panel',
			}
		},
	}
</script>
<style lang="scss">
    @import "../../css/element.scss";
    .panel{
    @include panel;
    >h4{
        text-align: center;
        font-weight:bold;
    }
    }
</style>