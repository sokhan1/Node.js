const express =require('express');
const path=require('path')

const app =express();

app.set('port',process.env.PORT || 3000);

app.use((req,res,next)=>{
    console.log('1 요청에 실행하고 싶어요');
    next();
},(req,res,next)=>{
    try{
        console.log(asdasdasd);
    }catch(error){
        next(error);
    }
})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
    if(true){next('route');}
    else{next();}
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.post('/',(req,res)=>{
    res.send('hello express');
});

app.get('/category/:name',(req,res)=>{
    res.send('hello ${req.params.name}');
});

app.get('/about',(req,res)=>{
    res.send('hello express');
});


app.use((err,req,res,next)=>{
    console.error(err);
    res.send('error appear')
})

app.listen(app.get('port'),()=>{
    console.log('express is running');
});
