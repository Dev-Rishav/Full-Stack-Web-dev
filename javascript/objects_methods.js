let restaurant ={
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        // console.log(this) //points to the current object which is restaurant
        let seatsLeft= this.guestCapacity-this.guestCount
        return partySize<=seatsLeft;
    },

    seatParty: function(partySize){
        if(this.checkAvailability)
            this.guestCount+=partySize
    },

    removeParty: function(partySize){
        if(this.guestCount==0)
            return false
        this.guestCount-=partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));