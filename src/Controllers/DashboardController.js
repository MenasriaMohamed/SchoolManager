const Validator = require('validatorjs')
class DashboardController {


    static async executQuery(FunctionName, db, data) {
        switch (FunctionName) {
          case "CountCases":
            return await DashboardController.CountCases(db, data);
        }
    }



    static async CountCases(db , data) {
        return await db.Case.count();
      }

}
module.exports = DashboardController;