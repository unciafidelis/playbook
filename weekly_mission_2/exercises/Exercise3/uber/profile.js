const profile = {
    name: "Alejandro morgan",
    driver:false,
    stars: 5,
    uberOne: false,
    getdriverStatus: function(){
      return `Driver status: ${this.driver}`
    },
    getUserStars: function(){
      return `User: ${this.name} || Stars: ${this.stars}`
    }
   }
   
   console.log(profile.getdriverStatus())
   console.log(profile.getUserStars())