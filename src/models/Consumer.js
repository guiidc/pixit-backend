module.exports = (sequelize, DataTypes) => {
  const Consumer = sequelize.define('Consumer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    sex: DataTypes.STRING(1),
    city: DataTypes.STRING,
  },{
    timestamps: true,
    tableName: 'consumers',
  });

  return Consumer;
}