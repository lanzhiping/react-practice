module.exports = {
    logo: '/logo.png',
    navigation: [
        { name: '首页', url: '/', type: 'landing' },
        { name: '作品', url: '/zuoping', type: 'landing',
            subitems: [
                { name: '空间设计', url: '/kongjiansheji', type: 'listing' },
                { name: '软装设计', url: '/ruanzhuangsheji', type: 'listing' },
                { name: '平面设计', url: '/pingmiansheji', type: 'listing' },
                { name: '家具设计', url: '/jiajusheji', type: 'listing' },
            ],
        },
        { name: '公司', url: '/gongsi', type: 'landing' },
        { name: '观点', url: '/guandian', type: 'landing' },
        { name: '联系', url: '/guandian', type: 'landing' },
    ],
    carousel: [
        { url: '/lunbo1.png', href: '/' },
        { url: '/lunbo2.png', href: '/' },
        { url: '/lunbo3.png', href: '/' },
    ],
    articles: [
        {
            parent: '/kongjiansheji',
            articles: [
                { images: ['/article1.jpg'], title: 'article1', content: 'article 1 content', url: '/' },
            ],
        },
        {
            parent: '/ruanzhuangsheji',
            articles: [
                { images: ['/article1.jpg'], title: 'article1', content: 'article 1 content', url: '/' },
            ],
        },
        {
            parent: '/pingmiansheji',
            articles: [
                { images: ['/article1.jpg'], title: 'article1', content: 'article 1 content', url: '/' },
            ],
        },
        {
            parent: '/jiajusheji',
            articles: [
                { images: ['/article1.jpg'], title: 'article1', content: 'article 1 content', url: '/' },
            ],
        },
    ],
    footerLinks: [
        { url: '//www.baidu.com', name: 'BaiDu' },
        { url: '//www.baidu.com', name: 'BaiDu' },
        { url: '//www.baidu.com', name: 'BaiDu' },
    ],
};
