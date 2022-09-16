const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
  const mergedData = [...ixx, ...vgc];

  let countEmosi = 0;
  mergedData.forEach(data => {
    if (data.hasil === emosi) {
      countEmosi += 1;
    }
  });
  return countEmosi;
};

module.exports = {
  promiseOutput,
};
