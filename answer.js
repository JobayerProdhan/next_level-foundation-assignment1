function describeValue(value) {
  let type_of_value = typeof value;

  console.log(type_of_value);

  if (type_of_value == "string") {
    if (value.length != 0) {
      return "string | truthy";
    } else {
      return "string | falsy";
    }
  }

  if (type_of_value == "number") {
    if (value == 0) {
      return "number | falsy";
    } else {
      return "number | truthy";
    }
  }

  if (type_of_value == "boolean") {
    if ((value = true)) {
      return "boolean | truthy";
    } else {
      return "boolean | falsy";
    }
  }

  if (type_of_value == "object") {
    if (value == null) {
      return "object | falsy";
    }
  }

  if (type_of_value == "undefined") {
    if (value == undefined) {
      return "undefined | falsy";
    }
  }
}



function getDayType(day) {
  switch (day) {
    case "Friday":
    case "Saturday":
      return "Weekend";

    case "Sunday":
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}


function validateUsername(user) {
  if (user.length < 4) {
    return "Too Short";
  }
  if (user.includes(" ")) {
    return "No Space Allowed";
  }
  if (user.includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}


function getCngFare(distance, isNight, waitingMinutes) {
  if (isNight == undefined) {
    isNight = false;
  }
  if (waitingMinutes == undefined) {
    waitingMinutes = 0;
  }

  if (distance != 0 && distance <= 2) {
    fare = 50;
  } else {
    fare = 50 + (distance - 2) * 15;
  }

  fare = fare + waitingMinutes * 2;

  if (isNight) {
    fare = fare + fare * 0.2;
  }

  return fare;
}


function getChaseVerdict(target, scored, ballsLeft) {
  let run_needed = target - scored;

  if (run_needed <= 0) {
    return "Won";
  } else if (run_needed == 0 || ballsLeft == 0) {
    return "Lost";
  }

  let required_rate = (run_needed / ballsLeft) * 6;

  let verdict;
  if (required_rate <= 6) {
    verdict = "Comportable";
  } else if (required_rate > 6 && required_rate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${run_needed} runs in ${ballsLeft} balls | ${verdict}`;
}











