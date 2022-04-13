const pullRequest = {
    title: "LaunchX",
    branchName: "dev",
    dateCreated: "13/04/2022",
    status: "Active",
    repositoryNameAssociated:"unciafidelis",
    author:"Alejandro morgan",
    
    
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getStatus: function(){
      return "Pull request status: " + this.status
    }
   }
   
   console.log("Pull request title: " + pullRequest.title + " | Author: " + pullRequest.author)
   console.log(pullRequest.getStatus())