function first(array, n = 1) {
    if(array == null) return 0;
    let retarr = [];
    for(let i = 0; i < n ; i++)
    {
        retarr[i] = array[i];
    }
    return retarr;
  };
  alert(first([1,2,3,4,5]));