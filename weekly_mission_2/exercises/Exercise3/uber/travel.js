const travel = {
    location: "Lomas 123",
    destiny: "nodeland 1",
    triptype: "trip",
    cost: 60,
    getLocationDestiny: function(){
      return `Location: ${this.location} || Destiny: ${this.destiny} `
    },
    getTripType: function(){
      return `Trip type: ${this.triptype}`
    }
   }
   
   console.log(travel.getLocationDestiny())
   console.log(travel.getTripType())