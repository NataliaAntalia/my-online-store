import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: {
                    promotion:'Акции',
                    delivery: 'Доставка',
                    payment: 'Оплата',
                    bonuses: 'Бонусы',
                    promo: 'Акции',
                    search: 'Поиск…',
                    messages: 'Сообщения',
                    notifications: 'Уведомления',
                    profile: 'Профиль',
                    my_account: 'Мой аккаунт',
                    cart: 'Корзина',
                    cart_empty: 'Корзина пуста',
                    delete: 'Удалить',
                    favorites: 'Избранное',
                    favorites_empty: 'Список избранного пуст',
                    comparison: 'Сравнение',
                    comparison_empty: 'Список сравнения пуст',
                    currency: 'лей',
                    addToCart: 'В корзину',
                    cashback: 'Кэшбэк',
                    newProducts: "Новинки",
                    discountedProducts: "Снизилась цена",
                    topProducts: "Топ продаж",

                    popularCategories: 'Популярные категории',
                    clothes: 'Одежда',
                    shoes: 'Обувь',
                    accessories: 'Аксессуары',
                    // electronics: 'Электроника',
                    books: 'Книги',
                    sport: 'Спорт',

                    profile_login: "Войти в профиль",
                    catalog: {


                        title: "Каталог товаров",
                        electronics: "Электроника",
                        appliances: "Бытовая техника",
                        home_garden: "Дом и сад",
                        construction: "Строительство и ремонт",
                        pet_supplies: "Товары для животных",
                        sports: "Спорт",
                        outdoor: "Активный отдых и туризм",
                        hobbies: "Хобби и творчество",
                        kids: "Детские товары",
                        autoparts: "Автотовары",
                        beauty: "Красота и здоровье",
                        fashion: "Fashion",
                        business: "Товары для бизнеса"

                    }
                }
            },
            ro: {
                translation: {
                    promotion: 'Promoții',
                    delivery: 'Livrare',
                    payment: 'Plată',
                    bonuses: 'Bonusuri',
                    promo: 'Promoții',
                    search: 'Căutare…',
                    messages: 'Mesaje',
                    notifications: 'Notificări',
                    profile: 'Profil',
                    my_account: 'Contul meu',
                    cart: 'Coș',
                    cart_empty: 'Coșul este gol',
                    delete: 'Șterge',
                    favorites: 'Favorite',
                    favorites_empty: 'Lista de favorite este goală',
                    comparison: 'Comparare',
                    comparison_empty: 'Lista de comparare este goală',
                    currency: 'lei',
                    addToCart: 'Adaugă în coș',
                    cashback: 'Cashback',
                    newProducts: "Noutăți",
                    discountedProducts: "Reduceri",
                    topProducts: "Cele mai vândute",

                    popularCategories: 'Categorii populare',
                    clothes: 'Îmbrăcăminte',
                    shoes: 'Încălțăminte',
                    accessories: 'Accesorii',
                    electronics: 'Electronice',
                    books: 'Cărți',
                    sport: 'Sport',
                    profile_login: "Autentificare în profil",
                    catalog: {
                        title: "Catalog de produse",
                        electronics: "Electronică",
                        appliances: "Electrocasnice",
                        home_garden: "Casă și grădină",
                        construction: "Construcții și reparații",
                        pet_supplies: "Produse pentru animale",
                        sports: "Sport",
                        outdoor: "Activități în aer liber și turism",
                        hobbies: "Hobby și creație",
                        kids: "Produse pentru copii",
                        autoparts: "Produse auto",
                        beauty: "Frumusețe și sănătate",
                        fashion: "Fashion",
                        business: "Produse pentru afaceri"
                    }
                }
            }

        },
        lng: 'ru', // язык по умолчанию
        fallbackLng: 'ru',
        interpolation: { escapeValue: false },
        keySeparator: '.',

    });

export default i18n;
