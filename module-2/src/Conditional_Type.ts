{
  //Conditional type
  type x = string;
  type y = number;

  type z = x extends string ? true : false;
  type m = y extends null ? true : false;
}
