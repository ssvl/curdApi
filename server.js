// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();


// const productRoutes = require('./routes/roduct.routes')


// const Database_Url='mongodb://localhost:27017/learndata'
// const PORT =process.env.PORT || 5000;

// mongoose.connect(Database_Url,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>console.log("Contect to databse"))
// .catch((err)=>console.log(err.message));

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// // app.use(cookieParser());


// app.use('/api/v1/product',productRoutes)
// app.use(cors({
// 	withCredentials: true,
// 	origin: ['*','http://localhost:4403']
//   }));

//   app.use(cors({origin:'*',credentials:true}));

// app.listen(PORT, () => {
//     console.log(`server started on port: ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const productRoutes = require('./routes/roduct.routes')


const Database_Url='mongodb://localhost:27017/learndata'
const PORT =process.env.PORT || 5000;

mongoose.connect(Database_Url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Contect to databse"))
.catch((err)=>console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
	withCredentials: true,
	origin: ['*','http://localhost:4200']
  }));
  
app.use('/api/v1/product',productRoutes)
app.use(cors({origin:'*',credentials:true}));


app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
  });



