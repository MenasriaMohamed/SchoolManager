const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'db',
     '',
     '',
    {
        dialect: 'sqlite',
        storage: 'db.sqlite',
        underscored:true
    }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

class User extends Model {}
db.User = User
User.init({
    firstname:{
        type: DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
  }, { sequelize, modelName: 'user' });
  
  (async () => {
      await sequelize.sync();
    const jane = await User.create({
      firstname: 'janedoe',
      lastname: 'janedoe',
      username : 'mouhmouh',
      password : 'mouhmouh'
    });
    console.log(jane.toJSON());
  })();
// Case
class Case extends Model {}
db.Case = Case
Case.init({
    // attributes
    casenumber:{
        type: Sequelize.STRING
    },
},{
    sequelize,
    paranoid: true,
    modelName: 'case'
});
(async () => {
  await sequelize.sync();
const jane = await Case.create({
  casenumber: 'janedoe',
});
console.log(jane.toJSON());
})();
 module.exports = db;



/*
if you want to use seed just do like this code

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();
*/