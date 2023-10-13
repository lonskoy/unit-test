const healthStick = require("../src/lifeStiker");

test("check health", () => {
  let test = [
    {
      name: "маг",
      health: 60,
      result: "healthy",
    },
    {
      name: "маг",
      health: 35,
      result: "wounded",
    },
    {
      name: "маг",
      health: 14,
      result: "critical",
    },
  ];

  for (let i = 0; i < test.length; i++) {
    let result = healthStick(test[i]);
    expect(result).toBe(test[i].result);
  }
});
