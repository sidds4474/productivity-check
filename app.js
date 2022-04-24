// stats
const effort = document.querySelector('.effort')

const pro = document.querySelector('.procrastination')

const totalField = document.querySelector('.total')

const todayField = document.querySelector('.today')


// local storage

// key-value(int)
let storedEffort = isNaN(localStorage.getItem('effort'))
? 0 : localStorage.getItem('effort')  === null
? 0 : localStorage.getItem('effort') 

let dayWasted = isNaN(localStorage.getItem('daywasted'))
? 0 : localStorage.getItem('daywasted') === null
? 0 : localStorage.getItem('daywasted') 

let total = isNaN(localStorage.getItem('total'))
? 0 : localStorage.getItem('total') === null
? 0 : localStorage.getItem('total')


console.log(total)

effort.textContent = `"Never let the fear of failure keep you from playing the game."`
// pro.textContent = `${dayWasted} days wasted.`
// totalField.textContent = `${total} days.`


let lastUpdated = localStorage.getItem('LastUpdated')
let today = new Date().toDateString()

// todayField.textContent = `Last practice done on : ${lastUpdated} `

if(lastUpdated === today){
  document.querySelector('.btn-group').classList.add('hide')
}



function donePractice(value){
      if(value){

        storedEffort = parseInt(storedEffort) + 1
        localStorage.setItem('effort', storedEffort)
        localStorage.setItem('LastUpdated',today)
        if(storedEffort > 1){
          effort.textContent = `${storedEffort} days productive`
        }
        else{
          effort.textContent = `${storedEffort} day productive`
        }
      }

      else{
        dayWasted = parseInt(dayWasted) + 1
        localStorage.setItem('daywasted', dayWasted)
        localStorage.setItem('LastUpdated',today)
        dayWasted.textContent = `${dayWasted} days did nothing`
      }

      total = parseInt(total)+1
      localStorage.setItem('Total', total)
      todayField.textContent = `Last updated on : ${today}`
      efficiency = (storedEffort/total)*100
      totalField.textContent = `Efficiency : ${efficiency}%`
      document.querySelector('.btn-group').classList.add('hide')
}














// {/* <h1>0</h1> */}
// const h1 = document.querySelector('h1')
// console.log(h1)

// console.log(h1.innerText)


// const plusBtn = document.querySelector('#plus')

// const minusBtn = document.querySelector('#minus')

// let counter = 0

// plusBtn.addEventListener('click',function(){
//       counter++
//       h1.innerText = counter
//       console.log(counter)
// })

// // Task :

// // minus functionality
// // reset functionality


