module.exports = function(sequelize, DataTypes) 
{
    var Member = sequelize.define("Member", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Member;
}