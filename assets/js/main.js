let yozing = +prompt("Son yoz iltimos: ");
switch (yozing) {
  case 1: {
    let result = exersice1(
      +prompt("Brinchi sonni kiriting: "),
      +prompt("Ikkinchi sonni kiriting: ")
    );
    function exersice1(a, b) {
      if (a > b) {
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("a > b  Kichik son: " + b);
      } else if (a < b) {
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("a < b  Kichik son: " + a);
      }
    }
    break;
  }
  case 2: {
    let result = exersice2(
      +prompt("X ni kiriting: "),
      +prompt("N ni kiriting: ")
    );
    function exersice2(x, n) {
      console.log(
        x + " ning " + n + " chi darajasi: " + x ** n + " ga teng!!!"
      );
    }
    break;
  }
  case 3: {
    let g = +prompt("Chegara sonini kiriting: ");
    function Load() {
      for (m = 1; m <= g; m++) {
        if (m % 2 != 0) {
          console.log(m);
        }
      }
    }
    Load();
    break;
  }
  case 4: {
    let z = +prompt("Oxirini kiriting: ");
    function exersice4() {
      for (let y = 1; y <= z; y++) {
        if (!(y % 2 == 0)) {
          if (!(y % 3 == 0)) {
            if (!(y % 5 == 0)) {
              console.log(y);
            }
          }
        }
      }
    }
    exersice4();
    break;
  }

  default:
    console.log("Nima qilamiz endi dalbayob barbir dalbayobda!!!");
    break;
}
