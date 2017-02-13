const Router = require('koa-router');
require('babel-polyfill');

const renderBody = require('renderBody');
const renderHeader = require('renderHeader');
export const pageRouter = new Router()
    .get('/', function *homePage() {
        this.res.setHeader('content-type', 'text/html; charset=utf-8');
        this.status = 200;
        this.res.write('<html>');
        this.res.write(renderHeader.bind(this)());
        this.res.write(renderBody.bind(this)());
        this.res.write('</html>');
        this.res.end();
    });

export const serviceRouter = new Router()
    .get('/appData/', function *getAppData() {console.log('asdfasdfasdf', this.req.url)
        this.res.send(JSON.stringify({ app: 'appdata' }));
    });
