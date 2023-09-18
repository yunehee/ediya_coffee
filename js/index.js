/////////////// 메인배너

let main_banner_img = document.querySelectorAll('.main_banner_img');
let main_banner_img_box = document.getElementsByClassName('main_banner_img_box')[0];
let main_banner_img_box_wrap = document.getElementsByClassName('main_banner_img_box_wrap')[0];
let banner_count = main_banner_img.length;
let banner_index = 0;
let indi_box = document.getElementsByClassName('indi_box')[0];
let main_banner_prev_btn  = document.querySelector('.main_banner_prev_btn');
let main_banner_next_btn = document.querySelector('.main_banner_next_btn');
let main_banner_container  = document.querySelector('.main_banner_container');
let interval = "";


// 인디케이션 버튼 만들기
for(let i = 0; i < banner_count; i++) {
    indi_box.innerHTML += '<li class="indi">'+ (i + 1) +'</li>';
};

let indi = document.querySelectorAll('.indi');

// 배너 초기화
indi[0].classList.add('indi_active');

main_banner_img_box_wrap.appendChild(main_banner_img_box_wrap.firstElementChild.cloneNode(true));


// 슬라이드 이동 함수
function main_banner_slide(){
    timer = setInterval(function(){
        banner_index++;
    
        main_banner_img_box_wrap.style.transition = 'all 0.6s';
        main_banner_img_box_wrap.style.marginLeft = -banner_index * 100 + '%';
    
    
        if(banner_index == main_banner_img.length) {
            setTimeout(function(){
                main_banner_img_box_wrap.style.transition = '0s';
                main_banner_img_box_wrap.style.marginLeft = 0;
    
                banner_index = 0;
            }, 700);
        };
    }, 3000);
};

main_banner_slide();


// 배너에 마우스 들어가면 멈추고 나오면 움직이기
main_banner_container.addEventListener('mouseenter', function() {
    clearInterval(timer);
});

main_banner_container.addEventListener('mouseleave', function() {
    main_banner_slide();
});



// 버튼 클릭하면 슬라이드 이동 하기
// main_banner_prev_btn.addEventListener('click', function() {

//     banner_index -= 1;
//     if(banner_index == 0) {
//         banner_index = banner_count;
//     };

//     main_banner_img_box_wrap.style.transition = 'all 0.6s';
//     main_banner_img_box_wrap.style.marginLeft = -banner_index * 100 + '%';

// });

// main_banner_next_btn.addEventListener('click', function() {

//     main_banner_img_box_wrap.style.transition = 'all 0.6s';
//     main_banner_img_box_wrap.style.marginLeft = -banner_index * 100 + '%';

//     banner_index += 1;

// });





// indi로 슬라이드 이동하기
// 클릭한 indi의 index값 구하기
// function getElementIndex(element, range) {
//     if(!!range) return [].indexOf.call(element, range);
//     return [].indexOf.call(element.parentNode.children, element);
// };


// let click_indi_number,
// indi_active_number;



// [].forEach.call(document.querySelectorAll('.indi_box .indi'), function(el) {
//     el.addEventListener('click', function() {

//         // 원래 indi_active 가지고있는 indi의 index 값
//         indi_active_number = Array.from(document.querySelectorAll('.indi_box li')).indexOf(document.querySelector('.indi_active'));


//         // 클릭한 indi의 index 값
//         click_indi_number = getElementIndex(document.querySelectorAll('.indi_box .indi'), el);
      

//         // 현재 클릭한게 원래 색칠된거보다 왼쪽인지 오른쪽인지
//         let gap = click_indi_number - indi_active_number;

//         if(gap > 0) {

//             main_banner_slide(click_indi_number % banner_count, 100, indi_active_number % banner_count, -100);

//             banner_index = click_indi_number + 1;
          
//         }

        
//         else if (gap < 0) {
           
//             main_banner_slide(click_indi_number, -100, indi_active_number % banner_count, 100);

//             banner_index = click_indi_number + 1;

//         };

//     });
// });




////////// What's new

// 음료 또는 푸드 누르면 ul 바꾸기
let new_sub_menu = document.getElementsByClassName('new_sub_menu'),
    new_outer_box = document.getElementsByClassName('new_outer_box');

new_sub_menu[0].style.background = '#f3b3c3';

for(let i = 0; i < new_sub_menu.length; i++) {
    new_sub_menu[i].addEventListener('click', function() {

        for(let j = 0; j < new_sub_menu.length; j++) {
            new_sub_menu[j].style.background = '#f6eaf4';
            new_outer_box[j].style.display = 'none';
        }
        new_sub_menu[i].style.background = '#f3b3c3';
        new_outer_box[i].style.display = 'block';
        
    });
};