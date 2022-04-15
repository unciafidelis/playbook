# Github

[![](https://mermaid.ink/img/pako:eNqFk89OwzAMxl-lygnEnqC3aiDEZUgMbpOQ17hdtPwpiXOYpr07SbZp6RKET83nXyz7c3NkveHIWtZLcO5ZwGhBNRvdhEhSY3Ey53OMeGqbJw0KCxE87YwtZAl69DCWvPZqi_Z9WBqlBLki7whsqQ7G7ktVOOfRfZsJ9V-5XhpXNjEifRoC-Zagh8ca8IoabUD0YK5A7lCqf7uXjuEiCZIVOZZ1gow9rIKJnXOmF0DISzLMT96Veu4baqoQErYoK_r9hq46Dw0sLdbbCDPS18TryWhfnLPTvEvFcwczqGLhvY2Tl_IDf8IW6AZkYmnpPLm1oPvdavZnzonqmHPk3vN59v_dzfkw-DoVzGcukMzAs3-RvfEx2IIptAoED0_1mPKMdhhGZW345GD3G7bRp8D5tKoXHttk7QDS4YKFxZv1QfesJevxCl2e-4U6_QKsy0M-)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqFk89OwzAMxl-lygnEnqC3aiDEZUgMbpOQ17hdtPwpiXOYpr07SbZp6RKET83nXyz7c3NkveHIWtZLcO5ZwGhBNRvdhEhSY3Ey53OMeGqbJw0KCxE87YwtZAl69DCWvPZqi_Z9WBqlBLki7whsqQ7G7ktVOOfRfZsJ9V-5XhpXNjEifRoC-Zagh8ca8IoabUD0YK5A7lCqf7uXjuEiCZIVOZZ1gow9rIKJnXOmF0DISzLMT96Veu4baqoQErYoK_r9hq46Dw0sLdbbCDPS18TryWhfnLPTvEvFcwczqGLhvY2Tl_IDf8IW6AZkYmnpPLm1oPvdavZnzonqmHPk3vN59v_dzfkw-DoVzGcukMzAs3-RvfEx2IIptAoED0_1mPKMdhhGZW345GD3G7bRp8D5tKoXHttk7QDS4YKFxZv1QfesJevxCl2e-4U6_QKsy0M-)
    
    class repo
        repo: +name
        repo: +author
        repo: +language
        repo: +numberOfCommits
        repo: +stars
        repo: +forks
        repo: +issues_open
        repo: +issues_close
        repo: +getTotalIssues()
        repo: +getGeneralInfo()
    
    class issue
        issue: +title
        issue: +repositoryNameAssociated
        issue: +status
        issue: +numberOfComments
        issue: +labels
        issue: +author
        issue: +dateCreated
        issue: +lastUpdated
        issue: +getTitleAndAuthor()
        issue: +getGeneralInfo()
        
    class pullRequest
        pullRequest: +title
        pullRequest: +branchName
        pullRequest: +dateCreated
        pullRequest: +status
        pullRequest: +repositoryNameAssociated
        pullRequest: +getStatus()
        pullRequest: +getTitleAndAutor()