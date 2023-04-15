/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    console.log("Students with proffession developer using map ");
    arr.map(mapcallback);
    function mapcallback(element){
        if(element.profession=="developer"){
            console.log(element.id,element.name,element.age,element.profession);
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    console.log("printing developer by forEach");
    arr.forEach(callbackforEach);
    function callbackforEach(element){
        if(element.profession=="developer"){
            console.log(element.id,element.name,element.age,element.profession);
        }
  }
}
  
  function addData() {
    console.log("After adding element in array");
    newObj={
        id:4,
        name:"pranjal",
        age:"22",
        profession:"FrontEnd Developer"
    }
    arr.push(newObj);
    for(let i in arr){
        console.log(arr[i]);
    }
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    console.log("After removing the object where the profession is admin.")
    
    for(let i in arr){
        if(arr[i].profession=="admin")
        {
            delete arr[i];
        }
    }
    for(let i in arr){
        console.log(arr[i]);
    }
  }
  
  
  function concatenateArray() {
    console.log("After Concatinate another Array the Array is ")
    let arr2 = [
        { id: 5, name: "Animesh", age: "30", profession: "FSD-Developer" },
        { id: 6, name: "Gaurav", age: "28", profession: "Tester" },
        { id: 7, name: "Shubham", age: "21", profession: "Developer" },
      ];
     let concatArray= arr.concat (arr2);
    //Write your code here, just console.log
    for(let i in concatArray){
        console.log(concatArray[i]);
    }
  }