import { BookingData } from "App/Models/BookingData";

export class BookingDataService {

    private static bookingData : BookingData;

    static getBookingData() : BookingData {
        return BookingDataService.bookingData;
    }

    static setBookingData(bookingData) {
        BookingDataService.bookingData = bookingData;
    }

}