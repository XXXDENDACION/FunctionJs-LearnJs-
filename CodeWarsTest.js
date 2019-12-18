function printerError(s="") 
{
    let unluck = 0;
    let all = 0;
    let flag = false;
    truecolord = ["a", "b", "c", "d", "e" ,"f", "g", "h", "i", "j","k","l", "m"];
    for(let i = 0; i != s.length; i++)
    {
        for(let j = 0; j != truecolord.length; j++)
        {
            if(s[i] == truecolord[j])
            {
                flag = true;;
            }
        }
        if(!flag)
        {
            unluck++;
        }
        flag = false;
        all++;
    }
   return String(unluck) + "/" + String(all);
}

function digitalroot(number) // Sum of Digits / Digital Root
{
    let sum = 0;
    if(number <= 9)
    {
        return number;
    }
    while(number != 0)
    {
        sum = sum + number % 10;
        number = Math.floor(number / 10); 
    }
     return  digitalroot(sum);
}

function getSum( a,b ) //Beginner Series #3 Sum of Numbers
{
    let sum = 0;
   for(let i = a; i <= b; i++)
   {
        sum+= i;
   }
   return sum;
}
console.log(getSum(1,1));
console.log(digitalroot(16));