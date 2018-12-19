module.exports = function(sequelize, DataTypes) 
{
    var comments = sequelize.define("comments", {
        comment_id: {
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

    comments.associate = function(models) 
    {
        comments.belongsTo(models.users, 
        {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        });
    };

    return comments;
}