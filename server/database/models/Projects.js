/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
      projectName: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      projectUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      projectRepo: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      projectImageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      projectDescription: {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    }, {
      tableName: "Projects"
    });
    
    return Projects;
  };
  