/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
      projectName: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      projectUrl: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      projectRepo: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      projectImageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      projectDescription: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      tableName: "Projects"
    });
    
    return Projects;
  };
  