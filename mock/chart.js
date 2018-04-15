// bar data
const barData = [];
for (let i = 2010; i < 2016; i += 1) {
  barData.push({
    x: `${i}年`,
    y: Math.floor(Math.random() * 10000),
  });
}

// pie data
const pieData = [];
for (let i = 1; i < 6; i += 1) {
  pieData.push({
    x: `猫妖传${i}`,
    y: Math.floor(Math.random() * 10),
    a: '1',
  });
}

export const getFakeChartData = {
  barData,
  pieData,
};

export default {
  getFakeChartData,
};
