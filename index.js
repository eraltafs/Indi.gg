const exoress = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { authenticate } = require("./middlewares/autheticate");

const { userRouter } = require("./routes/user.routes");
const { bookRouter } = require("./routes/book.routes");


port = 8000;

const app = exoress();
app.use(cors());
app.use(exoress.json());

app.get("/", (req, res) => {
  res.send("base api");
});

app.use("/user", userRouter)
app.use(authenticate)
app.use("/book",bookRouter)

app.listen(port, () => {
  connection();
  console.log("listening");
});
