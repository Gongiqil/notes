module.exports = {
    title: 'Hello VuePress',  // 设置网站标题
    description: 'VuePress',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    base: '/notes/', // 和仓库名相同
    dest: 'dist', // 输出目录
    themeConfig: {
        nav: [
            {text: "home", link: "/"},// ‘/’结束，默认读取 README.md
            {text: "foo", link: "/guide/foo/"},
            {text: "bar", link: "/guide/bar/"}
        ],
        sidebar: {
            // 不同的页面组来显示不同的侧边栏
            '/guide/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            '/guide/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
            ],
            // fallback 确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
            '/': []
        },
    }
}
