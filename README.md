# JZPagination

#### 介绍
一个简单实用的页码条JS生成插件

![JZPagination页码条](assets/JZPagination页码条.jpg)


#### 安装教程

1. 在需要页码条的html页面 导入 JZPagination.js文件
2.  在页面上准备一个容器
   + 组件 生成  的是 文本 和 a 标签
   + 需要自己设置 样式表

#### 使用说明

```js
<body>
  <script src="./JZPagination.js"></script>

  <!-- 1.页码条 容器标签 -->
  <div id='pageBar'></div>

  <script>
    // 2.页面加载完毕后 调用组件 页码条方法
    window.onload = function () {
      // 参数：翻页方法 , 页码条容器dom或id ，当前页码 ，页容量 ，页码组容量 ，总行数
      makePageBar(toPage, 'pageBar', 1, 5, 8, 1000);
    }

    /**
     * @description: 3. 翻页方法
     * @param {string}  pageIndex - 要前往的页码
     */
    function toPage(pageIndex) {
      makePageBar(toPage, 'pageBar', pageIndex, 5, 8, 1000);
    }
  </script>
</body>
```



#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)