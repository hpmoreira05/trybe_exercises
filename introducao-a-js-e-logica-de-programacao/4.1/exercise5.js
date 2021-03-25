let angle1 = 100;
let angle2 = 79;
let angle3 = 16;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0 ){
    return 'Error (conferir se não ha nenhum angulo negativo ou igual a zero)'
}

if (angle1 + angle2 + angle3 !== 180){
    return false;
} else {
    return true;
}