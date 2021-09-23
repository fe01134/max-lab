'use strict';

const express = require('express')
const app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Site is Under Maintenance  The Maximo Hands On Lab Site was using an NodeJS buildpack version that has become outdated. A new buildpack  is being tested for compatibility with MKDocs.  You can use the static lab content using the link below until the site is back up.  https://github.com/IBM/monitor-hands-on-lab/tree/master/MkDocs  We will be updating this notice with updates on when the site will be back up. Last updated 14:0 GMT Sept 22.  Sorry for the inconvenience.  ');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
