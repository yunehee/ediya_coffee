let header = document.querySelector('.header');
let header_right_section = document.querySelector('.header_right_section');
let gnb_ul = document.querySelector('.gnb_ul');
let gnb_li = document.querySelectorAll('.gnb_li');
let ham_menu = document.querySelector('.ham_menu');


// gnb
// gnb_ul.forEach(function(nav_li){
    // 1100 이상일 때
    if(window.innerWidth > 1100) {
        gnb_ul.addEventListener('mouseover', function(){
            gnb_ul.classList.add('nav_on');
            gnb_ul.querySelectorAll('.gnb_li_inner').forEach(sub => {sub.style.height = '290px';});
        });
        gnb_ul.addEventListener('mouseout', function(){
            gnb_ul.classList.remove('nav_on');
            gnb_ul.querySelectorAll('.gnb_li_inner').forEach(sub => {sub.style.height = '0';});
        });
    }

    //  1100 이하일 때
    else if(window.innerWidth <= 1100) {
        nav_li.addEventListener('mouseover', function(){
            let gnb_inner_li_count = this.querySelector('.gnb_li_inner').childElementCount;

            nav_li.querySelectorAll('.gnb_li_inner').style.height = gnb_inner_li_count * 46 + 'px';
        });
        nav_li.addEventListener('mouseout', function(){
            nav_li.querySelectorAll('.gnb_li_inner').style.height = '0';
        });
    }

    // nav_li.addEventListener('mouseover', function(){
    //     // 1100 이상일 때
    //     if(window.innerWidth > 1100) {
    //         header.classList.add('nav_on');
    //         this.querySelector('.gnb_li_inner').style.height = '276px';
    //     }

    //     // 1100 이하일 때
    //     else if(window.innerWidth <= 1100) {
    //         let gnb_inner_li_count = this.querySelector('.gnb_li_inner').childElementCount;

    //         this.querySelector('.gnb_li_inner').style.height = gnb_inner_li_count * 46 + 'px';
    //     }
    // });

    // nav_li.addEventListener('mouseout', function(){
    //     // 1100 이상일 때
    //     if(window.innerWidth > 1100) {
    //         header.classList.remove('nav_on');
    //         this.querySelector('.gnb_li_inner').style.height = '0';
    //     }

    //     // 1100 이하일 때
    //     else if(window.innerWidth <= 1100) {
    //         this.querySelector('.gnb_li_inner').style.height = '0';
    //     }
    // });
// });


// ham_menu
ham_menu.addEventListener('click', function(){
    this.querySelectorAll('.ham_line').forEach(function(el){
        if(el.classList.contains('active')) {
            header.classList.remove('nav_on');
            header_right_section.style.transform = 'scaleY(0)';
        }
        else {
            header.classList.add('nav_on');
            header_right_section.style.transform = 'scaleY(1)';
        }

        el.classList.toggle('active');
    });
});



window.onresize = function(event){
    var innerWidth = window.innerWidth;
    innerWidth <= '1100' ? header_right_section.style.transform = 'scaleY(0)' : header_right_section.style.transform = 'scaleY(1)';
};