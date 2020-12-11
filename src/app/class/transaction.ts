export class Transaction {
    eGift: boolean;
    dateTime: Date;
    custID: number;
    expensesCat: string;
    amount: number;
    message: string;
    payeeID: number;

    constructor(eGift?: boolean,
        dateTime?: Date,
        custID?: number,
        expensesCat?: string,
        amount?: number,
        message?: string,
        payeeID?: number)
        {
            this.eGift = eGift;		
            this.dateTime = dateTime;
            this.expensesCat = expensesCat;
            this.custID = custID;
            this.amount = amount;
            this.message = message;
            this.payeeID = payeeID;
        }
  }