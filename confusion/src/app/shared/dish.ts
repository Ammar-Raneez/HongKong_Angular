import { Comment } from './comment';
//we're gonna use this template in order to construct dishes
//n we'll need to specify all these properties for any dish we create
export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}