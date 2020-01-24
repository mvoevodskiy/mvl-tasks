module.exports = (Sequelize) => {
  return {
    id: {
      type: Sequelize.INTEGER,
      primary: true
    },
    name: Sequelize.STRING
  };
};
