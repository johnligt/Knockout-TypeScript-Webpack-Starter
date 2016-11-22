export class Product {
    productId: number;
    productName: string;
    productPrice: KnockoutObservable<number>;
    isSelected: KnockoutObservable<boolean>;
}