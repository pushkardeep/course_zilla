const app = require("./app");
const connectDB = require("./configs/mongodb-config");
require("dotenv").config();

connectDB().then(() => {
  app.listen({ port: process.env.PORT }, () => {
    console.log("Server is listning on 3000 port");
  });
});
