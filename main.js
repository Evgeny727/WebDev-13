// task1
let captcha, s = document.querySelector(".result_capcha"), flag = false;
function capcha_generate() {
	document.getElementById("submit").value = "";
	captcha = document.querySelector("#capcha");
	let uniquechar = "";
	const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i <= 5; i++) {
		uniquechar += randomchar.charAt(Math.random() * randomchar.length)
	}
	captcha.innerHTML = uniquechar;
    if(flag === true) s.innerHTML = "";
}

function printmsg() {
	const usr_input = document.getElementById("submit").value;
	if (usr_input == captcha.innerHTML) {
		s.innerHTML = "Поздравляю! Вы не робот :)";
        s.style.color = "green";
        flag = true;
        setTimeout(capcha_generate, 3000);
	}
	else {
		s.innerHTML = "Неправильно! Попробуйте ещё раз";
        s.style.color = "red";
        flag = false;
		capcha_generate();
	}
}

// task2
document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date(2022, 11, 23);
    let timerId = null;
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    const $days = document.querySelector('.days');
    const $hours = document.querySelector('.hours');
    const $minutes = document.querySelector('.minutes');
    const $seconds = document.querySelector('.seconds');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

//task3
let icon = document.querySelector(".icon"), flag_icon = false,
input_search = document.querySelector("#search");
function width() {
    if(flag === false) {
        input_search.style.width = "300px";
        input_search.style["border-radius"] = "20px";
        flag = true;
    }
    else if(flag === true) {
        input_search.style.width = "50px";
        input_search.style["border-radius"] = "50%";
        input_search.value = "";
        flag = false;
    }
}
icon.addEventListener('click', width);
input_search.onfocus = function() {
    input_search.style.width = "300px";
    input_search.style["border-radius"] = "20px";
    flag = true;
};
input_search.onblur = function() {
    input_search.style.width = "50px";
    input_search.style["border-radius"] = "50%";
    input_search.value = "";
    flag = false;
};

//task4
let img_scientist = document.querySelector(".img-scientist"), img_flag = false,
btns = document.querySelector(".buttons");
img_scientist.addEventListener('click', function() {
    if(img_flag === false) {
        img_scientist.style.width = "310px";
        img_scientist.style.height = "410px";
        img_scientist.style["border-radius"] = "5px";
        img_scientist.style.transform = "translate(-30%, -5%)";
        btns.style.opacity = "0";
        img_flag = true;
    }
    else if(img_flag === true) {
        img_scientist.style.width = "150px";
        img_scientist.style.height = "150px";
        img_scientist.style["border-radius"] = "50%";
        img_scientist.style.transform = "translate(0, 0)";
        btns.style.opacity = "1";
        img_flag = false;
    }
});

//task5
let views = document.querySelectorAll(".amount")[0],
projects = document.querySelectorAll(".amount")[1],
friends = document.querySelectorAll(".amount")[2],
posts = document.querySelectorAll(".amount")[3];

const time = 1000, step = 10, num1 = 9000, num2 = 1000, num3 = 7000 , num4 = 5000;

function outNum1() {
    let e1 = views, n1 = 0;
    let t1 = Math.round(time / (num1 / step));
    let interval1 = setInterval(() => {
    n1 = n1 + step;
    if (n1 == num1) {
        clearInterval(interval1);
    }
    e1.innerHTML = n1;
    }, t1);
}
function outNum2() {
    let e2 = projects, n2 = 0;
    let t2 = Math.round(time / (num2 / step));
    let interval2 = setInterval(() => {
    n2 = n2 + step;
    if (n2 == num2) {
        clearInterval(interval2);
    }
    e2.innerHTML = n2;
    }, t2);
}
function outNum3() {
    let e3 = friends, n3 = 0;
    let t3 = Math.round(time / (num3 / step));
    let interval3 = setInterval(() => {
    n3 = n3 + step;
    if (n3 == num3) {
        clearInterval(interval3);
    }
    e3.innerHTML = n3;
    }, t3);
}
function outNum4() {
    let e4 = posts, n4 = 0;
    let t4 = Math.round(time / (num4 / step));
    let interval4 = setInterval(() => {
    n4 = n4 + step;
    if (n4 == num4) {
        clearInterval(interval4);
    }
    e4.innerHTML = n4;
    }, t4);
}
document.querySelector(".container").addEventListener('click', outNum1);
document.querySelector(".container").addEventListener('click', outNum2);
document.querySelector(".container").addEventListener('click', outNum3);
document.querySelector(".container").addEventListener('click', outNum4);

//task6
let email = document.querySelector(".email"),
password = document.querySelector(".password"),
error1 = document.querySelectorAll(".error")[0],
error2 = document.querySelectorAll(".error")[1],
error_znak1 = document.querySelectorAll(".fa-circle-exclamation")[0],
error_znak2 = document.querySelectorAll(".fa-circle-exclamation")[1],
btn_enter = document.querySelector(".enter"), flag_enter = false,
flag_email = false, flag_password = false;

function check_email() {
    if(email.value === "") {
        error1.innerHTML = "Это поле не может быть пустым";
        email.style.animation = "shake 1s 0s 1";
        email.style.border = "2px solid red";
        email.style["box-shadow"] = "0px 2px 4px 1px red";
        error_znak1.style.display = "inline";
        flag_email = false;
    }
    else if(email.value.indexOf('@') === -1) {
        error1.innerHTML = "Введите правильный адрес";
        email.style.animation = "shake 1s 0s 1";
        email.style.border = "2px solid red";
        email.style["box-shadow"] = "0px 2px 4px 1px red";
        error_znak1.style.display = "inline";
        flag_email = false;
    }
    else {
        error1.innerHTML = "";
        error_znak1.style.display = "none";
        email.style.border = "1px solid rgb(87, 84, 84)";
        email.style["box-shadow"] = "0px 2px 4px 1px rgb(87 84 84)";
        flag_email = true;
    }
}
function check_password() {
    if(password.value === "") {
        error2.innerHTML = "Это поле не может быть пустым";
        password.style.animation = "shake 1s 0s 1";
        password.style.border = "2px solid red";
        password.style["box-shadow"] = "0px 2px 4px 1px red";
        error_znak2.style.display = "inline";
        flag_password = false;
    }
    else {
        error2.innerHTML = "";
        error_znak2.style.display = "none";
        password.style.border = "1px solid rgb(87, 84, 84)";
        password.style["box-shadow"] = "0px 2px 4px 1px rgb(87 84 84)";
        flag_password = true;
    }
}
btn_enter.addEventListener('click', check_email);
btn_enter.addEventListener('click', check_password);
btn_enter.addEventListener('click', function() {
    if((flag_email === true) && (flag_password === true)) {
        flag_enter = true;
    }
    else flag_enter = false;
    if(flag_enter === true) {
        window.open("https://github.com/Evgeny727",'_blank');
    }
});

//task7
let modal_stars = document.querySelector(".modal-stars"),
stars = document.querySelectorAll(".fa-star"), flag_star = false,
stars_content = document.querySelector(".stars-content"),
stars_h2 = document.querySelectorAll(".stars-result"), flag_h2 = false, h2_num,
emoji = document.querySelectorAll(".fa-xl"),
btn_send = document.querySelector(".send-review"),
modal_review = document.querySelector(".modal-review")
btn_change = document.querySelector(".change");

for(let i=0; i < stars.length; i++) {
    stars[i].addEventListener('mouseover', function() {
        if(flag_star === false) {
            stars[i].style.opacity = "1";
        }
    });
    stars[i].addEventListener('mouseout', function() {
        if(flag_star === false) {
            stars[i].style.opacity = "0.1";
        }
    });
    if(i>0) {
        for(let j=0; j < i; j++) {
            stars[i].addEventListener('mouseover', function() {
                if(flag_star === false) {
                    stars[j].style.opacity = "1";
                }
            });
            stars[i].addEventListener('mouseout', function() {
                if(flag_star === false) {
                    stars[j].style.opacity = "0.1";
                }
            });
        }
    }
}
for(let i=0; i < stars.length; i++) {
    stars[i].addEventListener('click', function() {
        stars[i].style.opacity = "1";
        flag_star = true;
    });
    if(i>0) {
        for(let j=0; j < i; j++) {
            stars[i].addEventListener('click', function() {
                stars[j].style.opacity = "1";
            });
        }
    }
    stars[i].addEventListener('click', function() {
        modal_stars.style.height = "300px";
        stars_content.style.display = "block";
        if(flag_h2 === false) {
            if(i>=0 && i<2) {
                stars_h2[0].style.display = "block";
                h2_num = 0;
            }
            else if(i>=2 && i<4) {
                stars_h2[1].style.display = "block";
                h2_num = 1;
            }
            else if(i===4) {
                stars_h2[2].style.display = "block";
                h2_num = 2;
            }
            flag_h2 = true;
        }
    });
}
btn_send.addEventListener('click', function() {
    for(let i=0; i < stars.length; i++) {
        stars[i].style.opacity = "0.1";
    }
    modal_stars.style.display = "none";
    modal_stars.style.height = "100px";
    stars_content.style.display = "none";
    modal_review.style.display = "block";
    flag_h2 = false;
    flag_star = false;
    stars_h2[h2_num].style.display = "none";
    document.querySelector(".experience").value = "";
});
btn_change.addEventListener('click', function() {
    modal_stars.style.display = "block";
    modal_review.style.display = "none";
});