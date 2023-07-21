<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// setTimeout(() => {
			// 	uni.setTabBarBadge({
			// 		index: 1,
			// 		text: '5'
			// 	});
			// 	uni.setTabBarBadge({
			// 		index: 2,
			// 		text: '5'
			// 	});
			// 	uni.showTabBarRedDot({
			// 		index: 3
			// 	});
			// }, 1000);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.yh-nostyle-input {
		color: #00d;
	}
	.yh-nostyle-tip {
		color: #e00;
	}
	.yh-nostyle-tip2 {
		color: #e0e;
	}
	.yh-nostyle-title {
		color: #848;
	}
	.yh-nostyle-title2 {
		color: #848;
		height: 50px;
		display: flex;
		align-items: flex-end;
	}
				
</style>
