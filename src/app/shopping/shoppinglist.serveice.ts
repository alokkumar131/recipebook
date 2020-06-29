import { Subject } from 'rxjs';

export class ShoppingListService{

    ingradients = [];
    selectedItem = new Subject<{}>();

    addListItems(listItem){
       this.ingradients.push(listItem);
    }
    editListItems(index, ingradient){
       this.ingradients[index].name = ingradient.name; 
       this.ingradients[index].amount = ingradient.amount; 
       console.log(this.ingradients)
    }
    deleteListItems(index){
        this.ingradients.splice(index, 1);
    }

}