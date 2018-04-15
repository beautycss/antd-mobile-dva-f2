// bar data
const barData = [];
for (let i = 2010; i < 2016; i += 1) {
  barData.push({
    x: `${i}年`,
    y: Math.floor(Math.random() * 10000),
  });
}

// pie data
const pieData = [
  { x: '芳华', y: 0.4, a: '1' },
  { x: '妖猫传', y: 0.2, a: '1' },
  { x: '机器之血', y: 0.18, a: '1' },
  { x: '心理罪', y: 0.15, a: '1' },
  { x: '寻梦环游记', y: 0.05, a: '1' },
  { x: '其他', y: 0.02, a: '1' },
];

export const getFakeChartData = {
  barData,
  pieData,
};

export default {
  getFakeChartData,
};
