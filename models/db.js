const Sequelize = require("sequelize"); //  conecta com o mysql


//conectando ao banco
const sequelize = new Sequelize("postapp", "root", "12345", {
    host: "localhost",
    dialect: "mysql"
});

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}