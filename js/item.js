let item_no = get_url_info("item_no") - 1,
    item_img_box = document.getElementsByClassName('item_img_box')[0],
    item_name = document.getElementsByClassName('item_name')[0],
    item_desc = document.getElementsByClassName('item_desc')[0],
    calorie = document.getElementsByClassName('calorie')[0],
    protein = document.getElementsByClassName('protein')[0],
    sodium = document.getElementsByClassName('sodium')[0],
    sugars = document.getElementsByClassName('sugars')[0],
    saturated_fat = document.getElementsByClassName('saturated_fat')[0],
    caffeine = document.getElementsByClassName('caffeine')[0],
    caffeine_box = document.getElementsByClassName('caffeine_box')[0];





function load_items(array_no, cate_no, item_no) {

    // 이미지
    item_img_box.innerHTML = '<img src="img/menu/' + menu_array[array_no] + '/' + title_array[array_no][cate_no] + '/' + ITEM_LIST[array_no][cate_no][item_no]['src'] + '" alt="">';
    

    // 이름
    item_name.innerText = ITEM_LIST[array_no][cate_no][item_no]['name'];


    // 설명
    item_desc.innerText = ITEM_LIST[array_no][cate_no][item_no]['desc'];


    // 영양정보
    calorie.innerText = ITEM_LIST[array_no][cate_no][item_no]['calorie'];
    protein.innerText = ITEM_LIST[array_no][cate_no][item_no]['protein'];
    sodium.innerText = ITEM_LIST[array_no][cate_no][item_no]['sodium'];
    sugars.innerText = ITEM_LIST[array_no][cate_no][item_no]['sugars'];
    saturated_fat.innerText = ITEM_LIST[array_no][cate_no][item_no]['saturated_fat'];

    if(ITEM_LIST[array_no][cate_no][item_no]['caffeine'] == "") {
        caffeine_box.style.display = "none";
    }
    else {
        caffeine.innerText = ITEM_LIST[array_no][cate_no][item_no]['caffeine'];
    };
    
};


let cate_no = get_url_info("cate_no"),
    array_no = get_url_info("array_no")

load_items(array_no, cate_no, item_no);