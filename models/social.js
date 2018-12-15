module.exports = function(sequelize, DataTypes) 
{
    var Social = sequelize.define("socials", {
        social_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    }, { underscored: true });

    Social.associate = function(models) 
    {
        Social.belongsTo(models.users, 
        {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        });
    };

    return Social;
}