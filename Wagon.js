class Wagon {
    constructor(capacity, passengers = []) {
        this.capacity = capacity
        this.passengers = passengers

    }


    getAvailableSeatCount() {

        let seats = this.capacity - this.passengers.length
        
        if(seats > 0) {
            return this.capacity = seats
        } else if(seats <= 0){
            return this.capacity = 0
        }
    }
    
    join(passenger) {
        
        if(this.capacity > 0 ) {

            this.getAvailableSeatCount()
            this.passengers.push(passenger)
        }
    }
    
    shouldQuarantine() {
        
        const haveSick = this.passengers.includes(element => element.isHealthy == false)
        if(haveSick !== -1) {

            return true
        } else {

            return false
        }
    }

    totalFood() {

        const totalFoodInBag = this.passengers.reduce((acc, cur) => {

            return acc += cur.food
        }, 0)

        return totalFoodInBag
    }
}



