const issue = {
    title: "LaunchX",
    repositoryNameAssociated: "unciafidelis",
    status: "Active",
    numberOfComments: 100,
    labels: ["js","node"],
    author: "Alejandro Morgan",
    dateCreated: "13/04/2022",
    lastUpdated: "13/04/2022",
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`
    }
   }
   
   console.log("Issue title: " + issue.title + " | Author: " + issue.author)
   console.log(issue.getGeneralInfo())