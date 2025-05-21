export interface ProductItem {
  id: string;
  category: string;
  name: string;
  price: number;
  image: Image;
}

export interface Image {
  tablet: string;
  mobile: string;
  desktop: string;
  thumbnail: string;
}

export interface IOrder {
  total: number;
  items: {
    quantity: number;
    product: ProductItem;
  }[];
}

export interface IModalOrderProps {
  isOpen: boolean;
  onClose: () => void;
  order: IOrder;
  totalPrice?: number;
}

export interface DrawerOrderProps {
  isOpen: boolean;
  onClose: () => void;
  order: IOrder;
  totalPrice?: number;
}
