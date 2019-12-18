function first(array, n = 1) {
    if(array == null) return 0;
    let retarr = [];
    for(let i = 0; i < n ; i++)
    {
        retarr[i] = array[i];
    }
    return retarr;
  };

  function initial(array, n = 1)
  {
      if(array == null) return 0;
      let retarr =[];
      for(let i = 0; i != array.length - n; i++)
      {
          retarr[i] = array[i];
      }
      return retarr;
  };

  function lasti(arr = [], n = 1)
  {
      if(arr == null) return 0;
      let retarr = [];
      let index = 0;
      for(let i = 0; i != arr.length; i++ )
      {
        if(i >= arr.length - n)
        {
            retarr[index] = arr[i];
            index++;
        }
      }
      return retarr;
  };

  function squareDigits(num)
  {
        sum ="";
        num = String(num);
        for(let i = 0; i < num.length; i++)
        {
            sum = sum + Number(num[i])**2;
        }
        return Number(sum);
  }

  //console.log(first([1,2,3,4,5]));
//  console.log(initial([1,2,3,4,5]));
 let a = squareDigits(123);
 console.log(a);
  //console.log(lasti([1,3,4,5,6]));