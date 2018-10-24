let offices_url = "https://api.greenhouse.io/v1/boards/cardboard/offices?content=true"
let departments_url = "https://api.greenhouse.io/v1/boards/cardboard/departments?content=true"
let jobs_url = "https://api.greenhouse.io/v1/boards/cardboard/jobs?content=true"

fetch(offices_url).then(resp=>resp.json()).then(data=>data['offices']).then(offices=>{
  offices.forEach(office=>{
    let h3 = document.createElement('h3')
    h3.setAttribute('id',`${office['name']}-header`)
    h3.innerHTML=office['name']
    document.getElementById('jobs-by-office').appendChild(h3)
    let ul = document.createElement('ul')
    ul.setAttribute('id',`${office['name']}-ul`)
    document.getElementById(`${office['name']}-header`).appendChild(ul)
  })
})

fetch(departments_url).then(resp=>resp.json()).then(data=>data['departments']).then(departments=>{
  departments.forEach(department=>{
    let h3 = document.createElement('h3')
    h3.setAttribute('id',`${department['name']}-header`)
    h3.innerHTML=department['name']
    document.getElementById('jobs-by-department').appendChild(h3)
    let ul = document.createElement('ul')
    ul.setAttribute('id',`${department['name']}-ul`)
    document.getElementById(`${department['name']}-header`).appendChild(ul)
  })
})

fetch(jobs_url).then(resp=>resp.json()).then(data=>data['jobs']).then(jobs=>{
  jobs.forEach ???
})

//
// fetch(jobs_url).then(resp=>resp.json()).then(data=>data['jobs']).then(jobs => {
//   jobs.forEach(job => {
//       let li = document.createElement('li')
//       document.getElementById('ybor_city').appendChild(li)
//       li.innerHTML = (`<a href=./job.html?gh_jid=${job['id']}</a>`)
//     }
//   })
// })
