function conjeturaDeCollatz() {
    let x = document.querySelector('#input')
     if (x != 1)
        if (x.value % 2 == 0) 
            x.value = x.value / 2
        else 
            x.value = (x.value * 3) + 1
    }