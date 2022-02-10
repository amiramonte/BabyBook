const apt = []
const fam = []

let family = document.getElementById('exist-baby')

console.log('dash script')
console.log('===========')

$('#regApt').on('click', function() {
    console.log('made a new appointment!')
})

$('#regBaby').on('click', function() {
    let famInput = document.getElementById('baby-name').value
    console.log('I had another kid!')

    fam.push(famInput)
    let lastChild = fam.slice(-1)

    lastChild.forEach((child) => {
        let list = document.createElement('li')
        list.innerText = child
        family.append(list)
    })
    console.log(fam)
})
