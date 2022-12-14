function handleJustFunctionClick(){
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = "set by using Javascript"
  document.getElementById('clicking-method').style.color = 'red';
  document.getElementById('clicking-method').style.fontSize = '50px';
  document.getElementById('clicking-method').style.border = '5px solid green';
}

// Button ----------- Direct Click*/

document.getElementById("direct").addEventListener('click', function(){
    const pi = document.getElementById('clicking-method');
    pi.innerText = "Set By Direct add Event Listener";
    
})

// function direct(){
//     const clickingMethod = document.getElementById('clicking-method');
//     clickingMethod.innerText = "set by direct using Javascript"
//   document.getElementById('clicking-method').style.color = 'red';
//   document.getElementById('clicking-method').style.fontSize = '50px';
//   document.getElementById('clicking-method').style.border = '5px solid green';
// }

// ******************* Input PaymentRequestUpdateEvent......

document.getElementById('update-name').addEventListener('click',function(){
    const nameFiled = document.getElementById('name-field');
    console.log(nameFiled);
    const p = document.getElementById('clicking-method');
    p.innerText = nameFiled.value;
    nameFiled.value = ' ';

})

// Add a Comment Box 

                // 1. Add a button
                document.getElementById("submit-comment").addEventListener('click',function(){

                    // 2.get user comment
                    const comment = document.getElementById("new-comment");
                    const userComment = comment.value;

                    // 3.creat comment paragraph
                    const newComment  = document.createElement('p');
                    newComment.innerText = comment.value;

                    // 4. Append the Text
                    const p = document.getElementById('comment-container');
                    p.appendChild(newComment);
                    // 5. Clear Box 
                    comment.value = '';
                })
       