<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider" />
    </article>
</template>
<script>
	import Slider from "../core/slider.vue"

	export default {
		components:{
			Slider,
		},
		data(){
			return{
				items:[{
					href:"home",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320",
				}],
                options:{
					autoplay:false,
					loop:false,
                }
			}
		}
	}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider{
        margin-top: 120px;
    img{
        width:100%;
    }
    }
    .list{
    @include list(row);
        background:#fff;
        padding-top:40px;
        padding-bottom: 20px;
        justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
    img{
        /*display: inline-block;*/
        width:90px;
        height:90px;
    }
    h4{
        font-size:26px;
        margin-top: 12px;
        color:#666;
    }
    }
    }
</style>