const whoApt = []
const aptName = []
const aptDate = []
const first = []
const last = []

const modal = document.getElementById('aptModal')
const close = document.getElementsByClassName('exit')[0]

$('#regBaby').on('click', function(event) {
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let alert = document.getElementById('alert')

    if (firstName <= 0 || lastName <= 0) {
        alert.innerText = 'Please enter a name!'
        alert.setAttribute('class', 'text-danger')
    } else {
        
        alert.innerText = ''
        
        first.push(firstName)
        last.push(lastName)
        let firstOfName = first.slice(- 1)
        let lastOfName = last.slice(- 1)
        
        firstOfName.forEach(function() {
            console.log(firstOfName)
            let li = document.createElement('li')
            li.innerText = firstOfName
            li.classList.add('class', 'family-member')
            $('#first').append(li)

        })
        
        lastOfName.forEach(function() {
            console.log(lastOfName)
            let li = document.createElement('li')
            li.innerText = lastOfName
            li.classList.add('class', 'family-member')
            $('#last').append(li)
        })
        
        const option = document.createElement('option')
        option.value = `${firstOfName}`
        option.innerHTML = `${firstOfName}`
        console.log(option)
        $('.form-select').append(option)

        

        localStorage.setItem('first', JSON.stringify(first))
        localStorage.setItem('last', JSON.stringify(last))
        console.log(localStorage.getItem('first'))
        console.log(localStorage.getItem('last'))

    }
})

//appointments
$('#regApt').on('click', function() {

    modal.style.display = 'block'
})

close.addEventListener('click', function() {

    modal.style.display = 'none'
})

window.onclick = function(event) {
    console.log('close')
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

$('#submitApt').on('click', function() {
    let who = $('.form-select option:selected').text()
    let whoDefault = document.getElementById('options').value
    let what = document.getElementById('aptName').value
    let when = document.getElementById('aptTime').value

    if (who !== whoDefault && what.length > 0) {
        
        whoApt.push(who)
        aptName.push(what)
        aptDate.push(when)
        
        let patient = whoApt.slice(- 1)
        let apt = aptName.slice(- 1)
        let date = aptDate.slice(- 1) 
        
        patient.forEach(function() {
            const li = document.createElement('li')
            li.innerText = patient
            li.classList.add('class', 'family-member')
            $('#who').append(li)
        })

        apt.forEach(function() {
            const li = document.createElement('li')
            li.innerText = apt
            li.classList.add('class', 'family-member')
            $('#what').append(li)
        })

        date.forEach(function() {
            const li = document.createElement('li')
            li.innerText = date
            li.classList.add('class', 'family-member')
            $('#when').append(li)
        })
    } else {
        console.log('Missing input!')
    }

    localStorage.setItem('whoApt', JSON.stringify(whoApt))
    localStorage.setItem('aptName', JSON.stringify(aptName))
    localStorage.setItem('aptDate', JSON.stringify(aptDate))

    modal.style.display = 'none'
})

window.onload = function() {
    
    let names = function() {
        let thisNameFirst = JSON.parse(localStorage.getItem('first'))
        let thisNameLast = JSON.parse(localStorage.getItem('last'))

        if (thisNameFirst || thisNameLast) {

            thisNameFirst.forEach(function(f){
                first.push(f)
                let li = document.createElement('li')
                li.innerText = f
                li.classList.add('class', 'family-member')
                $('#first').append(li)

                const option = document.createElement('option')
                option.value = `${f}`
                option.innerHTML = `${f}`
                $('.form-select').append(option)
            })
            
            thisNameLast.forEach(function(l){
                last.push(l)
                let li = document.createElement('li')
                li.innerText = l
                li.classList.add('class', 'family-member')
                $('#last').append(li)
            })

        } else {
            console.log('You still need to add family!')
        }
    }

    let appointments = function() {
        let who = JSON.parse(localStorage.getItem('whoApt'))
        let what = JSON.parse(localStorage.getItem('aptName'))
        let when = JSON.parse(localStorage.getItem('aptDate'))

        if (who || what || when) {
            console.log(who, what, when)

            who.forEach(function(name) {
                whoApt.push(name)
                const li = document.createElement('li')
                li.innerText = name
                li.classList.add('class', 'family-member')
                $('#who').append(li)
            })
    
            what.forEach(function(title) {
                aptName.push(title)
                const li = document.createElement('li')
                li.innerText = title
                li.classList.add('class', 'family-member')
                $('#what').append(li)
            })
    
            when.forEach(function(time) {
                aptDate.push(time)
                const li = document.createElement('li')
                li.innerText = time
                li.classList.add('class', 'family-member')
                $('#when').append(li)
            })
        } else {
            console.log('No appointments at this time.')
        }
    }

    names()
    appointments()
}
