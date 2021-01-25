const Sequelize = require("sequelize");
const { ipcMain } = require("electron");
const db = require("../Models.js");

//Call Controller
const UserController = require("../Controllers/UserController");
const DashboardController = require("../Controllers/DashboardController");

//ControllerName: "UserController",
//FunctionName: "READALL",

ipcMain.on("asynchronous-message", async (event, arg) => {
  
  if (arg.ControllerName) {
    
    // Call a function from User Controller
    if (arg.ControllerName === "UserController") {
      var obj = await UserController.executQuery(arg.FunctionName,db,arg.data);
      event.reply("asynchronous-reply", obj);
    }

    // Call a function from Dashboard Controller
    if (arg.ControllerName === "DashboardController") {
      var obj = await DashboardController.executQuery(arg.FunctionName,db,arg.data);
      event.reply("asynchronous-reply", obj);
    }

  }
});