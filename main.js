// var myelements = document.getElementsByTagName('li') ; 
// var list2 = document.getElementById('list2') ; 
// var list1 = document.getElementById('list1'); 
// var listItems1 = document.getElementById('list1').getElementsByTagName('li') ; 
// var listItems2 = document.getElementById('list2').getElementsByTagName('li') ; 

const mainwrapper = document.querySelector('.mainwrapper')

mainwrapper.addEventListener('click' , (e) => { 
   if(e.target.nodeName == 'LI'){

    clickedelement= e.target ; 
      //  console.log(clickedvalue);

   }

})

// for(var i = 0 ; i < myelements.length ; i++) {
//   myelements[i].addEventListener('click' , (e) => {
//     clickedelement = e.target ;
//   })
// }

  prev = document.querySelector('.btn2') ; 
  prev.addEventListener('click' , () => {
    var listItem = document.createElement('li'); 
    listItem.innerText = clickedelement.innerText ;
    list2.appendChild(listItem) ;
    clickedelement.remove() ;
    console.log(clickedelement.innerText);
  })


  next = document.querySelector('.btn1') ; 
  next.addEventListener('click' , () => {
    var listItem = document.createElement('li'); 
    listItem.innerText = clickedelement.innerText ;
    list1.appendChild(listItem) ;
    clickedelement.remove() ;
 
  })

  var addcourse = document.getElementById("addcourse") ; 
  
  addcourse.addEventListener('click' , (e) =>  {
    e.preventDefault();
    getcoursevalue = document.getElementById("getcourse").value ; 

    if (getcoursevalue.trim() != "")  {

      var listItem = document.createElement('li'); 
      listItem.innerText = getcoursevalue ;
      list1.appendChild(listItem) ;
      
    }

  })


