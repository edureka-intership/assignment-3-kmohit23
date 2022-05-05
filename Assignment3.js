class Restaurant {
    constructor(resname, address, city) {
        this.resname = resname;
        this.address = address;
        this.city = city;
    }
}

class RestaurantManager extends Restaurant {
    constructor(name) {
        super();
        this.name = name;
    }
    printAllRestaurantNames(restaurantList) {
        let restaurantListonconsole = restaurantList.map(res => {
            return res.resname;
        })
        console.log(restaurantListonconsole);
    }

    filterRestaurantByCity(restaurantList, city) {
        let filterCity = restaurantList.filter((rest) => rest.city === city);
        console.log(filterCity);
    }
}

let restaurant1 = new Restaurant("Paradise", "Begumpet", "Hyderabad");
let restaurant2 = new Restaurant("Pizzahut", "MayurVihar", "Delhi");
let restaurant3 = new Restaurant("DelhiBelly", "JaydevVihar", "Bhubaneswar");
let Manager = new RestaurantManager('Mohit');

let restaurantList = [restaurant1, restaurant2, restaurant3];
console.log(restaurantList)

Manager.printAllRestaurantNames(restaurantList);

Manager.filterRestaurantByCity(restaurantList, 'Bhubaneswar');

// 2

let orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
}

// a 

let total = 0;
for(let range in orderData){
    total += orderData[range];
}
console.log(total);

// b 

var numberofOrderProportion = Object.keys(orderData).length;
console.log(numberofOrderProportion)

// c 

let restaurantData=[]
let orderId = 0
let restuarantName = "Punjabi Tadka"
for(let data in orderData){
    totalOrder=199;
    orderId++;
    let resObj = {
        id: orderId,
        order: data,
        orderPercentage: (orderData[data]/totalOrder*100).toFixed(2),
        restaurant: restuarantName
    }
    restaurantData.push(resObj);
}
console.log(restaurantData);
