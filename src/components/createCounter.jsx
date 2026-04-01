function CreateCounter (){

    function createCounter (){

        let count = 10


        function increase(){
            return count++
           
            }

        function decrease(){
            return count --
        }

        function getCount(){
            return count
        }
        return {increase, decrease, getCount}
        }

        const newCounter = createCounter()
        newCounter.increase()
        newCounter.decrease()
        newCounter.getCount()


        function trackScore(){
            let score = 0

            function add(point){
                score = score + point
                return score 
            }

            function subtract(point){
                score = score - point
                return score 
            }
            
            function getScore(){
                return score
            }
            return{add, subtract, getScore}
        }

        trackScore.add(10)// can I do this or does it have to be like

        const totalScore = trackScore()
        totalScore.add(20)
        totalScore.subtract(5)
        totalScore.getScore()


        function makeMultiplier(x){
           return x * 2
        }

        function makeTaxCalculator(rate){
            return function(amount){
                return amount * rate
            }
           }
    }


