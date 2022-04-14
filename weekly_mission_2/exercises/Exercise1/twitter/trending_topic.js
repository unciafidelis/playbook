const trendingTopic = {
    topic: "technology",
    userNumber: 500001,
    hashtag: "javascript",
    reTwitRuler: "Javascriptrules!",
    getUserNumber: function(){
      return `Number of users: ${this.userNumber}`
    },
    getHashtagTopic: function(){
      return `hashtag: ${this.hashtag} || Topic: ${this.topic}`
    }
   }
   
   console.log(trendingTopic.getUserNumber())
   console.log(trendingTopic.getHashtagTopic())