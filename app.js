// https://careers.inkoop.io/job_posts/js-developer-intern/applicants/qnfmrmJpy5ruh3JLbtEJXvJ7

// https://stackoverflow.com/questions/65291008/game-about-a-car-which-has-to-cover-100km-distance

const button = document.querySelector('#gamebtn')
const rootBody = document.querySelector('.rootbody')

button.addEventListener('click', ()=>{
    rootBody.innerHTML = ''
    gameRun();
})

function gameRun(){
        const consumptionperkm = 1;
        const minStep = 0
        const maxStep = 6
        const initialPetrol = 30
        const pupmsCount = 5
        const startLocation = 0
        const endtLocation = 100
        const refillAmount = 20

        petrolpumpsLocation = getRandomPumps(pupmsCount, startLocation, endtLocation).sort();
        
        let position = startLocation;
        let petrol = initialPetrol;
             
        logStr(`<h2>Petrol pumps generated at : ${petrolpumpsLocation}</h2>`);
    
        if (isAtPump()) {
          petrol += refillAmount; // If there's a pump at the start
            } 
        
         logState()
         
         while(petrol < endtLocation && petrol > 0){
             const ratePetrol = petrol / consumptionperkm
             const remainingDistance = endtLocation - position
             const maxDistance = Math.min(ratePetrol , remainingDistance , maxStep)
             const stepDist = getRandomPump(minStep , maxDistance)
             const stepConsuption = stepDist * consumptionperkm


             position += stepDist
             petrol -= stepConsuption
             if (isAtPump()) {
                petrol += refillAmount; // If there's a pump at the start
                  } 
              
               logState()      
         }
         if (position === endLocation) {
            logStr("You've reached your destination!");
          } else {
            logStr("Out of petrol :'(");
          }

          function isAtPump() {
              return petrolpumpsLocation.includes(position)
          }

          function logState() {
            let str = `Move - Cart at , ${position}\t petrol remaining ${petrol}L`;
            if (isAtPump()) {
              str += ` Found a pump! Refilled ${refillAmount}L`;
            }
            logStr(str);
          }
    
}




function getRandomPump(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomPumps (n,min,max){
    const res = []
    while(res.length != n){
     const value = getRandomPump(min , max)
     if(!res.includes(value)){
         res.push(value)
     }
    }
    return res;
}

function logStr(str) {
    rootBody.innerHTML += '\n' + str;
  }