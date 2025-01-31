const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const core = require('cors');
const { logEvents } = require('./middleware/logEvent');
const { timeStamp } = require('console');



// const whitelist = ['https://www.yoursite.com', 'https://127.0.0.1:5500','https://localhost:3500']
//    const coreoption = {
  //      origin: (origin, callback) =>{
    //        if (whitelist.indexOf(origin) != -1 || !origin) {
      //          callback(null, true)
        //    } else{
          //      callback(new Error('Not Allowedby CORS'))
            //}
        //},
        //optionsSuccessStatus: 200
    //}
app.use(core())



app.get('^/', (req,res) => {
    res.json({
        email: "victory.amadi@stu.cu.edu.ng",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/AMADIVHACKERDON?tab=repositories"
    })
    res.status(200);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


