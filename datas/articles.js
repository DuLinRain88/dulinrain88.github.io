const commonInfos = {
    creator: 'DuLinRain',
    category: 'chrome'
}
window.CHROME_ARTICLES = [
    {
        title:'Chromium多进程架构',
        tags:['chrome'],
        link:'/chrome/Chromium多进程架构.html',
        summary: `核心思想：Chromium浏览器由浏览器进程(主进程)和渲染进程组成，通常每个tab对应一个
        渲染进程，每个渲染进程可能包含多个渲染视图，渲染进程和主进程之间通过IPC进行通信。`,
        date:'2020-11',
        ...commonInfos
    },
    {
        title:'Chromium进程模型',
        tags:['chrome'],
        link:'/chrome/Chromium进程模型.html',
        summary: `本文讲述的是Chromium渲染器进程所支持的几种不同的进程模型以及各模型存在的问题。
        Web内容已演变为包含大量在浏览器中运行的动态代码，从而使许多网站更像是应用程序而不是纯文档。
        这种演变也将浏览器的角色从一个简单的文档渲染器转换成了一个操作系统。`,
        date:'2020-11',
        ...commonInfos
    },
    {
        title:'Chromium多进程资源加载',
        tags:['chrome'],
        link:'/chrome/Chromium多进程资源加载.html',
        summary: `在Chromium中，所有的网络通信都是由主进程控制的。这么做的好处不仅可以使得浏览
        器进程控制所有渲染进程对网络的访问，也可以维护类跨渲染进程的持久性会话状态（如cookie和cache）。
        另一个比较重要的点是，作为一个HTTP/1.1协议的客户端，浏览器中每个域名下不可以建立太多的网络连接。`,
        date:'2020-11',
        ...commonInfos
    },
    {
        title:'Chrome站点隔离',
        tags:['chrome'],
        link:'/chrome/Chrome站点隔离.html',
        summary: `站点隔离（Site Isolation）是Chrome中的一个安全feature，提供了对一些安全问题的
        额外防护。它使得不可信的站点更难从别的站点访问或者窃取你的账户信息。`,
        date:'2020-11',
        ...commonInfos
    },
    {
        title:'深入理解同站（same-site）和同源（same-origin）',
        tags:['chrome'],
        link:'/chrome/深入理解同站（same-site）和同源（same-origin）.html',
        summary: `同站和同源是引用频率很高但是极易理解错误的词语，譬如，它经常在跳转、
        fetch请求、cookie、新开页面、嵌入资源和iframe这些场景被提及。`,
        date:'2020-11',
        ...commonInfos
    },
]