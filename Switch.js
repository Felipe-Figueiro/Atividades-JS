const Fruta = "uva";

switch (Fruta) {
    case "banana":
        console.log("Banana custa R$ 2,00 o quilo.");
    break;
    case "pera":
        console.log("pera custa R$ 3,00 o quilo.");
    break;
    case "laranja":
        console.log("Laranja custa R$ 1,50 o quilo.");
    break;
    case "uva":
        console.log("Uva custa R$ 4,00 o quilo.");
    break;
    default:
        console.log("Desculpe, não temos " + Fruta + ".");
    }