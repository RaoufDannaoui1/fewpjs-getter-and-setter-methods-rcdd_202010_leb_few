// Add your Circle class here
class Circle{
  constructor(radius){
    this.raduis=raduis;
  }

  get diameter(){
    return this.raduis*2;
  }

  get circumference(){
    return 2*Math.PI*this.raduis;
  }

  get area(){
    return Math.PI*(this.raduis**2);
  }

  set diameter(diameter){
    this._diameter = diameter;
  }

  set circumference(circumference){
    this._circumference = circumference;
  }

  set area(area){
    this._area = area;
  }
}
