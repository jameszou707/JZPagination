# JZPagination

## 1.介绍
一个简单实用的页码条JS生成插件

+ 可以展示 完整模式 和 简单模式

![JZPagination页码条](assets/JZPagination页码条.jpg)

## 2.安装教程

1. 在需要页码条的html页面 导入 JZPagination.js文件
2.  在页面上准备一个容器
   + 组件 生成  的是 文本 和 a 标签
   + 需要自己设置 样式表

## 3.使用说明

### 3.1 参数说明

+ makePageBar(turnPageFunc, pageContainer, pgIndex = 1, pgSize = 7, gpSize = 6, roCount = 100, simpleModel = false, isCn = true) 

| 参数名        | 说明                           | 默认值    |
| ------------- | ------------------------------ | --------- |
| turnPageFunc  | 翻页方法对象                   | undefined |
| pageContainer | 页码条容器 dom 或 id           | undefined |
| pgIndex       | 当前页码                       | 1         |
| pgSize        | 页容量                         | 7         |
| gpSize        | 页码组容量                     | 6         |
| roCount       | 总行数                         | 100       |
| simpleModel   | 简单模式 true / 完整模式 false | false     |
| isCn          | 是否中文                       | true      |



### 3.1 页码条模式

+ 简单模式：最后一个参数 设置为 true

![1567850669645](assets/1567850669645.png)

```js
<body>
  <script src="./JZPagination.js"></script>

  <!-- 1.页码条 容器标签 -->
  <div id='pageBar'></div>

  <script>
    // 2.页面加载完毕后 调用组件 页码条方法
    window.onload = function () {
      // 参数：翻页方法 , 页码条容器dom或id ，当前页码 ，页容量 ，页码组容量 ，总行数，是否简单模式
      makePageBar(toPage, 'pageBar', 1, 5, 8, 1000,true);
    }

    /**
     * @description: 3. 翻页方法
     * @param {string}  pageIndex - 要前往的页码
     */
    function toPage(pageIndex) {
      makePageBar(toPage, 'pageBar', pageIndex, 5, 8, 1000,true);
    }
  </script>
</body>
```

+ 完整模式：最后一个参数 设置为 false，或删掉

![JZPagination页码条](assets/JZPagination页码条.jpg)

```js
<body>
  <script src="./JZPagination.js"></script>

  <!-- 1.页码条 容器标签 -->
  <div id='pageBar'></div>

  <script>
    // 2.页面加载完毕后 调用组件 页码条方法
    window.onload = function () {
      // 参数：翻页方法 , 页码条容器dom或id ，当前页码 ，页容量 ，页码组容量 ，总行数，是否简单模式
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

### 3.2 中英文切换

