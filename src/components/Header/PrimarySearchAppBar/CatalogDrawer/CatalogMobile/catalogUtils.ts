import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {ReactComponent as Balance} from '../../../../../img/compare.svg';
import {ReactComponent as Cart} from '../../../../../img/shop.svg';
import {ReactComponent as Favorites} from '../../../../../img/like.svg';
import {ReactComponent as Payment} from '../../../../../img/credit-card.svg';
import {ReactComponent as Delivery} from '../../../../../img/credit-card.svg';


export const getMobileNavItems = (navPages: any[], cartData: any, mainNumber: string) => {

    const getPage = (key: string) => navPages.find(p => p.labelKey === key);
    const promotionItem = getPage('promotion');
    const bonusesItem = getPage('bonuses');
    const paymentItem = getPage('payment');
    const deliveryItem = getPage('delivery');

    return [
        {text: ('Вход | Регистрация'), link: '/profile', icon: PersonIcon, count: null, isAuth: true},
        {text: ('Каталог'), link: '#', icon: MenuIcon, isCatalog: true, count: null},

        promotionItem && {text: ('Акции'), link: `/${promotionItem.path}`, icon: null, count: null, isCatalog: false},
        bonusesItem && {text: ('Бонусы'), link: `/${bonusesItem.path}`, icon: null, count: null, isCatalog: false},
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