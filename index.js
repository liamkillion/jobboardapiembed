let url = "https://api.greenhouse.io/v1/boards/liamcosandbox/jobs"
fetch(url).then((resp=>resp.json())).then(data=>data['jobs']).then(jobs => {
  jobs.forEach(job => {
    if (job['location']['name'] === 'New York'){
      let li = document.createElement('li')
      document.getElementById('new_york').appendChild(li)
      li.innerHTML = (`<a href=./one.hmtl?gh_jid=${job['id']}>${job['title']}</a>`)
    }
    else if (job['location']['name'] === 'Ybor City'){
      let li = document.createElement('li')
      document.getElementById('ybor_city').appendChild(li)
      li.innerHTML = (`<a href=./three.hmtl?gh_jid=${job['id']}>${job['title']}</a>`)
    } else {
      let li = document.createElement('li')
      document.getElementById('terre_haute').appendChild(li)
      li.innerHTML = (`<a href=./two.hmtl?gh_jid=${job['id']}>${job['title']}</a>`)
    }
  })
})