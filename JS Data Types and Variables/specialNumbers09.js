function specialNumbers(number){

    for (let i = 1; i <=number ; i++) {
        let sum=0
        let currentNum=String(i)
        for (let index = 0; index < currentNum.length; index++) {
            let num=Number(currentNum[index])
            sum+=num
        }
        if(sum==5||sum==7||sum==11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
        
    }

}specialNumbers(15)