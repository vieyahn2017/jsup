# npx degit dcloudio/uni-preset-vue#vite my-vue3-project1

把hello3
转换成了结构符合现代前端项目的结构，
npm run dev:mp-weixin
能运行

但是后续我尝试引入vue的UI框架vant还是不行。






用Vue打造微信小程序，让你的开发效率翻倍！
iwhao
2023-06-27 22:40
701
Vue做为当下最为流行之一的前端框架，作为一款轻量级的JavaScript框架，在开发效率、易用性、灵活性等方面都有着出色的表现。

Vue有哪些优势可以应用于微信小程序？
更快的开发速度，vue的模版语法简单易学，开发者可以快速上手
更好的可维护性，组件化的架构，代码结构更加清晰更容易维护
跨平台支持，支持web端，移动端，桌面应用等多个领域
Vue如何应用于微信小程序？
在微信小程序中使用vue框架，需要借助三方库来实现，目前比较流行的就是，mpvue和uni-app，本文只介绍下uni-app,uni-app是一款基于Vue的跨平台框架，它支持同时开发多个平台（包括微信小程序、H5、App等），使用同一套代码即可完成多个平台的开发。uni-app提供了大量的组件和API,还有插件平台。

一套代码多个平台

uni-app是一款基于Vue的跨平台框架，它支持同时开发多个平台（包括微信小程序、H5、App等），使用同一套代码即可完成多个平台的开发。uni-app提供了大量的组件和API，可以帮助开发者快速完成跨平台应用的开发。

脚手架搭建框架和开发使用
环境，确保已安装 node.js

安装 vue-cli
npm install -g @vue/cli
创建uni-app 使用Vue3/Vite版
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
cd my-vue3-project
npm i
慢，使用 npm i --registry=https://registry.npmmirror.com
运行调试
提前 下载好微信小程序开发工具

$ npm run dev:mp-weixin
DONE  Build complete. Watching for changes...
运行方式：打开 微信开发者工具, 导入 dist\dev\mp-weixin 运行。
打开微信小程序导入dist\dev\mp-weixin 如下图

uni-app.png 到此就可以进行开发流程了，框架还支持热重载，修改代码，同步编译

打包编译
执行以下代码

npm run build:mp-weixin
更多命令打开 pacage.json 查看


需要注意的点

request请求需要https，在本地运行时，可以使用http（需要设置 勾选不校验合法域名）
但是预览或者上传时，使用http无法请求，
另外 上传，下载，webview 对应的域名都需要在后端配置
法动态引入javascript脚本，不能像web端一样写script标签引入，因为不支持动态加载这种方式 引入，无法解决，你只需要知道即可。
css 长度单位记得 用rpx

作者：iwhao
链接：https://juejin.cn/post/7249303204209573945
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



npm i cnchar  --registry=https://registry.npmmirror.com
npm i cnchar-order cnchar-trad cnchar-radical cnchar-info --registry=https://registry.npmmirror.com
npm i moment  --registry=https://registry.npmmirror.com

