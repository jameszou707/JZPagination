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

+ makePageBar(option) 
+ option

| 参数名        | 说明                           | 默认值    |
| ------------- | ------------------------------ | --------- |
| pageFunc      | 翻页方法对象                   | undefined |
| pageContainer | 页码条容器 dom 或 id           | undefined |
| pgIndex       | 当前页码                       | 1         |
| pgSize        | 页容量                         | 7         |
| gpSize        | 页码组容量                     | 6         |
| roCount       | 总行数-从服务器获取            | 100       |
| simpleModel   | 简单模式 true / 完整模式 false | false     |
| isCn          | 是否中文                       | true      |



### 3.1 页码条模式

+ 简单模式：simpleModel 设置为 true （默认 是 false）

![1567850669645](assets/1567850669645.png)

```html
<body>
  <script src="./JZPagination.js"></script>
  <style>
        #pageBar { font-size: 14px; }
        #pageBar a, span {
            border: 1px solid #000;
            padding: 3px 10px;
            margin: 3px 2px;
            color: #000;
            background-color: whitesmoke;
            text-decoration: none;
        }
        #pageBar a:hover {
            color: #fff;
            background-color: #0094ff;
        }
        #pageBar select {
            margin: 5px;
        }
        #pageBar a.active {
            color: #fff;
            background-color: #0094ff;
        }
  </style>
  <!-- 1.页码条 容器标签 -->
  <div id='pageBar'></div>
  <script>
    // 2.页面加载完毕后 调用组件 页码条方法
    window.onload = function () {
      makePageBar({
        pageFunc: toPage,
        pageContainer: 'pageBar',
        pgIndex: 1,
        roCount: 100,
        simpleModel:true
      });
    }

    /**
     * @description: 3. 翻页方法
     * @param {string}  pageIndex - 要前往的页码
     */
    function toPage(pageIndex) {
      makePageBar({
        pageFunc: toPage,
        pageContainer: 'pageBar',
        pgIndex: pageIndex,
        roCount: 100,
        simpleModel:true
      });
    }
  </script>
</body>
```

+ 完整模式：simpleModel 设置为 false

![JZPagination页码条](assets/JZPagination页码条.jpg)

```js
<body>
  <script src="./JZPagination.js"></script>

  <!-- 1.页码条 容器标签 -->
  <div id='pageBar'></div>

  <script>
    // 2.页面加载完毕后 调用组件 页码条方法
    window.onload = function () {
      makePageBar({
        pageFunc: toPage,
        pageContainer: 'pageBar',
        pgIndex: 1,
        roCount: 100
      });
    }

    /**
     * @description: 3. 翻页方法
     * @param {string}  pageIndex - 要前往的页码
     */
    function toPage(pageIndex) {
      makePageBar({
        pageFunc: toPage,
        pageContainer: 'pageBar',
        pgIndex: pageIndex,
        roCount: 100
      });
    }
  </script>
</body>
```

### 3.2 中英文切换

+ 默认为中文