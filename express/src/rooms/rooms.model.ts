import { Sequelize, Model, DataTypes, Optional } from 'sequelize';

export const sequelize = new Sequelize();

// We recommend you declare an interface for the attributes, for stricter typechecking
interface RoomAttributes {
    id: number;
    name: string;
}

// Some fields are optional when calling RoomModel.create() or RoomModel.build()
interface RoomCreationAttributes extends Optional<RoomAttributes, 'id'> {
}

// We need to declare an interface for our model that is basically what our class would be
interface RoomInstance
    extends Model<RoomAttributes, RoomCreationAttributes>,
        RoomAttributes {
}

const RoomModel = sequelize.define<RoomInstance>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  name: {
    type: DataTypes.STRING
  }
});

// eslint-disable-next-line no-unused-vars
async function doStuff () {
  const instance = await RoomModel.findByPk(1, {
    rejectOnEmpty: true
  });
  console.log(instance.id);
}
