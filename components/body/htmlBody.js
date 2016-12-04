const React = require('react');
const NavigationView = require('navigationView');
const appData = require('appData');

function createCarousel(image) {
    return ([
        <input key={image.url + 'input'} id={image.url} type="radio" />,
        <a key={image.url} className="carousel" href={image.href}><img src={image.url} alt={image.url} /></a>,
        <label key={image.url + 'label'} for={image.url} className="carousel_label" />
    ]);
}

function Header(props) {
    return (
        <div>
            <div className="logo">
                <a href="/"><img src={props.logo} alt="logo" /></a>
            </div>
            <NavigationView navigation={props.navigation} />
            <div className="carousel_container">
                {props.carousel.map(createCarousel)}
            </div>
        </div>
    );
} 

function HtmlBody() {
    return (
      <div id="root">
        <Header logo={appData.logo} navigation={appData.navigation} carousel={appData.carousel} />
      </div>);
}

module.exports = HtmlBody;
