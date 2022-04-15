const biography = {
    name: "Alejandro Morgan",
    nickname: "unciafidelis",
    maritalStatus: "Married",
    webpage: "www.unciafidelis.com",
    followers: 91,
    friends: 2013,
    dateCreated: "13/04/2009",
    lastUpdated: "13/04/2022",
    getnameNickname: function(){
      return `Name: ${this.name} || Nickname: ${this.nickname}`
    },
    getWebpage: function(){
      return `Webpage: ${this.webpage}`
    }
   }
   
   console.log(biography.getnameNickname())
   console.log(biography.getWebpage())
   