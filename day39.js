// Determine how long it takes to mix a juice
// Pure Strawberry Joy = .5
// Energizer & Green Garden = 1.5
// Tropical Island = 3
// All or Nothing = 5
// Everything else = 2.5

const timeToMixJuice = (name) => {
    let minutes;
	switch (name) {
        case "Pure Strawberry Joy":
            minutes = .5;
            break;
        case "Energizer":
        case "Green Garden":
            minutes = 1.5;
            break;
        case "Tropical Island":
            minutes = 3;
            break;
        case "All or Nothing":
            minutes = 5;
            break;
        default:
            minutes = 2.5;
    }

	return minutes
}

// Replenish the lime wedge supply
// small = 6
// medium = 8
// large = 10
// num of wedges, [lime supply]
// 25, ['small', 'small', 'large', 'medium', 'small'] => 4

const limesToCut = (wedgesNeeded, limes) => {
	// iterate over array and subtract wedges from limes from wedgesNeeded until 0
    let wedgesLeft = wedgesNeeded;
    let limesNeeded = 0;
    for (i = 0; i < limes.length; i++) {
        if (limes[i] === 'small' && wedgesLeft > 0) {
            wedgesLeft -= 6
            limesNeeded += 1
        } else if (limes[i] === 'medium' && wedgesLeft > 0) {
            wedgesLeft -= 8
            limesNeeded += 1
        } else if (limes[i] === 'large' && wedgesLeft > 0) {
            wedgesLeft -= 10
            limesNeeded += 1
        }
    }

    return limesNeeded

}

// See what orders cannot be made in the last minutes of the shift
// remainingOrders(time left in Li's shift, [array of drinks ordered but not prepared])
// remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])
// return array of drinks Dmitry needs to prepare

const remainingOrders = (timeLeft, orders) => {
	
	return
}
