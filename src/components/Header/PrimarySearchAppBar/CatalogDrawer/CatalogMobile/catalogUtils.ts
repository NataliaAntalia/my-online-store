import {ReactComponent as Balance} from '../../../../../img/сompare_header2.svg';
import {ReactComponent as Cart} from '../../../../../img/shop.svg';
import {ReactComponent as Favorites} from '../../../../../img/like.svg';
import {ReactComponent as Payment} from '../../../../../img/credit-card.svg';
import {ReactComponent as Delivery} from '../../../../../img/delivery.svg';
import {ReactComponent as Catalog} from '../../../../../img/catalog.svg';
import {ReactComponent as PersonIcon} from '../../../../../img/user.svg';
import {ReactComponent as PhoneIcon} from '../../../../../img/phone.svg';
import {ReactComponent as LocationOnIcon} from '../../../../../img/location.svg';
import {ReactComponent as Promotions} from '../../../../../img/promotions.svg';
import {ReactComponent as Bonuses} from '../../../../../img/bonuses.svg';




export const getMobileNavItems = (navPages: any[], cartData: any, mainNumber: string) => {

    const getPage = (key: string) => navPages.find(p => p.labelKey === key);
    const promotionItem = getPage('promotion');
    const bonusesItem = getPage('bonuses');
    const paymentItem = getPage('payment');
    const deliveryItem = getPage('delivery');

    return [
        {text: ('Вход | Регистрация'), link: '/profile', icon: PersonIcon, count: null, isAuth: true},
        {text: ('Каталог'), link: '#', icon: Catalog, isCatalog: true, count: null},

        promotionItem && {text: ('Акции'), link: `/${promotionItem.path}`, icon: Promotions, count: null, isCatalog: false},
        bonusesItem && {text: ('Бонусы'), link: `/${bonusesItem.path}`, icon: Bonuses, count: null, isCatalog: false},
        {text: ('Корзина'), link: '/cart', icon: Cart, count: cartData.cart.length, isCatalog: false},
        {text: ('Избранное'), link: '/favorites', icon: Favorites, count: cartData.favorites.length, isCatalog: false},
        {text: ('Сравнение'), link: '/comparison', icon: Balance, count: cartData.comparison.length, isCatalog: false},
        paymentItem && {text: ('Оплата'), link: `/${paymentItem.path}`, icon: Payment, count: null, isCatalog: false},

        deliveryItem && {
            text: ('Доставка'),
            link: `/${deliveryItem.path}`,
            icon: Delivery,
            count: null,
            isCatalog: false
        },
        {text: ('мун. Кишинэу'), link: '/location', icon: LocationOnIcon, count: null, isCatalog: false},
        {text: ('Позвонить'), link: `tel:${mainNumber}`, icon: PhoneIcon, count: null, isCatalog: false},
    ].filter(Boolean);
}