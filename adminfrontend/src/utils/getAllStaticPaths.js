import data from './products.js';

const getAllStaticPaths = () => {
  return data.products.map((item) => ({
    params: { cid: item.id },
  }));
};

export default getAllStaticPaths;
