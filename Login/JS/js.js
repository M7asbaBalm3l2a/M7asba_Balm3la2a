// const wrpper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click', ()=> {
//     wrpper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrpper.classList.remove('active');
// });

function changeheader(){
    var headercolor = document.getElementById('header');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        headercolor.classList.remove('headerColor');
    } else{
        headercolor.classList.add('headerColor');
    }
}

window.addEventListener('scroll', changeheader);



// function checkCredentials() {

//     var email = document.getElementById("user").value;
//     var password = document.getElementById("password").value;

//     var correctEmail = ["30110221802378", "30110221802370"];
//     var correctPassword = ["30110221802378", "30110221802370"];

//     if (email === correctEmail && password === correctPassword) {
//         window.location.href = "../../index.html";
//     } else {
//         alert("الرقم القومي أو كلمة مرور غير صحيحة")
//     }
// }

function checkCredentials() {
    var email = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    var correctEmails = ["30110221802378", "30110221802370", "30110221802380"];
    var correctPasswords = ["30110221802378", "30110221802370", "30110221802380"];

    // فحص إذا كان البريد الإلكتروني موجود في المصفوفة
    if (correctEmails.includes(email)) {
        // فحص إذا كان كلمة المرور موجودة في المصفوفة المقابلة
        if (correctPasswords[correctEmails.indexOf(email)] === password) {
            window.location.href = "../../index.html";
        } else {
            alert("الرقم القومي أو كلمة مرور غير صحيحة");
        }
    } else {
        alert("الرقم القومي أو كلمة مرور غير صحيحة");
    }
}



// $(document).ready(function(){

// 	$('body').delegate('#student-loginBtn','click',function(e){
// 		e.preventDefault();
// 		var that = $(this);

// 		$.ajax({
// 			url:gatePath('welcome/loginLogic'),
// 			type:'POST',
// 			data:{
// 				nationalID:$('#student-nationalID').val(),
// 				password:$('#student-password').val()
// 			},
// 			dataType:'JSON',
// 			beforeSend:disable_all(),
// 			success:function(res){
// 				enable_all();
// 				if(res.status == 1){
// 					$('#login-alertOK').text(res.msg);
// 					$('#login-alertOK').fadeIn();
// 					setTimeout(function(){
// 						window.location.href=gatePath('dashboard');
// 					},2000);/*timeOut*/
// 				}else{
// 					$('#login-alertError').text(res.msg);
// 					$('#login-alertError').fadeIn();
// 					setTimeout(function(){

// 						$('#login-alertError').fadeOut();
// 					},10000);/*timeOut*/
// 				}/*incorrect login data*/
// 			}/*success*/
// 		});/*ajax*/

// 	});/*del*/



// });/*ready*/



















