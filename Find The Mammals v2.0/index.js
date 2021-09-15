const animals = Array.from(document.querySelectorAll('.mammal-value'))
const mammals = animals.filter(mammal => mammal.innerHTML === 'true')
const mammalsSection = document.getElementById('only-mammals')

mammals.forEach(mammal => {
  const grandParent = mammal.parentNode.parentElement
  mammalsSection.appendChild(grandParent)
})