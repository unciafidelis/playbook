const user = {
    user: "Alejandro morgan",
    userName: "unciafidelis",
    bio: "I like meat so what?!",
    age: 37,
    getBio: function(){
      return `Bio: ${this.bio}`
    },
    getUser: function(){
      return `Username: ${this.userName} User: ${this.user}`
    }
   }
   
   console.log(user.getUser())
   console.log(user.getBio())