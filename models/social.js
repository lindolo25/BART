module.exports = function(sequelize, DataTypes) 
{
    var socials = sequelize.define("socials", {
        social_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        site_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { underscored: true });

    socials.associate = function(models) 
    {
        socials.belongsTo(models.users, 
        {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        });
    };

    return socials;
}