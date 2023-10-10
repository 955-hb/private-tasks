## Clock
# Implement a clock like this example.

# Requirments
- Add a digital clock
- Add an analog clock

# Hints
A date can be used to get the current time.

const now = new Date();
const minutes = d.getMinutes();
You can use setInterval() to execute code every n milliseconds.

function logTime() {
  console.log(new Date());
}

// Log current date and time every 1000 ms (= 1 second)
setInterval(logTime, 1000);