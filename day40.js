// Determine if you will need a drivers licence
// Cars + trucks = require license
// Everything else does not

const needsLicense = (kind) => {
	let license;
    switch(kind) {
        case 'car':
        case 'truck':
            license = true
            break;
        default:
            license = false
            break;
    }

	return license
}

needsLicense('car'); // true
needsLicense('bike'); // false

const chooseVehicle = (option1, option2) => {
	let arr = [option1, option2];
    arr.sort();
    let choice = arr[0];
    
	return (`${choice} is clearly the better choice.`)
}

chooseVehicle('Wuling Hongguang', 'Toyota Corolla'); // 'Toyota Corolla is clearly the better choice.'
chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'); // 'Volkswagen Beetle is clearly the better choice.'



// Calculate an estimation for the price of a used vehicle
// vehicle < 3 yrs = cost 80% of OG price
// vehicle > 10 = cost 50% of OG price
// vehicle >= 3 && vehicle <= 10 = cost 70% of OG price

const calculateResellPrice = (originalPrice, age) => {
    let resellPrice;
	if (age < 3) {
        resellPrice = originalPrice * 0.80;
    } else if (age > 10) {
        resellPrice = originalPrice * 0.50;
    } else if (age >= 3 && age <=10) {
        resellPrice = originalPrice * 0.70;
    }

	return resellPrice
}

calculateResellPrice(1000, 1); // 800
calculateResellPrice(1000, 5); // 700
calculateResellPrice(1000, 15); // 500