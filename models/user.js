module.exports = function(sequelize, DataTypes) 
{
    var User = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER(3),
            allowNull: false
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating_avg: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false,
            defaultValue: 0
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_link: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, 
    { 
        underscored: true,
        indexes: [{
            unique: true,
            fields: ['username']
        }]
    });

    User.associate = function(models) 
    {
       return; // User.hasMany(models.socials);
    };

    return User;
}