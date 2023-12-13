import { Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    let money;
    while (true) {
      money = await Console.readLineAsync("구입금액을 입력해 주세요.");
      if (this.#validateMoney(Number(money))) {
        break;
      }
      Console.print("[ERROR]");
    }
    const lottoCount = money / 1000;
    Console.print(`${lottoCount}개를 구매했습니다.`);
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
