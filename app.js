let name=document.querySelector(".name");
let caption=document.querySelector(".caption");
let postBtn=document.querySelector(".postBtn");
let allPost=document.querySelector(".allPost");




// console.log(name)
// console.log(caption)
// console.log(postBtn)

let arr=[];




postBtn.addEventListener("click",function(){
    let nameValue=name.value;
    let captionValue=caption.value;
//     // console.log(nameValue)
//     // console.log(captionValue)


arr.push({nameValue,captionValue});

    if(nameValue && captionValue){
        allPost.innerHTML+=`<div class="post">
        <h3>${nameValue}</h3>
        <p>${captionValue}</p>
        </div>`
        name.value="";
        caption.value="";
    }else{
        alert("Please fill all the fields")
    }

    display(arr);
});


function display(){

    arr.forEach(function(item){


    allPost.innerHTML+=`<div class="card d-flex allPost" style="width: 18rem;">
                
                <div class="card-body">
                  <h5 class="card-title">${item.nameValue}</h5>
                  <p class="card-text">${item.captionValue}</p>
                  <button type="button" class="btn btn-primary">Edit</button>
                  <button type="button" class="btn btn-danger">delete</button>
                </div>
              </div>`;

    })

    
     
    let deleteBtn=document.querySelectorAll(".btn-danger");
    let editBtn=document.querySelectorAll(".btn-primary");  

    let convertedArr=Array.from(deleteBtn);
    // console.log(convertedArr)                

    convertedArr.forEach(function(item,index){
        item.addEventListener("click",function(){
            arr.splice(index,1);
            allPost.innerHTML="";
            display(arr);
        })                                      
    });


    let editConvertedArr=Array.from(editBtn);
    // console.log(editConvertedArr)    
    editConvertedArr.forEach(function(item,index){
        item.addEventListener("click",function(){


            

            name.value=arr[index].nameValue;
            caption.value=arr[index].captionValue;
            arr.splice(index,1);
            allPost.innerHTML="";
            display(arr);
        })                                      
    })
    }

// console.log(arr)

