const post = {
    post: "Codeando ando",
    attachment:"lol.com/funnytech.jpg",
    dateCreated: "13/04/2022",
    lastUpdated: "13/04/2022",
    getPostAttachment: function(){
      return `The post is: ${this.post} || The attachment is: ${this.attachment}`
    },
    getDate: function(){
      return `Created: ${this.dateCreated}`
    }
   }
   
   console.log(post.getPostAttachment())
   console.log(post.getDate())