const server = require('express')();
const createApp = require('./app');
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
});

server.get('*', (req, res) => {
  const context = { url: req.url };
  createApp(context).then(app => {
    if (err) {
      if (err.code == 404) {
        res.status(404).end('page not found');
      } else {
        res.status(500).end('internal server error');
      }
    } else {
      res.end(html);
    }
  });
})

server.listen(8000);