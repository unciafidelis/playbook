const travel = {
    location: "Lomas 123",
    destiny: "nodeland 1",
    tripType: "trip",
    cost: 60,
    getLocationDestiny: function(){
      return `Location: ${this.location} || Destiny: ${this.destiny} `
    },
    getTripType: function(){
      return `Trip type: ${this.tripType}`
    }
   }
   
   console.log(travel.getLocationDestiny())
   console.log(travel.getTripType())