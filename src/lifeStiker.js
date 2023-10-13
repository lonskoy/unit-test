function lifeStiker(obj) {
  let answer = null;
  if (obj.health >= 50) {
    answer = "healthy";
  }
  if (obj.health >= 15 && obj.health < 50) {
    answer = "wounded";
  }
  if (obj.health < 15) {
    answer = "critical";
  }

  return answer;
}

module.exports = lifeStiker;
