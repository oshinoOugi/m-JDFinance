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
					href:"money",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400",
				},{
					href:"money",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400",
				},{
					href:"money",
					src:"//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400",
				}]
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