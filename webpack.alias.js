const root = __dirname;
const client = `${root}/client`;
const server = `${root}/server`;
const components = `${root}/components`;

module.exports = {
    clientIndex: `${client}/index.js`,

    serverConfig: `${server}/config.js`,
    renderBody: `${server}/renderBody.js`,
    renderHeader: `${server}/renderHeader.js`,

    htmlHeader: `${components}/header/htmlHeader.js`,
    htmlBody: `${components}/body/htmlBody.js`,
    navigationView: `${components}/navigation/navigationView.js`,
};
