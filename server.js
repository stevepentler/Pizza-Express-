const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pizza Steve Express';

app.get('/', (request, response) => {
  response.send('HI PIZZA STEVE');
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;