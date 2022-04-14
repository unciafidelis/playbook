const user = {
    user: "Alejandro Morgan",
    email: "unciafidelis@gmail.com",
    status: "Active",
    link: "facebook.com/unciafidelis",
    dateCreated: "13/04/2010",
    lastUpdated: "13/04/2022",
    getUserEmail: function(){
      return `The user is: ${this.user} || Email: ${this.email}`
    },
    getLink: function(){
      return `The link is: ${this.link} was created in: ${this.dateCreated}`
    }
   }
   
   console.log(user.getUserEmail())
   console.log(user.getLink())