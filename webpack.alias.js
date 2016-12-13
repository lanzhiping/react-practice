const root = __dirname;
const client = `${root}/client`;
const server = `${root}/server`;
const components = `${root}/components`;

module.exports = {
    clientIndex: `${client}/index.js`,

    serverConfig: `${server}/config.js`,
    appData: `${server}/appData.js`,
    renderBody: `${server}/renderBody.js`,
    renderHeader: `${server}/renderHeader.js`,

    htmlHeader: `${components}/header/htmlHeader.js`,
    htmlBody: `${components}/body/htmlBody.js`,
    carousel: `${components}/carousel/carousel.js`,
    fouseAreas: `${components}/fouseAreas/fouseAreas.js`,
    footer: `${components}/footer/footer.js`,
    navigationView: `${components}/navigation/navigationView.js`,
};
