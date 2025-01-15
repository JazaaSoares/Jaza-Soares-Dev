function getProjects(){
    const urlGitHub = 'https://api.github.com/users/JazaaSoares/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub,{
        method: 'GET'
    })
        .then((response)=> response.json())
        .then((response)=>{
            
            loadingElement.style.display = 'none'
            showProjects(response)
        })
        .catch((e)=>{
            console.log(e)
        })
}

function showProjects(data){
    var listElement = document.getElementById('list-projects')

    for(let i=0;i<data.length;i++){
        let a = document.createElement("a")
        a.href= data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        a.nodeValue = data[i]['description']
        console.log("titulo",a.title)
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}

getProjects()