export class DataService { 
    private data = [];
    getRandomData(){
    return this.data;
    }
    insertData(data:string){
        this.data.push(data);
    }
}