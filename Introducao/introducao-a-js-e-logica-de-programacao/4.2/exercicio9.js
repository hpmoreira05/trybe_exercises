let array = [];

for (index = 0; index<=25; index +=1){
    array.push(index);
}

for(index = 0; index < array.length; index +=1){
    array[index] = array[index] / 2;
}

console.log(array)