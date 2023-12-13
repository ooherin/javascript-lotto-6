import { Console } from "@woowacourse/mission-utils";
import LottoMaker from "./LottoMaker.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.buyLottoNums = [];
  }
  async play() {
    const lotto = new Lotto();
    let money;
    while (true) {
      money = await Console.readLineAsync("구입금액을 입력해 주세요.");
      if (this.#validateMoney(Number(money))) {
        break;
      }
      Console.print("[ERROR]");
    }
    const buyLottoCount = money / 1000; //Lotto_Price
    Console.print(`${buyLottoCount}개를 구매했습니다.`);

    //로또 발행
    this.publishLottos(buyLottoCount);

    //당첨 로또 생성
  }

  publishLottos(buyLottoCount) {
    const lottoMaker = new LottoMaker();
    this.buyLottoNums = Array(buyLottoCount)
      .fill()
      .map(() => lottoMaker.makeNumbers());

    Console.print(this.buyLottoNums);
  }

  #validateMoney(money) {
    if (money % 1000 !== 0 || money < 1000) {
      return false;
    }
    return true;
  }
}

export default App;

const app = new App();
app.play();
