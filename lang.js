const siteContent = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      aboutUs: "Biz haqimizda",
      ourMenu: "Menyumiz",
      bookATable: "Stol band qilish",
      ourChefs: "Bizning oshpazlar",
      gallery: "Galereya",
      faq: "Ko'p so'raladigan savollar",
      pages: "Sahifalar",
      blog: "Blog",
      contactUs: "Bog'lanish",
      reservation: "Bron qilish",
      call: "Chaqiruv - 123 456 789"
    },
    hero: {
      title: "Restoranimizga xush kelibsiz",
      description: "Odamlar, taom va qulay joylashuv — do'stlar va oila birga yig'ilib, ajoyib vaqt o'tkazishi uchun mukammal joy yaratadi.",
      button: "Menyuni ko'rish"
    },
    details: {
      locateUs: {
        title: "Bizni toping",
        text: "Riverside 25, San-Diego, Kaliforniya"
      },
      openHours: {
        title: "Ish vaqti",
        text: "Dushanbadan Jumagacha 9:00 - 21:00"
      },
      reservation: {
        title: "Bron qilish",
        email: "restaurantate@gmail.com"
      }
    },
    aboutStory: {
      title: "Mazali hikoya",
      description: "Odamlar, taom va qulay joylashuv — do'stlar va oila birga yig'ilib, ajoyib vaqt o'tkazishi uchun mukammal joy yaratadi.",
      year2018: "Sog'lom taomlarni yetkazib berish uchun ushbu restoran rejalashtirildi.",
      year2022: "To'rtinchi yilda o'z shiorimizni bajarib, baxtli davom etmoqdamiz.",
      signature: "JOSEFINE"
    },
    menuSection: {
      label: "Menyu",
      title: "Maxsus taomlarimizni tating",
      description: "Biz bilan har safar mukammal taomlanganingizda, mahalliy hudud uchun individual yondashuv bilan yaratilgan muhitda ilhomlantiruvchi ajoyib taomlardan bahramand bo'lasiz.",
      seeAll: "Barcha taomlarni ko'rish",
      categories: {
        starters: "Boshlang'ich taomlar",
        mainDish: "Asosiy taom",
        dessert: "Desert"
      },
      items: [
        {image: "images/menu/Starters/6229c84a72e00315336144d5_menu-item-image-1.jpg", category: "starters", name: "Erkidagi xom morskoy grebeshok", description: "Grebeshokni ustritsalar uchun ishlatiladigan usulda tozalang", price: "$40" },
        {image: "images/menu/Starters/6229d373d7d3fa5f722bdd40_menu-item-image-2.jpg", category: "starters", name: "Bahor ruleti", description: "Issiq tovaga yog' qo'shing, oq piyoz bilan", price: "$20" },
        {image: "images/menu/Starters/6229d3823596cc4d67f4acc5_menu-item-image-3.jpg", category: "starters", name: "Frantsuz piyoz shorva", description: "Bug'doy uni, olma sirkasi, non", price: "$25" },
        {image: "images/menu/Starters/6229d38b50dde73126097b56_menu-item-image-4.jpg", category: "starters", name: "Pomidorli bruskketta", description: "Non, zaytun moyi, sarimsoq, qora murch", price: "$30" },
        
        {image: "images/menu/MainDish/6229d396199c0032870b33e8_menu-item-image-5.jpg", category: "mains", name: "Ukrop sousli grilyangan losos", description: "Jigarrang shakar, losos filesi, Dijon gorchitsasi", price: "$40" },
        {image: "images/menu/MainDish/6229d39f50cee31a1d4046b4_menu-item-image-6.jpg", category: "mains", name: "Sabzavotli qovurilgan mol go'shti", description: "Loviya, entrekot, zaytun moyi, mol go'shti", price: "$20" },
        {image: "images/menu/MainDish/6229d3a950dde70c18097cc0_menu-item-image-7.jpg", category: "mains", name: "Marrakesh vegetarian karri", description: "Shirin kartoshka, baqlajon, no'xat", price: "$25" },
        {image: "images/menu/MainDish/6229d3b450cee3aea6404866_menu-item-image-8.jpg", category: "mains", name: "Achchiq vegan kartoshka karri", description: "Kokos suti, loviya, kartoshka, karri kukuni", price: "$35" },
        
        {image: "images/menu/Desserts/IMAGE (18).png", category: "desserts", name: "Kremli olma pirogi", description: "Qaymoq krem, tuxum oqi, dolchin", price: "$15" },
        {image: "images/menu/Desserts/IMAGE (19).png", category: "desserts", name: "Limonli meringue pirogi", description: "Muzlatilgan pirog xamiri, meringue, limon", price: "$30" }
      ]
    },
    testimonials: {
      label: "Fikrlar",
      title: "Mijozlarimiz fikri",
      description: "Mijozlarimizdan fikr eshitishni yaxshi ko'ramiz, shuning uchun izoh qoldiring yoki elektron pochta orqali salom ayting.",
      items: [
        {
          name: "Natasha D",
          location: "Nyu-York",
          text: "Ular ajoyib ta'mi va taomlari bilan mashhur. Qayerga bormang, ochligingiz qondiriladi. Eng mazali tovuq va burgerlar shu yerda."
        },
        {
          name: "Jek Sparrou",
          location: "Solt-Leyk-Siti",
          text: "Men bu ajoyib restoranga bir necha marta tashrif buyurdim, taomlar mutlaqo ajoyib va tafsilotlarga e'tibor o'ziga xos darajada."
        },
        {
          name: "Martin",
          location: "San-Diego",
          text: "Ajoyib ta'mi va taomlari bilan mashhur. Qayerda bo'lmang ochligingiz qondiriladi. Ular eng mazali qovurilgan tovuq va burgerlarni berishadi."
        },
        {
          name: "Devid Lyu",
          location: "Nyu-York",
          text: "Chiroyli bar va yaqin ovqatlanish maydonchasiga ega restoran. Taomlar ajoyib, hayajonli, juda innovatsion, xizmat esa do'stona va professional."
        }
      ]
    },
    offers: {
      label: "Takliflar",
      title: "Bizning maxsus takliflarimiz",
      description: "Oshpazlarimiz og'zingizda erib ketadigan taomlar tayyorlashadi, hatto eng talabchan ovqatlanuvchilarni ham <br> qoniqtiradi — hozir bu taomlar chegirmada.",
      items: [
        { badge: "50% chegirma", name: "Tovuqli burger", description: "Mazali qo'shimchalar va ko'katlar bilan tovuqli burger.", price: "$10", only:"Faqat" },
        { badge: "50% chegirma", name: "Tovuqli pitsa", description: "Turli xil ta'mlar aralashtirilgan pitsa.", price: "$9", only:"Faqat" }
      ]
    },
    popularDishes: {
      label: "Menyu",
      title: "Mashhur taomlar",
      description: "Restoranda ofitsiantlar orasida kim ovqatni har bir stolga tezroq yetkazib beradi degan o'yin bor. Bu Ginnes rekordiga urinishga olib keldi.",
      seeAll: "Barcha taomlarni ko'rish",
      items: [
        { name: "Tovuq Manjuri", price: "$15", description: "Ziyofatlarda barcha yosh guruhlari tomonidan yoqtiriladigan boshlang'ich taom." },
        { name: "Xot-dog", price: "$10", description: "Yarim bo'lingan bulochka ichida qovurilgan kolbasa." },
        { name: "Yangi losos", price: "$5", description: "Super immunitet ko'k sharbat retsepti bilan sog'liq muammolarini yenging." },
        { name: "Sabzavotli burger", price: "$10", description: "Burgerlar loviya kabi ingredientlardan tayyorlanishi mumkin." }
      ]
    },
    services: {
      label: "Nima taklif qilamiz",
      title: "Bizning ajoyib xizmatlarimiz",
      description: "Muhit sahnani yaratadi. Bu shunchaki uydan uzoqdagi ovqat xonasi emas. Mehmonlar uchun taom diqqat markazida bo'ladi.",
      items: [
        { title: "24/7 ochiq" },
        { title: "Maxsus menyular" },
        { title: "Uyga yetkazib berish" }
      ]
    },
    blog: {
      label: "Blog",
      title: "Yangiliklarni birinchi bo'lib o'qing",
      description: "Bizning taomlarimiz, takliflarimiz, tadbirlarimiz va kelajakdagi rejalarimiz haqidagi eng so'nggi voqealarni shu yerda o'rganing.",
      viewMore: "Ko'proq ko'rish",
      posts: [
        {
          category: "Mazali",
          date: "2022-yil 19-mart",
          title: "AQSh oshxonasi afsonasi: Ochlar haqida hikoya",
          excerpt: "Iqtisodiy jihatdan qo'shimcha qiymat matritsasini aniqlash uchun oson erishiladigan imkoniyatlardan foydalaning va taom sifatini oshirish uchun ijodiy faoliyatni beta-test qiling."
        },
        {
          category: "Pazandalik",
          date: "2022-yil 19-mart",
          title: "O'rta yer dengizi oshxonasining eng mashhur mazali taomlari",
          excerpt: "Iqtisodiy jihatdan qo'shimcha qiymat matritsasini aniqlash uchun oson erishiladigan strategiyalardan foydalaning va taom sifatini oshirish uchun ijodiy faoliyatni beta-test qiling."
        }
      ]
    },
    reservationForm: {
      label: "Bron qilish",
      title: "Stolingizni bron qiling",
      successMessage: "Rahmat! Arizangiz qabul qilindi!",
      errorMessage: "Kechirasiz! Formani yuborishda xatolik yuz berdi."
    },
    footer: {
      hashtag: "#TheTastEat",
      contact: {
        title: "Aloqa",
        address: "5 Rue Dalou, 75015 Parij",
        phone: "+123 456 789",
        email: "josefin@mail.com"
      },
      newsletter: {
        text: "Yangiliklar, xabarlar va aksiyalar haqida bilish uchun pochta ro'yxatimizga qo'shiling.",
        successMessage: "Rahmat! Arizangiz qabul qilindi!",
        errorMessage: "Kechirasiz! Formani yuborishda xatolik yuz berdi."
      },
      workingHours: {
        title: "Ish vaqti",
        monFri: "Dush – Juma: 7:00 – 18:00",
        sat: "Shanba: 7:00 – 18:00",
        sun: "Yakshanba: 8:00 – 18:00"
      },
      copyright: "© Mualliflik huquqi - TastEat"
    }
  },

  ru: {
    nav: {
      home: "Главная",
      aboutUs: "О нас",
      ourMenu: "Наше меню",
      bookATable: "Забронировать столик",
      ourChefs: "Наши повара",
      gallery: "Галерея",
      faq: "Частые вопросы",
      pages: "Страницы",
      blog: "Блог",
      contactUs: "Связаться с нами",
      reservation: "Бронирование",
      call: "Позвонить - 123 456 789"
    },
    hero: {
      title: "Добро пожаловать в ресторан",
      description: "Люди, еда и удобное расположение создают идеальное место, где друзья и семья могут собраться вместе и отлично провести время.",
      button: "Посмотреть меню"
    },
    details: {
      locateUs: {
        title: "Найти нас",
        text: "Риверсайд 25, Сан-Диего, Калифорния"
      },
      openHours: {
        title: "Часы работы",
        text: "Пн–Пт 9:00 - 21:00"
      },
      reservation: {
        title: "Бронирование",
        email: "restaurantate@gmail.com"
      }
    },
    aboutStory: {
      title: "Вкусная история",
      description: "Люди, еда и удобное расположение создают идеальное место, где друзья и семья могут собраться вместе и отлично провести время.",
      year2018: "Планировалось, что этот ресторан будет предлагать здоровую пищу.",
      year2022: "Счастливо продолжаем на четвертый год, выполняя наш девиз.",
      signature: "JOSEFINE"
    },
    menuSection: {
      label: "Меню",
      title: "Попробуйте наши особые блюда",
      description: "Каждый раз, когда вы идеально обедаете с нами, вы будете рады вдохновляющей еде в атмосфере, созданной с индивидуальным подходом к местному колориту.",
      seeAll: "Смотреть все блюда",
      categories: {
        starters: "Закуски",
        mainDish: "Основное блюдо",
        dessert: "Десерт"
      },
      items: [
        {image: "images/menu/Starters/6229c84a72e00315336144d5_menu-item-image-1.jpg", category: "starters", name: "Сырые морские гребешки из Эрки", description: "Очистите гребешок так же, как это делают для устриц", price: "$40" },
        {image: "images/menu/Starters/6229d373d7d3fa5f722bdd40_menu-item-image-2.jpg", category: "starters", name: "Спринг-роллы", description: "Добавьте масло на горячую сковороду с белой частью зеленого лука", price: "$20" },
        {image: "images/menu/Starters/6229d3823596cc4d67f4acc5_menu-item-image-3.jpg", category: "starters", name: "Французский луковый суп", description: "Пшеничная мука, яблочный уксус, хлеб", price: "$25" },
        {image: "images/menu/Starters/6229d38b50dde73126097b56_menu-item-image-4.jpg", category: "starters", name: "Томатная брускетта", description: "Хлеб, оливковое масло, чеснок, черный перец", price: "$30" },
        
        {image: "images/menu/MainDish/6229d396199c0032870b33e8_menu-item-image-5.jpg", category: "mains", name: "Лосось на гриле с укропным соусом", description: "Коричневый сахар, филе лосося, дижонская горчица", price: "$40" },
        {image: "images/menu/MainDish/6229d39f50cee31a1d4046b4_menu-item-image-6.jpg", category: "mains", name: "Ростбиф с овощами", description: "Стручковая фасоль, рибай, оливковое масло, говядина", price: "$20" },
        {image: "images/menu/MainDish/6229d3a950dde70c18097cc0_menu-item-image-7.jpg", category: "mains", name: "Марракешское вегетарианское карри", description: "Сладкий картофель, баклажан, нут", price: "$25" },
        {image: "images/menu/MainDish/6229d3b450cee3aea6404866_menu-item-image-8.jpg", category: "mains", name: "Острое веганское картофельное карри", description: "Кокосовое молоко, фасоль, картофель, порошок карри", price: "$35" },
        
        {image: "images/menu/Desserts/IMAGE (18).png", category: "desserts", name: "Яблочный пирог со сливками", description: "Взбитые сливки, яичный белок, корица", price: "$15" },
        {image: "images/menu/Desserts/IMAGE (19).png", category: "desserts", name: "Лимонный пирог с меренгой", description: "Замороженная основа для пирога, меренга, лимон", price: "$30" }
      ]
    },
    testimonials: {
      label: "Отзывы",
      title: "Что говорят наши клиенты",
      description: "Мы любим слышать от клиентов, поэтому, пожалуйста, оставьте комментарий или напишите нам на почту.",
      items: [
        {
          name: "Наташа Д.",
          location: "Нью-Йорк",
          text: "Они известны своим потрясающим вкусом и едой. Куда бы вы ни пошли, ваш голод будет утолен. Лучшая курица и бургеры — просто объедение."
        },
        {
          name: "Джек Спарроу",
          location: "Солт-Лейк-Сити",
          text: "Я посещал этот замечательный ресторан несколько раз, еда абсолютно превосходная, а внимание к деталям на высшем уровне."
        },
        {
          name: "Мартин",
          location: "Сан-Диего",
          text: "Прекрасно известен своим потрясающим вкусом и едой. Где бы вы ни были, ваш голод будет утолен. Они подают лучшую жареную курицу и бургеры."
        },
        {
          name: "Дэвид Лу",
          location: "Нью-Йорк",
          text: "Ресторан с прекрасным баром и уютной зоной для ужина. Еда впечатляющая, захватывающая, очень инновационная, обслуживание дружелюбное и профессиональное."
        }
      ]
    },
    offers: {
      label: "Акции",
      title: "Наши блюда со скидкой",
      description: "Наши повара создают тающие во рту блюда, которые удовлетворят даже самых привередливых едоков — сейчас <br> эти блюда участвуют в акции.",
      items: [
        { badge: "Скидка 50%", name: "Куриный бургер", description: "Куриный бургер с вкусными добавками и зеленью.", price: "$10", only:"Только" },
        { badge: "Скидка 50%", name: "Куриная пицца", description: "Пицца с разнообразными вкусами, смешанными вместе.", price: "$9", only:"Только" }
      ]
    },
    popularDishes: {
      label: "Меню",
      title: "Популярные блюда",
      description: "В ресторане между официантами существует игра, кто быстрее всех обслужит каждый столик. Это привело к попытке установить рекорд Гиннесса.",
      seeAll: "Смотреть все блюда",
      items: [
        { name: "Курица Манджури", price: "$15", description: "Блюдо, которое любят все возрастные группы как закуску на вечеринках." },
        { name: "Хот-дог", price: "$10", description: "Жареная колбаса, поданная в разрезанной булочке." },
        { name: "Свежий лосось", price: "$5", description: "Победите проблемы со здоровьем с нашим рецептом супер-иммунного синего сока." },
        { name: "Овощной бургер", price: "$10", description: "Бургеры могут быть приготовлены из таких ингредиентов, как фасоль." }
      ]
    },
    services: {
      label: "Что мы предлагаем",
      title: "Наши отличные услуги",
      description: "Атмосфера задает тон. Это больше, чем просто столовая вдали от дома. Еда становится центром внимания для гостей.",
      items: [
        { title: "Открыто 24/7" },
        { title: "Специальные меню" },
        { title: "Доставка на дом" }
      ]
    },
    blog: {
      label: "Блог",
      title: "Читайте новости первыми",
      description: "Узнайте последние новости о наших блюдах, акциях, мероприятиях и планах на будущее здесь.",
      viewMore: "Читать далее",
      posts: [
        {
          category: "Вкусно",
          date: "19 марта 2022",
          title: "Легенда американской кухни: история голодных людей",
          excerpt: "Используйте доступные возможности для определения ориентировочной матрицы добавленной стоимости и проведите бета-тест творческой деятельности для улучшения качества еды."
        },
        {
          category: "Кулинария",
          date: "19 марта 2022",
          title: "Самые популярные вкусные блюда средиземноморской кухни",
          excerpt: "Используйте стратегии для определения ориентировочной матрицы добавленной стоимости и проведите бета-тест творческой деятельности для улучшения качества еды."
        }
      ]
    },
    reservationForm: {
      label: "Бронирование",
      title: "Забронируйте столик",
      successMessage: "Спасибо! Ваша заявка получена!",
      errorMessage: "Упс! Что-то пошло не так при отправке формы."
    },
    footer: {
      hashtag: "#TheTastEat",
      contact: {
        title: "Контакты",
        address: "5 Rue Dalou, 75015 Париж",
        phone: "+123 456 789",
        email: "josefin@mail.com"
      },
      newsletter: {
        text: "Присоединяйтесь к нашей рассылке, чтобы получать новости и специальные предложения.",
        successMessage: "Спасибо! Ваша заявка получена!",
        errorMessage: "Упс! Что-то пошло не так при отправке формы."
      },
      workingHours: {
        title: "Часы работы",
        monFri: "Пн – Пт: 7:00 – 18:00",
        sat: "Сб: 7:00 – 18:00",
        sun: "Вс: 8:00 – 18:00"
      },
      copyright: "© Авторские права - TastEat"
    }
  },

  en: {
    nav: {
      home: "Home",
      aboutUs: "About Us",
      ourMenu: "Our Menu",
      bookATable: "Book A Table",
      ourChefs: "Our Chefs",
      gallery: "Gallery",
      faq: "FAQ",
      pages: "Pages",
      blog: "Blog",
      contactUs: "Contact Us",
      reservation: "Reservation",
      call: "Call - 123 456 789"
    },
    hero: {
      title: "Welcome to Restaurant",
      description: "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.",
      button: "View Menu"
    },
    details: {
      locateUs: {
        title: "Locate Us",
        text: "Riverside 25, San Diego, California"
      },
      openHours: {
        title: "Open Hours",
        text: "Mon To Fri 9:00 AM - 9:00 PM"
      },
      reservation: {
        title: "Reservation",
        email: "restaurantate@gmail.com"
      }
    },
    aboutStory: {
      title: "The Delicious Story",
      description: "The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.",
      year2018: "Plan for this restaurant to deliver healthy food.",
      year2022: "Happily in the fourth year by fulfill the motto.",
      signature: "JOSEFINE"
    },
    menuSection: {
      label: "Menu",
      title: "Try Our Special Dishes",
      description: "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.",
      seeAll: "See all dishes",
      categories: {
        starters: "Starters",
        mainDish: "Main Dish",
        dessert: "Dessert"
      },
      items: [
        {image: "images/menu/Starters/6229c84a72e00315336144d5_menu-item-image-1.jpg", category: "starters", name: "Raw Scallops from Erquy", description: "Shuck the scallop to that used for oysters", price: "$40" },
        {image: "images/menu/Starters/6229d373d7d3fa5f722bdd40_menu-item-image-2.jpg", category: "starters", name: "Spring Roll", description: "Add oil to a hot pan spring onion whites", price: "$20" },
        {image: "images/menu/Starters/6229d3823596cc4d67f4acc5_menu-item-image-3.jpg", category: "starters", name: "French Onion Soup", description: "Wheat flour, apple cider vinegar, bread", price: "$25" },
        {image: "images/menu/Starters/6229d38b50dde73126097b56_menu-item-image-4.jpg", category: "starters", name: "Tomato Bruschetta", description: "Bread, olive oil, garlic, black pepper", price: "$30" },
        
        {image: "images/menu/MainDish/6229d396199c0032870b33e8_menu-item-image-5.jpg", category: "mains", name: "Grilled Salmon with Dill Sauce", description: "Brown sugar, salmon fillet, Dijon mustard", price: "$40" },
        {image: "images/menu/MainDish/6229d39f50cee31a1d4046b4_menu-item-image-6.jpg", category: "mains", name: "Roast Beef with Vegetable", description: "Green beans, rib eye, olive oil, beef", price: "$20" },
        {image: "images/menu/MainDish/6229d3a950dde70c18097cc0_menu-item-image-7.jpg", category: "mains", name: "Marrkesh Vegetetarian Curruy", description: "Sweet potato, eggplant, garbanzo bean", price: "$25" },
        {image: "images/menu/MainDish/6229d3b450cee3aea6404866_menu-item-image-8.jpg", category: "mains", name: "Spicy Vegan Potato Curry", description: "Coconut milk, beans, potatoes, curry powder", price: "$35" },
        
        {image: "images/menu/Desserts/IMAGE (18).png", category: "desserts", name: "Apple Pie with Cream", description: "Whipping cream, egg white, cinnamon", price: "$15" },
        {image: "images/menu/Desserts/IMAGE (19).png", category: "desserts", name: "Lemon Meringue Pie", description: "Frozen pie crust, meringue, lemon", price: "$30" }
      ]
    },
    testimonials: {
      label: "Testimonial",
      title: "our clients say",
      description: "We love to hear from customers, so please leave a comment or say hello in an email.",
      items: [
        {
          name: "Natasha D",
          location: "Newyork",
          text: "They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy."
        },
        {
          name: "Jack Sparrow",
          location: "Salt Lake City",
          text: "I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own."
        },
        {
          name: "Martin",
          location: "San Diego",
          text: "Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy."
        },
        {
          name: "David Lue",
          location: "Newyork",
          text: "A Restaurant with a lovely bar and intimate dining area. Food is sensational, exciting, highly innovative, the service is friendly & professional."
        }
      ]
    },
    offers: {
      label: "offers",
      title: "Our Offer dishes",
      description: "Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now <br> the dishes are in offers use it based on hunger.",
      items: [
        { badge: "50% Offer Going", name: "Chicken Burger", description: "Chicken burger with the tasty toppings and leaves.", price: "$10", only:"Only" },
        { badge: "50% Offer Going", name: "Chicken Pizza", description: "Pizza with multiple flavor and the toping are mixed.", price: "$9", only:"Only" }
      ]
    },
    popularDishes: {
      label: "menu",
      title: "Popular Dishes",
      description: "There is a game between the waiters in restaurant to see who serves the food to each table fastest. That led to attempting the Guinness Record.",
      seeAll: "See all dishes",
      items: [
        { name: "Chicken Manjoori", price: "$15", description: "Dish relished by all age groups as a starter dish at parties." },
        { name: "Hotdog", price: "$10", description: "Grilled sausage served in the slit of a partially sliced bun." },
        { name: "Fresh Salmon", price: "$5", description: "Beat the health blues with our Super Immune Blue Juice Recipe." },
        { name: "Veg Burger", price: "$10", description: "Burgers may be made from ingredients like beans." }
      ]
    },
    services: {
      label: "What we offer",
      title: "Our Great Services",
      description: "The atmosphere set the stage. It's about more than just a dining room away from your home. food takes the spotlight as guests.",
      items: [
        { title: "Opened 24/7" },
        { title: "Special Menus" },
        { title: "Home Delivery" }
      ]
    },
    blog: {
      label: "Blog",
      title: "Be First Who Read News",
      description: "Explore the latest stories about our dishes, offers, events and future plans here.",
      viewMore: "View More",
      posts: [
        {
          category: "Delicious",
          date: "March 19, 2022",
          title: "The Legend of US Cuisine: The Story of Hungry People",
          excerpt: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality."
        },
        {
          category: "Cooking",
          date: "March 19, 2022",
          title: "The Most Popular Delicious Food of Mediterranean Cuisine",
          excerpt: "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality."
        }
      ]
    },
    reservationForm: {
      label: "reservation",
      title: "Book Your Table",
      successMessage: "Thank you! Your submission has been received!",
      errorMessage: "Oops! Something went wrong while submitting the form."
    },
    footer: {
      hashtag: "#TheTastEat",
      contact: {
        title: "Contact",
        address: "5 Rue Dalou, 75015 Paris",
        phone: "+123 456 789",
        email: "josefin@mail.com"
      },
      newsletter: {
        text: "Join our mailing list for updates, Get news & offers events.",
        successMessage: "Thank you! Your submission has been received!",
        errorMessage: "Oops! Something went wrong while submitting the form."
      },
      workingHours: {
        title: "Working Hours",
        monFri: "Mon – Fri: 7.00am – 6.00pm",
        sat: "Sat: 7.00am – 6.00pm",
        sun: "Sun: 8.00am – 6.00pm"
      },
      copyright: "© Copyright - TastEat"
    }
  }
};

// Eksport qilish
if (typeof module !== "undefined" && module.exports) {
  module.exports = siteContent;
}