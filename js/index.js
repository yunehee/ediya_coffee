/////////////// 메인배너

let main_banner_img = document.querySelectorAll('.main_banner_img');
let main_banner_img_box_wrap = document.getElementsByClassName('main_banner_img_box_wrap')[0];
let banner_count = main_banner_img.length;
let banner_index = 0;
let indi_box = document.getElementsByClassName('indi_box')[0];
let main_banner_prev_btn  = document.querySelector('.main_banner_prev_btn');
let main_banner_next_btn = document.querySelector('.main_banner_next_btn');
let main_banner_container  = document.querySelector('.main_banner_container');
let timer = "";

// 인디케이션 버튼 만들기
for(let i = 0; i < banner_count; i++) {
    indi_box.innerHTML += '<li class="indi">'+ (i + 1) +'</li>';
};

let indi = document.querySelectorAll('.indi');

// 배너 초기화
indi[0].classList.add('indi_active');

main_banner_img_box_wrap.appendChild(main_banner_img_box_wrap.firstElementChild.cloneNode(true));

// main_banner_img_box_wrap.prepend(main_banner_img_box_wrap.lastElementChild.cloneNode(true));
// main_banner_img_box_wrap.appendChild(main_banner_img_box_wrap.firstElementChild.nextElementSibling.cloneNode(true));


// 슬라이드 이동 함수
function main_banner_slide(){
    timer = setInterval(function(){
        banner_index++;

        main_banner_img_box_wrap.style.transition = 'all 0.6s';
        main_banner_img_box_wrap.style.marginLeft = -banner_index * 100 + '%';

        indi.forEach(function(el){
            el.classList.remove('indi_active');
        });

        if(banner_index == main_banner_img.length) {
            indi[0].classList.add('indi_active');

            setTimeout(function(){
                main_banner_img_box_wrap.style.transition = '0s';
                main_banner_img_box_wrap.style.marginLeft = 0;
                
                
                banner_index = 0;

            }, 700);
        }
        else {
            indi[banner_index].classList.add('indi_active');
        }

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
main_banner_prev_btn.addEventListener('click', function() {     // 5 4 3 2 1 0 5 4 3
    btn_init();

    banner_index -= 1;

    indi.forEach(function(el){
        el.classList.remove('indi_active');
    });
    

    if(banner_index == -1) {
        main_banner_img_box_wrap.style.marginLeft = -6 * 100 + '%';
        
        setTimeout(function(){
            main_banner_img_box_wrap.style.transition = 'all 0.6s';
            main_banner_img_box_wrap.style.marginLeft = -5 * 100 + '%';
        }, 1);

        indi[5].classList.add('indi_active');
        banner_index = banner_count - 1;
    }
    else {
        main_banner_img_box_wrap.style.transition = 'all 0.6s';
        main_banner_img_box_wrap.style.marginLeft = -banner_index * 100 + '%';

        indi[banner_index].classList.add('indi_active');
    }
});

main_banner_next_btn.addEventListener('click', function() {     // 0 1 2 3 4 5 0 1 2 3 4
    btn_init();

    banner_index += 1;

    main_banner_img_box_wrap.style.transition = 'all 0.6s';
    main_banner_img_box_wrap.style.marginLeft = -banner_index * 100 + '%';

    indi.forEach(function(el){
        el.classList.remove('indi_active');
    });

    if(banner_index == banner_count) {
        indi[0].classList.add('indi_active');

        setTimeout(function(){
            
            main_banner_img_box_wrap.style.transition = '0s';
            main_banner_img_box_wrap.style.marginLeft = 0;

            banner_index = 0;
            
        }, 700);
    }
    else {
        indi[banner_index].classList.add('indi_active');
    }
});


// indi로 슬라이드 이동하기
indi.forEach(function(el, indi_index){
    el.addEventListener('click', function(){
        indi.forEach(function(el){
            el.classList.remove('indi_active');
        });
        indi[indi_index].classList.add('indi_active');

        main_banner_img_box_wrap.style.transition = 'all 0.6s';
        main_banner_img_box_wrap.style.marginLeft = -indi_index * 100 + '%';

        banner_index = indi_index;
    });
});

// 버튼막기
function btn_init() {
    main_banner_prev_btn.style.pointerEvents = 'none';
    main_banner_next_btn.style.pointerEvents = 'none';

    setTimeout(function(){
        main_banner_prev_btn.style.pointerEvents = 'auto';
        main_banner_next_btn.style.pointerEvents = 'auto';
    }, 600);
};





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