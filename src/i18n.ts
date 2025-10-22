import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: {
                    promotion: 'Акции',
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
                    profile_login: "Autentificare în profil",
                    catalog: {
                        title: "Catalog de produse",
                    }
                }
            }

        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {escapeValue: false},
        keySeparator: '.',

    });

export default i18n;
