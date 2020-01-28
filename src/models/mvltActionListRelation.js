module.exports = (Sequelize) => {
  return {
    actionListId: {
      type: Sequelize.INTEGER
    },
    rank: Sequelize.INTEGER
  };
};
