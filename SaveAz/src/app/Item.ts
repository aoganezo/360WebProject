class Item {
  id: number;
  name: string;
  price: string;
  url: string;
  description: string;
  rating: string;

  constructor(
    id?: number,
    name?: string,
    price?: string,
    url?: string,
    description?: string,
    rating?: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.url = url;
    this.description = description;
    this.rating = rating;
  }
}

