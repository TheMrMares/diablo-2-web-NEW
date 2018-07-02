export function isContained(x,y,obj){
    if((x >= obj.x1 && x <= obj.x2) && (y >= obj.y1 && y <= obj.y2)){
        return true;
    } else {
        return false;
    }
}