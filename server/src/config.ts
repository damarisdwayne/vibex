import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize(
  "mysql://root:1RJMtIAzB8GUz2ilLx1X@containers-us-west-200.railway.app:6879/vibex"
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

testConnection();
