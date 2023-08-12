window.BABEL_ARTICLES = [
  {
      title:'Babel编译器基本配置方法及陷阱',
      tags:['babel'],
      link:'/babel/Babel编译器基本配置方法及陷阱.html',
      summary: 'Babel是一个编译器，从大的层面来说，它有三个主要的步鄹：解析、转义、代码生成。 这个过程和大多数编译器是一样的。 Babel所做的工作就是将我们所做的代码进行某些转译工作，然后输入我们想要的代码。它的最常用的功能是对新版JS语言(如ES6， ES7， ES8)及语言的新特性(如stage-x)转译成ES5语言，以适应低版本的浏览器。',
      date:'2017-12-13',
      creator: 'DuLinRain',
      recommend: true,
      category: 'babel'
    }, {
      title:'手把手教你实现一个简单的编译器',
      tags:['babel'],
      link:'/babel/手把手教你实现一个简单的编译器.html',
      summary: '今天我们将学习开发一个编译器，但是呢，这个编译器并不是说什么都能都编译，它只是一个超级小的编译器，主要用于说明编译器的一些基本的原理。',
      date:'2017-12-12',
      creator: 'DuLinRain',
      recommend: true,
      category: 'babel'
    }, {
      title:'babel-types API文档详解',
      tags:['babel'],
      link:'/babel/babel-types API文档详解.html',
      summary: '@babel/types这个模块包含了一些用于手动地创建AST以及检查AST类型的方法。 你在编写Babel插件时会经常用到',
      date:'2017-12-15',
      creator: 'DuLinRain',
      recommend: true,
      category: 'babel'
    }, {
      title:'babel简单插件开发',
      tags:['babel'],
      link:'/babel/babel简单插件开发.html',
      summary: '前面我们已经介绍了插件的基本开发方法，现在就让我们用所学的知识开发一些简单的babel插件吧',
      date:'2017-12-16',
      creator: 'DuLinRain',
      recommend: true,
      category: 'babel'
    }, 
]
window.BASIC_JAVASCRIPT_ARTICLES = [
    {
      title:'几种for循环性能比较',
      tags:['JavaScript','性能'],
      link:'/basic-javascript/几种for循环性能比较.html',
      summary: '直接说结论：for(reverse) > for > forEach > for ...of，理论上for(reverse) > for是肯定成立的，实际上可能会是相反，其它几个关系不变。性能和代码可读性恰好相反。',
      date:'2021-02-08',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, 
    {
      title:'JavaScript字符集之一坨翔引发的血案',
      tags:['JavaScript','Unicode'],
      link:'/basic-javascript/JavaScript字符集之一坨翔引发的血案.html',
      summary: '在ES5及更早的JS版本中，对于Unicode字符的处理存在严重的Bug,这将导致在处理某些Unicode字符（字符范围为\u10000~\u10FFFF）时产生意想不到的问题。💩的Unicode字符为\u1f4a9,处在上述范围之间，因此，本文主要以字符为例，来解释ES5及之前的JS在处理类式的字符时遇到的问题以及相应的解决方法。',
      date:'2017-04-13',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JavaScript字符集之合法变量名',
      tags:['JavaScript','Unicode'],
      link:'/basic-javascript/JavaScript字符集之合法变量名.html',
      summary: '在惯常的思路中，JS中的合法变量名必须以美元符（$）或下划线（_）或Unicode字符等打头，以这些符号作为后继，并且不是JS中的保留字。但是我们仍然可以偶尔看到一些有趣的现象打乱我们的三观',
      date:'2017-04-14',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JavaScript字符集之合法属性名',
      tags:['JavaScript','Unicode'],
      link:'/basic-javascript/JavaScript字符集之合法属性名.html',
      summary: '在惯常的思路中，JS属性名可以是任意合法的标识符。不仅数值可以作为属性名，就连各种保留字都可以用来做为属性名了。这让我们开始思考，到底什么样的属性名才是合法属性名呢？',
      date:'2017-04-15',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JavaScript基础知识之时间相关函数详解',
      tags:['JavaScript','时间函数'],
      link:'/basic-javascript/JavaScript基础知识之间相关函数详解.html',
      summary: '',
      date:'2017-06-10',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JavaScript基础知识之深度拷贝及陷阱',
      tags:['JavaScript'],
      link:'/basic-javascript/JavaScript基础知识之深度拷贝及陷阱.html',
      summary: '在js里面，不论在面试还是在实际项目过程中经常会遇到要求深度拷贝的场景。有“深拷贝”自然也就有“浅拷贝”，那么这两者有什么区别呢？通俗来说，将b拷贝给a之后，如果改变a也会影响b的话或者改变b影响a的话，那我们认为它是浅拷贝，而如果互不影响的话则认为它们是浅拷贝。',
      date:'2017-08-31',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JavaScript基础知识之函数去抖动(debounce)',
      tags:['JavaScript'],
      link:'/basic-javascript/JavaScript基础知识之函数去抖动(debounce).html',
      summary: '在实际项目中，常常会遇到密集触发的问题，比如说用户滚动鼠标滚轮或者用户缩放或者是条件改变触发ajax请求，如果我们对于每次触发都作出相应，一方面可能会导致性能损失，另一方面其实也是做了很多无意义的事。比如说用户滚动鼠标滚轮，事实上，用户滚动几次滚轮就会触发几十次的scroll事件，我们并不需要关心用户每次滚动，我们只需要关心用户停下来滚动的那一刻，在这一刻做出相应就可以了。',
      date:'2017-09-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'basic-javascript'
    }, {
      title:'JavaScript基础知识之函数节流(throttle)',
      tags:['JavaScript'],
      link:'/basic-javascript/JavaScript基础知识之函数节流(throttle).html',
      summary: '在实际项目中，常常会遇到密集触发的问题，比如说用户滚动鼠标滚轮或者用户缩放或者是条件改变触发ajax请求，如果我们对于每次触发都作出相应，一方面可能会导致性能损失，另一方面其实也是做了很多无意义的事。比如说用户滚动鼠标滚轮，事实上，用户滚动几次滚轮就会触发几十次的scroll事件',
      date:'2017-09-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'basic-javascript'
    }, {
      title:'JavaScrip中如何正确并优雅地判断undefined',
      tags:['JavaScript'],
      link:'/basic-javascript/JavaScrip中如何正确并优雅地判断undefined.html',
      summary: 'js中常常会进行undfiend判断，然后根据参数是否是undefined来做响应的处理。这其中最为普遍的场景就是根据undfined来设置默认值。而普遍判断方法无外乎下面5种',
      date:'2017-10-17',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'你所不知道的Array.sort()方法',
      tags:['JavaScript'],
      link:'/basic-javascript/你所不知道的Array.sort()方法.html',
      summary: '如果你写过js，你肯定或多或少的用到过JS数组原生的sort方法。 比如说下面这个例子：const myArray = [33, 2, 98, 25, 4];myArray.sort() // [ 2, 25, 33, 4, 98 ]。通常我们会认为输出的结果会是：[2, 4, 25, 33, 98]。但是看到实际的输出结果后，你可能会稍微有些惊讶。 没错今天我们就来仔细讲讲myArray.sort()的一些可能你没有深究的知识点。',
      date:'2018-06-30',
      creator: 'DuLinRain',
      recommend: true,
      category: 'basic-javascript'
    }, 
    {
      title:'JavaScript基础知识之继承(类继承和原型继承)',
      tags:['JavaScript'],
      link:'/basic-javascript/JavaScript基础知识之继承(类继承和原型继承).html',
      summary: 'JavaScript的继承可分为两大类，一是类继承，二是原型继承。本文将讲述个人对这两种继承方式的理解。',
      date:'2017-05-13',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    },{
      title:'JS中为什么[].concat[1,2,3]不会报错？',
      tags:['JavaScript'],
      link:'/basic-javascript/JS中为什么[].concat[1,2,3]不会报错？.html',
      summary: '想必你一定经常用到这样的写法：[].concat([1,2,3]) //[1,2,3]但是，可能你会偶尔不小心忘记了加括号，变成了：[].concat[1,2,3];你天真的以为浏览器会报一个语法错误的，但是浏览器并没有报错，它只是静静地返回了undefined。这又是为什么呢？',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JS中为什么typeof null的结果是object?',
      tags:['JavaScript'],
      link:'/basic-javascript/JS中为什么typeof null的结果是object?.html',
      summary: '写JS的人都知道，JS中typeof null=== "object"，这是JS的基本知识，也是一些考试/面试中经常会被问到的问题。几乎很少有人去追寻为什么是这个结果。因为按照我们的知识，null不是一个object，它属于JS中的基本数据类型。',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'JS中的console API介绍',
      tags:['JavaScript'],
      link:'/basic-javascript/JS中的console API介绍.html',
      summary: '在大多数JavaScript引擎中，都有一个带有日志打印和调试方法的全局对象console。 该对象不属于JS语言本身，但自从被Firebug调试器开创以来，已经成为了事实上的标准。由于它的主要目的是调试，console方法在开发过程中最常使用，很少在已部署的代码中使用。',
      date:'2018-04-07',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    }, {
      title:'如何判断一个对象是否是plain object?',
      tags:['JavaScript'],
      link:'/basic-javascript/如何判断一个对象是否是plain object?.html',
      summary: '所谓plain Object，是指对象字面量或者通过new Object()的方式创建的对象。判断对象是否是plain Object其实只需要判断该对象的原型是否是Object.prototype。',
      date:'2018-08-06',
      creator: 'DuLinRain',
      category: 'basic-javascript'
    },  
]
window.CHROME_ARTICLES = [
  {
      title:'无限嵌套同样的iframe会怎样?',
      tags:['chrome'],
      link:'/chrome/无限嵌套同样的iframe会怎样？.md',
      date:'2023-02-25',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },                       
  {
      title:'多个浏览器已开始支持import maps',
      tags:['chrome'],
      link:'/chrome/多个浏览器已开始支持import maps.md',
      date:'2023-06-12',
      creator: 'DuLinRain翻译',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'async vs defer',
      tags:['chrome'],
      link:'/chrome/async vs defer.html',
      summary: `在前面一篇文章理解关键渲染路径中，作者写过JavaScript文件在关键渲染路径上的影响：
      JavaScript被视为一个“阻塞解析器的资源”。这意味着HTML文档解析被JavaScript阻塞。当解析器遇到<script>标签，不论它是内联的还是外联的，它都会停止HTML解析然后请求（如果资源是外联的）它并运行它。
      如果我们的页面需要加载很多个JavaScript文件的话，这个情况可能会有些问题，因为这会影响首次渲染时间，不论文档是否依赖于这些资源。
      幸运的是，<script>元素有2个属性，async 和 defer，这可以使我们对外联资源如何加载和执行有更多的掌控。
      `,
      date:'2021-03',
      creator: 'DuLinRain翻译',
      recommend: false,
      category: 'chrome'
  },
  {
      title:'理解关键渲染路径',
      tags:['chrome'],
      link:'/chrome/理解关键渲染路径.html',
      summary: `当浏览器收到服务端响应的页面HTML的时候，需要做很多步骤从而使得页面渲染到屏幕上。在开始绘制之前的整个步骤顺序被称为“关键渲染路径”。 理解CRP的相关知识对于理解如何提高网站性能非常重要。CRP有6个步骤：`,
      date:'2021-03',
      creator: 'DuLinRain翻译',
      recommend: false,
      category: 'chrome'
  },
  {
      title:'Chromium多进程架构',
      tags:['chrome'],
      link:'/chrome/Chromium多进程架构.html',
      summary: `核心思想：Chromium浏览器由浏览器进程(主进程)和渲染进程组成，通常每个tab对应一个
      渲染进程，每个渲染进程可能包含多个渲染视图，渲染进程和主进程之间通过IPC进行通信。`,
      date:'2020-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'Chromium进程模型',
      tags:['chrome'],
      link:'/chrome/Chromium进程模型.html',
      summary: `本文讲述的是Chromium渲染器进程所支持的几种不同的进程模型以及各模型存在的问题。
      Web内容已演变为包含大量在浏览器中运行的动态代码，从而使许多网站更像是应用程序而不是纯文档。
      这种演变也将浏览器的角色从一个简单的文档渲染器转换成了一个操作系统。`,
      date:'2020-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'Chromium多进程资源加载',
      tags:['chrome'],
      link:'/chrome/Chromium多进程资源加载.html',
      summary: `在Chromium中，所有的网络通信都是由主进程控制的。这么做的好处不仅可以使得浏览
      器进程控制所有渲染进程对网络的访问，也可以维护类跨渲染进程的持久性会话状态（如cookie和cache）。
      另一个比较重要的点是，作为一个HTTP/1.1协议的客户端，浏览器中每个域名下不可以建立太多的网络连接。`,
      date:'2020-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'Chrome站点隔离',
      tags:['chrome'],
      link:'/chrome/Chrome站点隔离.html',
      summary: `站点隔离（Site Isolation）是Chrome中的一个安全feature，提供了对一些安全问题的
      额外防护。它使得不可信的站点更难从别的站点访问或者窃取你的账户信息。`,
      date:'2020-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'深入理解同站（same-site）和同源（same-origin）',
      tags:['chrome'],
      link:'/chrome/深入理解同站（same-site）和同源（same-origin）.html',
      summary: `同站和同源是引用频率很高但是极易理解错误的词语，譬如，它经常在跳转、
      fetch请求、cookie、新开页面、嵌入资源和iframe这些场景被提及。`,
      date:'2020-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'net::ERR_INSUFFICIENT_RESOURCES 详解',
      tags:['chrome'],
      link:'/chrome/net::ERR_INSUFFICIENT_RESOURCES 详解.html',
      summary: `在浏览器中发起大量请求的时候可能会遇到net::ERR_INSUFFICIENT_RESOURCES的报错信息，这是为什么呢？这其实与Chromium架构的实现有关。Chromium会限制每个渲染进程未完成请求（Outstanding Requset）的数量。一旦达到这个约束，后续的请求都会报net::ERR_INSUFFICIENT_RESOURCES错误。 这个限制是25MB，注意，限制的并不是请求的个数，而是请求所占用的资源数。而这个25MB并不包含请求体（试想，如果包含的话，上传个大文件就跪了），只是包含请求头的大小。在普通长度的请求头下，这个25MB转换成请求个数的话大概是在6000个。如果请求头本身比较大，那这个数量会降低。`,
      date:'2020-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'chrome'
  },
  {
      title:'Brotli压缩算法简介',
      tags:['chrome'],
      link:'/chrome/Brotli压缩算法简介.html',
      summary: `Brotli压缩算法是google提出的较新的压缩算法，用于在浏览器替代传统的gzip等压缩算法。`,
      date:'2021-06',
      creator: 'DuLinRain',
      recommend: false,
      category: 'chrome'
  },
]
window.CSS_ARTICLES = [
    {
      title:'CSS新属性之aspect-ratio',
      tags:['css'],
      link:'/css/CSS新属性之aspect-ratio.html',
      summary: 'aspect-ratio是CSS盒模型中定义的新的属性，用来设置元素的宽高比。目前最新的Chrome、Firefox浏览器都已支持，Safari浏览器也预计会在2021年支持。',
      date:'2021-03',
      creator: 'DuLinRain翻译',
      recommend: false,
      category: 'css'
    }, 
    {
      title:'扫二维码导致IOS系统机器强制重启的原理',
      tags:['css'],
      link:'/css/扫二维码导致IOS系统机器强制重启的原理.html',
      summary: '相信最近不少人都看到朋友圈分享的下面这张二维码，当IOS系统的用户扫码打开时会导致机器自动重启，那么这么神奇的操作是如何完成的呢？其实很简单，仅仅只需要简单的HTML和CSS即可完成。下面我们来一起看一下。',
      date:'2018-10-19',
      creator: 'DuLinRain',
      recommend: true,
      category: 'css'
    }, {
      title:'CSS之清除浮动方法演进',
      tags:['css'],
      link:'/css/CSS之清除浮动方法演进.html',
      summary: 'CSS中，一般而言，元素（父亲）如果没有指定高度的话，其高度由其内容（孩子）决定。但是，当孩子元素采用了float的话，父亲的高度将不会被撑开。',
      date:'2017-08-24',
      creator: 'DuLinRain',
      recommend: true,
      category: 'css'
    }, {
      title:'Web性能分析API(User Timing API) 介绍',
      tags:['html5'],
      link:'/css/Web性能分析API(User Timing API) 介绍.html',
      summary: '高性能的Web应用程序对于优秀的用户体验至关重要。 随着Web应用程序变得越来越复杂，了解性能影响对于创建令人信服的体验至关重要。 在过去几年中，浏览器中出现了许多不同的API，以帮助分析网络的性能，加载时间等，但是这些API不一定能提供足够的灵活性来查找什么会减慢应用程序的运行速度。',
      date:'2017-11-13',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'使用浏览器内置支持的响应式图片功能',
      tags:['html5'],
      link:'/css/使用浏览器内置支持的响应式图片功能.html',
      summary: '<picture>元素为图像资源加载提供了一种声明性方法。web开发人员不再需要写CSS和JavaScript来处理响应式设计。用户可以从原生优化过的图像资源加载中受益，这对于移动互联网速度较慢的用户尤其重要',
      date:'2017-11-13',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'CSS折叠角效果实现',
      tags:['css'],
      link:'/css/CSS折叠角效果实现.html',
      summary: '设计一种类似于纸张的某一个角被折叠的效果是大家会经常会遇到的场景，最早实现这种效果的应该是Nicolas Gallagher，但是他们的方法大多都是用三个元素来实现：一个主元素和2个三角形。其中一个三角形设置为和主元素一样的颜色来盖住主元素的右上角，另外一个三角形用于模拟折叠效果。 但这种实现方法会有以下问题',
      date:'2017-11-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'css'
    }, {
      title:'CSS模拟多边框',
      tags:['css'],
      link:'/css/CSS模拟多边框.html',
      summary: '我们都知道，CSS的border属性是用来指定边框的，但是该属性并不支持逗号分隔，也就意味这我们只能实现一个边框，使用该属性实现多个边框是不可能的。那么要想实现多个边框效果，我们可以使用多个元素来实现多边框效果，但是这样会引入额外的、不需要的元素。所以更可取的方法是采用box-shadow或outline来模拟。 下面我们来分别看一看。',
      date:'2017-11-26',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'CSS实现内圆角',
      tags:['css'],
      link:'/css/CSS实现内圆角.html',
      summary: 'CSS实现圆角我们一定都已经很熟悉了，但是对于如下图所示的内圆角我们该如何实现呢？很显然，我们可以用两个元素来实现，但是这样又会导致出现无意义的元素，那么有没有更好的方法呢？答案是肯定的。我们可以使用outline+box-shadow来实现，当然我们也可以使用伪元素实现。',
      date:'2017-11-26',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'CSS实现平行四边形效果',
      tags:['css'],
      link:'/css/CSS实现平行四边形效果.html',
      summary: '平行四边形是网页设计中一种非常常见的形状，既用在普通的元素也用于导航栏场景，大部分人首先想到的就是用css形变来实现，这样会导致一个明显的问题是文本也倾斜了，这通常不是我们想要的效果。那么要想保持元素倾斜而文本不倾斜有什么方法呢？我们可以使用嵌套元素和伪元素两种方法来实现。',
      date:'2017-11-26',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'纯CSS图标设计',
      tags:['css'],
      link:'/css/纯CSS图标设计.html',
      summary: 'CSS伪元素(::befroe 和 ::after )可以非常方便的用来实现一些特殊的效果，下面就是我们仅使用一个<i>标签和::befroe 、::after实现的若干图标。 图标的大小等没有经过严谨的设计，仅供参考。',
      date:'2017-11-30',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'你真的了解visibility属性吗？',
      tags:['css'],
      link:'/css/你真的了解visibility属性吗？.html',
      summary: '对大部分人而言，都知道visibility有两个属性：visible和hidden。想必大部分人也都知道visibility: hidden和display: none的区别。一般而言都是从显示性、继承性、绘制性、机器读取性这四个方面区分，这里再温习一下：',
      date:'2018-04-01',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'使用Skeleton Screens增强网页的感知性能',
      tags:['css'],
      link:'/css/使用Skeleton Screens增强网页的感知性能.html',
      summary: '网页的感知性能主要指的是用户在使用网页时感知到的网页加载速度等方面的性能。简而言之就是网页加载时间。据说MIT对此做过一项研究，结论表明人类可以在13毫秒内感知离散图像，但决定将眼睛聚焦到哪里需要100到140毫秒。 实际上，这为我们提供了大约200毫秒的时间来呈现网页状态。在200毫秒至1s的时间内，用户绝得他们处在这个过程中，超过1s之后他们就会失去耐心了。',
      date:'2018-06-30',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'你不知道的z-index',
      tags:['css'],
      link:'/css/你不知道的z-index.html',
      summary: 'z-index是CSS里面经常会用到的一个属性，看到这个标题时，可能你会觉得z-index那么简单有什么好说的，但可能你过于乐观了，z-index其实相当复杂，你所了解的也许只是冰山一角而已。',
      date:'2018-06-30',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'CSS居中详解',
      tags:['css'],
      link:'/css/CSS居中详解.html',
      summary: 'CSS居中是一个老生常谈的问题，不管是面试中还是实际应用中，遇到的都很多，对于不同类型的元素，其水平、垂直、水平垂直居中的方法也不尽相同，直接泛泛而论总是容易忘记，我们今天进行系统的总结一下。',
      date:'2018-06-30',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'新浪腾讯等常见M端信息流排版方式实现',
      tags:['css'],
      link:'/css/新浪腾讯等常见M端信息流排版方式实现.html',
      summary: '近年来，头条的崛起使得各大厂商对信息流越来越重视，也驱使它们为用户提供更加美观的信息流展示形式，我们今天就来看看几个典型的实现。',
      date:'2018-10-13',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'巧用placeholder-shown伪类实现个性化Input',
      tags:['css'],
      link:'/css/巧用placeholder-shown伪类实现个性化Input.html',
      summary: '在创建Form表单时，我们通常习惯于使用label和placeholder同时对用户进行输入提示，但是你可能也在其它网站看到过类似下图这样的交互，从上面可以看到一下几个现象：当用户未focus到输入框的时候，label是不会出现的；当用户focus并开始输入的时候，label自动出现了。这用JS很容易实现，但是你有没有想过，使用纯CSS的话该如何实现呢？下面我们就来介绍一下。',
      date:'2018-10-13',
      creator: 'DuLinRain',
      recommend: true,
      category: 'css'
    },{
      title:'多行文本溢出的几种处理方式',
      tags:['css'],
      link:'/css/多行文本溢出的几种处理方式.html',
      summary: '在CSS中，实现单行文本溢出时显示省略号是一件非常容易的事, 但是，当在多行文本溢出时要达到同样的效果，我们该如何做呢？多行文本溢出显示省略号在国外一般有个专门的术语叫“行夹（line clamping）”，有很多方法可以达到这样的效果，但是没有一种是包打天下的，都有各式各样的兼容性问题。',
      date:'2018-04-07',
      creator: 'DuLinRain',
      recommend: true,
      category: 'css'
    }, {
      title:'纯CSS实现多行文本溢出时显示省略号',
      tags:['css'],
      link:'/css/纯CSS实现多行文本溢出时显示省略号.html',
      summary: '我们在多行文本溢出的几种处理方式这篇文章中总结了实现多行文本溢出时的多种处理方法，其中提到了WebKit Flexbox方式和fadeOut两种CSS方式以及几种JS方式。其中，这里提到的2中CSS处理方式都有自己的缺点，JS方式更是不推荐的。今天我们来学习一种新的纯CSS的实现方式，这种实现方式需要较大的想象力才能做到。我们将一步一步地教你实现。',
      date:'2018-04-21',
      creator: 'DuLinRain',
      recommend: true,
      category: 'css'
    }, {
      title:'CSS变量入门',
      tags:['css'],
      link:'/css/CSS变量入门.html',
      summary: 'CSS变量和任何其他编程语言中的变量一样，使得我们可以在CSS中的其它地方对他们进行引用。这听起来很不可思议，你也许会觉得，这不是需要借助于SASS、LESS之类的预处理语言才能实现的吗？幸运的是，从2017年4月开始，所有的现代浏览器都开始支持CSS变量了。使用CSS变量可以使我们的CSS代码变得更加干净和紧凑。你可能已经比较想要知道我们怎么样才能使用CSS变量了，下面就跟随本文一起来了解一下吧！',
      date:'2018-06-27',
      creator: 'DuLinRain',
      category: 'css'
    }, {
      title:'5种方法实现StickyFooter效果',
      tags:['css'],
      link:'/css/5种方法实现StickyFooter效果.html',
      summary: '所谓的“Sticky Footer”效果是指，无论页面内容多少，页脚元素都停留在页面的底部的这种效果。那么如何实现这种效果呢？我们下面讲述5种实现这种效果的方法。',
      date:'2018-06-18',
      creator: 'DuLinRain',
      category: 'css'
    },  
]

window.MISCELLANEOUS_ARTICLES = [
  {
      title:'HiveSQL with as 语法',
      tags:['hive', 'sql', '大数据'],
      link:'/bigdata/HiveSQL with as 语法.md',
      date:'2023-03-26',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'语义化版本(semver)与NPM解析',
      tags:['semver', 'npm', '语义化版本'],
      link:'/miscellaneous/语义化版本(semver)与NPM解析',
      summary: `本文简单梳理了语义化版本(semver)与NPM安装包时的解析规则`,
      date:'2022-03-26',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'webpack模块联邦——动态remote',
      tags:['微前端', '模块联邦', 'webpack'],
      link:'/webpack/webpack模块联邦——动态remote',
      summary: `在「Webpack5 Module Federation试用」中我们已经试用过模块联邦了，但是在之前的例子里，我们的remote依赖都是写死的，实际生产场景中，我们通常期待remote是动态控制的。所以本文将讲述模块联邦动态remote的几种方式`,
      date:'2021-12-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'miscellaneous'
  }, 
  {
      title:'Webpack5 Module Federation试用',
      tags:['微前端', 'webpack'],
      link:'https://mp.weixin.qq.com/s/U1NHQgD8vbnByxLoT4rMeg',
      summary: `WMF(Webpack Module Federation)是webpack5提供的微前端解决方案，本文通过一个简单的例子来体验一下WMF。`,
      date:'2020-11-06',
      creator: 'DuLinRain',
      recommend: true,
      category: 'miscellaneous'
  }, 
  {
      title:'微前端框架single-spa小bug修复',
      tags:['微前端', 'single-spa'],
      link:'https://mp.weixin.qq.com/s/LOBuPo1zwNVks81RFz8hqg',
      summary: `前天看single-spa代码时发现其中有个非常小的bug，顺手修了一下。有关注微前端或者使用single-spa或阿里qiankun(基于single-spa)框架做微前端的可以了解一下。`,
      date:'2020-04-20',
      creator: 'DuLinRain',
      recommend: true,
      category: 'miscellaneous'
  }, 
  {
      title:'Flutter介绍？',
      tags:['flutter'],
      link:'https://mp.weixin.qq.com/s/FEIzo94UXu4AhKBBsLj-JA',
      date:'2020-02-23',
      creator: 'DuLinRain',
      recommend: true,
      category: 'miscellaneous'
  }, 
  {
      title:'TypeScript中是如何实现枚举的？',
      tags:['ts'],
      link:'/ts/TypeScript中是如何实现枚举的？.html',
      date:'2018-01-01',
      creator: 'DuLinRain',
      recommend: true,
      category: 'miscellaneous'
  }, 
  {
      title:'TS 公用类型',
      tags:['ts'],
      link:'/ts/TS 公用类型.md',
      date:'2022-11-22',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'TS keyof类型操作符',
      tags:['ts'],
      link:'/ts/TS keyof类型操作符.md',
      date:'2022-11-22',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'TS避免使用any的理由',
      tags:['ts'],
      link:'/ts/避免使用any的理由.md',
      date:'2022-11-12',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'TS Array类型',
      tags:['ts'],
      link:'/ts/TS Array类型.md',
      date:'2022-11-12',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'TS Object类型',
      tags:['ts'],
      link:'/ts/TS Object类型.md',
      date:'2022-06-12',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'用type还是用interface定义对象类型?',
      tags:['ts'],
      link:'/ts/用type还是用interface定义对象类型?.md',
      date:'2022-07-01',
      creator: 'DuLinRain',
      recommend: false,
      category: 'miscellaneous'
  }, 
  {
      title:'GitLab API调用方法',
      tags:['gitlab'],
      link:'/miscellaneous/GitLab API调用方法.html',
      summary: '',
      date:'2017-12-28',
      creator: 'DuLinRain',
      category: 'miscellaneous'
  }, 
  {
      title:'PWA介绍',
      tags:['pwa'],
      link:'/miscellaneous/PWA介绍.html',
      summary: 'pWA并不是一门新的技术，也不是新的框架，也不是新的语言，PWA使用的只是大部分现代浏览器内置的一些技术来增强我们的web应用，具体而言，PWA可以使我们的web应用像原生App那样工作，这其中包括拥有启动图标、启动画面、隐藏地址栏、请求拦截、请求缓存、离线缓存、消息推送、自动同步等功能。 这些都能在一定程度上解决现有web应用的痛点',
      date:'2018-10-21',
      creator: 'DuLinRain',
      category: 'miscellaneous'
  }, 
  {
      title:'ECharts入坑之旅',
      tags:['JavaScript','绘图库'],
      link:'/drawcharts/ECharts入坑之旅.html',
      summary: 'ECharts是百度开源的一款图表类JS库，可以提供丰富的绘图功能，但是在使用ECharts开发完一个项目之后，发现ECharts有很多不尽如人意的地方，甚至可以说是存在很多很多坑！！下面一一列举一下。',
      date:'2017-06-16',
      creator: 'DuLinRain',
      category: 'miscellaneous'
    }, {
      title:'HighCharts出坑之路',
      tags:['JavaScript','绘图库'],
      link:'/drawcharts/HighCharts出坑之路.html',
      summary: '前面一篇“ECharts入坑之旅”讲了ECharts中的若干坑，EChart中的很多坑在HighCharts中都是不存在的，或者说很容易就能够爬出来。下面来说说如何通过HighCharts来一一化解ECharts中的坑。',
      date:'2017-07-31',
      creator: 'DuLinRain',
      category: 'miscellaneous'
    }, 
    {
      title:'手把手教你实现一个简单的编译器',
      tags:['手把手系列'],
      link:'/handbyhand/手把手教你实现一个简单的编译器.html',
      summary: '今天我们将学习开发一个编译器，但是呢，这个编译器并不是说什么都能都编译，它只是一个超级小的编译器，主要用于说明编译器的一些基本的原理。',
      date:'2017-12-12',
      creator: 'DuLinRain',
      category: 'miscellaneous'
    }, {
      title:'手把手教你实现一个简单的Promise',
      tags:['手把手系列'],
      link:'/handbyhand/手把手教你实现一个简单的Promise.html',
      summary: '我们都知道，Promise是ES6标准，但是Promise其实早就有了，它实际上就是javascript中的承诺模式。 承诺模式是一种设计模式，在上世纪70年代就出现了。而promise的本质是异步编程，其内部也是用setTimeout(xxx, 0)来实现的， 我们今天将首先以简单的形式呈现ES6中promise是如何工作的，然后进一步地实现一个Promise。',
      date:'2017-12-17',
      creator: 'DuLinRain',
      recommend: true,
      category: 'miscellaneous'
    }, {
      title:'手把手教你实现一个简单的MVC模式',
      tags:['手把手系列'],
      link:'/handbyhand/手把手教你实现一个简单的MVC模式.html',
      summary: 'MVC模式由三大模块组成： 模型（M）、 视图（V）、 控制器（C）。 通常MVC模式的数据流的方向是模型-> 视图 -> 控制器 -> 模型。 而各模块之间的数据流是通过观察者模式联系起来的。 观察者模式用于为整个系统提供一个全局的消息事件管理模块，一个完整的观察者模式通常具备**发布**、**订阅**、**取消订阅**三种功能。',
      date:'2018-01-19',
      creator: 'DuLinRain',
      category: 'miscellaneous'
    }, {
      title:'手把手教你实现一个简单的MVP模式',
      tags:['手把手系列'],
      link:'/handbyhand/手把手教你实现一个简单的MVP模式.html',
      summary: '前面这篇文章[手把手教你实现一个简单的MVC模式]介绍了经典的MVC模式的实现。 MVP模式是MVC的衍生物，用于更好地分离模型和视图。 MVP模式与MVC模式区别不大，仅仅只是使用表示器（P）替换掉控制器（V）。',
      date:'2018-01-21',
      creator: 'DuLinRain',
      category: 'miscellaneous'
    }, {
      title:'手把手教你实现一个简单的MVVM模式',
      tags:['手把手系列'],
      link:'/handbyhand/手把手教你实现一个简单的MVVM模式.html',
      summary: '在前面的[手把手教你实现一个简单的MVC模式]和[手把手教你实现一个简单的MVP模式]两篇文章中，我们已经讲了一个简单的MVC和MVP模式。对这些模式的套路和区别有了一定的了解。本文将讲解现在比较主流的MVVM（模型-视图-视图模型）模式，这是目前的Vue、Angular等框架普遍采取的一种设计模式。',
      date:'2018-01-22',
      creator: 'DuLinRain',
      category: 'miscellaneous'
    },
]

window.ELEMENTUI_ARTICLES = [
  {
      title:'ElementUI之时间插件Bug',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之时间插件Bug.html',
      summary: 'Element UI是饿了么推出的基于VUE的小清新UI开源库，但是也存在许多Bug, 时间插件就存在一个显示的Bug',
      date:'2017-07-02',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之Alert组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之Alert组件剖析.html',
      summary: 'Alert组件用于弹出成功、错误、警告、提示等信息，组件是以单文件组件形式写的, 我们看看它的实现。',
      date:'2017-08-20',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之Switch组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之Switch组件剖析.html',
      summary: 'Switch组件主要用来切换开关的状态, 我们看看它的实现。',
      date:'2017-09-16',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之CheckBox组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之CheckBox组件剖析.html',
      summary: 'CheckBox组件是element提供的多选输出框，支持基础多选、禁用、中间状态、选项目数量的限、按钮组等，支持true-lable和false-label等。 我们看看它的实现。',
      date:'2017-08-25',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI扩充',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI扩充.html',
      summary: '本文主要讲述对ElementUI中部分组件的扩充。',
      date:'2017-11-22',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之Button组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之Button组件剖析.html',
      summary: 'Element UI中的Button组件用于提供基础按钮的功能，可以支持不同的颜色，支持图标以及支持禁用、指定大小、显示加载状态等功能, 我们看看它的源码实现。',
      date:'2017-08-20',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之Badge组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之Badge组件剖析.html',
      summary: 'Badge组件用于在按钮、图标等的右上角显示数字或状态标记, 本文来看看ElementUI对它的实现',
      date:'2017-08-20',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之Tag组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之Tag组件剖析.html',
      summary: 'ElementUI的tag组件用于提供一些可关闭的标签，可以通过type属性指定颜色主题，通过closable属性指定是否可关闭，color指定背景颜色，话不多说，看看源码实现',
      date:'2017-09-03',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI之InputNumber组件剖析',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI之InputNumber组件剖析.html',
      summary: 'InputNumber用来提供漂亮的输入数字的功能, 本文来看看ElementUI对它的实现',
      date:'2017-09-03',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI中broadcast和dispatch是如何实现的？',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI中broadcast和dispatch是如何实现的？.html',
      summary: '我们知道，在Vue里面，每个 Vue 实例都实现了事件接口，可以使用 $on(eventName) 监听事件，使用 $emit(eventName) 触发事件。但是呢，事件的触发只能在同一个实例/组件内使用，另外，父组件也可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件，但是不能用 $on 侦听子组件释放的事件，而必须在模板里直接用 v-on 绑定。我们可以通过下面的例子看一看：',
      date:'2017-12-08',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI中clickoutside.js的实现',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI中clickoutside.js的实现.html',
      summary: '我们在写前端的时候经常遇到这样一种场景，希望鼠标点击到元素外面的时候执行某种操作，比如说，点击空白处，菜单收起。这种场合其实是很多的，ElementUI将这种场景进行了抽象，巧妙地运用Vue的**自定义指令**的方式实现了这样的功能，该指定的使用方式如下：',
      date:'2017-12-08',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI中Dom.js源码阅读',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI中Dom.js源码阅读.html',
      summary: 'ElementUI中为了方便进行Dom相关的操作封装了一些DOM相关的代码在dom.js文件里面，事实上在Vue1.x中也封装过dom操作相关的操作，也叫dom.js，这篇文章的目的不是学习Vue1.x中dom.js的实现，而是学学ElementUI中dom.js的实现，实际上这里的代码完全可以部分或者全部的拿出来在别的场合使用。',
      date:'2017-12-08',
      creator: 'DuLinRain',
      category: 'elementui'
    }, {
      title:'ElementUI的主题生成工具是如何实现的？',
      tags:['JavaScript','ElementUI'],
      link:'/elementui/ElementUI的主题生成工具是如何实现的？.html',
      summary: '想必使用过Vue的人基本上都是用过ElementUI组件库，ElementUI有自己的默认样式，当然官网也提供了一个命令行的主题生成工具进行自定义主题生成。 官网以及仓库对它都有详细的描述。我们这里就不再赘述，这里专门讲述一下它的实现原理以及主题生成工具是如何编写的。',
      date:'2018-06-24',
      creator: 'DuLinRain',
      recommend: true,
      category: 'elementui'
    }, 
]


window.ES6_ARTICLES = [
  {
      title:'ES6之变量和作用域',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之变量和作用域.html',
      summary: 'ES6提供了新的方式用来声明变量：let和const。这两个几乎可以完全替代之前的var。',
      date:'2017-05-21',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之数值和数学函数',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之数值和数学函数.html',
      summary: '相较于ES5，ES6对数值做了一定的改进，主要体现在一下几点：1、增加了对二进制，八进制的支持。ES5只支持十进制和十六进制表示。2、为全局对象Number增加了一些新的属性。比如说Number.EPSILION。ES5在浮点数比较时存在较大问题3、可以判断数值是否超过最大表示范围。JS的合法范围也挺有意思',
      date:'2017-05-31',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之字符串新特性',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之字符串新特性.html',
      summary: 'ES6字符串新增了几个方法startsWith()，endsWith(),includes(),repeat()。',
      date:'2017-07-02',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之数组新特性',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之数组新特性.html',
      summary: 'ES6新增了两个静态方法from和of，其签名分别如下: 1. Array.from(arrayLike, mapFun?, thisArgs ?) 2. Array.of(...items)',
      date:'2017-07-01',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之TypedArrays',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之TypedArrays.html',
      summary: 'Typed Arrays是ES6用于处理二进制的数据结构，本文将讲述它们是如何工作的。',
      date:'2017-07-01',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之Map',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之Map.html',
      summary: 'ES6新增了四种数据集Map、Set、WeakMap、WeakSet。',
      date:'2017-07-01',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之Set',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之Set.html',
      summary: 'ES5中没有Set数据结构，但是有两种Work-arounds来实现：1. 使用对象来存储，对象的key是Set的元素，这样保证了唯一性2. 使用数组来存储，需要检查是否有重复元素。注意indexOf是发现不了NaN和undefined的。ES6新增了的数据集Set、WeakSet。',
      date:'2017-07-02',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之参数处理',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之参数处理.html',
      summary: 'ES6对参数处理做了很大的改进，它现在支持参数默认值，剩余参数（可变参数）以及解构',
      date:'2017-07-09',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之解构',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之解构.html',
      summary: 'ES6支持解构，能够很方便的从数据仓库中提取数据。解构让你使用某种模式从数据仓库中提取数据。',
      date:'2017-07-02',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之箭头函数',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之箭头函数.html',
      summary: 'ES6提供了一种新的函数--箭头函数，箭头函数可以带来两大好处：1、相比于传统函数，它们更简洁；2、箭头函数的this从箭头函数的外围得到，也就是说具有词法性质（lexical）,因为你不再需要使用bind或者that=this这样的变通（workaround）',
      date:'2017-06-06',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之面向对象编程（OOP）新特性',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之面向对象编程（OOP）新特性.html',
      summary: 'Class是ES6中最主要的面向对象编程新特性，除此之外，对象字面量以及一些实体方法也拥有面向对象新特性。',
      date:'2017-07-04',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之可调用实体',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之可调用实体.html',
      summary: '本文将包含以下三个方面：1. 可调用实体概述 2. 什么时候该使用什么样的调用 3. 两种方法调用方式以及它们在ES6中发生了哪些变化。',
      date:'2017-07-16',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之Class',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之Class.html',
      summary: '在ES5中，常常通过function来模拟其它语言中类的概念，并且通过原型链的方式实现继承。ES6中，为类的创建提供了class语法糖，并且为类的继承提供了extends语法糖。类的定义和类的继承可表示为如下',
      date:'2017-06-13',
      creator: 'DuLinRain',
      recommend: true,
      category: 'es6'
    }, {
      title:'ES6之迭代',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之迭代.html',
      summary: 'ES6为迭代引入了一个新的接口：Iterable。本章将讲解它是如何工作，那些语言结构通过它消费数据（比如说for...of循环），那些数据源提供数据（比如说Array）',
      date:'2017-09-03',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之Generators',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之Generators.html',
      summary: 'Generators是ES6的新特性，它其实是可以被暂停和唤醒的函数（想象一下协作多任务或协同程序），它在很多地方都有用，比如说迭代、异步编程等等。本章将讲解它是如何工作的以及它的几种使用场景。',
      date:'2017-09-16',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之模块',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之模块.html',
      summary: '本章将讲述ES6内置的模块是如何工作的。ES6中的模块存储在文件中，一个文件对应着一个模块，一个模块对应着一个文件。你可以通过两种方式导出一个模块，这两种方式可以混合使用，但是最好还是将他们分开使用。',
      date:'2017-10-09',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之异步编程基础',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之异步编程基础.html',
      summary: '本章主要讲述ES6异步编程的基础，它为下一章的Promise提供一个背景知识。',
      date:'2017-07-08',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'ES6之Unicode',
      tags:['JavaScript','ES6'],
      link:'/es6/ES6之Unicode.html',
      summary: '本章将描述ES6对Unicode支持的改进。',
      date:'2017-09-27',
      creator: 'DuLinRain',
      category: 'es6'
    }, {
      title:'使用ES6解构语法进行代码优化',
      tags:['JavaScript','ES6'],
      link:'/es6/使用ES6解构语法进行代码优化.html',
      summary: '本文将介绍ES6解构语法对代码进行优化的方法。具体介绍：1、undefined优化 2、对象合并优化',
      date:'2017-10-17',
      creator: 'DuLinRain',
      recommend: true,
      category: 'es6'
    }, 
]

window.ESNEXT = [
  {
      title:'ECMAScript2016(ES7)',
      tags:['JavaScript','ES7'],
      link:'/es7_8/ECMAScript2016(ES7).html',
      summary: 'ECMAScript2016只增加了两个新特性： 1. Array.prototype.includes方法 2. 幂操作符（**）',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之参数列表尾部的逗号',
      tags:['JavaScript','ES8'],
      link:'/es7_8/ECMAScript2017之参数列表尾部的逗号.html',
      summary: '本章讲述ECMAScript2017中由Jeff Morrision提交的“函数定义和调用时参数列表尾部的参数”。',
      date:'2017-07-23',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之字符串新特性',
      tags:['JavaScript','ES8'],
      link:'/es7_8/ECMAScript2017之字符串新特性.html',
      summary: '本章将讲述由Jordan Harband和Rick Waldon提交的ECMAScript2017字符串操作的两个新的方法：padStart和padEnd',
      date:'2017-07-23',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之对象迭代',
      tags:['JavaScript','ES8'],
      link:'/es7_8/ECMAScript2017之对象迭代.html',
      summary: 'ES6中大部分数据结构都是可以迭代的，但是对象字面量却是不可迭代的，要想对对象进行迭代，我们只能借用Object.keys()或其它方法来进行一定程度的迭代，但远远没有其它数据结构的迭代那么方便。ECMAScript2017中新增了两个方法Object.entries()和Object.values()用于增强对象的迭代。',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之getOwnPropertyDescriptors',
      tags:['JavaScript','ES8'],
      link:'/es7_8/ECMAScript2017之getOwnPropertyDescriptors.html',
      summary: '本章将讲述由Jordan Harband和Andrea Giammarchi提交的ECMAScript2017新特性——Object.getOwnPropertyDescriptors()',
      date:'2017-07-22',
      creator: 'DuLinRain',
      recommend: true,
      category: 'esnext'
    }, {
      title:'ECMAScript2017之异步函数',
      tags:['JavaScript','ES8'],
      link:'/es7_8/ECMAScript2017之异步函数.html',
      summary: '本章将讲述由Brian Terlson提出的ECMAScript2017新特性——异步函数（async function）。',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之共享内存和原子',
      tags:['JavaScript','ES8'],
      link:'/es7_8/ECMAScript2017之共享内存和原子.html',
      summary: '本章将讲述由Lars T. Hansen提出的ECMAScript 2017的新功能——共享内存和原子。它引入了一个新的构造函数SharedArrayBuffer和具有辅助函数的命名空间对象Atomics。本章将介绍其细节。',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    },
    {
      title:'ES9提案之Promise.prototype.finally()',
      tags:['es9'],
      link:'/es9/ES9提案之Promise.prototype.finally().html',
      summary: '这篇文章将讲述由 `Jordan Harband` 提交的提案——`Promise.prototype.finally()`',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES9提案之模板字面量修订',
      tags:['es9'],
      link:'/es9/ES9提案之模板字面量修订.html',
      summary: '由`Tim Disney`提交的[模板字面量修订]ECMAScript提案给予了标记模板字面量（tagged template literals）内部更加自由的语法.',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES9提案之正则表达式修饰符s(dotAll)',
      tags:['es9'],
      link:'/es9/ES9提案之正则表达式修饰符s(dotAll).html',
      summary: '这篇文章讲述由Mathias Bynens提出的[正则表达式修饰符 s (dotAll)](https://github.com/tc39/proposal-regexp-dotall-flag)提案。',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, 
    {
      title:'ECMAScript2016(ES7)',
      tags:['JavaScript','ES7'],
      link:'/exnext/ECMAScript2016(ES7).html',
      summary: 'ECMAScript2016只增加了两个新特性： 1. Array.prototype.includes方法 2. 幂操作符（**）',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'exnext'
    }, {
      title:'ECMAScript2017之参数列表尾部的逗号',
      tags:['JavaScript','ES8'],
      link:'/esnext/ECMAScript2017之参数列表尾部的逗号.html',
      summary: '本章讲述ECMAScript2017中由Jeff Morrision提交的“函数定义和调用时参数列表尾部的参数”。',
      date:'2017-07-23',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之字符串新特性',
      tags:['JavaScript','ES8'],
      link:'/esnext/ECMAScript2017之字符串新特性.html',
      summary: '本章将讲述由Jordan Harband和Rick Waldon提交的ECMAScript2017字符串操作的两个新的方法：padStart和padEnd',
      date:'2017-07-23',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之对象迭代',
      tags:['JavaScript','ES8'],
      link:'/esnext/ECMAScript2017之对象迭代.html',
      summary: 'ES6中大部分数据结构都是可以迭代的，但是对象字面量却是不可迭代的，要想对对象进行迭代，我们只能借用Object.keys()或其它方法来进行一定程度的迭代，但远远没有其它数据结构的迭代那么方便。ECMAScript2017中新增了两个方法Object.entries()和Object.values()用于增强对象的迭代。',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之getOwnPropertyDescriptors',
      tags:['JavaScript','ES8'],
      link:'/esnext/ECMAScript2017之getOwnPropertyDescriptors.html',
      summary: '本章将讲述由Jordan Harband和Andrea Giammarchi提交的ECMAScript2017新特性——Object.getOwnPropertyDescriptors()',
      date:'2017-07-22',
      creator: 'DuLinRain',
      recommend: true,
      category: 'esnext'
    }, {
      title:'ECMAScript2017之异步函数',
      tags:['JavaScript','ES8'],
      link:'/esnext/ECMAScript2017之异步函数.html',
      summary: '本章将讲述由Brian Terlson提出的ECMAScript2017新特性——异步函数（async function）。',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ECMAScript2017之共享内存和原子',
      tags:['JavaScript','ES8'],
      link:'/esnext/ECMAScript2017之共享内存和原子.html',
      summary: '本章将讲述由Lars T. Hansen提出的ECMAScript 2017的新功能——共享内存和原子。它引入了一个新的构造函数SharedArrayBuffer和具有辅助函数的命名空间对象Atomics。本章将介绍其细节。',
      date:'2017-07-22',
      creator: 'DuLinRain',
      category: 'esnext'
    }, 
    {
      title:'ES9提案之Promise.prototype.finally()',
      tags:['es9'],
      link:'/esnext/ES9提案之Promise.prototype.finally().html',
      summary: '这篇文章将讲述由 `Jordan Harband` 提交的提案——`Promise.prototype.finally()`',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES9提案之剩余运算符与展开运算符特性',
      tags:['es9'],
      link:'/esnext/ES9提案之剩余运算符与展开运算符特性.html',
      summary: '剩余运算符/展开运算符是由`Sebastian Markbåge`提出的提案，它支持：1、剩余运算符可支持对象解构。当前，我们的剩余运算符只支持数组解构和参数定义。2、展开运算符可支持对象字面量。当前我们的展开运算符只支持数组字面量以及函数和方法调用。',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES9提案之模板字面量修订',
      tags:['es9'],
      link:'/esnext/ES9提案之模板字面量修订.html',
      summary: '由`Tim Disney`提交的[模板字面量修订]ECMAScript提案给予了标记模板字面量（tagged template literals）内部更加自由的语法.',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES9提案之正则表达式修饰符s(dotAll)',
      tags:['es9'],
      link:'/esnext/ES9提案之正则表达式修饰符s(dotAll).html',
      summary: '这篇文章讲述由Mathias Bynens提出的[正则表达式修饰符 s (dotAll)](https://github.com/tc39/proposal-regexp-dotall-flag)提案。',
      date:'2018-04-06',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES2020之可选链(optional chaining)新特性',
      tags:['es2020'],
      link:'/esnext/ES2020之可选链(optional chaining)新特性.html',
      summary: `在JavaScript中，通常会有较长的属性访问，这些属性访问常常是通过链式进行的。 但是当其中一个出现undefined或null（undefined或null在英
      文里通常称为nullish值）的时候的时候，很容易会抛出错误，导致程序异常。一种比较常见的解决方式是使用比较长或者比较深的if语句来实现`,
      date:'2020-05-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'esnext'
    }, {
      title:'ES新特性之findLast 和 findLastIndex',
      tags:['es2021'],
      link:'/esnext/ES新特性之findLast 和 findLastIndex.html',
      summary: `findLast 和 findLastIndex用于从后往前获取数组元素。它们和他们的另一半find 和 findIndex 用法完全一样，除了从后往前查找。`,
      date:'2021-12-19',
      creator: 'DuLinRain',
      recommend: false,
      category: 'esnext'
    }, {
      title:'ES新特性之import断言',
      tags:['es2021'],
      link:'/esnext/ES新特性之import断言.html',
      summary: `新的import断言特性允许模块引入语句在模块标识符处包含额外的信息。一个最初始的用处是引入JSON时使它是一个json模块。`,
      date:'2021-12-19',
      creator: 'DuLinRain',
      recommend: false,
      category: 'esnext'
    }, {
      title:'ES2021新特性之逻辑赋值操作符',
      tags:['es2021'],
      link:'/esnext/ES2021新特性之逻辑赋值操作符.html',
      summary: `ES2021提供了几种新的逻辑赋值操作符，简化我们的代码书写，分别是 ||=、&&= 、??=。`,
      date:'2021-02-19',
      creator: 'DuLinRain',
      recommend: false,
      category: 'esnext'
    }, {
      title:'ES2019之字符串trimStart和trimEnd',
      tags:['es2019'],
      link:'/esnext/ES2019之字符串trimStart和trimEnd.html',
      summary: `ES2019之字符串trimStart和trimEnd`,
      date:'2020-04-13',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES2019之try...catch新特性',
      tags:['es2019'],
      link:'/esnext/ES2019之try...catch新特性.html',
      summary: `ES2019之try...catch新特性`,
      date:'2020-04-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'esnext'
    },{
      title:'ES2019之Function.prototype.toString新特性',
      tags:['es2019'],
      link:'/esnext/ES2019之Function.prototype.toString新特性.html',
      summary: `ES2019之Function.prototype.toString新特性`,
      date:'2020-04-13',
      creator: 'DuLinRain',
      category: 'esnext'
    }, {
      title:'ES2019 Array之 flat 和 flapMap',
      tags:['es2019'],
      link:'/esnext/ES2019 Array之 flat 和 flapMap.html',
      summary: `ES2019 Array之 flat 和 flapMap`,
      date:'2020-04-18',
      creator: 'DuLinRain',
      recommend: true,
      category: 'esnext'
    }, {
      title:'ES10 之 Object.fromEntries',
      tags:['es2019'],
      link:'https://mp.weixin.qq.com/s/nvUj1o4Q9ApL8kzRzzMGHQ',
      summary: `Object.fromEntries是js新增的一个有用的原生方法。在解释它的用法之前，我们先来看看已存在的 Objcet.entries的用法。`,
      date:'2019-08-18',
      creator: 'DuLinRain',
      recommend: true,
      category: 'esnext'
    }, {
      title:'ES11 之 Promise新特性',
      tags:['es2020'],
      link:'https://mp.weixin.qq.com/s/MAGqLeVBu6qhy32nebSj1w',
      summary: `ES6(ECMAScript 2015)引入了Promise，他有2个比较常用的静态方法：Promise.all和Promise.race。`,
      date:'2019-08-19',
      creator: 'DuLinRain',
      category: 'esnext'
    }  
]

window.GO_ARTICLES = [
  {
      title:'Consul服务网络入门',
      tags:['go', '服务发现', 'consul'],
      link:'https://mp.weixin.qq.com/s/n_2scKe9MMmYHJv-syJ3aQ',
      summary: `Consul是一种网络工具，可提供功能齐全的Service Mesh控制和服务发现。 除此之外，Consul 还提供用于管理服务配置的KV存储。下面我们来学习如何在本地使用Consul的常见功能。`,
      date:'2020-08-09',
      creator: 'DuLinRain',
      recommend: true,
      category: 'go'
  },
  {
      title:'GO调度原理一：操作系统调度',
      tags:['go'],
      link:'https://mp.weixin.qq.com/s/wT_lGkC8BvA4fS6ggERDQQ',
      summary: `这是一个关于Go调度原理的系列文章，共有三个部分，本文是其中的第一篇。
      本系列文章将讲述Go程序调度背后的机制和语义。本文的重点则是操作系统调度。
      Go调度器的设计和实现使得多线程Go程序更加高效、性能更好。这需要归功于Go调度器在设计时对
      操作系统(OS)调度器的机械同情(即软硬件协同工作)。`,
      date:'2020-09-02',
      creator: 'DuLinRain',
      recommend: true,
      category: 'go'
  },
  {
      title:'Go调度原理二：Go调度',
      tags:['go'],
      link:'https://mp.weixin.qq.com/s/gAm2MSLVO_1slw-Cgis3aA',
      summary: `在该系列的第一篇文章中，我们已经解释了操作系统调度的各个方面，我认为这对理解和
      欣赏Go调度的语义非常重要。在这一部分，我将从语义层面讲一下Go的调度是如何进行的。Go调度调度
      本身其实很复杂，很多细节不用过分关注，重要的是通过一个模型来理解Go的调度机制，这有助于在实
      践中做出更好的决策。`,
      date:'2020-09-08',
      creator: 'DuLinRain',
      recommend: true,
      category: 'go'
  },
  {
      title:'GO调度原理三：并发',
      tags:['go'],
      link:'https://mp.weixin.qq.com/s/awyKxAI8eH78oynJAGELaw',
      summary: `并发的意思就是“乱序执行”，对一组本来应该顺序执行的指令，以某种方式乱序地执行他们并得
      到同样的输出结果。对于摆在你面前的问题而言，乱序执行显然会增加价值。这里所说的价值是指，以增加复
      杂性为代价来换取更好的性能。当然主要还是取决于你所面对的问题，可能有时候乱序执行并不可行或者不会
      带来任何收益。`,
      date:'2020-09-21',
      creator: 'DuLinRain',
      recommend: true,
      category: 'go'
  }
]

window.HTTP_ARTICLES = [
  {
      title:'HTTP状态码中302和307有什么区别？',
      tags:['http1.1'],
      link:'/http1.1/HTTP状态码中302和307有什么区别？.html',
      summary: '在HTTP状态码中，3XX表示浏览器需要采取进一步的行动以便完成这次请求。而这其中我们最为常见的是重定向。说到重定向就不得不说一说302。一般我们都把302称为“临时重定向”。但其实302并不是临时重定向。302真实的名字叫Found。HTTP确实有一个叫做“临时重定向”的状态码，这个状态码是307。表示那么302和307各表示什么呢？为什么我们常常会把302认为是临时重定向呢？他们有什么相同点和不同点呢？',
      date:'2018-04-22',
      creator: 'DuLinRain',
      category: 'http1.1'
    }, {
      title:'HTTP状态码中303与302、307有什么区别？',
      tags:['http1.1'],
      link:'/http1.1/HTTP状态码中303与302、307有什么区别？.html',
      summary: '我们在HTTP状态码中302和307有什么区别？中详细讨论了302和307的区别，实际上他们除了对Location指定资源的请求方式有区别外，没有其它的区别。今天呢我们再看看303的含义以及它和302/307的区别在哪里。',
      date:'2018-04-22',
      creator: 'DuLinRain',
      recommend: true,
      category: 'http1.1'
    }, {
      title:'HTTP状态码中301含义及其缓存策略',
      tags:['http1.1'],
      link:'/http1.1/HTTP状态码中301含义及其缓存策略.html',
      summary: '我们在HTTP状态码中302和307有什么区别？以及HTTP状态码中303与302、307有什么区别？中已经讲过了302(Found)、307(Temporary Redirection)、303(See Other)这几种状态码的含义以及他们之前的相同点和不同点，今天我们继续看看HTTP状态码301的含义。',
      date:'2018-04-23',
      creator: 'DuLinRain',
      category: 'http1.1'
    }, {
      title:'HTTP1.1请求分类',
      tags:['http1.1'],
      link:'/http1.1/HTTP1.1请求分类.html',
      summary: 'TTP请求可以大体上从不同方面分为几类，这其中包括：安全/非安全请求,安全/非安全请求,安全/非安全请求。本文就来分析一下。',
      date:'2018-10-30',
      creator: 'DuLinRain',
      category: 'http1.1'
    }, 
]

window.JAVASCRIPT_DESIGN_PATTERN_ARTICLES = [
  {
      title:'JavaScript设计模式（创建型）之工厂模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（创建型）之工厂模式.html',
      date:'2017-05-13',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（创建型）之生成器模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（创建型）之生成器模式.html',
      date:'2017-05-13',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（创建型）之原型模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（创建型）之原型模式.html',
      date:'2017-05-13',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（创建型）之单体模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（创建型）之单体模式.html',
      date:'2017-05-13',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之适配器模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之适配器模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之门面模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之门面模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之装饰者模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之装饰者模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之组合模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之组合模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之享元模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之享元模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之掺合模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之掺合模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之模块模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之模块模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（结构型）之代理模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（结构型）之代理模式.html',
      date:'2017-05-14',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之职责链模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之职责链模式.html',
      date:'2017-05-20',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之命令模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之命令模式.html',
      date:'2017-05-20',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之迭代器模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之迭代器模式.html',
      date:'2017-05-20',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之观察者模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之观察者模式.html',
      date:'2017-05-20',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之中介者模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之中介者模式.html',
      date:'2017-05-21',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之策略模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之策略模式.html',
      date:'2017-05-21',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, {
      title:'JavaScript设计模式（行为型）之承诺模式',
      tags:['JavaScript','设计模式'],
      link:'/javascript-design-pattern/JavaScript设计模式（行为型）之承诺模式.html',
      date:'2017-05-21',
      creator: 'DuLinRain',
      category: 'javascript-design-pattern'
    }, 
]

window.NODEJS_ARTICLES = [
  {
      title:'NodeJS应用HMR的实现方式',
      tags:['nodejs'],
      link:'/nodejs/NodeJS应用HMR的实现方式.html',
      summary: `前端项目的HMR我们都比较熟悉，NodeJS的项目HMR是怎么实现的呢？实际上本质上是一样的———监听文件变化并重新加载。但是与前端所谓的HMR不完全一样，NodeJS里的HMR可以认为只是HR（Hot Reload）。因为我们常见的模式都是监听到文件变动之后直接重启NodeJS应用。`,
      date:'2021-06-10',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'深入理解CommonJS模块',
      tags:['nodejs'],
      link:'/nodejs/深入理解CommonJS模块.html',
      summary: `NodeJS里是原生支持CommonJS模块的。我们在写NodeJS的时候会随心所欲地在文件中直接用module.exports，exports, require等，就好像它们都是全局存在一样。实际上并不是这样的。NodeJS将每个文件都视为一个独立的模块，我们在文件中使用的module，exports, require实际上都只是在当前文件中存在的局部变量。除了前面提到的几个变量，还存在__filename, __dirname 这2个看着像是全局存在的变量。实际上，NodeJS在执行每个文件之前都会给它在外面包裹这么一层代码：`,
      date:'2021-06-16',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'每天学一个npm包之——promise-pool',
      tags:['nodejs', 'npm'],
      link:'/nodejs/每天学一个npm包之——promise-pool.html',
      summary: `Promise.all是我们进行并发的常用手段，但是有时候，我们所面对的调用的目标不太能接受很大并发量，这时候直接用promise.all就有问题了，需要 对Promise.all进行调控。@supercharge/promise-pool就是一个很好用的工具包。在学习@supercharge/promise-pool的具体实现之前，我们先来尝试自己实现一个。`,
      date:'2021-02-10',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'每天学一个npm包之——goodies',
      tags:['nodejs', 'npm'],
      link:'/nodejs/每天学一个npm包之——goodies.html',
      summary: `@supercharge/goodies是一个npm包，提供几个帮助函数便于编写JS代码。其中主要的2个方法是tap(value, callback)和upon(value, callback)。除此之外还提供一些判断Promise、async的辅助函数。我们先来看一下这些函数的用法。`,
      date:'2021-02-10',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'egg环境变量解析规则与源码',
      tags:['nodejs', 'egg'],
      link:'https://mp.weixin.qq.com/s/AnvUVF9WL_1R_HCr2_bN-Q',
      summary: `egg官网对egg的运行环境有详尽的文字说明(https://eggjs.org/zh-cn/basics/env.html), 大体上，设置egg环境变量有以下2种方式：1. 通过 config/env 文件指定，该文件的内容就是运行环境，如 prod。一般通过构建工具来生成这个文件。2. 通过 EGGSERVERENV 环境变量指定。`,
      date:'2019-09-09',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'koa详解',
      tags:['nodejs', 'koa'],
      link:'https://mp.weixin.qq.com/s/AnvUVF9WL_1R_HCr2_bN-Q',
      summary: `本文将详细讲述koa的实现原理,我们将带着一系列的问题，循序渐进的讲述koa的整个实现。通过本文，你讲了解到一下几点：1. 使用koa搭建http服务与使用node内置http模块创建有什么区别？
      2.koa的中间件是如何级联并实现洋葱圈模式的？ 3. koa中的ctx是如何实现的？ 4. koa中request和response是如何实现的？ 5. koa中request和response与node内置http模块的req和res有什么区别？
      6. koa中ctx.xxx方法都是如何实现的？ 7. koa的整体架构
      `,
      date:'2019-07-28',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'每天学习一个node包——fresh',
      tags:['nodejs'],
      link:'https://mp.weixin.qq.com/s/iHSp9IRwqVMIC7FZOHRm4A',
      summary: `fresh包用来检查响应是否过期，当请求到达服务端后，服务端通常需要根据用户的缓存策略来决定响应类型：1. 如果用户设置了 Cache-Control:no-cache头，那么服务端总是必须返回新的，fresh的结果为false，这时响应的code是200 2. 否则，如果用户的请求是条件请求，则根据header中的字段决定响应是否过期，如果已过期，则fresh为false, 响应是200。否则fresh为true，返回304（not modify）。`,
      date:'2019-06-25',
      creator: 'DuLinRain',
      category: 'nodejs'
  },
  {
      title:'每天学一个node包——egg-cluster',
      tags:['nodejs', '服务部署'],
      link:'https://mp.weixin.qq.com/s/yVnPywJPTqeLT4wOEKQV_Q',
      summary: `egg-cluster包用于管理egg以集群模式启动的时候的各种进程，处理进程之间的通信。 根据官网文档的描述，egg的启动时序如下: 1. Master 启动后先 fork Agent 进程 2. Agent 初始化成功后，通过 IPC 通道通知 Maste 3. Master 再 fork 多个 App Worker 4. App Worker 初始化成功，通知 Master 5. 所有的进程初始化成功后，Master 通知 Agent 和 Worker 应用启动成功. 上述所有的过程是通过egg-cluster实现的。 所以我们来学习一下egg-cluster的源码。`,
      date:'2019-06-23',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'每天学一个node包——cfork',
      tags:['nodejs', '服务部署'],
      link:'https://mp.weixin.qq.com/s/BWGa1WAciiRdB8x3UdLJ4g',
      summary: `因为单个 Node.js 实例运行在单个线程中。 为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务。 egg在以集群模式启动的时候会用cfork包去fork一些worker进程。`,
      date:'2019-06-22',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS事件循环(Event Loop) Part7—浏览器 VS Nodejs',
      tags:['nodejs', 'EventLoop'],
      link:'/nodejs/NodeJS事件循环(Event%20Loop)%20Part7——浏览器%20VS%20Nodejs.html',
      summary: `事件循环对于新人来说是个非常令人困惑的主题并且通常不是百分之百理解。更令人困惑的是，你经常会遇到2个比较流行的词：“NodeJS Event Loop” 和 “JavaScript Event Loop”。前者顾名思义，后者则是指运行在浏览器中的事件循环。既然有这2个区分，那么就会引申出如下问题：1. 这2个东西是一样的吗？还是说只是有些相似？亦或是完全不同？ 2. 如果不同的话，不同点在哪里？ 3. 如果相同的话，为什么我们要区分“NodeJS Event Loop” 和 “JavaScript Event Loop”？ 简单说的话，是的，他们的某些行为很相似。另一方面，它们又在有些方面有所不同。因此，在这篇文章中，我将使用一些例子来讨论它们的不同之处，并借此帮你理清一些令你困扰的问题。`,
      date:'2021-02-17',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS 事件循环(Event Loop) Part6——定时器和微任务在Node v11及其之后的新变化',
      tags:['nodejs', 'EventLoop'],
      link:'/nodejs/NodeJS事件循环(Event%20Loop)%20Part6——定时器和微任务在Node%20v11及其之后的新变化.html',
      summary: `这篇文章是继NodeJS事件循环之后的一篇比较简短的文章。在之前的系列文章中，我详细讲述了定时器(Timers, setTimeout/setInterval)、setImmediate、process.nextTick，Promise等等内容。然而，从Node v11.0.0版本开始，setTimeout, setImmediate, process.nextTick 和 Promises的行为有了重大变化。本文将通过对比这些函数在Node<v11.0.0 和 Node ≥ v11.0.0 中的不同表现来讨论它们的变化。如果你错过了前面的系列文章，我建议你回过头去翻一翻。`,
      date:'2019-10-09',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS 事件循环(Event Loop) Part5——最佳实践',
      tags:['nodejs', 'EventLoop'],
      link:'https://mp.weixin.qq.com/s/trRtaEkf_g8qQ8QjK3JftQ',
      summary: `NodeJS 事件循环(Event Loop) Part5——最佳实践。欢迎回到事件循环系列。到目前为止，在事件循环这一系列中，我们讨论了事件循环和它的不同节拍， setImmediates, nextTicks, timers, I/O。我相信你现在对事件循环有了更深入的理解。因此，让我们讨论一下最佳实践，讨论在开发NodeJS应用程序时候该做什么和不该做什么从而达到最好的性能和结果。`,
      date:'2019-06-06',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS 事件循环(Event Loop) Part4 —— Handling I/O',
      tags:['nodejs', 'EventLoop'],
      link:'https://mp.weixin.qq.com/s/GMJeQbPx8ZJfoeM_Ifq6LA',
      summary: `NodeJS 事件循环(Event Loop) Part4 —— Handling I/O 。欢迎回到NodeJS事件循环系列。在本博文中，我将详细谈谈NodeJS是如何处理I/O的。并且我希望去深入探究事件循环的实现以及I/O如何与其他异步操作一起工作。如果你错过了该系列的前面几篇博文，我强烈推荐你回过头去看一看。`,
      date:'2019-06-05',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS 事件循环(Event Loop) Part3 —— Promise, Next-Ticks, and Immediates',
      tags:['nodejs', 'EventLoop'],
      link:'https://mp.weixin.qq.com/s/Afk4RbN-1bj2I1siJ_ffjQ',
      summary: `NodeJS 事件循环(Event Loop) Part3 —— Promise, Next-Ticks, and Immediates。欢迎回到NodeJS事件循环系列,在该系列的第一篇博文中，我们讨论了NodeJS的整体概况及其不同的阶段。随后在第二篇博文中，我们讨论了定时器(timers)和immediates 在事件循环中的存在以及事件队列是如何按步骤执行的。在本文中，我们将讨论事件循环是如何处理resolved/rejected promises(包括原生Promise，Q promises, Bluebird promises) 和 next tick callbacks的。如果你还不熟悉Promise,建议你先了解它一下。相信我，会非常有趣。`,
      date:'2019-06-04',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS 事件循环(Event Loop) Part2 —— Timers, Immediates and Process.nextTick',
      tags:['nodejs', 'EventLoop'],
      link:'https://mp.weixin.qq.com/s/fWryVuZkMtgpHlwmxXmbSg',
      summary: `NodeJS 事件循环(Event Loop) Part2 —— Timers, Immediates and Process.nextTick。欢迎回到事件循环(Event Loop)文章系列，在该系列的第一部分，我讲述了NodeJS 事件循环的整体架构。在这篇博文中，我将结合代码片段详细地讨论在第一篇博文中提到的三种重要的队列。它们是timers, immediates 和 process.nextTick callbacks。`,
      date:'2019-06-03',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'NodeJS 事件循环(Event Loop) Part1 —— 总体概况',
      tags:['nodejs', 'EventLoop'],
      link:'https://mp.weixin.qq.com/s/Z-QKh58i0f6PYV6Hh0z0_w',
      summary: `NodeJS区别于其它编程平台主要是在于它处理I/O的方式。 在别人介绍NodeJS的时候我们总会听到他们说NodeJS是“一个基于google V8 javascript引
擎的非阻塞、事件驱动的平台”。那这句话到底是什么意思呢？“非阻塞”以及“事件驱动”到底意味着什么呢？这些问题的所有答案埋藏在NodeJS的核心部分——Event Loop(事件循环)。
在这一系列的博文中，我将讲述什么是Event Loop，它是如何工作的，它如何影响我们的应用程序以及如何充分地利用它。为什么要用一系列的博文而不是一篇呢？好吧，如果写成一
篇的话将会非常的长，并且我有可能会丢失比较重要的内容，因此我为此写了一个系列的文章。在这第一篇博文中，我将讲述“NodeJS是如何工作的”，“它如何访问I/O”以及“它是怎样在不同平台工作的”等内容。`,
      date:'2019-05-31',
      creator: 'DuLinRain',
      recommend: true, 
      category: 'nodejs'
  },
  {
      title:'每天学一个node包——http-errors',
      tags:['nodejs'],
      link:'https://mp.weixin.qq.com/s/-WEiHfo0PTJYOwf8p8nJeQ',
      summary: `http-errors用来创建http 错误，通常是4xx、 5xx类型的错误。在koa以及koa-router中都有用到。`,
      date:'2019-05-28',
      creator: 'DuLinRain',     
      category: 'nodejs'
  },
  {
      title:'每天学一个node包——statues',
      tags:['nodejs'],
      link:'https://mp.weixin.qq.com/s/a_yx2Mayro4uZU2zTALWYA',
      summary: `statues包用于提供http的返回码以及对应的含义列表。 我们可以很方便的通过code码查询对应的含义或者相反。 koa以及koa-router中都有使用statuses包。`,
      date:'2019-05-27',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, 
  {
      title:'每天学习一个node包之mime',
      tags:['nodejs'],
      link:'/nodejs/每天学习一个node包之mime.html',
      summary: `mime（https://www.npmjs.com/package/mime）是一个node包，提供了文件扩展名 和
      http头Content-Type的一一映射，如果你需要处理文件上传相关的工作，这会非常有帮助。eggjs的urllib
      包在处理文件上传时也使用了mime这个包来设置Content-Type。`,
      date:'2019-10-11',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——co-body',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——co-body.html',
      summary: `在学习co-body之前，我们先回顾一下http流的传输过程，客户端向服务端发送请求，这个请求头里会带有Content-Type，用于标识我们的内容的类型，以及Content-Encoding，用于标识我们的消息体的压缩编码方式。`,
      date:'2020-02-02',
      creator: 'DuLinRain',  
      recommend: true,   
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——compose',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——compose.html',
      summary: `koa-compose用于将koa的多个中间件组合起来，实现洋葱圈模式的调用`,
      date:'2019-05-20',
      creator: 'DuLinRain', 
      recommend: true,    
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——depd',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——depd.html',
      summary: ``,
      date:'2019-05-20',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——destory',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——destory.html',
      summary: `destroy包用于确保销毁一个流，它将不同流的API做了封装并且hack了一个Node.js本身的bug。koa中使用它处理http响应Content-Type是Buffer的情形。`,
      date:'2019-05-20',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——formidable',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——formidable.html',
      summary: ``,
      date:'2020-02-08',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——inflation',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——inflation.html',
      summary: `在学习inflation之前，我们先回顾一下http流的传输过程，客户端向服务端发送请求，这个请求头里会带有Content-Type，用于标识我们的内容的类型，以及Content-Encoding，用于标识我们的消息体的压缩编码方式。其具体的含义如下：`,
      date:'2020-02-02',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——koa-body',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——koa-body.html',
      summary: `在用koa搭建node服务的时候，通常我们都会使用koa-body对http请求体进行解析，最终会将body提取出来放在ctx.request.body或ctx.req.body上。koa-body能够处理multipart/form-data、application/x-www-urlencoded、application/json等几种常见的Content-Type。而由于multipart/form-data类型具有一定的特殊性，所以koa-body在解析body时，实际上是把整个解析流程根据Content-Type分成了2大类，其整体的流程如下`,
      date:'2020-02-08',
      creator: 'DuLinRain',  
      recommend: true,   
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——koa-convert',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——koa-convert.html',
      summary: `koa-convert包用于将<=1.x版本中的generator形式的middleware转换成2.x中promise形式的middleware。当然它也可以将promise形式的中间件转换成generator形式的中间件。`,
      date:'2019-05-20',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——koa-csrf',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——koa-csrf.html',
      summary: ``,
      date:'2020-02-23',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——koa-jsonp',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——koa-jsonp.html',
      summary: `这篇文章主要为你讲述koa-jsonp是如何处理JSONP请求的，在讲述koa-jsonp具体的实现之前，会先带你回顾一下JSONP及其原理。学习完这篇文章后你会对下面几个问题有一些了解：`,
      date:'2020-02-15',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——koa-session',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——koa-session.html',
      summary: `在前面的几篇文章中，我们已经介绍了一个http请求走到服务端时，服务端第一步所做的事情。接下来，本文将会讲述session以及其在koa中的具体实现。学完本文之后，你可能会对以下知识点有一些认识：`,
      date:'2020-04-13',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——only',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——only.html',
      summary: `only是一个npm包，用于从某个对象中取出部分指定的属性，它接受一个由属性组成的数组或者空格分隔的字符串作为参数，返回一个新的对象。`,
      date:'2019-05-20',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'每天学一个npm包——raw-body',
      tags:['nodejs'],
      link:'/nodejs/每天学一个npm包——raw-body.html',
      summary: `在学习raw-body之前，我们先回顾一下http流的传输过程，客户端向服务端发送请求，这个请求头里会带有Content-Type，用于标识我们的内容的类型，以及Content-Encoding，用于标识我们的消息体的压缩编码方式。`,
      date:'2020-02-02',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'在egg.js中进行文件上传、下载及预览',
      tags:['nodejs'],
      link:'/nodejs/在egg.js中进行文件上传、下载及预览.html',
      summary: `egg同时支持form-data和stream形式的文件上传，可以通过mode指定支持哪种模式，如果需要同时支持，需要以fileModeMatch字段指定。比如下面配置表示：除符合/^\/maccountsetting\/smallVideoAgency\/规则的接口走form-data模式外，其它都走stream模式。`,
      date:'2019-11-21',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }, {
      title:'在浏览器中调试NodeJS程序',
      tags:['nodejs'],
      link:'/nodejs/在浏览器中调试NodeJS程序.html',
      summary: `egg同时支持form-data和stream形式的文件上传，可以通过mode指定支持哪种模式，如果需要同时支持，需要以fileModeMatch字段指定。比如下面配置表示：除符合/^\/maccountsetting\/smallVideoAgency\/规则的接口走form-data模式外，其它都走stream模式。`,
      date:'2019-06-03',
      creator: 'DuLinRain',     
      category: 'nodejs'
  }
  
]

window.REACT_ARTICLES = [
    {
      title:'useSignal()—web框架的未来',
      tags:['reactivity'],
      link:'/reactivity/useSignal()—web框架的未来.pdf',
      summary: '原文来自Angularjs大佬MIŠKO HEVERY，这个概念实际上与这些年前端圈讨论的比较多的Reactivity和Fine-Grain Reactivity息息相关。简而言之，signal理念带来了2大好处：1. 细粒度的响应式（Fine-Grain Reactivity）2. 更好的开发体验（DX）',
      date:'2023-08-12',
      recommend: true,
      creator: 'DuLinRain',
      category: 'react'
    }, 
    {
      title:'细粒度响应式实践介绍',
      tags:['reactivity'],
      link:'/reactivity/细粒度响应式实践介绍.pdf',
      summary: '这篇文章涵盖了很多内容。我们介绍了核心原语，并触及了细粒度响应性的定义特征，包括依赖关系解析和同步执行。',
      date:'2023-08-11',
      recommend: true,
      creator: 'DuLinRain',
      category: 'react'
    }, 
    {
      title:'React事件',
      tags:['react'],
      link:'/react/React事件.html',
      summary: 'React事件：事件委托，合成事件，事件池。',
      date:'2020-08-11',
      recommend: true,
      creator: 'DuLinRain',
      category: 'react'
    }, 
    {
      title:'React会保证按照setState的调用顺序来更新状态吗？',
      tags:['react'],
      link:'/react/React会保证按照setState的调用顺序来更新状态吗？.html',
      summary: '我们都知道，React可能异步进行状态更新，并且会使用批量渲染来提升性能。因此在调用setState立刻去拿到的state是永远不可信任的。但是我们是否可以信任React按照我们调用setState的顺序去更新state呢？并且在下面2中情况都是一样的吗?1.在相同组件中？2. 在不同组件中？',
      date:'2020-03-31',
      recommend: true,
      creator: 'DuLinRain',
      category: 'react'
    }, 
    {
      title:'React之受控组件与非受控组件',
      tags:['react'],
      link:'/react/React之受控组件与非受控组件.html',
      summary: 'React中对于表单组件有受控组件和非受控组件之分。官网对此有描述，可能有些人在初次看到这一块的时候会有疑惑，这里对它进行以下讲述。',
      date:'2018-03-31',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'从非受控组件过渡到受控组件',
      tags:['react'],
      link:'/react/从非受控组件过渡到受控组件.html',
      summary: '在React之受控组件与非受控组件这篇文章中我们已经了解到了受控组件和非受控组件的区别。非受控组件在一些简单的场景中就能够满足我们的需求了，但是当我们遇到稍微复杂点的场景(比如，禁用提交按钮或立即验证表单域)的时候,你就需要使用受控组件了。那么问题来了，怎么样让你的非受控组件过渡到受控组件呢？',
      date:'2018-04-01',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'Redux中combineReducers是如何实现的？',
      tags:['react'],
      link:'/react/Redux中combineReducers是如何实现的？.html',
      summary: '如果你了解过Redux你一定知道Redux设计的3个核心原则：1、一个Redux项目中只允许有唯一的一个state；2、state使只读属性；3、使用纯函数进行更新。而我们又知道，上面所说的纯函数，其实就是reducer，reducer的定义基本上都长下面这个样子',
      date:'2018-06-24',
      creator: 'DuLinRain',
      recommend: true,
      category: 'react'
    }, {
      title:'Redux中bindActionCreators是如何实现的？',
      tags:['react'],
      link:'/react/Redux中bindActionCreators是如何实现的？.html',
      summary: '在说bindActionCreators的实现之前，我们先回顾一下action是啥。按照官方的说法：actions是POJOs (Plain Ole JavaScript Objects)。也就是说是普通的js对象，它有个字符串类型的type属性用于表示该action是哪一种行为。那么很容易理解，actionCreator就是一个函数，这个函数用于生成action，也就是说会返回上述所讲的action对象。',
      date:'2018-06-24',
      creator: 'DuLinRain',
      recommend: true,
      category: 'react'
    }, {
      title:'React中绑定this的5中方式及其优缺点',
      tags:['react'],
      link:'/react/React中绑定this的5中方式及其优缺点.html',
      summary: 'React中有很多种绑定this的方法，下面我们就来一一罗列一下。',
      date:'2018-07-02',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'React中的refs和forwarding refs',
      tags:['react'],
      link:'/react/React中的refs和forwarding refs.html',
      summary: '在React中，视图都是由数据流来驱动的，大部分情况下，父组件想改变子组件通常都是给它传递相应的props，我们很少需要去直接操作dom。但是仍然有些场景我们需要拿到真实的dom，幸运的是，React给我们提供了相应的能力（Vue也有类似的能力）。这些需要直接操作dom的场景通常可以分为如下几种：',
      date:'2018-07-03',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'React高阶组件之静态方法拷贝',
      tags:['react'],
      link:'/react/React高阶组件之静态方法拷贝.html',
      summary: '想必大家已经对高阶组件做过一定的了解了，高阶组件在组件复用方面非常方便，但是你可能没有注意的是高阶组件在复用原组件的时候不会自动的拷贝静态属性和方法。 比如：',
      date:'2018-07-03',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'深入理解React中的子组件',
      tags:['react'],
      link:'/react/深入理解React中的子组件.html',
      summary: '我们在[Function-as-Child组件]()这一篇文章中已经看到了可以使用一个函数作为React子组件以及这样做的一些优势。 凑巧在学习React-redux的Provider组件的时候，我也恰好发现了下面这么一段代码',
      date:'2018-08-15',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'Redux MiddleWare原理和源码分析',
      tags:['react'],
      link:'/react/Redux MiddleWare原理和源码分析.html',
      summary: '我们在最初使用Redux的时候，我们创建以及dispatch的action基本上都是纯对象，这些action都是同步的。但是我们实际的场景经常遇到的是异步的，比如我们需要发起网络请求，并希望请求结果回来之后通知我们。这些都需要我们发起异步action。那我们该怎么做呢？Redux提供了middleware可以使我们达到想要的结果。',
      date:'2018-08-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'react'
    }, {
      title:'Redux-thunk原理和源码分析',
      tags:['react'],
      link:'/react/Redux-thunk原理和源码分析.html',
      summary: '我们在[Redux Middleware原理和源码分析]这篇文章中已经讲述了Redux Middleware原理，Redux Middleware使得我们dispatch异步action成为可能，我们的action任然是纯对象，我们需要将异步操作写在Middleware中，这多少有些不方便。 action是纯对象，我们需要在middleware中根据action的特殊标记去执行相应的异步行为，要是我们可以直接把异步逻辑写在action中岂不是更方便？也就是说，action可否是一个函数呢？',
      date:'2018-08-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'react'
    }, {
      title:'antd-theme-online在线主题生成工具',
      tags:['react', 'antd'],
      link:'/react/antd-theme-online在线主题生成工具.html',
      summary: '在线预览、生成、下载 antd主题',
      date:'2018-07-07',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'React-Highchart封装与使用方法',
      tags:['react', 'highchart'],
      link:'/react/React-Highchart封装与使用方法.html',
      summary: '通过dataInfo简化配置，只需配置data(数据源)、type(图类型)、xkey(x轴键)、ykeys(数值键)四个必备字段，其它可选字段同highcharts的options配置。若dataInfo配置不能满足，也可以通过options完成复杂配置，更多图形及使用示例敬请期待',
      date:'2018-07-08',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'深入理解React虚拟DOM',
      tags:['react'],
      link:'/react/深入理解React虚拟DOM.html',
      summary: '虚拟DOM是React中的核心组成部分，以至于“React 比原生操作 DOM 快”这样一种观点一度甚嚣尘上。对此，Vue的作者曾给过如下说明：React 从来没有说过 “React 比原生操作 DOM 快”。React 的基本思维模式是每次有变动就整个重新渲染整个应用。如果没有 Virtual DOM，简单来想就是直接重置 innerHTML。',
      date:'2018-10-27',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'React-Redux 之Provider组件源码详解',
      tags:['react', 'highchart'],
      link:'/react/React-Redux 之Provider组件源码详解.html',
      summary: '如果没有React-Redux，在React中使用Redux可能会面临1个问题：我们的UI组件如何和store关联上？ 为了解决这个问题，React-Redux提供了connet函数，以高阶组件的形式创建一个容器组件。connect解决了给你一个store如何把它关联到UI组件的问题。',
      date:'2018-10-28',
      creator: 'DuLinRain',
      category: 'react'
    }, {
      title:'React-Redux 之connect源码详解',
      tags:['react', 'highchart'],
      link:'/react/React-Redux 之connect源码详解.html',
      summary: '果你了解Redux的话，你一定知道，Redux维护这一个唯一的store，我们每次dispatch一个action，就会执行对应的reducer从而得到新的状态。但是，当我们把Redux与React结合后（即使用React-Redux），React是怎么知道store已经改变的呢？',
      date:'2018-10-28',
      creator: 'DuLinRain',
      recommend: true,
      category: 'react'
    }
]

window.V8_ARTICLES = [
  {
      title:'Sparkplug —— 一个新的非优化JavaScript编译器',
      tags:['v8','性能'],
      link:'/v8/Sparkplug —— 一个新的非优化JavaScript编译器.html',
      summary: `2021.05.27日V8发布了新的「非优化JavaScript编译器」—— Sparkplug。
      为什么会有Sparkplug？
      V8的编译器的由Full-Codegen发展到TurboFan有了很大的改进。但是一个高性能的引擎应当不止包含优化编译器，因为在进入优化编译器之前还有很多事情要做。
      所以从2016年开始，V8开始在编译器之外进行提升JavaScript 的性能的研究。在2016年后，V8陆陆续续在解析器（Ignition）、流、对象模型、并发垃圾收集、缓存已编译的代码方面做了很多的工作。
      然而，当V8团队在尝试改进实际初始 JavaScript 执行的性能时，他们在优化解释器（Ignition）时开始遇到限制。 主要表现在下面几个方面：
      `,
      date:'2021-06',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'提高Javscript在V8中性能的技巧',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/Sc-sj51arrRJ6rG9lwqbQw',
      summary: `任何性能优化建议都有它的适用场景，追求好的性能没有问题，但有时候关注深层次的优化建议有可能会分散你解决实际问题的精力。在关注性能优化建议之前，你可以通过类似PageSpeed这样的测速工具来检查一下你的代码并提高得分，这可以避免过早的尝试进行优化。本文讲述的就是专门针对V8，提高Javascript在V8中执行性能而提出的建议。`,
      date:'2019-11-28',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'影响V8性能优化的原因',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/bq-231Ew_eedRgyNMnDhBQ',
      summary: `本文会通过例子讲述影响 V8Crankshaft编译器性能的原因，并给出解释和建议。除非另做说明，下面的例子都是针对Crankshaft的。`,
      date:'2019-11-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'V8编译器的历史、挑战与发展',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/ad24Idio_89WIi-rspXEEA',
      summary: `作为历史上第一个真正快速的 Javascript引擎， V8是在 2008年随着 Chrome浏览器一起推出的， V8引擎在发布时就比竞争对手速度快 10倍，得益于其优异的性能，一经发布就引起了巨大的轰动。时至今日， V8引擎的速度比 2008年版本也快了 10多倍。`,
      date:'2019-11-24',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'JIT之数值分配',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/9vs1dMqlLEeiQUN60CAw7g',
      summary: `这是有关JIT编译系列的第二篇博客文章。上一篇文章介绍了即时代码生成，尤其是jit.js用法。如果您尚未阅读，建议您先熟悉一下。`,
      date:'2019-11-25',
      creator: 'DuLinRain',
      recommend: false,
      category: 'v8'
  },
  {
      title:'Javascript即时编译(JIT)',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/xzUaMlGm4so447nLn2wYWA',
      summary: `编译器的编译方式有很多种，通常可分为动态编译和静态编译。而JIT编译狭义来说是当某段代码即将第一次被执行时进行编译，实际上是动态编译的一种。
很多开发者都听说过即时(JIT，just in time)编译器以及它是如何让较慢的解释性语言以与原生代码相匹敌的速度运行。然而，很多人并不知道JIT到底是如何工作的，甚至只有很少很少的人会写自己的编译器。
在我们的工作中，可能离编译最近的可能是使用Babel对ES6代码进行转译已经通过构建工具进行代码压缩等，这里面其实都涉及到或多或少编译器的基本概念与知识`,
      date:'2019-11-23',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'V8 垃圾回收',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/RvH_gmDId37QT8eEaZVzEg',
      summary: `我们都知道，浏览器进行垃圾回收通常有两种常见的模式：标记清除 和 引用计数。引用计数由于存在循环引用的问题，所以从2008年起，主流的现代浏览器都采用的是标记清除的方式进行垃圾回收。时至今日，十多年一晃而过，V8使用的仍旧是标记清除的垃圾回收机制，但V8在此之上做了很多改进和优化，本文将讲述这些内容。`,
      date:'2019-09-01',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'V8中JS类型的表示与性能影响',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/sFz1fspR4HdpT5wCerBO5Q',
      summary: `阅读完本文你将了解一下问题：
      1. JS数据类型在内存中是如何表示的？
      2. 相同JS类型在内存中是相同的存储形式吗？
      3. 给JS变量赋不同类型的值，底层会做哪些操作？
      4. 对于设置了Object.preventExtensions()对象，为其属性赋一个不同类型的值会带来什么后果？
      5. Smi、 HeapNumber、 MutableHeapNumber有什么区别？
      6. React issue(#14365(https://github.com/facebook/react/issues/14365)) 为什么会导致性能陡降？
      `,
      date:'2019-09-01',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'详解V8中的sort',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/OyOyU78wwoR8P78HI39UrQ',
      summary: `在JS中排序是很困难的。本文将讲述排序算法和JS语言交互过程中的一些怪异，并且讲述V8是如何将sort算法优化成稳定排序算法的。读完本文后，你会对下面几个问题有了答案：
      1. 不同浏览器中sort表现一致吗？
      2. V8 中sort的工作步骤？
      3. V8 中sort是稳定排序吗？
      4. V8 中sort采用的是什么算法?
      5. V8 中sort是用什么语言实现的？
      `,
      date:'2019-08-31',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'V8代码缓存(Code caching)的改进',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/YNSVdrqfLvdoOKdwdd3vCw',
      summary: 'V8使用代码缓存技术来缓存经常使用的脚本。 从Chrome66开始，我们可以缓存更多的代码。 这会带来20-40%的解析和编译时间。V8 使用2种代码缓存技术来缓存生成的代码。第一种是内存缓存，每个V8实例都拥有该功能。代码在初次编译后被存在该缓存中，源代码的string作为key。这在随后相同的V8实例中都可用。另外一种代码缓存会序列化编译后生成的代码，并将它们存储在磁盘。这种缓存不限定某个V8实例可以用，他可以被不同的V8实例所用。',
      date:'2019-07-27',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'V8代码缓存(Code caching)',
      tags:['v8','性能'],
      link:'https://mp.weixin.qq.com/s/YNSVdrqfLvdoOKdwdd3vCw',
      summary: 'V8使用即时编译(just-in-time compilation, JIT)来执行JS代码。这意味着在JS代码被执行之前，它需要先被解析和编译——这将会带了很大的负荷。 代码缓存技术是用来减轻这些负荷的技术。 当脚本被第一次编译的时候，会产生并存储缓存数据。下次一V8需要编译同样脚本的时候，即使在不同的V8实例，它都能使用缓存数据来重新创建编译后的结果，而不必重新编译。这样会导致脚本被更快地执行。',
      date:'2019-07-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'详解await在V8底层的实现',
      tags:['await','v8'],
      link:'/v8/详解await在V8底层的实现.html',
      summary: '本文将讲述await在V8底层依据ECMA-262的实现',
      date:'2020-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'详解V8对await的优化',
      tags:['await','v8'],
      link:'/v8/详解V8对await的优化.html',
      summary: '在上一篇文章“详解await在V8底层的实现”中，我们已经讲述了await在V8底层的实现，以及由此带来的一些性能问题。即：await会带来额外的2个promise以及3个微任务。事实上，这是在V8 v7.2以及Node V12之前的实现方式。新的V8 v7.2以及Node 12之后已经针对上述问题做了优化。',
      date:'2020-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  },
  {
      title:'异步堆栈追踪：为什么await 会击败Promise#then()？',
      tags:['await','v8'],
      link:'/v8/异步堆栈追踪：为什么await%20会击败Promise%23then()？.html',
      summary: '对开发者而言，与直接使用promise相比，使用async和await不仅仅会使得代码更易于阅读，而且可以让代码在JavaScript引擎中得到更好的优化。本文所写的关于异步代码的堆栈追踪就是其中一个优化。',
      date:'2020-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'v8'
  }
]

window.VUE_ARTICLES = [
  {
      title:'VueRoute源码分析',
      tags:['vue', 'vue-router'],
      link:'/vue/VueRoute源码分析.html',
      date:'2017-11-08',
      creator: 'DuLinRain',
      recommend: true,
      category: 'vue'
    }, {
      title:'Vuex源码分析',
      tags:['vue', 'vuex'],
      link:'/vue/Vuex源码分析.html',
      date:'2017-11-08',
      creator: 'DuLinRain',
      recommend: true,
      category: 'vue'
    }, {
      title:'Vue源码分析之utils模块',
      tags:['vue'],
      link:'/vue/Vue源码分析之utils模块.html',
      summary: 'shared目录下有两个文件，一个是constants.js，顾名思义就是定义了一些常量，另外一个是util.js，主要是定义了一些多用途、工具性质的函数。',
      date:'2017-08-31',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之父子合并策略',
      tags:['vue'],
      link:'/vue/Vue源码分析之父子合并策略.html',
      summary: 'Vue支持mixin(混入)以及Vue.extend()进行组件合并, 因为混合对象和组件的写法基本上是一样的，它可以有自己的属性、data、计算属性，方法、watch、生命周期钩子函数等等，那么就会出现疑问：当我在组件A中使用mixin B的时候，B的这些属性、data、计算属性，方法、watch、生命周期钩子函数等等和组件A自身的会不会有冲突呢？如果没有冲突，它们的合并策略又是什么呢？',
      date:'2017-09-24',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之nextTick实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之nextTick实现.html',
      summary: '在实际应用中，我们用数据驱动方式更新了某个DOM，并且想在DOM更新完成之后做一些事情，由于DOM更新也是异步的，不能在当前事件循环中直接操作该DOM。这种情况下，我们可以通过Vue实例上的$nextTick来达到目的。可能有的人发现，其实用setTimeout(fun, 0)也可以达到目的，确实。这是因为$nextTick里面就是有用到setTimeout(fun, 0)来实现。',
      date:'2017-09-24',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之全局API(Vue.component,Vue.filter,Vue.directive)的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之全局API(Vue.component,Vue.filter,Vue.directive)的实现.html',
      summary: 'Vue在给Vue类上全局注册了Vue.component,Vue.filter,Vue.directive这几个方法，也就是相当于Vue类的静态方法，他们的语法签名完全一样，那么他们是如何实现的呢？我们看看源码',
      date:'2017-09-25',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之全局API(Vue.extend)的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之全局API(Vue.extend)的实现.html',
      summary: 'Vue在给Vue类上全局注册了Vue.extend这个方法，使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。也就是相当于Vue类的静态方法，我们看看官方API的描述',
      date:'2017-09-25',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之深入响应式原理',
      tags:['vue'],
      link:'/vue/Vue源码分析之深入响应式原理.html',
      summary: '我们知道，创建vue实例的时候有一个初始化的过程，会给所有的data挂载到vm实例上，并且给他们增加getter和setter，我们看看官网怎么说的: 当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器的原因',
      date:'2017-09-27',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之全局API(Vue.mixin)的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之全局API(Vue.mixin)的实现.html',
      summary: 'Vue在给Vue类上全局注册了Vue.mixin这个方法，也就是相当于Vue类的静态方法，那么它在源码中是如何实现的呢？我们来看看',
      date:'2017-09-25',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之全局API(Vue.use)的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之全局API(Vue.use)的实现.html',
      summary: 'Vue在给Vue类上全局注册了Vue.use这个方法,用来实现插件的安装，也就是相当于Vue类的静态方法，那它是如何实现的呢？我们来看看源码',
      date:'2017-09-25',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之全局API(Vue.set,Vue.delete)的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之全局API(Vue.set,Vue.delete)的实现.html',
      summary: 'Vue.set,Vue.delete用于设置或删除数组的元素/对象的属性并触发相应视图的更新，我们知道，直接delete对象的某个属性在某些情况下是检测不到变化的，同时对数组而言，Vue里面直接按索引去操作一个数组，或者直接通过设置数组的length属性去改变数组的长度，Vue也是检测不到变化的。这就是Vue.set()/Vue.delete()派上用场的时候了。',
      date:'2017-09-26',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之全局API(Vue.$on(),Vue.$once(),Vue.$off(),Vue.$emit())的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之全局API(Vue.$on(),Vue.$once(),Vue.$off(),Vue.$emit())的实现.html',
      summary: 'Vue提供了Vue.$on(),Vue.$once(),Vue.$off(),Vue.$emit()全局方法用于事件处理，这几个函数的意思官方API已经说的很明白了，我们来看看它的源码。它们是在core/insatnce/event.js文件中实现的。',
      date:'2017-09-26',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之Events模块的实现',
      tags:['vue'],
      link:'/vue/Vue源码分析之Events模块的实现.html',
      summary: 'Vue中的events模块定义在insatnce/events.js文件下，主要通过initEvents函数给Vue实例初始化事件。我么看看源码。',
      date:'2017-09-26',
      creator: 'DuLinRain',
      category: 'vue'
    }, {
      title:'Vue源码分析之状态(props,data,methods,computed,watch)的初始化',
      tags:['vue'],
      link:'/vue/Vue源码分析之状态(props,data,methods,computed,watch)的初始化.html',
      summary: '了解Vue钩子函数的都知道，Vue在实例化的过程中会进行一系列的初始化操作，在beforeCreate钩子函数调用之前，会进行事件和生命周期的初始化。',
      date:'2017-09-27',
      creator: 'DuLinRain',
      category: 'vue'
    }, 
]

window.WEB_SECURITY_ARTICLES = [
    {
      title:'小红书uid生成方法探究',
      tags:['Web安全','爬虫'],
      link:'/web-security/小红书uid生成方法探究.html',
      summary: '在本节中，我们将讲述小红书uid的生成方式',
      date:'2021-03-25',
      creator: 'DuLinRain',
      recommend: false,
      category: 'web-security'
    }, 
    {
      title:'点击劫持原理和防御',
      tags:['Web安全','点击劫持'],
      link:'/web-security/点击劫持原理和防御.html',
      summary: '在本节中，我们将讲述什么是点击劫持、常见点击劫持的例子以及如何防范点击劫持。点击劫持是一种基于界面的攻击，在这种攻击中，通过引导用户点击诱饵网站中的某些内容，从而诱骗用户点击隐藏的目标网站上的可操作内容。',
      date:'2020-12-22',
      creator: 'DuLinRain',
      recommend: false,
      category: 'web-security'
    }, 
    {
      title:'密码重置中毒',
      tags:['Web安全','密码重置'],
      link:'/web-security/密码重置中毒.html',
      summary: '密码重置中毒是一种漏洞利用技术，攻击者可以利用该技术来操纵受攻击的网站，让该网站生成一个指向攻击者控制下的域名的密码重置链接。这种行为可以被用来窃取重置任意用户密码所需要的token，并最终破坏受害者的账号。',
      date:'2021-01-04',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'OAuth授权类型',
      tags:['Web安全','OAuth2.0'],
      link:'/web-security/OAuth授权类型.html',
      summary: '在本部分，我们将介绍2种常见的OAuth授权类型，如果在OAuth方面你还是个新手，那么强烈建议你先看这篇文章再去看OAuth身份验证漏洞。OAuth授予类型决定了OAuth流程中涉及的确切步骤顺序。授予类型还会影响客户端应用程序在每个阶段与OAuth服务进行通信的方式，包括access token本身的发送方式。因此，授权类型通常称为“ OAuth流”。',
      date:'2020-12-28',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'命令注入（Conmand Injection）案例分析',
      tags:['Web安全','命令注入'],
      link:'/web-security/命令注入（Conmand Injection）案例分析.html',
      summary: '命令注入的原理就是将用户的输入作为命令直接执行，未进行严格校验, get-npm-package-version 这个包的作用是用户指定npm包名和仓库，该命令可以查找到该包对应的版本。内部实际上是通过npm view pkgname version --registry xxx 命令来实现的',
      date:'2021-01-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'ejs模板任意代码注入（Arbitrary Code Injection）',
      tags:['Web安全','任意代码注入'],
      link:'/web-security/ejs模板任意代码注入（Arbitrary Code Injection）.html',
      summary: 'ejs是一个非常流行的开源NPM包，其在模板编译过程中，内部生成的模板会有一个在最后添加注释的操作，导致存在任意代码注入（Arbitrary Code Injection）的逻辑漏洞',
      date:'2021-01-26',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'原型污染（Prototype Pollution）原理和案例分析',
      tags:['Web安全','原型污染'],
      link:'/web-security/原型污染（Prototype Pollution）原理和案例分析.html',
      summary: '原型污染是一种影响Javascript的漏洞。原型污染指的是攻击者利用某种手段在JavaScript构造原型（如对象）上注入属性的行为。JavaScript允许所有的对象属性被修改，这其中包括一些魔法属性如__proto__, constructor 和 prototype。攻击者操作这些属性，进行重写或者污染基础对象。Object.prototype上的属性被所有经过该原型链的对象所继承。这种情况发生后，可能导致拒绝服务攻击（通过触发JavaScript异常）或者远程代码执行。',
      date:'2021-01-25',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'HTTP请求走私漏洞PoC',
      tags:['Web安全','劫持'],
      link:'/web-security/HTTP请求走私漏洞PoC.html',
      summary: '由于NodeJS内置基础库http_parse存在的漏洞，导致基于NodeJs很多版本部署的服务可能收到请求走私攻击。',
      date:'2021-01-20',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'恶意JS脚本逆向分析小记',
      tags:['Web安全','劫持'],
      link:'https://mp.weixin.qq.com/s/s5Tauiu2HGwuBfjjujNkXA',
      summary: '最近业务中有遇到一些劫持的情况，表现为拉端、下载应用等行为。劫持后注入的JS一般经过了混淆。这里对其中一段混淆过的JS进行逆向分析。',
      date:'2020-12-11',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, 
    {
      title:'Web安全之跨站脚本攻击(XSS)实战',
      tags:['Web安全','XSS'],
      link:'/web-security/Web安全之跨站脚本攻击(XSS)实战.html',
      summary: '本人入职后即加入公司的某个内部项目开发，在开发的过程中，本人发现，可能是内部项目的原因，不管是前端研发人员还是后端研发人员，对项目的安全性都很不重视，甚至没有任何安全意识。直至QA阶段，QA人员也没指出项目中的安全性BUG。本人选择几个简单的跨站脚本攻击(XSS)bug点测试，说明一下前端（当然也包括后端）开发中，保证Web安全的重要性。',
      date:'2017-05-31',
      creator: 'DuLinRain',
      category: 'web-security'
    }, {
      title:'Web安全之SQL注入实战',
      tags:['Web安全','XSS'],
      link:'/web-security/Web安全之SQL注入实战.html',
      summary: '本文以最最简单的一个SQL注入为例说明SQL注入的危害。',
      date:'2017-05-31',
      creator: 'DuLinRain',
      category: 'web-security'
    }, {
      title:'Web安全之弱口令实战',
      tags:['Web安全','XSS'],
      link:'/web-security/Web安全之弱口令实战.html',
      summary: '在安全领域有一个重要的分支叫弱口令，按照百科的解释，弱口令(weak password) 没有严格和准确的定义，通常认为容易被别人（他们有可能对你很了解）猜测到或被破解工具破解的口令均为弱口令。 比如在一些管理后台，用户名和密码通常都设置为admin或admin123或其它易于猜解的字符，还有些人喜欢用自己的名字作为登录名，自己的生日或其它信息作为密码。这些都属于弱口令。',
      date:'2017-05-31',
      creator: 'DuLinRain',
      category: 'web-security'
    }, {
      title:'编写Chrome插件绕过CSP策略',
      tags:['Web安全','XSS'],
      link:'/web-security/编写Chrome插件绕过CSP策略.html',
      summary: '最近在做一个与侵权文章对比有关的项目，在用iframe嵌入第三方网站的文章的时候出现了iframe无法嵌入第三方网站的问题。究其原因是因为第三方网站(示例中是简书)使用了CSP策略，不允许我们加载。 具体而言就是简书会在它的响应头中设置`Content-Security-Policy`字段, 除此之外，简书还设置了X-Frame-Options字段来阻止其他网站使用iframe加载他们的页面',
      date:'2018-08-17',
      creator: 'DuLinRain',
      category: 'web-security'
    }, {
      title:'合理设置HTTP头轻松提升web安全性能',
      tags:['Web安全','XSS'],
      link:'/web-security/合理设置HTTP头轻松提升web安全性能.html',
      summary: '本文将讲述用于提升web安全的一些最重要的HTTP头。我们将理解这里面每种HTTP是用来干嘛的以及当这些头被错误配置的时候会受到哪些攻击。',
      date:'2018-11-2',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, {
      title:'常见web漏洞——目录遍历',
      tags:['Web安全','目录遍历'],
      link:'/web-security/常见web漏洞——目录遍历.html',
      summary: '本节我将讲述什么是目录遍历以及如何进行目录遍历攻击和如何绕过攻击中的一些障碍。并且会总结出如何防范目录遍历攻击。',
      date:'2020-12',
      creator: 'DuLinRain',
      category: 'web-security'
    }, {
      title:'常见web漏洞——系统命令注入',
      tags:['Web安全','系统命令注入'],
      link:'/web-security/常见web漏洞——系统命令注入.html',
      summary: '在本文中，我将讲述什么是系统命令注入以及如何检测和利用系统注入漏洞。并且会罗列一些针对不同操作系统比较有用的攻击命令和技术。最后则将讲述如何阻止系统命令注入攻击。',
      date:'2020-12',
      creator: 'DuLinRain',
      category: 'web-security'
    }, {
      title:'恶意js脚本代码混淆原理',
      tags:['Web安全','JS劫持'],
      link:'https://mp.weixin.qq.com/s/CPH4EOFLBWxDsClX3_NuHQ',
      summary: '本文以https://co.puretou.com/icj.min.js这个恶意脚本为例来讲述该恶意脚本的代码混淆手段。',
      date:'2020-04-23',
      creator: 'DuLinRain',
      recommend: true,
      category: 'web-security'
    }, {
      title:'简单爬虫防范',
      tags:['Web安全','反扒虫'],
      link:'/web-security/简单爬虫防范.html',
      summary: '最近新上一个服务，发现经常被各种爬虫和渗透测试者光顾，大概根据流水日志里user-agent看了一下主要有下面这些',
      date:'2019-11',
      creator: 'DuLinRain',
      category: 'web-security'
    },
]
window.ALL_ARTICLES = [
  ...window.BABEL_ARTICLES,
  ...window.BASIC_JAVASCRIPT_ARTICLES,
  ...window.CHROME_ARTICLES,
  ...window.CSS_ARTICLES,
  ...window.MISCELLANEOUS_ARTICLES,
  ...window.ELEMENTUI_ARTICLES,
  ...window.ES6_ARTICLES,
  ...window.ESNEXT,
  ...window.GO_ARTICLES,
  ...window.HTTP_ARTICLES,
  ...window.JAVASCRIPT_DESIGN_PATTERN_ARTICLES,
  ...window.NODEJS_ARTICLES,
  ...window.REACT_ARTICLES,
  ...window.V8_ARTICLES,
  ...window.VUE_ARTICLES,
  ...window.WEB_SECURITY_ARTICLES,
]
