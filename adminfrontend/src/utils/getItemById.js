import data from'./products.json';

const getItemById = (itemId) => {

  return data.medicines.find((item) => {
    if (item.id == itemId) {
      // const x = item;
      // console.log(item);
      return item;
    }
  });

};

export default getItemById;
