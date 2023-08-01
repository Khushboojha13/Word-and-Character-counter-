

function countword(){
    let words= document.getElementById("word").value;
    console.log(words);
    let counts=0;
    let charcount=0;
    words= words.trim();
    let splitwords=words.replace(/[\t\n\r\.\?\!]/gm, " ").split(' '); //yaha splitwords array ban jayega and jaha bhi space milega ye tod dega string ko

    //yaha peplace jo bhi chize hai \t \n etc usko " " se replace kar dega 
   
      //split se ek array return hota hai jisme har word ko indexing milti hai 0 se  - yaha hamne spli ko " " separator diya hai means vo space atte hi words ko separate kar dega but yaha bhi problem ye hai ki do space ek sath diye to ye split ek space ko word  man lega dusre wale space ko
    console.log("words are:");
    console.log(splitwords);
    console.log("length is "+splitwords.length);
    
    for(let i=0;i<splitwords.length;i++){
          
       if(splitwords[i]!==''){
       console.log(splitwords[i]);
       counts++;
       }
     
             for(let j=0;j<splitwords[i].length;j++)
             charcount++;
     
    }
    console.log(counts);
    console.log(charcount);
   /* let paradd= document.querySelector("span");
    paradd.innerHTML= counts; */
    let paradd= document.getElementById("span1");
    paradd.innerHTML= counts;
    document.getElementById("span2").innerHTML=charcount;
}

