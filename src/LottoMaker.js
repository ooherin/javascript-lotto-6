import { Random } from "@woowacourse/mission-utils";

class LottoMaker {
  constructor() {
    this.lottoNums = [];
  }

  // 로또 번호 생성
  makeNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 10, 6);
    this.lottoNums = numbers;
    return numbers;
  }

  get getWinningLottoNums() {
    return this.lottoNums;
  }
}

export default LottoMaker;
