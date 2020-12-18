import { Comment } from './comment';
//we're gonna use this template in order to construct dishes
//n we'll need to specify all these properties for any dish we create
export class Dish {
    id: String;
    name: String;
    image: String;
    category: String;
    featured: boolean;
    label: String;
    price: String;
    description: String;
    comments: Comment[];
}