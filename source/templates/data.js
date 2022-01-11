export default {
  "pages": [
    { "id": 0, "path": "index.html", "name": "Главная" },
    { "id": 1, "path": "catalog.html", "name": "Каталог продукции" },
    { "id": 2, "path": "form.html", "name": "Подбор программы" }
  ],

  //for stack sprite
  "links": [
    {"source": "https://vk.com/htmlacademy/", "name": "ВКонтакте", "id": "vk" },
    {"source": "https://www.instagram.com/htmlacademy", "name": "Instagram", "id": "ig" },
    {"source": "https://www.facebook.com/htmlacademy", "name": "Facebook", "id": "fb" }
  ],

  //for catalog items
  "items": [
    {"title": "PRO", "mass": "500", "taste": "Курица", "price": "700", "class": "product-block__image product-block__image--small", "name": "chicken_s", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 500г с курицей", "width": "68", "height": "78"},
    {"title": "PRO", "mass": "1000", "taste": "Курица", "price": "1000", "class": "product-block__image product-block__image--big", "name": "chicken_xl", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 1000г с курицей", "width": "84", "height": "100"},
    {"title": "PRO", "mass": "500", "taste": "Рыба", "price": "700", "class": "product-block__image product-block__image--small", "name": "fish_s", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 500г с рыбой", "width": "68", "height": "78"},
    {"title": "PRO", "mass": "1000", "taste": "Рыба", "price": "1000", "class": "product-block__image product-block__image--big", "name": "fish_xl", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 1000г с рыбой", "width": "84", "height": "100"},
    {"title": "Slim", "mass": "500", "taste": "Гречка", "price": "400", "class": "product-block__image product-block__image--small", "name": "buckwheat_s", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 500г с гречкой", "width": "68", "height": "78"},
    {"title": "Slim", "mass": "1000", "taste": "Гречка", "price": "700", "class": "product-block__image product-block__image--big", "name": "buckwheat_xl", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 1000г с гречкой", "width": "84", "height": "100"},
    {"title": "Slim", "mass": "500", "taste": "Рис", "price": "500", "class": "product-block__image product-block__image--small", "name": "rice_s", "ext": "png", "path": "./img/catalog/", "alt": "Cat Energy Pro 500г с рисом", "width": "68", "height": "78"}
  ],

  //for catalog addons
  "addons": [
    {"title": "Сахарозаменитель", "amount": "1 упаковка (100 г)", "count": "200"},
    {"title": "Питьевая вода", "amount": "5 литров", "count": "50"},
    {"title": "Молоко", "amount": "1 литр", "count": "100"},
    {"title": "Витамины", "amount": "1 упаковка (30 г)", "count": "300"}
  ]
}
