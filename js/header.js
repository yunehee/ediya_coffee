let header = document.querySelector('.header');
let header_right_section = document.querySelector('.header_right_section');
let gnb_ul = document.querySelector('.gnb_ul');
let gnb_li = document.querySelectorAll('.gnb_li');
let ham_menu = document.querySelector('.ham_menu');


// gnb
gnb_li.forEach(function(nav_li){
    nav_li.addEventListener('mouseover', function(){
        // 1100 이상일 때
        if(window.innerWidth > 1100) {
            header.classList.add('nav_on');
            this.querySelector('.gnb_li_inner').style.height = '276px';
        }

        // 1100 이하일 때
        else if(window.innerWidth <= 1100) {
            let gnb_inner_li_count = this.querySelector('.gnb_li_inner').childElementCount;

            this.querySelector('.gnb_li_inner').style.height = gnb_inner_li_count * 46 + 'px';
        }
    });
});
gnb_li.forEach(function(nav_li){
    nav_li.addEventListener('mouseout', function(){
        // 1100 이상일 때
        if(window.innerWidth > 1100) {
            header.classList.remove('nav_on');
            this.querySelector('.gnb_li_inner').style.height = '0';
        }

        // 1100 이하일 때
        else if(window.innerWidth <= 1100) {
            this.querySelector('.gnb_li_inner').style.height = '0';
        }
    });
});


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