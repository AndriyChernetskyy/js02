function print(text) {
    document.write(text + '<br>');
}

function printArr(arr) {
    print('Array size is: ' + arr.length);
    for (var i = 0; i < arr.length; i++) {
       print(i + 1 + ' ' + arr[i]); 
    }    
}

function printArrV2(arr) {
    print('Array size is: ' + arr.length);
    arr.forEach(function(el, i) {
        print(i + 1 + ' ' + el);
    });    
}
function printTogether(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++)
    print(i + 1 + ' ' + arr1[i]+ ' ' + arr2[i]);
}

let title,
    price,
    description,
    image;
    
    
    
    
let goodTitles = [];

goodTitles.push('Mercedes GL500');
goodTitles.push('BMW X6');
goodTitles.push('Tesla Model X');

goodTitles[3] = 'ZAZ Lanos';
goodTitles.push('Audi TT');

printArrV2(goodTitles);


let prices = [60000, 90000, 150000, 10000, 13333];

printArrV2(prices);

printTogether(goodTitles, prices);

let cars = {};
cars['fastest'] = 'Tesla Model X';
cars['cheapest'] = 'ZAZ Lanos';
cars['largest'] = 'Mersedes GL500';
print('the fastest car is ' + cars['fastest']);

function printDict(dict) {
    for (var key in dict) {
        print(key + ': ' + dict[key]);
    }
}


printDict(cars);


let mb = {};
mb.title='Mersedes GL500';
mb.price='90000';
mb.description='Cool car';
mb.color='black';

let bmw = {};
bmw.title='BMW X6';
bmw.price='100000';
bmw.description='vERY Cool car';
bmw.color='yellow';



mb.run = function(){
    print(this.title+ ' is running');
};


bmw.run = carRun;


function carRun(){
    print(this.title+ ' is running');
}
    


print(mb.color);
mb.run();
bmw.run();

let audi = {
    title: 'Audi TT',
    price: '20000',
    run: carRun
};
audi.run();

function Car(title,price,description,color){
    this.title=title;
    this.price=price;
    this.description=description;
    this.color=color;
    this.run=function(){
        print(this.title+' is running');
    };
    return this;
}

let zaz = new Car('ZAZ Lanos', 10000, 'Everyday car', 'grey');
zaz.run();



class NewCar{
    constructor(title,price,description,color){
    this.title=title;
    this.price=price;
    this.description=description;
    this.color=color;
}
run(){
    print(this.title+' is running');
}
    
}

let lr=new NewCar('lR DEFENDEr', 1000,'new one','white');
lr.run();

 
let lrRed=Object.create(lr);
lrRed.color='Red';
lrRed.title='Defender';

lrRed.run();