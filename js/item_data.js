const ITEM_LIST = 
[
    // DRINK
    [
        // COFFEE
        [
            {item_no: 1, src: 'coffee1.png', name: '(L) ICED 넛츠 크림 라떼', price: 8000, desc: '부드러운 크림과 에스프레소, 너티 플레이버가 어우러져 만들어진 완벽한 한잔의 라떼', calorie: '429kcal', sugars: '51g', protein: '9g', saturated_fat: '14g', sodium: '308mg', caffeine: '232mg'},
            {item_no: 2, src: 'coffee2.png', name: '아포가토 오리지널', price: 8000, desc: '대중들에게 가장 친숙한 타입의 아포가토로 이디야 빙볼에 에스프레소와 아몬드를 토핑한 제품', calorie: '171kcal', sugars: '15g', protein: '4g', saturated_fat: '6g', sodium: '33mg', caffeine: '116mg'},
            {item_no: 3, src: 'coffee3.png', name: 'ICED 콜드브루 아메리카노', price: 8000, desc: '이디야만의 블렌딩을 통해 커피의 깊은 단맛과 바디감, 균형잡힌 밸런스를 느낄 수 있는 시원한 콜드브루 커피', calorie: '12kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '0mg', caffeine: '104mg'},
            {item_no: 4, src: 'coffee4.png', name: '(EX) ICED 콜드브루 아메리카노', price: 8000, desc: '이디야만의 블렌딩을 통해 커피의 깊은 단맛과 바디감, 균형잡힌 밸런스를 느낄 수 있는 시원한 콜드브루 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 5, src: 'coffee5.png', name: 'ICED 디카페인 콜드브루 아메리카노', price: 8000, desc: '(디카페인)이디야만의 블렌딩을 통해 커피의 깊은 단맛과 바디감, 균형잡힌 밸런스를 느낄 수 있는 시원한 콜드브루 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 6, src: 'coffee6.png', name: '(EX) ICED 디카페인 콜드브루 아메리카노', price: 8000, desc: '(디카페인)이디야만의 블렌딩을 통해 커피의 깊은 단맛과 바디감, 균형잡힌 밸런스를 느낄 수 있는 시원한 콜드브루 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 7, src: 'coffee7.png', name: 'ICED 디카페인 콜드브루 라떼', price: 8000, desc: '(디카페인)콜드브루의 깔끔하고 쌉싸름한 풍미가 고소한 우유와 만나 누구나 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 8, src: 'coffee8.png', name: '(EX) ICED 디카페인 콜드브루 라떼 ', price: 8000, desc: '(디카페인)콜드브루의 깔끔하고 쌉싸름한 풍미가 고소한 우유와 만나 누구나 부담없이 즐길 수 있는 음료 ', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 8, src: 'coffee8.png', name: 'ICED 콜드브루 라떼', price: 8000, desc: '콜드브루의 깔끔하고 쌉싸름한 풍미가 고소한 우유와 만나 누구나 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 9, src: 'coffee9.png', name: '(EX) ICED 콜드브루 라떼', price: 8000, desc: '콜드브루의 깔끔하고 쌉싸름한 풍미가 고소한 우유와 만나 누구나 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 10, src: 'coffee10.png', name: 'ICED 콜드브루 니트로', price: 8000, desc: '이디야커피만의 질소투입방식을 통해 신선하고 부드러운 거품과 목넘김, 풍미를 느낄 수 있는 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 11, src: 'coffee11.png', name: 'ICED 디카페인 콜드브루 니트로 ', price: 8000, desc: '(디카페인)이디야커피만의 질소투입방식을 통해 신선하고 부드러운 거품과 목넘김, 풍미를 느낄 수 있는 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 12, src: 'coffee12.png', name: 'ICED 콜드브루 화이트 비엔나', price: 8000, desc: '달콤한 크림과 화이트 초콜릿향, 아이리쉬크림향이 더해져 콜드브루의 풍미가 잘 어우러진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 13, src: 'coffee13.png', name: 'ICED 디카페인 콜드브루 화이트 비엔나', price: 8000, desc: '(디카페인)달콤한 크림과 화이트 초콜릿향, 아이리쉬크림향이 더해져 콜드브루의 풍미가 잘 어우러진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 14, src: 'coffee14.png', name: 'ICED 디카페인 흑당 콜드브루 ', price: 8000, desc: '(디카페인)이디야 밸런스 잡힌 콜드브루에 진하고 달콤한 흑당과 고소한 우유가 어우러진 커피음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 15, src: 'coffee15.png', name: '(EX) ICED 디카페인 흑당 콜드브루', price: 8000, desc: '(디카페인)이디야 밸런스 잡힌 콜드브루에 진하고 달콤한 흑당과 고소한 우유가 어우러진 커피음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 16, src: 'coffee16.png', name: 'ICED 디카페인 연유 콜드브루', price: 8000, desc: '(디카페인)베트남풍 연유의 달콤한 맛과 밸런스 잡힌 이디야 콜드브루가 어우러져 특색있게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 17, src: 'coffee17.png', name: '(EX) ICED 디카페인 연유 콜드브루 ', price: 8000, desc: '(디카페인)베트남풍 연유의 달콤한 맛과 밸런스 잡힌 이디야 콜드브루가 어우러져 특색있게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 18, src: 'coffee18.png', name: 'ICED 디카페인 버블 흑당 콜드브루 ', price: 8000, desc: '(디카페인)이디야의 밸런스 잡힌 콜드브루에 진하고 달콤한 흑당과 쫄깃한 버블이 어우러진 커피음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 19, src: 'coffee19.png', name: '(EX) ICED 디카페인 버블 흑당 콜드브루', price: 8000, desc: '(디카페인)이디야의 밸런스 잡힌 콜드브루에 진하고 달콤한 흑당과 쫄깃한 버블이 어우러진 커피음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 20, src: 'coffee20.png', name: 'ICED 흑당 콜드브루', price: 8000, desc: '이디야 밸런스 잡힌 콜드브루에 진하고 달콤한 흑당과 고소한 우유가 어우러진 커피음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 21, src: 'coffee21.png', name: '(EX) ICED 흑당 콜드브루', price: 8000, desc: '이디야 밸런스 잡힌 콜드브루에 진하고 달콤한 흑당과 고소한 우유가 어우러진 커피음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 22, src: 'coffee22.png', name: '(L) HOT 연유 카페 라떼 ', price: 8000, desc: '베트남풍 연유의 달콤한 맛과 에스프레소가 절묘하게 어우러져 누구나 쉽게 즐길 수 있는 부드러운 커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 23, src: 'coffee23.png', name: '(L) ICED 연유 카페 라떼 ', price: 8000, desc: '베트남풍 연유의 달콤한 맛과 에스프레소가 절묘하게 어우러져 누구나 쉽게 즐길 수 있는 부드러운 커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 24, src: 'coffee24.png', name: 'ICED 연유 콜드브루', price: 8000, desc: '베트남풍 연유의 달콤한 맛과 밸런스 잡힌 이디야 콜드브루가 어우러져 특색있게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 25, src: 'coffee25.png', name: '(EX) ICED 연유 콜드브루 ', price: 8000, desc: '베트남풍 연유의 달콤한 맛과 밸런스 잡힌 이디야 콜드브루가 어우러져 특색있게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}, 
            {item_no: 26, src: 'coffee26.png', name: 'HOT 에스프레소', price: 8000, desc: '정통 이탈리안 방식으로 고압을 이용하여 빠르게 추출된 커피 이디야의 모든 음료의 기본', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}, 
            {item_no: 27, src: 'coffee27.png', name: 'HOT 에스프레소 마끼아또', price: 8000, desc: '진한 에스프레소 위의 부드러운 우유 거품이 조화를 이뤄 에스프레소를 부드럽게 느낄 수 있는 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}, 
            {item_no: 28, src: 'coffee28.png', name: 'HOT 에스프레소 콘파냐', price: 8000, desc: '진한 에스프레소 위에 달콤한 휘핑을 더한 음료로 에스프레소를 달콤하게 즐길 수 있는 커피', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}, 
            {item_no: 29, src: 'coffee29.png', name: '(L) HOT 카페 아메리카노', price: 8000, desc: '구운 견과류의 고소한 향미와 다크초콜렛의 Bitter sweet 깊고 깔끔한 애프터테이스트가 특징인 이디야의 대표음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}, 
            {item_no: 30, src: 'coffee30.png', name: '(L) ICED 카페 아메리카노', price: 8000, desc: '구운 견과류의 고소한 향미와 다크초콜렛의 Bitter sweet 깊고 깔끔한 애프터테이스트가 특징인 이디야의 대표음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}, 
            {item_no: 32, src: 'coffee32.png', name: '(EX) HOT 카페 아메리카노', price: 8000, desc: '구운 견과류의 고소한 향미와 다크초콜렛의 Bitter sweet 깊고 깔끔한 애프터테이스트가 특징인 이디야의 대표음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 33, src: 'coffee33.png', name: '(EX) ICED 카페 아메리카노', price: 8000, desc: '구운 견과류의 고소한 향미와 다크초콜렛의 Bitter sweet 깊고 깔끔한 애프터테이스트가 특징인 이디야의 대표음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 34, src: 'coffee34.png', name: '(L) HOT 카페 라떼', price: 8000, desc: '진한 에스프레소와 부드러운 우유가 만나 고소한 풍미를 더하는 메뉴 가장 대중적인 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 35, src: 'coffee35.png', name: '(L) ICED 카페 라떼', price: 8000, desc: '진한 에스프레소와 부드러운 우유가 만나 고소한 풍미를 더하는 메뉴 가장 대중적인 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 36, src: 'coffee36.png', name: '(EX) HOT 카페 라떼', price: 8000, desc: '진한 에스프레소와 부드러운 우유가 만나 고소한 풍미를 더하는 메뉴 가장 대중적인 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 37, src: 'coffee37.png', name: '(EX) ICED 카페 라떼', price: 8000, desc: '진한 에스프레소와 부드러운 우유가 만나 고소한 풍미를 더하는 메뉴 가장 대중적인 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 38, src: 'coffee38.png', name: '(L) HOT 카푸치노', price: 8000, desc: '에스프레소에 부드러운 우유 거품을 풍부하게 올린 음료, 시나몬파우더가 첨가되어 강렬한 향과 커피의 풍부함을 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 39, src: 'coffee39.png', name: '(L) ICED 카푸치노', price: 8000, desc: '에스프레소에 부드러운 우유 거품을 풍부하게 올린 음료, 시나몬파우더가 첨가되어 강렬한 향과 커피의 풍부함을 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 40, src: 'coffee40.png', name: '(L) HOT 카페 모카', price: 8000, desc: '모카시럽을 만나 한층 풍부해진 에스프레소에 우유로 부드러움을 더한 달콤한 휘핑크림이곁들여진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 41, src: 'coffee41.png', name: '(L) ICED 카페 모카', price: 8000, desc: '모카시럽을 만나 한층 풍부해진 에스프레소에 우유로 부드러움을 더한 달콤한 휘핑크림이곁들여진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 42, src: 'coffee42.png', name: '(EX) HOT 카페 모카', price: 8000, desc: '모카시럽을 만나 한층 풍부해진 에스프레소에 우유로 부드러움을 더한 달콤한 휘핑크림이곁들여진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 43, src: 'coffee43.png', name: '(EX) ICED 카페 모카', price: 8000, desc: '모카시럽을 만나 한층 풍부해진 에스프레소에 우유로 부드러움을 더한 달콤한 휘핑크림이곁들여진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 44, src: 'coffee44.png', name: '(L) HOT 카라멜 마끼아또', price: 8000, desc: '폼 밀크 속에 감춰진 카라멜의 달콤함과 에스프레소의 진한 맛이 돋보이는 이디야의 인기 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 45, src: 'coffee45.png', name: '(L) ICED 카라멜 마끼아또', price: 8000, desc: '폼 밀크 속에 감춰진 카라멜의 달콤함과 에스프레소의 진한 맛이 돋보이는 이디야의 인기 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 46, src: 'coffee46.png', name: '(EX) HOT 카라멜 마끼아또', price: 8000, desc: '폼 밀크 속에 감춰진 카라멜의 달콤함과 에스프레소의 진한 맛이 돋보이는 이디야의 인기 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 47, src: 'coffee47.png', name: '(EX) ICED 카라멜 마끼아또', price: 8000, desc: '폼 밀크 속에 감춰진 카라멜의 달콤함과 에스프레소의 진한 맛이 돋보이는 이디야의 인기 메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 48, src: 'coffee48.png', name: '(L) HOT 바닐라 라떼', price: 8000, desc: '부드러운 라떼에 은은한 바닐라 향이 더해져 더욱 달콤하게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 49, src: 'coffee49.png', name: '(L) ICED 바닐라 라떼', price: 8000, desc: '부드러운 라떼에 은은한 바닐라 향이 더해져 더욱 달콤하게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 50, src: 'coffee50.png', name: '(EX) HOT 바닐라 라떼', price: 8000, desc: '부드러운 라떼에 은은한 바닐라 향이 더해져 더욱 달콤하게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 51, src: 'coffee51.png', name: '(EX) ICED 바닐라 라떼', price: 8000, desc: '부드러운 라떼에 은은한 바닐라 향이 더해져 더욱 달콤하게 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 52, src: 'coffee52.png', name: '(L) HOT 화이트 초콜릿 모카', price: 8000, desc: '화이트 초콜렛과 에스프레소의 조화로운 만남에 달콤한 휘핑크림까지 함께 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 53, src: 'coffee53.png', name: '(L) ICED 화이트 초콜릿 모카', price: 8000, desc: '화이트 초콜렛과 에스프레소의 조화로운 만남에 달콤한 휘핑크림까지 함께 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 54, src: 'coffee54.png', name: '(EX) HOT 화이트 초콜릿 모카 ', price: 8000, desc: '화이트 초콜렛과 에스프레소의 조화로운 만남에 달콤한 휘핑크림까지 함께 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 55, src: 'coffee55.png', name: '(L) HOT 민트 모카', price: 8000, desc: '상쾌한 민트향이 더해진 진한 모카와 부드러운 휘핑크림이 잘 어울리는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 56, src: 'coffee56.png', name: '(EX) ICED 화이트 초콜릿 모카 ', price: 8000, desc: '화이트 초콜렛과 에스프레소의 조화로운 만남에 달콤한 휘핑크림까지 함께 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 57, src: 'coffee57.png', name: '(L) ICED 민트 모카', price: 8000, desc: '상쾌한 민트향이 더해진 진한 모카와 부드러운 휘핑크림이 잘 어울리는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}
        ],


        // BEVERAGE
        [
            {item_no: 1, src: 'beverage1.png', name: 'HOT 쌍화차', price: 8000, desc: '전통 쌍화차의 느낌을 이디야만의 색깔로 재해석하여 다양한 연령층이 즐길 수 있도록 은은한 향과 고소함을 강조한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 2, src: 'beverage2.png', name: 'ICED 쌍화차', price: 8000, desc: '전통 쌍화차의 느낌을 이디야만의 색깔로 재해석하여 다양한 연령층이 즐길 수 있도록 은은한 향과 고소함을 강조한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 3, src: 'beverage3.png', name: 'HOT 생강차', price: 8000, desc: '생강 특유의 진하고 풍부한 맛과 향미를 느낄 수 있으며, 은은하고 부드러운 단맛의 유자와 꿀이 더해진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 4, src: 'beverage4.png', name: 'ICED 생강차', price: 8000, desc: '생강 특유의 진하고 풍부한 맛과 향미를 느낄 수 있으며, 은은하고 부드러운 단맛의 유자와 꿀이 더해진 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 5, src: 'beverage5.png', name: 'ICED 달고나 라떼', price: 8000, desc: '달콤한 달고나와 우유가 조화롭게 어우러져, 달고나 분태의 바삭한 식감과 함께 즐길 수 있는 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 6, src: 'beverage6.png', name: '(EX) ICED 달고나 라떼', price: 8000, desc: '달콤한 달고나와 우유가 조화롭게 어우러져, 달고나 분태의 바삭한 식감과 함께 즐길 수 있는 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 7, src: 'beverage7.png', name: 'ICED 흑당 라떼', price: 8000, desc: '진하고 달콤한 흑당과 고소한 우유가 어우러진 논커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 8, src: 'beverage8.png', name: '(EX) ICED 흑당 라떼', price: 8000, desc: '진하고 달콤한 흑당과 고소한 우유가 어우러진 논커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 9, src: 'beverage9.png', name: 'ICED 버블 흑당 라떼', price: 8000, desc: '진하고 달콤한 흑당에 쫄깃한 버블이 어우러진 논커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 10, src: 'beverage10.png', name: '(EX) ICED 버블 흑당 라떼', price: 8000, desc: '진하고 달콤한 흑당에 쫄깃한 버블이 어우러진 논커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 11, src: 'beverage11.png', name: 'ICED 버블 크림 밀크티', price: 8000, desc: '베르가못 향과 우롱티의 밸런스를 잡아 풍부하고 깊은 맛과 크림의 부드러움을 함께 느끼고, 타피오카 펄의 쫄깃한 식감까지 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 12, src: 'beverage12.png', name: '(EX) HOT 연유 카페 라떼', price: 8000, desc: '베트남풍 연유의 달콤한 맛과 에스프레소가 절묘하게 어우러져 누구나 쉽게 즐길 수 있는 부드러운 커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 13, src: 'beverage13.png', name: '(EX) ICED 연유 카페 라떼', price: 8000, desc: '베트남풍 연유의 달콤한 맛과 에스프레소가 절묘하게 어우러져 누구나 쉽게 즐길 수 있는 부드러운 커피 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 14, src: 'beverage14.png', name: 'HOT 초콜릿', price: 8000, desc: '진한 모카시럽과 부드러운 우유, 그리고 달콤한 휘핑크림의 삼박자가 조화를 이루는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 15, src: 'beverage15.png', name: 'ICED 초콜릿', price: 8000, desc: '진한 모카시럽과 부드러운 우유, 그리고 달콤한 휘핑크림의 삼박자가 조화를 이루는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 16, src: 'beverage16.png', name: '(EX) HOT 초콜릿', price: 8000, desc: '진한 모카시럽과 부드러운 우유, 그리고 달콤한 휘핑크림의 삼박자가 조화를 이루는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 17, src: 'beverage17.png', name: '(EX) ICED 초콜릿', price: 8000, desc: '진한 모카시럽과 부드러운 우유, 그리고 달콤한 휘핑크림의 삼박자가 조화를 이루는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 18, src: 'beverage18.png', name: 'HOT 녹차 라떼', price: 8000, desc: '녹차에 우유가 더해져 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 19, src: 'beverage19.png', name: 'ICED 녹차 라떼', price: 8000, desc: '녹차에 우유가 더해져 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 20, src: 'beverage20.png', name: '(EX) HOT 녹차 라떼', price: 8000, desc: '녹차에 우유가 더해져 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 21, src: 'beverage21.png', name: '(EX) ICED 녹차 라떼', price: 8000, desc: '녹차에 우유가 더해져 부담없이 즐길 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 22, src: 'beverage22.png', name: 'HOT 민트 초콜릿', price: 8000, desc: '상쾌한 민트향이 가득한 진한 초콜렛 위에 달콤한 휘핑크림으로 마무리 한 이디야의 인기메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 23, src: 'beverage23.png', name: 'ICED 민트 초콜릿', price: 8000, desc: '상쾌한 민트향이 가득한 진한 초콜렛 위에 달콤한 휘핑크림으로 마무리 한 이디야의 인기메뉴', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 24, src: 'beverage24.png', name: 'HOT 12곡 라떼', price: 8000, desc: '몸에 이로운 곡물이 들어가 든든하고 포만감을 주는 메뉴, 한끼 식사 대용으로도 충분한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 25, src: 'beverage25.png', name: 'ICED 12곡 라떼', price: 8000, desc: '몸에 이로운 곡물이 들어가 든든하고 포만감을 주는 메뉴, 한끼 식사 대용으로도 충분한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 26, src: 'beverage26.png', name: 'HOT 토피넛 라떼', price: 8000, desc: '다양한 견과류의 맛과 달콤한 코코아가 조화롭게 어우러진 달콤한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 27, src: 'beverage27.png', name: 'ICED 토피넛 라떼', price: 8000, desc: '다양한 견과류의 맛과 달콤한 코코아가 조화롭게 어우러진 달콤한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 28, src: 'beverage28.png', name: '(EX) HOT 토피넛 라떼', price: 8000, desc: '다양한 견과류의 맛과 달콤한 코코아가 조화롭게 어우러진 달콤한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 29, src: 'beverage29.png', name: '(EX) ICED 토피넛 라떼', price: 8000, desc: '다양한 견과류의 맛과 달콤한 코코아가 조화롭게 어우러진 달콤한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 30, src: 'beverage30.png', name: 'HOT 고구마 라떼', price: 8000, desc: '호박고구마를 활용하여 달콤하고 고소한 고구마의 풍미가 진하게 느껴지는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 31, src: 'beverage31.png', name: 'ICED 고구마 라떼', price: 8000, desc: '호박고구마를 활용하여 달콤하고 고소한 고구마의 풍미가 진하게 느껴지는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 32, src: 'beverage32.png', name: '홍시주스', price: 8000, desc: '부드럽고 달콤한 홍시 본연의 맛을 느낄 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 33, src: 'beverage33.png', name: '골드키위주스', price: 8000, desc: '고급 골드키위를 사용하여 비타민 C가 풍부하고 상큼한 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 34, src: 'beverage34.png', name: '딸기주스', price: 8000, desc: '국내산 딸기 과육을 그대로 넣어 새콤하고 달콤한 딸기 본연의 맛을 느낄 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 35, src: 'beverage35.png', name: '딸기주스', price: 8000, desc: '국내산 딸기 과육을 그대로 넣어 새콤하고 달콤한 딸기 본연의 맛을 느낄 수 있는 음료', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'}      
        ],


        // BLENDING TEA
        [
            {item_no: 1, src: 'blending_tea1.png', name: 'ICED 살얼음 식혜', price: 8000, desc: '밥알이 씹히는 정성 가득 식혜에 살얼음을 띄워 더욱 시원하게 즐길 수 있는 메뉴', calorie: '219kcal', sugars: '50g', protein: '0g', saturated_fat: '0g', sodium: '2mg', caffeine: '0mg'},
            {item_no: 2, src: 'blending_tea2.png', name: '(EX) ICED 살얼음 식혜', price: 8000, desc: '밥알이 씹히는 정성 가득 식혜에 살얼음을 띄워 더욱 시원하게 즐길 수 있는 메뉴', calorie: '319kcal', sugars: '89g', protein: '1g', saturated_fat: '0g', sodium: '4mg', caffeine: '0mg'},
            {item_no: 3, src: 'blending_tea3.png', name: 'HOT 그린 루이보스', price: 8000, desc: '복숭아 한 조각을 베어 문 잔향이 입안에 남는 맑은 수색의 루이보스 티', calorie: '8kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 4, src: 'blending_tea4.png', name: 'ICED 그린 루이보스', price: 8000, desc: '복숭아 한 조각을 베어 문 잔향이 입안에 남는 맑은 수색의 루이보스 티', calorie: '8kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 5, src: 'blending_tea5.png', name: '(EX) HOT 그린 루이보스', price: 8000, desc: '복숭아 한 조각을 베어 문 잔향이 입안에 남는 맑은 수색의 루이보스 티', calorie: '16kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '11mg', caffeine: '0mg'},
            {item_no: 6, src: 'blending_tea6.png', name: '(EX) ICED 그린 루이보스', price: 8000, desc: '복숭아 한 조각을 베어 문 잔향이 입안에 남는 맑은 수색의 루이보스 티', calorie: '16kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '11mg', caffeine: '0mg'},
            {item_no: 7, src: 'blending_tea7.png', name: 'HOT 샤인 히비스커스', price: 8000, desc: '사과, 오렌지, 레몬그라스 등이 블렌딩 된 과일향 가득한 새콤달콤한 맛의 허브티', calorie: '6kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 8, src: 'blending_tea8.png', name: 'ICED 샤인 히비스커스', price: 8000, desc: '사과, 오렌지, 레몬그라스 등이 블렌딩 된 과일향 가득한 새콤달콤한 맛의 허브티', calorie: '6kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 9, src: 'blending_tea9.png', name: '(EX) HOT 샤인 히비스커스', price: 8000, desc: '사과, 오렌지, 레몬그라스 등이 블렌딩 된 과일향 가득한 새콤달콤한 맛의 허브티', calorie: '13kcal', sugars: '1g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 10, src: 'blending_tea10.png', name: '(EX) ICED 샤인 히비스커스', price: 8000, desc: '사과, 오렌지, 레몬그라스 등이 블렌딩 된 과일향 가득한 새콤달콤한 맛의 허브티', calorie: '13kcal', sugars: '1g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 11, src: 'blending_tea11.png', name: 'HOT 스프링 캐모마일', price: 8000, desc: '캐모마일과 루이보스, 레몬그라스 등이 블렌딩 되어 은은함이 돋보이는 허브티', calorie: '8kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '2mg', caffeine: '0mg'},
            {item_no: 12, src: 'blending_tea12.png', name: 'ICED 스프링 캐모마일', price: 8000, desc: '캐모마일과 루이보스, 레몬그라스 등이 블렌딩 되어 은은함이 돋보이는 허브티', calorie: '8kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '2mg', caffeine: '0mg'},
            {item_no: 13, src: 'blending_tea13.png', name: '(EX) HOT 스프링 캐모마일', price: 8000, desc: '캐모마일과 루이보스, 레몬그라스 등이 블렌딩 되어 은은함이 돋보이는 허브티', calorie: '15kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '4mg', caffeine: '0mg'},
            {item_no: 14, src: 'blending_tea14.png', name: '(EX) ICED 스프링 캐모마일', price: 8000, desc: '캐모마일과 루이보스, 레몬그라스 등이 블렌딩 되어 은은함이 돋보이는 허브티', calorie: '15kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '4mg', caffeine: '0mg'},
            {item_no: 15, src: 'blending_tea15.png', name: 'HOT 퓨어 페퍼민트', price: 8000, desc: '입 안 가득 청량함이 느껴지는 상쾌한 허브티', calorie: '5kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '2mg', caffeine: '0mg'},
            {item_no: 16, src: 'blending_tea16.png', name: 'ICED 퓨어 페퍼민트', price: 8000, desc: '입 안 가득 청량함이 느껴지는 상쾌한 허브티', calorie: '5kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '2mg', caffeine: '0mg'},
            {item_no: 17, src: 'blending_tea17.png', name: '(EX) HOT 퓨어 페퍼민트', price: 8000, desc: '입 안 가득 청량함이 느껴지는 상쾌한 허브티', calorie: '11kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 18, src: 'blending_tea18.png', name: '(EX) ICED 퓨어 페퍼민트', price: 8000, desc: '입 안 가득 청량함이 느껴지는 상쾌한 허브티', calorie: '11kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 19, src: 'blending_tea19.png', name: 'HOT 피치 얼그레이', price: 8000, desc: '깊고 그윽한 홍차와 달콤한 복숭아 향이 어우러지는 깔끔한 맛의 얼그레이 티', calorie: '8kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '0mg', caffeine: '58mg'},
            {item_no: 20, src: 'blending_tea20.png', name: 'ICED 피치 얼그레이', price: 8000, desc: '깊고 그윽한 홍차와 달콤한 복숭아 향이 어우러지는 깔끔한 맛의 얼그레이 티', calorie: '8kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '0mg', caffeine: '58mg'},
            {item_no: 21, src: 'blending_tea21.png', name: '(EX) HOT 피치 얼그레이', price: 8000, desc: '깊고 그윽한 홍차와 달콤한 복숭아 향이 어우러지는 깔끔한 맛의 얼그레이 티', calorie: '17kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '0mg', caffeine: '117mg'},
            {item_no: 22, src: 'blending_tea22.png', name: '(EX) ICED 피치 얼그레이', price: 8000, desc: '깊고 그윽한 홍차와 달콤한 복숭아 향이 어우러지는 깔끔한 맛의 얼그레이 티', alorie: '17kcal', sugars: '0g', protein: '1g', saturated_fat: '0g', sodium: '0mg', caffeine: '117mg'},
            {item_no: 23, src: 'blending_tea23.png', name: '(EX) ICED 자몽 네이블오렌지', price: 8000, desc: '자몽청에 오렌지, 귤, 로즈힙, 사과, 파인애플 등을 넣어 부드러운 신맛과 오렌지 향을 즐길 수 있는 아이스 블렌딩티', calorie: '322kcal', sugars: '73g', protein: '0g', saturated_fat: '0g', sodium: '7mg', caffeine: '0mg'},
            {item_no: 24, src: 'blending_tea24.png', name: '(EX) ICED 유자피나콜라다', price: 8000, desc: '유자청에 사과, 파인애플, 히비스커스, 로즈힙 열매, 코코넛 등을 넣어 신맛과 달콤한 향의 밸런스가 좋은 아이스 블렌딩티', calorie: '291kcal', sugars: '67g', protein: '0g', saturated_fat: '0.1g', sodium: '2mg', caffeine: '0mg'},
            {item_no: 25, src: 'blending_tea25.png', name: '(EX) ICED 석류애플라임', price: 8000, desc: '산뜻한 석류에 다양한 과일과 꽃, 그리고 샴페인의 향이 더해져 보다 깊고 중후한 맛이 느껴지는 아이스 블렌딩티', calorie: '346kcal', sugars: '74g', protein: '0g', saturated_fat: '0.1g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 26, src: 'blending_tea26.png', name: 'HOT 석류 오리지널', price: 8000, desc: '석류 특유의 산뜻한 향과 깔끔한 뒷맛이 느껴지며, 과육이 한알 한알 살아있는 붉은 빛의 매력적인 과일차', calorie: '210kcal', sugars: '42g', protein: '0g', saturated_fat: '0.1g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 27, src: 'blending_tea27.png', name: 'HOT 석류 애플라임', price: 8000, desc: '산뜻한 석류에 다양한 과일과 꽃, 그리고 샴페인의 향이 더해져 보다 깊고 중후한 맛이 느껴지는 블렌딩티', calorie: '220kcal', sugars: '42g', protein: '1g', saturated_fat: '0.1g', sodium: '7mg', caffeine: '0mg'},
            {item_no: 28, src: 'blending_tea28.png', name: 'HOT 자몽 네이블 오렌지', price: 8000, desc: '자몽청에 오렌지, 귤, 로즈힙, 사과, 파인애플 등을 넣어 부드러운 신맛과 오렌지 향을 즐길 수 있는 아이스 블렌딩티', calorie: '196kcal', sugars: '43g', protein: '0g', saturated_fat: '0.1g', sodium: '6mg', caffeine: '0mg'},
            {item_no: 29, src: 'blending_tea29.png', name: 'HOT 유자 피나콜라다', price: 8000, desc: '유자청에 사과, 파인애플, 히비스커스, 로즈힙 열매, 코코넛 등을 넣어 신맛에 달콤한 향의 밸런스가 좋은 블렌딩 티', calorie: '197kcal', sugars: '43g', protein: '0g', saturated_fat: '0.1g', sodium: '3mg', caffeine: '0mg'},
            {item_no: 30, src: 'blending_tea30.png', name: '아이스티 복숭아', price: 8000, desc: '홍차의 깊은 맛과 풍부한 복숭아 향이 어우러진 달콤한 여름철 인기 음료', calorie: '165kcal', sugars: '39g', protein: '0g', saturated_fat: '0.7g', sodium: '12mg', caffeine: '9mg'},
            {item_no: 31, src: 'blending_tea31.png', name: '(EX) 아이스티 복숭아', price: 8000, desc: '홍차의 깊은 맛과 풍부한 복숭아 향이 어우러진 달콤한 여름철 인기 음료', calorie: '329kcal', sugars: '78g', protein: '0g', saturated_fat: '1.4g', sodium: '24g', caffeine: '19mg'},
            {item_no: 32, src: 'blending_tea32.png', name: '아이스티 레몬', price: 8000, desc: '입안 가득 상큼한 레몬향이 퍼지는 새콤달콤한 맛의 아이스티', calorie: '158kcal', sugars: '39g', protein: '0g', saturated_fat: '0g', sodium: '14mg', caffeine: '12mg'},
            {item_no: 33, src: 'blending_tea33.png', name: '(EX) 아이스티 레몬', price: 8000, desc: '입안 가득 상큼한 레몬향이 퍼지는 새콤달콤한 맛의 아이스티', calorie: '317kcal', sugars: '77g', protein: '0g', saturated_fat: '0g', sodium: '28mg', caffeine: '25mg'},
            {item_no: 34, src: 'blending_tea34.png', name: 'HOT 밀크티', price: 8000, desc: '잉글리시 브랙퍼스트와 바닐라향이 어우러져 따뜻한 우유에 은은하게 퍼지는 향이 돋보이는 음료', calorie: '232kcal', sugars: '25g', protein: '9g', saturated_fat: '6g', sodium: '136mg', caffeine: '49mg'},
            {item_no: 35, src: 'blending_tea35.png', name: 'ICED 밀크티', price: 8000, desc: '잉글리시 브랙퍼스트와 바닐라향이 어우러져 따뜻한 우유에 은은하게 퍼지는 향이 돋보이는 음료', calorie: '167kcal', sugars: '20g', protein: '6g', saturated_fat: '3.9g', sodium: '86mg', caffeine: '49mg'},
            {item_no: 36, src: 'blending_tea36.png', name: 'HOT 유자차', price: 8000, desc: '국내산 고흥 유자를 사용하고 유자 과육이 풍부한 홈메이드 방식의 달콤한 과일차', calorie: '187kcal', sugars: '42g', protein: '0g', saturated_fat: '0.1g', sodium: '0.1mg', caffeine: '0mg'},
            {item_no: 37, src: 'blending_tea37.png', name: 'HOT 자몽차', price: 8000, desc: '풍부한 자몽 과육으로 신맛과 쓴맛을 내어 천연의 자몽의 맛을 내는 과일차', calorie: '186kcal', sugars: '42g', protein: '0g', saturated_fat: '0g', sodium: '2mg', caffeine: '0mg'}
        ],

        // FLATCCINO
        [
            {item_no: 1, src: 'flatccino1.png', name: '망고 플랫치노', price: 8000, desc: '열대과일인 망고의 달콤하고 진한 맛을 그대로 담아낸 여름철 인기 메뉴', calorie: '258kcal', sugars: '65g', protein: '0g', saturated_fat: '0g', sodium: '8mg', caffeine: '0mg'},
            {item_no: 2, src: 'flatccino2.png', name: '꿀복숭아 플랫치노', price: 8000, desc: '복숭아의 리얼한 풍미와 꿀의 달콤함이 최적의 조화를 이룬 달콤하고 시원한 플랫치노', calorie: '225kcal', sugars: '49g', protein: '0g', saturated_fat: '0g', sodium: '9mg', caffeine: '0mg'},
            {item_no: 3, src: 'flatccino3.png', name: '초콜릿 칩 플랫치노', price: 8000, desc: '트리플 모카시럽에 초콜릿 칩이 더해져 씹는 재미가 있는 달콤한 플랫치노', calorie: '387kcal', sugars: '42g', protein: '7g', saturated_fat: '16g', sodium: '140mg', caffeine: '27mg'},
            {item_no: 4, src: 'flatccino4.png', name: '민트 초콜릿 칩 플랫치노', price: 8000, desc: '진한 민트향이 더해진 초코렛에 초콜렛칩이 가득 들어있는 젊은 감성의 이디야 플랫치노', calorie: '493kcal', sugars: '52g', protein: '7g', saturated_fat: '22g', sodium: '168mg', caffeine: '56mg'},
            {item_no: 5, src: 'flatccino5.png', name: '플레인 요거트 플랫치노', price: 8000, desc: '요거트 고유의 새콤달콤한 맛을 그대로 살린 메뉴로 여성들에게 인기가 좋은 음료', calorie: '229kcal', sugars: '32g', protein: '7g', saturated_fat: '3.2g', sodium: '78mg', caffeine: '0mg'},
            {item_no: 6, src: 'flatccino6.png', name: '블루베리 요거트 플랫치노', price: 8000, desc: '블루베리 본연의 맛과 상큼한 요거트의 조화를 이룬 새콤달콤한 요거트 플랫치노', calorie: '297kcal', sugars: '47g', protein: '7g', saturated_fat: '3.2g', sodium: '78mg', caffeine: '0mg'},
            {item_no: 7, src: 'flatccino7.png', name: '딸기 요거트 플랫치노', price: 8000, desc: '남녀노소 누구나 좋아하는 딸기와 상큼한 요거트가 조화롭게 어우러진 플랫치노', calorie: '313kcal', sugars: '53g', protein: '7g', saturated_fat: '3.2g', sodium: '83mg', caffeine: '0mg'}
        ],


        // SHAKE & ADE
        [
            {item_no: 1, src: 'shake_ade1.png', name: '오리진 쉐이크', price: 8000, desc: '우유 그대로의 부드러운 맛을 느낄 수 있으며, 어린이와 청소년도 즐겨 먹을 수 있는 쉐이크', calorie: '537kcal', sugars: '42g', protein: '8g', saturated_fat: '31g', sodium: '208mg', caffeine: '0mg'},
            {item_no: 2, src: 'shake_ade2.png', name: '초코쿠키 쉐이크', price: 8000, desc: '초코쿠키의 달콤함과 바삭함을 느낄 수 있어, 어린이와 청소년에게 인기 있는 쉐이크', calorie: '622kcal', sugars: '47g', protein: '9g', saturated_fat: '32g', sodium: '325mg', caffeine: '0mg'},
            {item_no: 3, src: 'shake_ade3.png', name: '딸기 쉐이크', price: 8000, desc: '부드러운 우유의 맛과 국내산 딸기의 달콤함이 조화로운 쉐이크', calorie: '636kcal', sugars: '65g', protein: '8g', saturated_fat: '31g', sodium: '225mg', caffeine: '0mg'},
            {item_no: 4, src: 'shake_ade4.png', name: '레몬 에이드', price: 8000, desc: '레몬의 상큼함과 톡 쏘는 탄산의 시원함을 함께 즐길 수 있는 음료', calorie: '123kcal', sugars: '28g', protein: '0g', saturated_fat: '0.1g', sodium: '1mg', caffeine: '0mg'},
            {item_no: 5, src: 'shake_ade5.png', name: '(EX) 레몬 에이드', price: 8000, desc: '레몬의 상큼함과 톡 쏘는 탄산의 시원함을 함께 즐길 수 있는 음료', calorie: '227kcal', sugars: '53g', protein: '0g', saturated_fat: '0.1g', sodium: '3mg', caffeine: '0mg'},
            {item_no: 6, src: 'shake_ade6.png', name: '자몽 에이드', price: 8000, desc: '자몽의 쌉싸름한 맛과 상큼함을 동시에 느낄 수 있으며, 탄산의 청량함을 함께 맛볼 수 있는 음료', calorie: '124kcal', sugars: '28g', protein: '1g', saturated_fat: '0g', sodium: '10mg', caffeine: '0mg'},
            {item_no: 7, src: 'shake_ade7.png', name: '(EX) 자몽 에이드', price: 8000, desc: '자몽의 쌉싸름한 맛과 상큼함을 동시에 느낄 수 있으며, 탄산의 청량함을 함께 맛볼 수 있는 음료', calorie: '198kcal', sugars: '46g', protein: '1g', saturated_fat: '0g', sodium: '15mg', caffeine: '0mg'},
            {item_no: 8, src: 'shake_ade8.png', name: '청포도 에이드', price: 8000, desc: '청포도의 상큼함과 탄산의 시원함을 느낄 수 있는 음료', calorie: '173kcal', sugars: '40g', protein: '0g', saturated_fat: '0g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 9, src: 'shake_ade9.png', name: '(EX) 청포도 에이드', price: 8000, desc: '청포도의 상큼함과 탄산의 시원함을 느낄 수 있는 음료', calorie: '260kcal', sugars: '60g', protein: '0g', saturated_fat: '0g', sodium: '8mg', caffeine: '0mg'},
        ],

        // ICE FLAKES
        [
            {item_no: 1, src: 'ice_flakes1.png', name: '팥인절미 눈꽃빙수', price: 8000, desc: '부드러운 우유 눈꽃빙수에 국산 팥과 인절미를 올려 고소하고 달콤하게 즐길 수 있는 빙수', calorie: '880kcal', sugars: '56g', protein: '20g', saturated_fat: '3.4g', sodium: '391mg', caffeine: '0mg'},
            {item_no: 2, src: 'ice_flakes2.png', name: '망고 눈꽃빙수', price: 8000, desc: '부드러운 망고 눈꽃빙수에 애플망고를 더해 시원하고 달콤하게 즐길 수 있는 빙수', calorie: '592kcal', sugars: '128g', protein: '3g', saturated_fat: '1.8g', sodium: '65mg', caffeine: '0mg'},
            {item_no: 3, src: 'ice_flakes3.png', name: '딸기치즈 눈꽃빙수', price: 8000, desc: '부드러운 딸기 눈꽃빙수에 치즈 케익 큐브와 아이스크림을 더해 다채롭게 즐길 수 있는 빙수', calorie: '877kcal', sugars: '105g', protein: '11g', saturated_fat: '29g', sodium: '283mg', caffeine: '0mg'}
        ],

        // RTD
        [
            {item_no: 1, src: 'rtd1.png', name: '이디야 청포도&케일 주스', price: 8000, desc: '풍부한 영양성분을 함유한 케일에 달콤한 청포도를 더해 맛있게 먹을 수 있는 건강 착즙주스', calorie: '144kcal', sugars: '33g', protein: '0g', saturated_fat: '0g', sodium: '10mg', caffeine: '0mg'},
            {item_no: 2, src: 'rtd2.png', name: '이디야 감귤&한라봉 주스', price: 8000, desc: '감귤의 상큼함에 싱그러운 한라봉의 진한 향이 기분 좋게 느껴지는 착즙주스', calorie: '108kcal', sugars: '22g', protein: '2g', saturated_fat: '0.3g', sodium: '12mg', caffeine: '0mg'},
            {item_no: 3, src: 'rtd3.png', name: '이디야 사과&당근 주스', price: 8000, desc: '은은한 당근 향과 달콤한 사과의 맛이 완벽하게 어우러진 착즙주스', calorie: '103kcal', sugars: '25g', protein: '1g', saturated_fat: '0g', sodium: '37mg', caffeine: '0mg'},
            {item_no: 4, src: 'rtd4.png', name: '이디야 워터', price: 8000, desc: '재활용 최우수 등급으로 분리 배출이 용이하며, 작아진 라벨 사이즈로 플라스틱 사용량을 최소화한 친환경 생수 에코탭을 통해 라벨을 쉽게 분리할 수 있습니다.', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 5, src: 'rtd5.png', name: '이디야 콤부차 복숭아망고', price: 8000, desc: '달콤한 복숭아와 망고의 조화로운 맛과 콤부차 특유의 부드럽고 은은한 향미가 더해져 깔끔한 끝맛을 느낄 수 있는 음료 ', calorie: '128kcal', sugars: '29g', protein: '0g', saturated_fat: '0.4g', sodium: '20mg', caffeine: '28mg'},
            {item_no: 6, src: 'rtd6.png', name: '이디야 콤부차 청포도레몬', price: 8000, desc: '새콤달콤한 청포도 맛과 상큼하고 깔끔한 레몬이 조화롭게 어우러져 톡톡 터지는 듯한 산뜻한 청량감을 느낄 수 있는 음료', calorie: '120kcal', sugars: '65g', protein: '8g', saturated_fat: '6.3g', sodium: '140mg', caffeine: '32mg'},
            {item_no: 7, src: 'rtd7.png', name: '자몽네이블오렌지', price: 8000, desc: '자몽의 부드러운 신맛과 오렌지향을 즐길 수 있는 이디야 블렌딩티', calorie: '136kcal', sugars: '31g', protein: '0g', saturated_fat: '0g', sodium: '5mg', caffeine: '0mg'},
            {item_no: 8, src: 'rtd8.png', name: '유자피나콜라다', price: 8000, desc: '유자의 신맛에 피나콜라다의 달콤한 향이 더해져 밸런스가 좋은 블렌딩티', calorie: '10kcal', sugars: '25g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 9, src: 'rtd9.png', name: '석류애플라임', price: 8000, desc: '산뜻한 석류에 샴페인의 향이 더해져 보다 깊고 중후한 맛이 느껴지는 블렌딩티', calorie: '136kcal', sugars: '32g', protein: '0g', saturated_fat: '0g', sodium: '10mg', caffeine: '0mg'},
            {item_no: 10, src: 'rtd10.png', name: '이디야 사과주스', price: 8000, desc: '칠레산 사과의 진한 풍미를 더욱 달콤하게 즐길 수 있는 과채주스', calorie: '115kcal', sugars: '26g', protein: '0g', saturated_fat: '11g', sodium: '0mg', caffeine: '0mg'}
        ],

        // SEASON
        [
            {item_no: 1, src: 'season1.png', name: '(L) ICED 토피 카라멜 크림라떼', price: 8000, desc: '부드럽고 달콤한 토피카라멜 크림과 이디야 에스프레소가 만나 더욱 풍성한 맛을 즐길 수 있는 크림라떼 ', calorie: '529kcal', sugars: '60g', protein: '9g', saturated_fat: '12g', sodium: '405mg', caffeine: '232mg'},
            {item_no: 2, src: 'season2.png', name: '(L) ICED 디카페인 토피 카라멜 크림라떼', price: 8000, desc: '부드럽고 달콤한 토피카라멜 크림과 이디야 에스프레소가 만나 더욱 풍성한 맛을 즐길 수 있는 크림라떼', calorie: '524kcal', sugars: '60g', protein: '8g', saturated_fat: '12g', sodium: '405mg', caffeine: '23mg'},
            {item_no: 3, src: 'season3.png', name: '(L) ICED 피스타치오 크림라떼', price: 8000, desc: '부드럽고 고소한 피스타치오 크림과 이디야 에스프레소가 만나 더욱 풍성한 맛을 즐길 수 있는 크림라떼 ', calorie: '402kcal', sugars: '46g', protein: '10g', saturated_fat: '11g', sodium: '175mg', caffeine: '232mg'},
            {item_no: 4, src: 'season4.png', name: '(L) ICED 디카페인 피스타치오 크림라떼', price: 8000, desc: '부드럽고 고소한 피스타치오 크림과 이디야 에스프레소가 만나 더욱 풍성한 맛을 즐길 수 있는 크림라떼', calorie: '397kcal', sugars: '46g', protein: '9g', saturated_fat: '11g', sodium: '175mg', caffeine: '23mg'},
            {item_no: 5, src: 'season5.png', name: 'ICED 바닐라 오트 콜드브루', price: 8000, desc: '오트의 고소함과 부드러운 바닐라 크림이 콜드브루와 어우러져 담백하게 즐길 수 있는 음료 ', calorie: '206kcal', sugars: '17g', protein: '2g', saturated_fat: '4.4g', sodium: '158mg', caffeine: '78mg'},
            {item_no: 6, src: 'season6.png', name: 'ICED 디카페인 바닐라 오트 콜드브루', price: 8000, desc: '오트의 고소함과 부드러운 바닐라 크림이 콜드브루와 어우러져 담백하게 즐길 수 있는 음료', calorie: '205kcal', sugars: '17g', protein: '2g', saturated_fat: '4.4g', sodium: '158mg', caffeine: '2mg'},
            {item_no: 7, src: 'season7.png', name: 'HOT 햇살 피치우롱티', price: 8000, desc: '피치우롱, 네이블 오렌지의 풍미를 함께 느낄 수 있는 티에 싱그러운 봄의 초록빛을 담은 레몬머틀 잎을 더하여 봄의 햇살을 느낄 수 있는 음료', calorie: '123kcal', sugars: '8g', protein: '0g', saturated_fat: '0g', sodium: '12mg', caffeine: '6mg'},
            {item_no: 8, src: 'season8.png', name: '(EX) HOT 햇살 피치우롱티', price: 8000, desc: '피치우롱, 네이블 오렌지의 풍미를 함께 느낄 수 있는 티에 싱그러운 봄의 초록빛을 담은 레몬머틀 잎을 더하여 봄의 햇살을 느낄 수 있는 음료', calorie: '236kcal', sugars: '14g', protein: '0g', saturated_fat: '0g', sodium: '19mg', caffeine: '13mg'},
            {item_no: 9, src: 'season9.png', name: 'ICED 햇살 피치우롱티', price: 8000, desc: '피치우롱, 네이블 오렌지의 풍미를 함께 느낄 수 있는 티에 싱그러운 봄의 초록빛을 담은 레몬머틀 잎을 더하여 봄의 햇살을 느낄 수 있는 음료', calorie: '123kcal', sugars: '8g', protein: '0g', saturated_fat: '0g', sodium: '12mg', caffeine: '6mg'},
            {item_no: 10, src: 'season10.png', name: '(EX) ICED 햇살 피치우롱티', price: 8000, desc: '피치우롱, 네이블 오렌지의 풍미를 함께 느낄 수 있는 티에 싱그러운 봄의 초록빛을 담은 레몬머틀 잎을 더하여 봄의 햇살을 느낄 수 있는 음료', calorie: '236kcal', sugars: '14g', protein: '0g', saturated_fat: '0g', sodium: '19mg', caffeine: '13mg'},
            {item_no: 11, src: 'season11.png', name: 'HOT 봄 말차크림 오트라떼', price: 8000, desc: '진한 말차 풍미와 구수한 어린 잎인 밀싹 향미가 가득 담긴 크림 위에 고소한 녹차크런치의 바삭한 토핑이 더해져 봄의 푸릇함을 가득 느낄 수 있는 음료', calorie: '394kcal', sugars: '41g', protein: '3g', saturated_fat: '5.4g', sodium: '181mg', caffeine: '20mg'},
            {item_no: 12, src: 'season12.png', name: 'ICED 봄 말차크림 오트라떼', price: 8000, desc: '진한 말차 풍미와 구수한 어린 잎인 밀싹 향미가 가득 담긴 크림 위에 고소한 녹차크런치의 바삭한 토핑이 더해져 봄의 푸릇함을 가득 느낄 수 있는 음료', calorie: '318kcal', sugars: '38g', protein: '2g', saturated_fat: '5g', sodium: '127mg', caffeine: '20mg'},
            {item_no: 13, src: 'season13.png', name: 'ICED 딸기 듬뿍 라떼', price: 8000, desc: '달콤한 딸기의 식감과 상큼함을 듬뿍 담은 딸기 라떼', calorie: '217kcal', sugars: '28g', protein: '5g', saturated_fat: '3.4g', sodium: '74mg', caffeine: '0mg'},
            {item_no: 14, src: 'season14.png', name: '(EX) ICED 딸기 듬뿍 라떼', price: 8000, desc: '달콤한 딸기의 식감과 상큼함을 듬뿍 담은 딸기 라떼', calorie: '290kcal', sugars: '35g', protein: '7g', saturated_fat: '4.7g', sodium: '102mg', caffeine: '0mg'}
        ]
    ],
    
    // FOOD
    [
        // BREAD
        [
            {item_no: 1, src: 'bread1.png', name: '흑임자 슈크림붕어빵', price: 8000, desc: '고소한 흑임자 반죽 안에 부드럽고 달콤한 슈크림이 들어간 흑임자 슈크림 붕어빵 (판매 단위 : 5개입/봉)', calorie: '260kcal', sugars: '20g', protein: '4g', saturated_fat: '3.1g', sodium: '280mg', caffeine: ''},
            {item_no: 2, src: 'bread2.png', name: '베이컨 포테이토 스퀘어 피자', price: 8000, desc: '큼직한 큐브 포테이토와 짭짤한 맛의 베이컨이 토핑되어 포만감을 느낄 수 있는 조각 피자', calorie: '317kcal', sugars: '3g', protein: '16g', saturated_fat: '3.6g', sodium: '588mg', caffeine: ''},
            {item_no: 3, src: 'bread3.png', name: '하와이안 스퀘어 피자', price: 8000, desc: '푹신한 도우 위에 짭짜름한 베이컨과 파인애플, 모짜렐라, 체다치즈가 어우러진 간편한끼 스퀘어 피자', calorie: '325kcal', sugars: '12g', protein: '15g', saturated_fat: '5g', sodium: '550mg', caffeine: ''},
            {item_no: 4, src: 'bread4.png', name: '불닭고구마 스퀘어 피자', price: 8000, desc: '푹신한 도우 위에 맛있게 매운 불닭과 큐브 고구마, 모짜렐라, 체다치즈가 어우러진 간편한끼 스퀘어 피자', calorie: '347kcal', sugars: '12g', protein: '15g', saturated_fat: '4.1g', sodium: '670mg', caffeine: ''},
            {item_no: 5, src: 'bread5.png', name: '토피넛 크로플', price: 8000, desc: '플레인 크로플과 토피넛베이스, 아몬드 브리틀과 아몬드 슬라이스, 아이스크림이 올라간 크로플을 추가하여 취향에 따라 즐길 수 있는 플레이팅 크로플', calorie: '753kcal', sugars: '34g', protein: '14g', saturated_fat: '18g', sodium: '516mg', caffeine: ''},
            {item_no: 6, src: 'bread6.png', name: '토피넛 꽈루아상', price: 8000, desc: '토피넛 베이스, 아몬드 브리틀과 아몬드 분태가 올라간 꽈루아상에 플로팅 크림을 곁들여 부어먹거나 찍어먹을 수 있는 달달하고 고소한 꽈루아상의 플러스 버전', calorie: '422kcal', sugars: '21g', protein: '7g', saturated_fat: '12g', sodium: '318mg', caffeine: ''},
            {item_no: 7, src: 'bread7.png', name: '플레인 크로플', price: 8000, desc: '크루아상을 와플 모양으로 찍어 만든 크로플 위에 메이플 시럽과 슈가파우더가 올라간 기본 타입 크로플', calorie: '265kcal', sugars: '8g', protein: '5g', saturated_fat: '6g', sodium: '220mg', caffeine: ''},
            {item_no: 8, src: 'bread8.png', name: '플레인 꽈루아상', price: 8000, desc: '크루아상을 꽈배기처럼 꼬아 만든 꽈배기 크루아상 위에 슈가파우더를 토핑한 크루아상의 확장 디저트', calorie: '242kcal', sugars: '7g', protein: '5g', saturated_fat: '6g', sodium: '220mg', caffeine: ''},
            {item_no: 9, src: 'bread9.png', name: '햄앤치즈샌드위치', price: 8000, desc: '촉촉하고 부드러운 빵속에 달콤한 버터크림 소스, 치즈, 스모크햄을 샌드해 만든 대만식 샌드위치 ', calorie: '203kcal', sugars: '10g', protein: '6g', saturated_fat: '3.5g', sodium: '309mg', caffeine: ''},
            {item_no: 10, src: 'bread10.png', name: '에그 베이컨 과카몰리 샌드위치', price: 8000, desc: '겉은 바삭하고 속은 부드러운 깜빠뉴 사이에 촉촉한 과카몰리 샐러드와 바삭한 베이컨, 치즈, 달걀 프라이가 조화를 이룬 제품', calorie: '370kcal', sugars: '3g', protein: '16g', saturated_fat: '5g', sodium: '839mg', caffeine: ''},
            {item_no: 11, src: 'bread11.png', name: '페퍼로니 피자 샌드위치', price: 8000, desc: '겉은 바삭하고 속은 부드러운 깜빠뉴 사이에 토마토 소스와 갈린 불고기, 쫄깃한 모짜렐라 치즈가 페퍼로니와 조화를 이룬 제품', calorie: '398kcal', sugars: '3g', protein: '20g', saturated_fat: '9g', sodium: '578mg', caffeine: ''},
            {item_no: 12, src: 'bread12.png', name: '핫치킨 브리또', price: 8000, desc: '매콤한 닭고기가 들어가 든든하게 한 끼 식사로 좋은 멕시코 요리', calorie: '396kcal', sugars: '6g', protein: '18g', saturated_fat: '3.2g', sodium: '570mg', caffeine: ''},
            {item_no: 13, src: 'bread13.png', name: '소고기 브리또', price: 8000, desc: '한국식 불고기가 들어가 든든하게 한 끼 식사로 좋은 퓨전 멕시코 음식', calorie: '420kcal', sugars: '9g', protein: '13g', saturated_fat: '3.6g', sodium: '520mg', caffeine: ''},
            {item_no: 14, src: 'bread14.png', name: '메이플 넛 브레드', price: 8000, desc: '메이플 향이 풍부한 브레드에 풍성한 휘핑크림과 몸에좋은 호두와 아몬드가 더해진 중독성 강한 허니브레드', calorie: '850kcal', sugars: '39g', protein: '13g', saturated_fat: '27g', sodium: '745mg', caffeine: ''},
            {item_no: 15, src: 'bread15.png', name: '허니 카라멜 브레드', price: 8000, desc: '은은한 시나몬과 진한 카라멜 코팅이 된 허니브레드에 휘핑크림을 더해 한결 부드러워진 맛의 허니브레드', calorie: '746kcal', sugars: '39g', protein: '9g', saturated_fat: '27g', sodium: '824mg', caffeine: ''},
            {item_no: 16, src: 'bread16.png', name: '갈릭 치즈 브레드', price: 8000, desc: '풍부한 갈릭버터스프레드와 조화를 이룬 진한 체다치즈에 바삭한 갈릭칩을 얹어 촉촉한 브레드와 함께 즐길 수 있는 제품', calorie: '686kcal', sugars: '27g', protein: '12g', saturated_fat: '14g', sodium: '1389mg', caffeine: ''},
            {item_no: 17, src: 'bread17.png', name: '생크림 와플', price: 8000, desc: '쫄깃한 와플과 생크림의 달콤함을 함께 즐길 수 있는 메뉴', calorie: '397kcal', sugars: '25g', protein: '4g', saturated_fat: '15g', sodium: '314mg', caffeine: ''},
            {item_no: 18, src: 'bread18.png', name: '오리지널 핫 번', price: 8000, desc: '따뜻한 번을 감싼 커피크림과 빵속에 부드럽게 녹아 든 버터가 조화를 이뤄 달콤 짭쪼름한 맛이 일품인 오리지널 번', calorie: '240kcal', sugars: '4g', protein: '4g', saturated_fat: '2.1g', sodium: '190mg', caffeine: ''},
            {item_no: 19, src: 'bread19.png', name: '플레인 와플', price: 8000, desc: '담백하고 쫄깃한 그대로를 즐길 수 있는 정통 벨기에 와플', calorie: '327kcal', sugars: '21g', protein: '3g', saturated_fat: '9g', sodium: '300mg', caffeine: ''},
            {item_no: 20, src: 'bread20.png', name: '달고나 아이스크림 와플', price: 8000, desc: '쫄깃한 와플에 부드럽고 달콤한 아이스크림을 더하고, 달콤쌉싸름한 달고나의 깊고 진한 풍미와 바삭한 식감까지 느낄 수 있는 메뉴', calorie: '560kcal', sugars: '51g', protein: '7g', saturated_fat: '15g', sodium: '415mg', caffeine: ''},
            {item_no: 21, src: 'bread21.png', name: '프레즐', price: 8000, desc: '따뜻하게 데우면 프레즐 속 숨어있던 달콤한크림치즈가 녹으면서 부드러운 향이 살아나는 이디야의 대표 인기메뉴', calorie: '250kcal', sugars: '5g', protein: '7g', saturated_fat: '3g', sodium: '310mg', caffeine: ''},
            {item_no: 22, src: 'bread22.png', name: '블루베리 베이글', price: 8000, desc: '몸에 좋은 블루베리가 듬뿍 들어가 있어 한입 물면 입안 가득 블루베리 향이 퍼지는 베이글', calorie: '280kcal', sugars: '8g', protein: '10g', saturated_fat: '1g', sodium: '420mg', caffeine: ''},
            {item_no: 23, src: 'bread23.png', name: '플레인 베이글', price: 8000, desc: '아침식사 대용으로 좋은 담백하고 쫄깃한 맛의 베이글', calorie: '280kcal', sugars: '6g', protein: '11g', saturated_fat: '0.9g', sodium: '410mg', caffeine: ''},
            {item_no: 24, src: 'bread24.png', name: '어니언 베이글', price: 8000, desc: '한국인의 입맛에 맞는 양파로 맛을 낸 인기만점 베이글', calorie: '280kcal', sugars: '7g', protein: '10g', saturated_fat: '2.1g', sodium: '410mg', caffeine: ''},
            {item_no: 25, src: 'bread25.png', name: '메이플 와플', price: 8000, desc: '고소한 와플과 달콤한 메이플 향이 입안 가득 은은하게 퍼지는 메뉴', calorie: '354kcal', sugars: '28g', protein: '3g', saturated_fat: '9g', sodium: '300mg', caffeine: ''},
            {item_no: 26, src: 'bread26.png', name: '크림치즈 와플', price: 8000, desc: '와플과 함게 고소하고 진한 크림치즈의 풍미를 더해 더욱 깊은 맛을 즐길 수 있는 메뉴', calorie: '415kcal', sugars: '22g', protein: '5g', saturated_fat: '16g', sodium: '390mg', caffeine: ''},
            {item_no: 27, src: 'bread27.png', name: '크로크무슈', price: 8000, desc: '햄과 치즈가 들어있어 담백하고 고소한 맛을 즐길 수 있는, 한끼 식사 대용으로 좋은 제품', calorie: '453kcal', sugars: '5g', protein: '19g', saturated_fat: '4.8g', sodium: '1020mg', caffeine: ''},
            {item_no: 28, src: 'bread28.png', name: '잉글리쉬 머핀', price: 8000, desc: '폭신한 잉글리쉬 머핀에 달걀, 햄, 치즈, 그리고 홀머스터드가 발라진 영국식 아침 식사 대용 제품', calorie: '278kcal', sugars: '2g', protein: '13g', saturated_fat: '4.2g', sodium: '770mg', caffeine: ''},
            {item_no: 29, src: 'bread29.png', name: '크루아상', price: 8000, desc: '프랑스산 버터를 듬뿍 넣어 롤링한 크루아상으로 버터 특유의 고소함과 담백함을 풍부하게 느낄 수 있는 제품', calorie: '260kcal', sugars: '3g', protein: '4g', saturated_fat: '4.8g', sodium: '190mg', caffeine: ''},
            {item_no: 30, src: 'bread30.png', name: '핫 치즈 번', price: 8000, desc: '부드러운 크림치즈 필링이 들어있어 더욱 향긋하고 커피와 잘 어울리는 번', calorie: '235kcal', sugars: '10g', protein: '4g', saturated_fat: '6g', sodium: '140mg', caffeine: ''}
        ],


        // DESSERT
        [
            {item_no: 1, src: 'dessert1.png', name: '쌍쌍 츄로스', price: 8000, desc: '시나몬슈가로 마무리한 바삭한 식감을 가진 츄로스. 커피와 함께 할 경우 더욱 풍부한 맛을 느낄 수 있는 베이커리', calorie: '265kcal', sugars: '6g', protein: '3g', saturated_fat: '8g', sodium: '270mg', caffeine: '0mg'},
            {item_no: 2, src: 'dessert2.png', name: '초코렛청크 쿠키', price: 8000, desc: '진하고 부드러운 초코렛칩이 풍부한 쿠키. 이디야만의 반죽배합으로 만들어져 더욱 특별한 쿠키다.', calorie: '341kcal', sugars: '27g', protein: '4g', saturated_fat: '8g', sodium: '310mg', caffeine: '0mg'},
            {item_no: 3, src: 'dessert3.png', name: '화이트초코 마카다미아 쿠키', price: 8000, desc: '마카다미아 넛의 고소함과 화이트초콜렛의 달콤함이 조화를 이루는 쿠키. 이디야만의 반죽배합으로 만들어져 더욱 특별한 쿠키다.', calorie: '356kcal', sugars: '24g', protein: '5g', saturated_fat: '8g', sodium: '320mg', caffeine: '0mg'},
            {item_no: 4, src: 'dessert4.png', name: '초콜릿 마카롱', price: 8000, desc: '초콜릿 가나슈를 샌드하여 겉은 바삭하고  속은 쫄깃한 마카롱 ', calorie: '122kcal', sugars: '16g', protein: '1g', saturated_fat: '2g', sodium: '15mg', caffeine: '0mg'},
            {item_no: 5, src: 'dessert5.png', name: '산딸기 마카롱', price: 8000, desc: '새콤달콤한 산딸기잼을 샌드하여 겉은 바삭하고 속은 쫄깃한 마카롱', calorie: '100kcal', sugars: '18g', protein: '2g', saturated_fat: '1g', sodium: '20mg', caffeine: '0mg'},
            {item_no: 6, src: 'dessert6.png', name: '바닐라 마카롱', price: 8000, desc: '바닐라 빈이 들어있는 바닐라크림을 샌드하여 겉은 바삭하고 속은 쫄깃한 마카롱', calorie: '140kcal', sugars: '14g', protein: '2g', saturated_fat: '2g', sodium: '20mg', caffeine: '0mg'},
            {item_no: 7, src: 'dessert7.png', name: '스트로베리 치즈 마카롱', price: 8000, desc: '진한 크림치즈 풍미의 크림과 속안에 숨겨진 딸기퓨레가 어우러진 달달한 마카롱', calorie: '126kcal', sugars: '8g', protein: '2g', saturated_fat: '4.3g', sodium: '20mg', caffeine: '0mg'},
            {item_no: 8, src: 'dessert8.png', name: '얼그레이 쇼콜라 마카롱', price: 8000, desc: '풍부한 맛의 얼그레이 크림과 진한 초코 가나슈가 어우러져, 밀크티의 부드러운 단맛을 느낄 수 있는 마카롱 ', calorie: '136kcal', sugars: '9g', protein: '1g', saturated_fat: '6g', sodium: '10mg', caffeine: '0mg'},
            {item_no: 9, src: 'dessert9.png', name: '쿠키 앤 크림 마카롱', price: 8000, desc: '바삭바삭 초코쿠키와 부드러운 풍미의 쿠키맛 버터크림이 어우러진 달콤한 맛의 마카롱', calorie: '135kcal', sugars: '8g', protein: '2g', saturated_fat: '4.7g', sodium: '15mg', caffeine: '0mg'},
            {item_no: 10, src: 'dessert10.png', name: '초코 티라미수', price: 8000, desc: '크림치즈와 달콤한 초콜렛이 조화를 이루고 진하고 고운 코코아 파우더가 맛에 깊이를 더하는 메뉴', calorie: '330kcal', sugars: '14g', protein: '5g', saturated_fat: '15g', sodium: '95mg', caffeine: '0mg'},
            {item_no: 11, src: 'dessert11.png', name: '수플레 치즈 케이크', price: 8000, desc: '치즈 고유의 부드러움과 촉촉함이 살아있는 케이크', calorie: '370kcal', sugars: '20g', protein: '8g', saturated_fat: '16g', sodium: '280mg', caffeine: '0mg'},
            {item_no: 12, src: 'dessert12.png', name: '데블스 초코 케이크', price: 8000, desc: '진한 초콜릿과 코코아 시트로 만든 초콜릿 케이크', calorie: '426kcal', sugars: '27g', protein: '5g', saturated_fat: '17g', sodium: '110mg', caffeine: '0mg'},
            {item_no: 13, src: 'dessert13.png', name: '떠먹는 티라미수', price: 8000, desc: '진한 에스프레소 시럽을 이탈리아 정통 쿠키인 레이디핑거에 적셔 마스카포네 치즈 무스와 코코아파우더를 토핑한 티라미수 케이크 ', calorie: '395kcal', sugars: '32g', protein: '4g', saturated_fat: '14g', sodium: '113mg', caffeine: '0mg'},
            {item_no: 14, src: 'dessert14.png', name: '밀크레이프 케이크', price: 8000, desc: '한 장 한 장 정성스럽게 구운 촉촉한 크레이프 시트사이에 겹겹이 느껴지는 부드러운 크림이 포인트인 케이크', calorie: '179kcal', sugars: '10g', protein: '3g', saturated_fat: '7g', sodium: '72mg', caffeine: '0mg'},
            {item_no: 15, src: 'dessert15.png', name: '플레인 치즈 스틱케익', price: 8000, desc: '케익시트에 부드럽고 고소한 풍미를 한층 더해주는 끼리 크림 치즈가 함유된 치즈케익을 얹어, 깊고 풍부한 크림치즈의 풍미를 즐길 수 있는 제품', calorie: '160kcal', sugars: '8g', protein: '3g', saturated_fat: '6g', sodium: '150mg', caffeine: '0mg'},
            {item_no: 16, src: 'dessert16.png', name: '블루베리 치즈 스틱케익', price: 8000, desc: '부드럽고 신선한 맛을 느낄 수 있는 끼리 크림 치즈를 활용한 진한 치즈케익 위에 진짜 블루베리가 첨가되어 있는 이디야만의 블루베리 치즈 스틱케익', calorie: '155kcal', sugars: '8g', protein: '3g', saturated_fat: '5g', sodium: '150mg', caffeine: '0mg'},
            {item_no: 17, src: 'dessert17.png', name: '스노우 쿠키슈', price: 8000, desc: '부드럽고 시원한 크림과 바삭한 쿠키가 조화로운 이디야 디저트 ', calorie: '215kcal', sugars: '9g', protein: '3g', saturated_fat: '9g', sodium: '180mg', caffeine: '0mg'},
            {item_no: 18, src: 'dessert18.png', name: '초코칩 머핀', price: 8000, desc: '진하고 달콤한 초콜렛이 통째로 들어가 특히 여성들에게 인기가 좋은 머핀', calorie: '420kcal', sugars: '32g', protein: '7g', saturated_fat: '4.6g', sodium: '447mg', caffeine: '0mg'},
            {item_no: 19, src: 'dessert19.png', name: '크림치즈 머핀', price: 8000, desc: '담백한 치즈 고유의 맛과 향이 살아나 식욕을 돋우는 머핀', calorie: '432kcal', sugars: '27g', protein: '7g', saturated_fat: '6g', sodium: '472mg', caffeine: '0mg'},
            {item_no: 20, src: 'dessert20.png', name: '블루베리 머핀', price: 8000, desc: '쏙쏙 박힌 큼직한 블루베리가 눈에 보여 더 먹음직 스러운 머핀', calorie: '433kcal', sugars: '29g', protein: '6g', saturated_fat: '4.6g', sodium: '499mg', caffeine: '0mg'}
        ],


        // DELI
        [
            {item_no: 1, src: 'deli1.png', name: '초콜릿 디핑', price: 8000, desc: '이디야 베이커리와 잘 어울리는 진한 초코소스', calorie: '112kcal', sugars: '19g', protein: '1g', saturated_fat: '1g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 2, src: 'deli2.png', name: '매콤 로제 구운주먹밥', price: 8000, desc: '매콤하고 부드러운 로제 떡볶이 양념과 부드러운 모짜렐라 치즈가 잘 어우러진 쫀득하고 고소한 오븐에 구운 주먹밥', calorie: '209kcal', sugars: '3g', protein: '5g', saturated_fat: '2.2mg', sodium: '518mg', caffeine: '0mg'},
            {item_no: 3, src: 'deli3.png', name: '까르보나라 구운주먹밥', price: 8000, desc: '까르보나라 소스와 베이컨이 부드러운 모짜렐라 치즈가 잘 어우러진 쫀득하고 고소한 오븐에 구운 주먹밥', calorie: '211kcal', sugars: '2g', protein: '6g', saturated_fat: '3.1mg', sodium: '342mg', caffeine: '0mg'},
            {item_no: 4, src: 'deli4.png', name: '양송이 수프', price: 8000, desc: '잘게 잘린 양송이 버섯의 감칠맛과 식감을 즐길 수 있는 부드러운 떠먹는 수프', calorie: '250kcal', sugars: '4g', protein: '3g', saturated_fat: '16g', sodium: '449mg', caffeine: '0mg'},
            {item_no: 5, src: 'deli5.png', name: '콘 수프', price: 8000, desc: '풍성하게 넣은 옥수수의 달콤한 맛과 식감을 즐길 수 있는 부드러운 떠먹는 수프', calorie: '215kcal', sugars: '14g', protein: '3g', saturated_fat: '10g', sodium: '408mg', caffeine: '0mg'}
        ],


        // RTE
        [
            {item_no: 1, src: 'rte1.png', name: '초코프레첼 미니', price: 8000, desc: '바삭한 프레첼의 식감에 달콤한 초콜릿 코팅과 짭짤한 소금의 조화로 단짠단짠의 매력을 느낄 수 있는 스낵', calorie: '213kcal', sugars: '10g', protein: '4g', saturated_fat: '5g', sodium: '340mg', caffeine: '0mg'},
            {item_no: 2, src: 'rte2.png', name: '꿀오란다', price: 8000, desc: '아몬드, 호박씨, 해바라기씨와 벌꿀이 함께 버무려져 고소하고 달콤한 오란다 제품', calorie: '150kcal', sugars: '7g', protein: '4g', saturated_fat: '2.1g', sodium: '50mg', caffeine: '0mg'},
            {item_no: 3, src: 'rte3.png', name: '단백질바 초코쿠키', price: 8000, desc: '고함량 단백질(13g)과 함께 달콤한 초콜릿 코팅과 쿠키분태, 오곡초코볼, 크리스피볼, 시리얼 등 재미있는 식감을 느낄 수 있는 달콤바삭한 초코바', calorie: '180kcal', sugars: '10g', protein: '13g', saturated_fat: '3g', sodium: '130mg', caffeine: '0mg'},
            {item_no: 4, src: 'rte4.png', name: '비타민바 그릭요거트', price: 8000, desc: '비타민C 일일권장량(100mg)과 식이섬유(3g)가 들어있고 동결건조과일 3종의 달콤함과 그릭요거트의 상큼함이 있는 새콤고소한 스낵바', calorie: '110kcal', sugars: '9g', protein: '1g', saturated_fat: '1g', sodium: '50mg', caffeine: '0mg'},
            {item_no: 5, src: 'rte5.png', name: '크리미초코 감자쿠키', price: 8000, desc: '슈퍼 슬림 크래커에 리얼초콜릿이 샌딩되어 즐거운 식감을 주는 쿠키', calorie: '360kcal', sugars: '20g', protein: '5g', saturated_fat: '11g', sodium: '290mg', caffeine: '0mg'},
            {item_no: 6, src: 'rte6.png', name: '크리미치즈 그레인쿠키', price: 8000, desc: '곡물이 박혀있어 입 안에서 풍부하게 씹히는 맛을 즐길 수 있는 쿠키', calorie: '557kcal', sugars: '24g', protein: '9g', saturated_fat: '17g', sodium: '240mg', caffeine: '0mg'},
            {item_no: 7, src: 'rte7.png', name: '고구마 말랭이', price: 8000, desc: '어떤 첨가물도 사용하지 않은 100% 고구마 그대로의 맛', calorie: '185kcal', sugars: '23g', protein: '2g', saturated_fat: '0g', sodium: '15mg', caffeine: '0mg'},
            {item_no: 8, src: 'rte8.png', name: '미니 코코 크런치', price: 8000, desc: '초콜릿 맛 과자의 달콤함과 밀크크림의 부드러움이 조화롭게 어울리는 상품', calorie: '490kcal', sugars: '11g', protein: '7g', saturated_fat: '0.7g', sodium: '140mg', caffeine: '0mg'},
            {item_no: 9, src: 'rte9.png', name: '바닐라 웨이퍼스', price: 8000, desc: '남녀노소 누구나 좋아하는 친숙한 맛의 웨이퍼스', calorie: '375kcal', sugars: '21g', protein: '4g', saturated_fat: '10g', sodium: '100mg', caffeine: '0mg'},
            {item_no: 10, src: 'rte10.png', name: '미니프레첼 볶음양념맛', price: 8000, desc: '씹을수록 고소함이 가득한 프레첼 모양의 과자 위에 볶음양념 특유의 감칠맛과 짭조름함이 어우러진 시즈닝과 와사비 특유의 톡 쏘는 알싸함이 잘 어우러진 스낵', calorie: '295kcal', sugars: '2g', protein: '6g', saturated_fat: '4.4g', sodium: '510mg', caffeine: '0mg'},
            {item_no: 11, src: 'rte11.png', name: '미니프레첼 와사비맛', price: 8000, desc: '짙은 나뭇가지 색과 가운데 엮은 매듭에서 갈라져 나온 두개의 팥과 같은 모양의 과자인 프레첼에 와사비 특유의 맛이 잘 어우러진 스낵', calorie: '295kcal', sugars: '2g', protein: '6g', saturated_fat: '4.5g', sodium: '480mg', caffeine: '0mg'},
            {item_no: 12, src: 'rte12.png', name: '아이스콘 초코', price: 8000, desc: '튀기지 않고 오븐에 직접 구운 고소하고 바삭한 콘 모양의 과자', calorie: '360kcal', sugars: '32g', protein: '8g', saturated_fat: '16g', sodium: '40mg', caffeine: '0mg'},
            {item_no: 13, src: 'rte13.png', name: '아이스콘 요구르트', price: 8000, desc: '가늘고 긴 콘 모양과 그립감이 좋은 어린이용 제품으로 오리지널 초콜릿과 새콤달콤한 요구르트 맛으로 구성', calorie: '360kcal', sugars: '40g', protein: '8g', saturated_fat: '17.6g', sodium: '40mg', caffeine: '0mg'},
            {item_no: 14, src: 'rte14.png', name: '이너츠', price: 8000, desc: '매일 간편하게 즐기는 이디야의 견과류', calorie: '132kcal', sugars: '2g', protein: '3g', saturated_fat: '2g', sodium: '0mg', caffeine: '0mg'}
        ],


        // SEASON
        [
            {item_no: 1, src: 'season1.png', name: '', price: 8000, desc: '', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 2, src: 'season2.png', name: '', price: 8000, desc: '', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 3, src: 'season3.png', name: '', price: 8000, desc: '', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 4, src: 'season4.png', name: '흑임자 팥붕어빵', price: 8000, desc: '고소한 흑임자 반죽 안에 꾸덕하고 달콤한 팥앙금이 들어간 흑임자 팥 붕어빵 (판매 단위 : 5개입/봉)', calorie: '270kcal', sugars: '17g', protein: '6g', saturated_fat: '3.4g', sodium: '240mg', caffeine: '0mg'}
        ]
    ],

    // MD
    [
        // MD
        [
            {item_no: 1, src: 'md1.png', name: '점보 그립 텀블러(미드나잇블루)', price: 8000, desc: '회전식 음용구 커버 기능을 지닌 손잡이형 스텐 텀블러(650ml)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 2, src: 'md2.png', name: '점보 그립 텀블러(쿨그레이)', price: 8000, desc: '회전식 음용구 커버 기능을 지닌 손잡이형 스텐 텀블러(650ml)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 3, src: 'md3.png', name: '점보 컴포트 텀블러(오로라블루)', price: 8000, desc: '손잡이 끈이 있어 휴대가 용이하며, 빨대가 내장되어 있는 흡입 음용구가 있는 밀폐형 스텐 텀블러(710ml, 세척솔 포함 구성)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 4, src: 'md4.png', name: '커피 드리퍼', price: 8000, desc: '열에 강하고 휴대성을 겸비한 가벼운 PP재질의 드리퍼', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 5, src: 'md5.png', name: '글라스 서버', price: 8000, desc: '300ml당 용량 표시선이 있는 내열 강화유리 재질의 유리 서버(용량 : 700ml)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 6, src: 'md6.png', name: '크림 드립 포트', price: 8000, desc: '아기자기한 사이즈의 주전자 타입의 포트(용량 : 350ml)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 7, src: 'md7.png', name: '생분해성 커피 필터', price: 8000, desc: '옥수수전분 PLA 소재의 생분해성 필터로, 원추형(cone) 타입', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 8, src: 'md8.png', name: '크림 드립 텀블러', price: 8000, desc: '미니 드리퍼가 내장되어 있어 휴대가 용이한 크림 색상의 드립 텀블러', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 9, src: 'md9.png', name: '크림 전동 그라인더', price: 8000, desc: '버튼을 누르면서 갈리는 수동식 전동 그라인더', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 10, src: 'md10.png', name: '트윙클 콜드컵 화이트(520ml)', price: 8000, desc: '도넛 형태의 뚜겅 및 실리콘 빨대 덮개 포인트, 스팽글로 키치한 무드를 연출하여 비주얼적 요소를 강화하고, 투명한 플라스틱 재질로 여름 느낌을 강조한 콜드컵', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 11, src: 'md11.png', name: '트윙클 콜드컵 퍼플(520ml)', price: 8000, desc: '도넛 형태의 뚜겅 및 실리콘 빨대 덮개 포인트, 스팽글로 키치한 무드를 연출하여 비주얼적 요소를 강화하고, 투명한 플라스틱 재질로 여름 느낌을 강조한 콜드컵', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 12, src: 'md12.png', name: '트윙클 콜드컵 핑크(420ml)', price: 8000, desc: '도넛 형태의 뚜겅 및 실리콘 빨대 덮개 포인트, 스팽글로 키치한 무드를 연출하여 비주얼적 요소를 강화하고, 투명한 플라스틱 재질로 여름 느낌을 강조한 콜드컵', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 13, src: 'md13.png', name: '드로잉 글라스 머그', price: 8000, desc: '귀여운 서체의 일러스트와 어울리는 원통형 손잡이로 포인트를 가미한 머그', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 14, src: 'md14.png', name: '드로잉 글라스', price: 8000, desc: '음료 비주얼이 돋보일 수 있도록 최대한 간결한 일러스트를 사용한 기본 타입 컵', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 15, src: 'md15.png', name: '미르 핸들 텀블러(브릭 브라운)', price: 8000, desc: 'MiiR 브랜드 특징인 파우더 코팅 마감으로 그립감이 우수하며, 매트한 질감을 살린 이디야만의 익스클루시브 봄 컬러 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 16, src: 'md16.png', name: '미르 핸들 텀블러(아몬드 베이지)', price: 8000, desc: 'MiiR 브랜드 특징인 파우더 코팅 마감으로 그립감이 우수하며, 매트한 질감을 살린 이디야만의 익스클루시브 봄 컬러 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 17, src: 'md17.png', name: '미르 핸들 텀블러(크림 아이보리)', price: 8000, desc: 'MiiR 브랜드 특징인 파우더 코팅 마감으로 그립감이 우수하며, 매트한 질감을 살린 이디야만의 익스클루시브 봄 컬러 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 18, src: 'md18.png', name: '미르 플랫 텀블러(브릭 브라운)', price: 8000, desc: 'MiiR 브랜드 특징인 파우더 코팅 마감으로 그립감이 우수하며, 매트한 질감을 살린 이디야만의 익스클루시브 봄 컬러 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 19, src: 'md19.png', name: '미르 플랫 텀블러(크림 아이보리)', price: 8000, desc: 'MiiR 브랜드 특징인 파우더 코팅 마감으로 그립감이 우수하며, 매트한 질감을 살린 이디야만의 익스클루시브 봄 컬러 제품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 20, src: 'md20.png', name: '(MD)이디야 석류애플라임티', price: 8000, desc: '산뜻한 석류에 다양한 과일과 꽃, 그리고 샴페인의 향이 더해져 깊고 중후한 맛이 느껴지는 블렌딩티 * 과일청 50~60g에 뜨거운 물 150~200ml와 티백을 넣고 잘 우려낸 후 드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 21, src: 'md21.png', name: '(MD)이디야 제주청귤블라썸티', price: 8000, desc: '청귤의 새콤함이 사과, 포도 등의 다양한 과일향과 함께 어우러져 밸런스가 훌륭한 블렌딩티 * 과일청 50~60g에 뜨거운 물 150~200ml와 티백을 넣고 잘 우려낸 후 드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 22, src: 'md22.png', name: '(MD)이디야 자몽네이블오렌지티', price: 8000, desc: '자몽청에 오렌지, 로즈힙, 사과 등을 넣어 부드러운 신맛과 오렌지향을 즐길 수 있는 블렌딩티 * 과일청 50~60g에 뜨거운 물 150~200ml와 티백을 넣고 잘 우려낸 후 드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 23, src: 'md23.png', name: '(MD)샤인히비스커스', price: 8000, desc: '사과, 오렌지, 패션후르츠 등의 과일향이 가득 블렌딩된 새콤달콤한 허브티 (10개입) * 90℃ 온수 270ml에 2분간 우려드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 24, src: 'md24.png', name: '(MD)스프링캐모마일', price: 8000, desc: '캐모마일과 루이보스의 은은한 달콤함에 상큼한 레몬그라스향이 더해진 허브티 (10개입) * 90℃ 온수 270ml에 2분간 우려드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 25, src: 'md25.png', name: '(MD)그린루이보스', price: 8000, desc: '그린 루이보스의 깔끔한 맛에 복숭아 한 조각을 베어 문 듯한 잔향의 허브티 (10개입) * 90℃ 온수 270ml에 2분간 우려드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 26, src: 'md26.png', name: '(MD)퓨어페퍼민트', price: 8000, desc: '막 피어난 싱싱하고 여린 페퍼민트의 청량함이 입 안 가득 느껴지는 허브티 (10개입) * 90℃ 온수 270ml에 2분간 우려드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 27, src: 'md27.png', name: '(MD)프레시그린티', price: 8000, desc: '어린잎 녹차의 부드러운 맛에 싱그러운 시트러스 향이 블렌딩된 그린티 (10개입) * 90℃ 온수 270ml에 2분간 우려드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 28, src: 'md28.png', name: '(MD)피치얼그레이', price: 8000, desc: '깊고 그윽한 홍차와 달콤한 복숭아 향이 조화롭게 어우러진 블랙티 (10개입) * 90℃ 온수 270ml에 2분간 우려드세요', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 29, src: 'md29.png', name: '이디야 캡슐커피 콜롬비아 슈프리모', price: 8000, desc: '부드러운 바닐라와 아몬드의 고소함,은은한 향미의 안정적인 밸런스가 특징 ', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 30, src: 'md30.png', name: '이디야 캡슐커피 에티오피아 리무', price: 8000, desc: '에티오피아 최고의 고지대에서 자라 은은하고 선명한 향미와 케인슈가의 달콤한 후미가 특징', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 31, src: 'md31.png', name: '이디야 캡슐커피 페르소나 블렌드', price: 8000, desc: '다크 초콜렛, 카라멜, 견과류의 고소함 및 부드러운 바디감이 특징', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 32, src: 'md32.png', name: '이디야 핸드드립 커피 콜롬비아 슈프리모', price: 8000, desc: '부드러운 바닐라와 아몬드의 고소함, 은은한 향미의 안정적인 밸런스가 특징', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 33, src: 'md33.png', name: '이디야 핸드드립 커피 에티오피아 리무', price: 8000, desc: '은은하고 선명한 플로럴한 향미와 케인슈가의 달콤한 후미가 특징', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 34, src: 'md34.png', name: '이디야 핸드드립 커피 페르소나 블렌드', price: 8000, desc: '다크 초콜렛, 카라멜, 견과류의 고소함 및 부드러운 바디감이 특징', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 35, src: 'md35.png', name: '매트 머그 화이트', price: 8000, desc: '심플한 쉐입에 유니크한 손잡이가 돋보이며 사용편의성도 겸비한 머그 ', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 36, src: 'md36.png', name: '매트 머그 블루', price: 8000, desc: '심플한 쉐입에 유니크한 손잡이가 돋보이며 사용편의성도 겸비한 머그 ', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 37, src: 'md37.png', name: '라이트 콜드컵 (딥블루)', price: 8000, desc: '[시즌]이디야 대표컬러인 블루를 베이스 컬러로 사용하여 청량감 강조 가벼운 플라스틱 소재의 아이템으로 편의성 겸비', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 38, src: 'md38.png', name: '라이트 콜드컵 (펄블루)', price: 8000, desc: '[시즌]이디야 대표컬러인 블루를 베이스 컬러로 사용하여 청량감 강조 가벼운 플라스틱 소재의 아이템으로 편의성 겸비', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 39, src: 'md39.png', name: '라이트 콜드컵 (퓨어)', price: 8000, desc: '[시즌]이디야 대표컬러인 블루를 베이스 컬러로 사용하여 청량감 강조 가벼운 플라스틱 소재의 아이템으로 편의성 겸비', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 40, src: 'md40.png', name: '고아웃 스탠머그 (실버)', price: 8000, desc: '시크한 메탈 디자인으로 감성을 살린 캠핑용품', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 41, src: 'md41.png', name: '고아웃 스탠머그(카키)', price: 8000, desc: '고급스러운 카키 디자인으로 감성을 살린 캠핑용품 ', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 42, src: 'md42.png', name: '엑스트라 콜드컵(아이보리)', price: 8000, desc: '미세한 펄입자가 반짝이는 유광으로 보다 깔끔함이 느껴지는 상품(스트로우 및 세척솔 포함 구성)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 43, src: 'md43.png', name: '엑스트라 콜드컵(베이비 블루)', price: 8000, desc: '매트한 파우더 코팅으로 감촉이 매끄럽고, 고급스러움을 더한 상품(스트로우 및 세척솔 포함 구성)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
            {item_no: 44, src: 'md44.png', name: '이디야 머그 (블루)', price: 8000, desc: '투톤 컬러를 사용하여 고급스러운 기본 머그 (용량 : 400ml)', calorie: '0kcal', sugars: '0g', protein: '0g', saturated_fat: '0g', sodium: '0mg', caffeine: '0mg'},
        ]
    ]
];



const menu_array = ['drink', 'food', 'md'],
      menu_title = ['DRINK', 'FOOD', 'MD'],
      title_array = [
        ['coffee', 'beverage', 'blending_tea', 'flatccino', 'shake_ade', 'ice_flakes', 'rtd', 'season'],
        ['bread', 'dessert', 'deli', 'rte', 'season'],
        ['md']
      ],
      bg_array = ['bg1', 'bg2', 'bg3'],
      img_address = "img/menu/";


      
function get_url_info(key) {
    let url = document.location.href;

    url = url.split('?');

    if(url.length > 1) {
        url = url[1];
        url = url.split("&");

        for(let i = 0; i < url.length; i++) {
            let tmp_url = url[i].split("=");

            if(key == tmp_url[0]) {
                return tmp_url[1];
            };
        };

        return null;
    }

    else {
        return null;
    };
};