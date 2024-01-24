
/** @format */
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const session = require('express-session');//for authenticate using the passport
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require("connect-mongo")// Make sure to invoke 'connect-mongo' with 'session' as an argument

const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
  src: '/assets/scss',
  dest: '/assets/css',
  debug: true,
  outputStyle: 'extended',
  prefix:'/css'
}))

// Middleware
app.use(express.static("./assets"));


app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());


app.use(expressLayouts);

// View Engine Configuration
app.set("view engine", "ejs");
app.set("views", "./views");


//mongo store is used to store the session cookie in the db
const mongoStore = MongoStore.create({
  mongooseConnection:db,
  mongoUrl: "mongodb://127.0.0.1:27017/codeial_development",
  autoRemove: "disabled",
});
app.use(
  session({
    name: "codeial",
    //todo change the secret before the deployment
    secret: "something",
    saveUninitialized: false, //
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: mongoStore
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticateUser);


app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Routes
app.use("/", require("./routes"));

// Port Configuration
const port = 8000;

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});








































// /** @format */
// const express = require("express");
// const app = express();
// const cookieParser = require('cookie-parser')
// const port = 8000;
// const expressLayouts = require("express-ejs-layouts");
// const db = require("./config/mongoose");


// app.use(express.urlencoded());


// app.use(cookieParser());


// app.use(express.static("./assets"));

// app.use(expressLayouts);
// // extract style and scripts from sub pages into the layout
// app.set("layout extractStyles", true);
// app.set("layout extractScripts", true);

// // use express router
// app.use("/", require("./routes"));

// // set up the view engine
// app.set("view engine", "ejs");
// app.set("views", "./views");

// app.listen(port, function (err) {
//   if (err) {
//     console.log(`Error in running the server: ${err}`);
//   }

//   console.log(`Server is running on port: ${port}`);
// });

// /** @format */

// const express = require("express");
// const cookieParser = require('cookie-parser');
// const app = express();
// const port = 8000;

// //use express router
// app.use('/', require('./routes'));
// // app.set('title', 'My site');
// app.set('view engine', 'ejs');
// app.set('views', './views');

// try {
//   app.listen(port, function () {
//     console.log("Server is running on port:", port);
//   });
// } catch (err) {
//   console.error("Error in running the server:", err);
// }
