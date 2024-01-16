document.write("77.to test whether an array of integers of length 2 contains 1 or 3."+"<br>");
function test77(arr){
    if(arr[0]==1 || arr[1]==1 || arr[0]==3 ||arr[1]==3){
        return true;
    }
    return false;
}
document.write("The array :[1,2,3], ans :"+test77([1,2,3])+"<br>");
document.write("The array :[2,4,5], ans :"+test77([2,4,5])+"<br><br>");