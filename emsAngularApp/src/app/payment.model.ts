export interface Payment {
  id?: number;
  cardNumber: string;
  expiry: string;
  cvv: string;
}