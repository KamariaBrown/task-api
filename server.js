console.log("inside of server.js");

const express = require("express"),
         port = 5000,
           bp = require('body-parser'),
          app = express();

app.use(bp.json());

require("./server/utils/mongoose")("iguanas");
require("./server/utils/routes")(app);

app.listen(port, function(){
    console.log(`listening on port ${port}`);
});