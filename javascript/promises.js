function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true; // or false based on condition
      if (dogWalked) {
        resolve("You walked the dog");
      } else {
        reject("You DIDN'T walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("You cleaned the kitchen");
      resolve("Kitchen is clean");
    }, 1500);
  });
}

function doLaundry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const laundryDone = true; // or false
      if (laundryDone) {
        console.log("You did the laundry");
        resolve("Laundry done");
      } else {
        reject("Laundry not done");
      }
    }, 1500);
  });
}

async function doChores() {
  try {
    const walkMessage = await walkDog();
    console.log(walkMessage);

    const kitchenMessage = await cleanKitchen();
    console.log(kitchenMessage);

    const laundryMessage = await doLaundry();
    console.log(laundryMessage);

    return "All chores completed successfully";
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

// Example execution
doChores()
  .then((msg) => console.log(msg))
  .catch((err) => console.error("Failed chore process:", err));