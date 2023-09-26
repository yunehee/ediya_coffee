window.onload = function(){
    let header = document.getElementsByClassName('header')[0];
    let gnb_li = document.querySelectorAll('.gnb_li');

    gnb_li.forEach(function(nav_li){
        nav_li.addEventListener('mouseover', function(){
            header.classList.add('nav_on');
            this.querySelector('.gnb_li_inner').style.height = '276px';
            this.querySelector('.gnb_li_inner').style.transition = 'all 0.6s';
        });
    });
    gnb_li.forEach(function(nav_li){
        nav_li.addEventListener('mouseout', function(){
            header.classList.remove('nav_on');
            this.querySelector('.gnb_li_inner').style.height = '0';
            this.querySelector('.gnb_li_inner').style.transition = 'all 0.3s';

        });
    });
};