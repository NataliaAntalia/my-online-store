import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: {
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
                    profile_login: "Войти в профиль",
                    catalog: {
                        title: "Каталог товаров",
                    },
                    about: "О нас",
                    contacts:"Контакты",
                    jobs: "Вакансии",
                    suppliers: "Поставщикам",
                    privacy_policy: "Политика конфиденциальности",

                    exchange: "Обмен и возврат товара",
                    consumer_protection: "Защита прав потребителей",
                    public_offer: "Публичная оферта",

                    buyer: "Покупателю",
                    useful_information:"Полезная информация",
                    download_app:"Загрузите наше приложение",
                    socials:"Мы в социальных сетях",
                    accept_payment:"Принимаем к оплате",
                    footer_copyright:"Интернет-магазин EasyShop | Превратит покупку в удовольствие",
                    email:"Ваш E-mail",
                    password:"Пароль",
                    entrance:"Вход",


                    forgot_password: "Забыли пароль?",
                    registration:"Регистрация"


                }
            },
            ro: {
                translation: {
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
                    profile_login: "Autentificare în profil",
                    catalog: {
                        title: "Catalog de produse",
                    },
                    about: "Despre noi",
                    contacts:"Contacte",
                    jobs: "Locuri vacante",
                    suppliers: "Pentru furnizori",
                    privacy_policy: "Politica de confidențialitate",

                    exchange: "Schimb și returnare de bunuri",
                    consumer_protection: "Protecția consumatorului",
                    public_offer: "Oferta publica",
                    buyer: "Către cumpărător",
                    useful_information:"Informații utile",
                    download_app:"Descărcați aplicația noastră",
                    socials:"Noi pe rețelele sociale",
                    accept_payment:"Acceptăm plăți",
                    footer_copyright:"Magazinul online EasyShop | Transformă cumpărăturile într-o plăcere",
                    email:"E-mailul dvs",
                    password:"Parolă",
                    entrance:"Intrare",

                    
                    forgot_password: "Ați uitat parola?",
                    registration:"Înregistrare"







                }
            }

        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {escapeValue: false},
        keySeparator: '.',

    });

export default i18n;
