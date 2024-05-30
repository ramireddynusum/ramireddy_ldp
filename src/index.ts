import express from 'express';
const ap_p = express();
const port = process.env.PORT || 3000;
ap_p.get('/',(req,res)=>{
    res.send('this is homepage')
})
ap_p.listen( port ,()=>{
    console.log('server is running at port number 3000')
});
