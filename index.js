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
    ul.setAttribute('id',`${office['name']}`)
    document.getElementById(`${office['name']}-header`).appendChild(ul)
  })
  fetch(jobs_url).then(resp=>resp.json()).then(data=>data['jobs']).then(jobs=>{
    jobs.forEach(job=>{
      let li = document.createElement('li')
      li.innerHTML = (`<a href='./job.html?gh_jid=${job['id']}'>${job['title']}</a>`)
      let office_ul = document.getElementById(`${job['offices'][0]['name']}`)
      office_ul.appendChild(li)
    })
  })
})

fetch(departments_url).then(resp=>resp.json()).then(data=>data['departments']).then(departments=>{
  departments.forEach(department=>{
    let h3 = document.createElement('h3')
    h3.setAttribute('id',`${department['name']}-header`)
    h3.innerHTML=department['name']
    document.getElementById('jobs-by-department').appendChild(h3)
    let ul = document.createElement('ul')
    ul.setAttribute('id',`${department['name']}`)
    document.getElementById(`${department['name']}-header`).appendChild(ul)
  })
  fetch(jobs_url).then(resp=>resp.json()).then(data=>data['jobs']).then(jobs=>{
    jobs.forEach(job=>{
      let li = document.createElement('li')
      li.innerHTML = (`<a href='./job.html?gh_jid=${job['id']}'>${job['title']}</a>`)
      let dept_ul = document.getElementById(`${job['departments'][0]['name']}`)
      dept_ul.appendChild(li)
    })
  })
})

// let uls=document.getElementsByTagName('ul')
// uls.forEach(ul=>{
//   if(ul:empty){
//     ul.setAttribute('style','display:none')
//   }
// })
