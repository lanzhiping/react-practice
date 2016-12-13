const React = require('react');

function Footer(props) {
    return (
        <div className="footer">
        <div className="footer-title">友情链接</div>
        {
            props.footerLinks.map((link, index) => (<a href={link.url} key={index}>{link.name}</a>))
        }
        </div>
    );
}

module.exports = Footer;
