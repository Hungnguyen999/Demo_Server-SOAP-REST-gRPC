const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const allRoutes = require('express-list-endpoints');
const router = require('./router')

require('dotenv').config();   //Cái này giúp cho có thể sử dụng các biến trong file .env mà chúng ta có đã tạo
// let server = app.listen(process.env.PORT || 3000, function () {
//     logger.api.info(`Server listening on port ${server.address().port}`);
//     console.log(`Server listening on port ${server.address().port}`);
//   });
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api',router);


app.listen(port,()=>{
    console.log(`Server đang chạy dưới port ${port}`);
    console.log('Registered Routes: ');
    console.log(allRoutes(app));
})