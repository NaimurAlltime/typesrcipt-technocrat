{
  //Generic_with_Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
    };
    smartWatch: T;
    bike?: X;
  }

  const juniorDeveloper: Developer<string> = {
    name: "Naimur Rahman",
    computer: {
      brand: "HP",
      model: "HP-eliteBook",
    },
    smartWatch: "w-234",
  };

  type SmartWatch = {
    oled_display: boolean;
    water_prove: boolean;
  };

  interface PulserBike {
    name: string;
    capacity: string;
  }

  const seniorDeveloper: Developer<SmartWatch, PulserBike> = {
    name: "Sabbir Rahman",
    computer: {
      brand: "apple",
      model: "mack-book",
    },
    smartWatch: {
      oled_display: true,
      water_prove: true,
    },
    bike: {
      name: "Pulser ABC",
      capacity: "150cc",
    },
  };
}
