export class Product {
    productId: number;
    productName: string;
    productPrice: number;
    productDiscountPrice: number;
    isSelected: KnockoutObservable<boolean>;
}