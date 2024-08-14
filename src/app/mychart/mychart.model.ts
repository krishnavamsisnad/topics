export interface Saledata{
year: number,
    Amount: number,
    colorcode:string

}
export interface SalesReport {
    total_sales: string;
    net_sales: string;
    average_sales: string;
    total_orders: number;
    total_items: number;
    total_tax: string;
    total_shipping: string;
    total_refunds: number;
    total_discount: string;
    totals_grouped_by: string;
    totals: TotalsByMonth;
    total_customers: number;
    _links: Links;
  }
  
  export interface TotalsByMonth {
    [month: string]: MonthlyTotal;
  }
  
  export interface MonthlyTotal {
    sales: string;
    orders: number;
    items: number;
    tax: string;
    shipping: string;
    discount: string;
    customers: number;
  }
  
  export interface Links {
    about: Link[];
  }
  
  export interface Link {
    href: string;
  }