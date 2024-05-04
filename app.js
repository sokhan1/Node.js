const dotenv = require('dotenv')
dotenv.config();

const express =require('express');
const path=require('path');
const morgan=require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer')
const dotenv = require('dotenv')

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app =express();
app.set('port',process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitailized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
    name:'session-cookie',
}
));
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/user',userRouter);

const multer=require('multer');
const fs=require('fs');

try{
    fs.readdirSync('uploads');
} catch(error){
    console.error('There is not folder, So generate folder');
    fs.mkdirSync('uploads');
}
const upload = multer({
    Storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext)+Date.now()+ext);
        },

    }),
    limits:{filesize:5*1024*1024}// 5MB

})

app.get('/upload',(req,res)=>{
    res.sendFile(path.join(__dirname,'multipart.html'));
});

app.post('/upload', upload.none(), (req,res)=>{
    req.body.title
    res.send('ok');
});

app.get('/',(req,res,next)=>{
    console.log('Runs only on Get requests');
    next();
},(req,res)=>{
    throw new Error()
});

app.use ((req, res, next) =>{
    res.status(404).send('Not Found');
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.use('/',(req, res, next)=>{
    if (req.session.id){
        express.static(__dirname,'public')(req,res,next) // 로그인 되었을때 원하는 정보 전송
    }else{
        next();
    }
});

app.listen(app.get('port'),()=>{
    console.log('It is wating at',app.get('port'));
});

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.get('/',(req,res,next)=>{
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'index.html'));

// });

// app.post('/',(req,res)=>{
//     res.send('hello express');
// });

// app.get('/category/:name',(req,res)=>{
//     res.send('hello ${req.params.name}');
// });

// app.get('/about',(req,res)=>{
//     res.send('hello express');
// });


// app.use((req,res,next)=>{
//     res.status(404).send('This is 404')
// });

// app.use((err,req,res,next)=>{
//     console.error(err);
//     res.status(200).send('error appear');
// });

// app.listen(app.get('port'),()=>{
//     console.log('express is running');
// });
