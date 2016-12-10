module.exports = {
    logo: '/logo.png',
    navigation: [
        { name: '首页', url: '/' },
        { name: '作品', url: '/zuoping',
            subitems: [
                { name: '空间设计', url: '/kongjiansheji' },
                { name: '软装设计', url: '/ruanzhuangsheji' },
                { name: '平面设计', url: '/pingmiansheji' },
                { name: '家具设计', url: '/jiajusheji' },
            ],
        },
        { name: '公司', url: '/gongsi' },
        { name: '观点', url: '/guandian' },
        { name: '联系', url: '/guandian' },
    ],
    carousel: [
        { url: 'lunbo1.png', href: '/' },
        { url: 'lunbo2.png', href: '/' },
        { url: 'lunbo3.png', href: '/' },
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
};
