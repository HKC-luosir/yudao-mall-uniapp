<!-- 微信公众号的登录回调页 -->
<template>
  <!-- 空登陆页 -->
  <view />
</template>

<script setup>
  import sheep from '@/sheep';
  import { onLoad } from '@dcloudio/uni-app';

  onLoad(async (options) => {
    // #ifdef H5
    // 将 search 参数赋值到 options 中，方便下面解析
    new URLSearchParams(location.search).forEach((value, key) => {
      options[key] = value;
    });
    const event = options.event;
    const code = options.code;
    const state = options.state;
    let time = 10;
    if (event === 'login') { // 场景一：登录
      const res = await sheep.$platform.useProvider().login(code, state);
    } else if (event === 'bind') { // 场景二：绑定
      sheep.$platform.useProvider().bind(code, state);
	  time = 1000;
    }

    // 避免先用手机登录再到付款页面重新微信授权登录时，绑定openId还没执行完就跳转回去，又陷入没登录的循环，所以这里做一个延迟跳转
	setTimeout(function(){
		// 检测 H5 登录回调
		let returnUrl = uni.getStorageSync('returnUrl');
		if (returnUrl) {
		  uni.removeStorage({key:'returnUrl'});
		  location.replace(returnUrl);
		} else {
		  uni.switchTab({
		    url: '/',
		  });
		}
	},time);

    // #endif
  });
</script>
