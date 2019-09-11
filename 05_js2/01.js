class Person {

    constructor(height,weight,BMI){
        this._height = height;
        this._weight = weight;
    }

    
    get height(){
        return this._height;
    }
    get weight(){
        return this._weight;
    }
    get BMI(){
        return this.calculateBMI();
    }

    calculateBMI(){
        var BMI = (this._weight*10000)/(this._height*this._height);
        BMI = BMI.toFixed(2);
        return BMI;
    }

    set height(arg){
        if(0<arg && arg<300){
            this._height = arg;
        }else{
            console.log('please input height between 0-300(cm)')
        }
    }
    set weight(arg){
        if(0<arg && arg<1000){
            this._weight = arg;
        }else{
            console.log('please input weight between 0-1000(kg)')
        }
    }

    setWeightBasedBMI(){
        if(this.BMI && this._height){
            this._weight = this._height*this._height/10000*this.BMI;
            console.log('your weight calculate from height and BMI is: '+this._weight);
        }else{
            console.log('please input BMI and Height first')
        }
    }
}