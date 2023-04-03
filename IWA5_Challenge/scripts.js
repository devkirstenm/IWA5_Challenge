FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

let location = 'RSA'
let customers = '1'
let currency = 'R'
let shipping = 'R'

if (location === 'RSA') { 
    shipping = 400;
    currency = 'R'; 
}

if (location === 'NAM') {
    shipping = 600;
    currency = '$'; 
}   else { 
    shipping = 800
}   

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

let orderTotal >= 1000

if (orderTotal >= 1000 || 600 ) {
	if (location = 'NAM' || 'customers' < 1) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}

if (shipping === 0 || customers !== 1) { 
    console.log('FREE_WARNING') 
}

if (location === 'NK') { 
    console.log('BANNED_WARNING') 
} 

