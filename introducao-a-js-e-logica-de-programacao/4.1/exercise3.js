let numberX = 45;
let numberY = 72;
let numberZ = 8;

if (numberX > numberY && numberX > numberZ){
    return numberX;
} else if (numberY > numberX && numberY> numberZ){
    return numberY;
} else {
    return numberZ;
}