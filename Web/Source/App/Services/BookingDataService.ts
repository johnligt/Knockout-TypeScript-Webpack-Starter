import { BookingData } from "App/Models/BookingData";
import { Product } from "App/Models/Product";
import { ProductService } from "App/Services/ProductService";

export class BookingDataService {

    private static bookingData: BookingData;

    static getBookingData(): BookingData {
        return BookingDataService.bookingData;
    }

    static setBookingData(bookingData) {
        BookingDataService.bookingData = bookingData;
    }

    static addProduct = (product: Product) => {
        product.isSelected(true);
        BookingDataService.bookingData.selectedProducts(ProductService.productList.filter(x => x.isSelected()));
        console.log(`Added ${product.productName}`);
    }

    static removeProduct = (product: Product) => {
        product.isSelected(false);
        BookingDataService.bookingData.selectedProducts(ProductService.productList.filter(x => x.isSelected()));
        console.log(`Removed ${product.productName}`);
    }

    static getTotal(): number {

        let total: number = 0; 

        for (let product of BookingDataService.bookingData.selectedProducts() ) {
            total += product.productPrice();
        }

        return total;      
    }
}