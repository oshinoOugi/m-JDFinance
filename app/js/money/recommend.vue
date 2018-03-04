<template lang="html">
    <Panel title="精选推荐" :class="$style.panel">
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
					sub:"90天可质押",
					rate:"5.50%",
					text:"历史年化回报率"
				},{
					title:"固收理财",
					sub:"理财首选",
					rate:"5.80%",
					text:"综合年化收益率"
				},{
					title:"基智账户",
					sub:"组合投资",
					rate:"8%-10%",
					text:"止盈年化收益率"
				},{
					title:"小白基金",
					sub:"超短期",
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
    .panel {
        @include panel;
        > h4 {
            text-align: center;
        }
        .content {
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;
            &:after {
                content: "";
                height: 0;
                width: 100%;
                border-bottom: 1px solid #eee;
                position: relative;
                top: -205px;
            }
        .item {
            /*@include list(column);*/
            position: relative;
            box-sizing: border-box;
            padding:34px 32px;
            width: 50%;

            &:after {
                content: "";
                width: 1px;
                height: 136px;
                display: block;
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -68px;
                border-right: 1px solid #eee;
            }

            &:nth-child(2n) {
                &:after {
                    display: none;
                }
            }
            dt {
                font-size: 30px;
                font-weight: bold;
                line-height: 42px;
                color: #333;

                span {
                    border: 1px solid #FF5155;
                    font-size: 24px;
                    color: #FF5155;
                }
            }
    dd {
        &:nth-child(2) {
            font-weight: 700;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #FF5154;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        &:nth-child(3) {
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    }
    }

    }
</style>
