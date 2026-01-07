import {ReactComponent as Balance} from '../../../../../img/сompare_header2.svg';
import {ReactComponent as Cart} from '../../../../../img/shop.svg';
import {ReactComponent as Favorites} from '../../../../../img/like_header.svg';
import {ReactComponent as Payment} from '../../../../../img/credit-card.svg';
import {ReactComponent as Delivery} from '../../../../../img/delivery.svg';
import {ReactComponent as Catalog} from '../../../../../img/catalog.svg';
import {ReactComponent as PersonIcon} from '../../../../../img/user.svg';
import {ReactComponent as PhoneIcon} from '../../../../../img/phone.svg';
import {ReactComponent as LocationOnIcon} from '../../../../../img/location.svg';
import {ReactComponent as Promotions} from '../../../../../img/promotions.svg';
import {ReactComponent as Bonuses} from '../../../../../img/bonuses.svg';
import {ReactComponent as RightArrow} from "../../../../../img/arrow_right.svg";





export const getMobileNavItems = (navPages: any[], cartData: any, mainNumber: string) => {

    const getPage = (key: string) => navPages.find(p => p.labelKey === key);
    const promotionItem = getPage('promotion');
    const bonusesItem = getPage('bonuses');
    const paymentItem = getPage('payment');
    const deliveryItem = getPage('delivery');

    return [
        {text: ('login_registration'), link: '/profile', icon: PersonIcon, count: null, isAuth: true},

        {text: ('mobile_catalog'), link: '#',  icons: {
                left: Catalog,
                right: RightArrow,
            }, isCatalog: true, count: null},

        promotionItem && {text: ('promo'), link: `/${promotionItem.path}`, icon: Promotions, count: null, isCatalog: false},
        bonusesItem && {text: ('bonuses'), link: `/${bonusesItem.path}`, icon: Bonuses, count: null, isCatalog: false},
        {text: ('cart'), link: '/cart', icon: Cart, count: cartData.cart.length, isCatalog: false},
        {text: ('favorites'), link: '/favorites', icon: Favorites, count: cartData.favorites.length, isCatalog: false},
        {text: ('comparison'), link: '/comparison', icon: Balance, count: cartData.comparison.length, isCatalog: false},
        paymentItem && {text: ('payment'), link: `/${paymentItem.path}`, icon: Payment, count: null, isCatalog: false},

        deliveryItem && {
            text: ('delivery'),
            link: `/${deliveryItem.path}`,
            icon: Delivery,
            count: null,
            isCatalog: false
        },
        {text: ('location'), link: '/location', icon: LocationOnIcon, count: null, isCatalog: false},
        {text: ('call'), link: `tel:${mainNumber}`, icon: PhoneIcon, count: null, isCatalog: false},
    ].filter(Boolean);
}