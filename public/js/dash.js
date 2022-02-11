const apt = []
const fam = []

console.log('dash script')
console.log('===========')

$('#regApt').on('click', function() {
    console.log('made a new appointment!')
})

localStorage.getItem('my-family', fam)

//register a new child
$('#regBaby').on('click', function(err) {
    let famInput = document.getElementById('name').value
    let alert = document.getElementById('alert')

    //if name is empty alert populates
    if (famInput <= 0 ) {
        alert.innerText = 'Please enter a name!'
        alert.setAttribute('class', 'text-danger')
        return (err)
    } else {
        //clear err msg
        alert.innerText = ''
        
        //push input value to array
        fam.push(famInput)
        let child = fam.slice(- 1)
        
        //create new list item for each child
        child.forEach(function() {
            let li = document.createElement('li')
            li.innerText = child
            $('#exist-baby').append(li)
        })
    }

    localStorage.setItem('my-family', JSON.stringify(fam))
})
/* localStorage.clear() */