const React = require('react');
const NavigationView = require('navigationView');
const appData = require('appData');
const Carousel = require('carousel');
const FouseAreas = require('fouseAreas');

function Header(props) {
    return (
        <div>
            <div className="logo">
                <a href="/"><img src={props.logo} alt="logo" /></a>
            </div>
            <NavigationView navigation={props.navigation} />
            <Carousel carousel={props.carousel} />
        </div>
    );
}

function HtmlBody() {
    return (
      <div id="root">
        <Header logo={appData.logo} navigation={appData.navigation} carousel={appData.carousel} />
        <FouseAreas areas={appData.navigation[1].subitems} />
      </div>);
}

module.exports = HtmlBody;
