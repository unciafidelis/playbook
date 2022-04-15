const hashtag = {
    hashtag:"nodejs",
    hashtagRuler: "unciafidelis",
    useNumber: 250102,
    topic: "Technology",
    getTopic: function(){
      return `The topic is: ${this.topic}`
    },
    getUseNumber: function(){
      return `Number of twits: ${this.useNumber} Hashtag: ${this.hashtag}`
    }
   }
   
   console.log(hashtag.getTopic())
   console.log(hashtag.getUseNumber())