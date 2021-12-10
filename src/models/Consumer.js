module.exports = (sequelize, DataTypes) => {
  const Consumer = sequelize.define('Consumer', {
    name: DataTypes.STRING
  },{
    timestamps: true,
    tableName: 'consumers',
  });

  return Consumer;
}