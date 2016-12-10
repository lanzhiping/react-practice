const React = require('react');
const appData = require('appData');

function getArticles(areas) {
    const areasList = areas.map(area => area.url);
    return appData.articles
        .filter(article => areasList.includes(article.parent))
        .map(article => article.articles[0]);
}

function buildArticleThumb(article) {
    return (
        <a className="article_container" href={article.url} key={article.name}>
            <img className="article_thumb" src={article.images[0]} alt={article.title} />
            <span className="article_title">{article.title}</span>
        </a>
    );
}

function FouseAreas(props) {
    return (
        <div className="fouse-areas_container">
            <div className="fouse-areas_left">
                <div className="fouse-areas_title">专注领域</div>
                <div>
                {
                    props.areas.map(item => (<div className="area_item">{item.name}</div>))
                }
                </div>
            </div>
            <div className="fouse-areas_right">
                <div className="fouse-areas_title">最新作品</div>
                <div>
                {
                    getArticles(props.areas).map(buildArticleThumb)
                }
                </div>
            </div>
        </div>
    );
}

module.exports = FouseAreas;
