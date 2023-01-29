const Status = {
  completed = "completed",
  pending = "pending",
  cancelled = "cancelled",
  fulfilled = "fulfilled",
} as const

export type TStatus = typeof Status[keyof typeof Status];

export interface BookingOrder {
  bookingId: number;
  activity: {
    img: string;
    title: string;
  };
  client: {
    img: string;
    name: string;
  };
  bookedAt: number;
  qty: number;
  price: number;
  status:
    | TStatus.cancelled
    | TStatus.completed
    | TStatus.fulfilled
    | TStatus.pending;
}

export interface BookingOrderTableProps {
  data: {
    headings: string[];
    rows: BookingOrder[];
  };
}
