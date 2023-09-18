let menu_banner = document.getElementsByClassName('menu_banner')[0],
    menu_list_ul = document.getElementsByClassName('menu_list_ul')[0],
    banner_title = document.getElementsByClassName('banner_title')[0],
    show_more_btn = document.getElementsByClassName('show_more_btn')[0],
    qty = 0,
    lnb_ul = document.getElementsByClassName('lnb_ul'),
    lnb_li = document.getElementsByClassName('lnb_li');




function load_items(array_no, cate_no, total_qty) {

    if(get_url_info("cate_no") != null) {
        // menu_list_ul.setAttribute('id', menu_array[array_no][cate_no]);
        banner_title.textContent = menu_title[array_no];
    };

    // lnb 색깔 표시
    lnb_ul[get_url_info("array_no")].children[get_url_info("cate_no")].classList.add("menu_nav_active");



    // menu_banner 배경 바꾸기
    menu_banner.style.background = 'url(img/menu/bg/' + bg_array[array_no] + '.jpg) no-repeat center / cover';
    


    // 제품 리스트
    if(total_qty <= 9) {
        for(let i = 0; i < total_qty; i++) {
            item_no += 1;

            let menu_item_list = `
                <li class="menu_list_li">
                    <a href="item.html?array_no=` + array_no + `&cate_no=` + cate_no + `&item_no=` + item_no + `">
                        <div class="menu_img_box">
                            <img src="img/menu/` + menu_array[array_no] + '/' + title_array[array_no][cate_no] + '/' + ITEM_LIST[array_no][cate_no][i]['src'] + `" alt="">
                        </div>
                        <div class="menu_name">` + ITEM_LIST[array_no][cate_no][i]['name'] + `</div>
                    </a>
                </li>
            `;
        
            menu_list_ul.innerHTML += menu_item_list;

            show_more_btn.style.display = 'none';
    
        };
    }

    else if(total_qty > 9) {
        for(let i = 0; i < 9; i++) {
            item_no += 1;

            let menu_item_list = `
                <li class="menu_list_li">
                    <a href="item.html?array_no=` + array_no + `&cate_no=` + cate_no + `&item_no=` + item_no + `">
                        <div class="menu_img_box">
                            <img src="img/menu/` + menu_array[array_no] + '/' + title_array[array_no][cate_no] + '/' + ITEM_LIST[array_no][cate_no][i]['src'] + `" alt="">
                        </div>
                        <div class="menu_name">` + ITEM_LIST[array_no][cate_no][i]['name'] + `</div>
                    </a>
                </li>
            `;
            menu_list_ul.innerHTML += menu_item_list;
    
        };

        qty = 9;

        show_more_btn.style.display = 'block';
        
    };

};



let cate_no = get_url_info("cate_no"),
    array_no = get_url_info("array_no"),
    item_no = 0;


load_items(array_no, cate_no, ITEM_LIST[array_no][cate_no].length);



// 더보기

show_more_btn.addEventListener('click', function() {
    
    if(ITEM_LIST[array_no][cate_no].length > qty) {
        
        if(ITEM_LIST[array_no][cate_no].length - qty < 9) {
            for(let i = 0; i < ITEM_LIST[array_no][cate_no].length - qty; i++) {
                item_no += 1;

                let menu_item_list = `
                    <li class="menu_list_li">
                        <a href="item.html?array_no=` + array_no + `&cate_no=` + cate_no + `&item_no=` + item_no + `">
                            <div class="menu_img_box">
                                <img src="img/menu/` + menu_array[array_no] + '/' + title_array[array_no][cate_no] + '/' + ITEM_LIST[array_no][cate_no][qty + i]['src'] + `" alt="">
                            </div>
                            <div class="menu_name">` + ITEM_LIST[array_no][cate_no][qty + i]['name'] + `</div>
                        </a>
                    </li>
                `;
    
                menu_list_ul.innerHTML += menu_item_list;
                
            };
    
            show_more_btn.style.display = 'none';
        }

        else {
            for(let i = 0; i < 9; i++) {
                item_no += 1;

                let menu_item_list = `
                    <li class="menu_list_li">
                        <a href="item.html?array_no=` + array_no + `&cate_no=` + cate_no + `&item_no=` + item_no + `">
                            <div class="menu_img_box">
                                <img src="img/menu/` + menu_array[array_no] + '/' + title_array[array_no][cate_no] + '/' + ITEM_LIST[array_no][cate_no][qty + i]['src'] + `" alt="">
                            </div>
                            <div class="menu_name">` + ITEM_LIST[array_no][cate_no][qty + i]['name'] + `</div>
                        </a>
                    </li>
                `;
                menu_list_ul.innerHTML += menu_item_list;
        
            };
    
            qty += 9;
    
            show_more_btn.style.display = 'block';
        };
        
    }
    else if(ITEM_LIST[array_no][cate_no].length <= qty) {
        for(let i = 0; i < 9; i++) {
            item_no += 1;

            let menu_item_list = `
                <li class="menu_list_li">
                    <a href="item.html?array_no=` + array_no + `&cate_no=` + cate_no + `&item_no=` + item_no + `">
                        <div class="menu_img_box">
                            <img src="img/menu/` + menu_array[array_no] + '/' + title_array[array_no][cate_no] + '/' + ITEM_LIST[array_no][cate_no][qty + i]['src'] + `" alt="">
                        </div>
                        <div class="menu_name">` + ITEM_LIST[array_no][cate_no][qty + i]['name'] + `</div>
                    </a>
                </li>
            `;
            menu_list_ul.innerHTML += menu_item_list;

            show_more_btn.style.display = 'none';
    
        };

    };
});