var orm = require("../config/orm");

var munch = {
  selectAll: function(cb){
    orm.all('food', function(res) {
      cb(res);
    })
  },
  create: function(cols, vals, cb) {
    orm.create("food", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("food", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = munch;