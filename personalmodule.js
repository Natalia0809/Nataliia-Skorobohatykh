function getGreetingMessage(username) {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let greeting;
  if (hours >= 5 && hours < 12) {
      greeting = "Good morning";
  } else if (hours >= 12 && hours < 18) {
      greeting = "Good afternoon";
  } else {
      greeting = "Good evening";
  }
  return `${greeting}, ${username}`;
}
module.exports = { getGreetingMessage };