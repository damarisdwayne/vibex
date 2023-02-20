import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config";

interface ProductAttributes {
  id?: number;
  image: string;
  description: string;
  price: number;
  created_at?: Date;
  updated_at?: Date;
}

class Product extends Model<ProductAttributes> {
  public id!: number;
  public image!: string;
  public price!: number;
  public description!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: sequelize.literal("CURRENT_TIMESTAMP").toString(),
    },
  },
  {
    sequelize,
    tableName: "product",
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);

export default Product;
