
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                defaultValue: false
            }
        },
        {
            tableName: 'product',
            timestamps: false
        })


    return Product;
};