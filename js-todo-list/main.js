// TO DO
document.addEventListener("DOMContentLoaded", function(){

  // // 第一題
  // document.querySelectorAll('li').forEach(function(list) {
  //   list.addEventListener('click', function(e){
  //     e.target.classList.toggle('checked');
  //   })
  // })

    // 第二題
    document.querySelectorAll('.close').forEach(function(list) {
      list.addEventListener('click', function(e){
        e.target.parentNode.remove();
      })
    })
  
    
})
