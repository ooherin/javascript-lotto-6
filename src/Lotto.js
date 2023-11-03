import validation from "./utils/valiidation.js";
import valiidation from "./utils/valiidation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    valiidation.isInValidRange(numbers);
    validation.hasSameNumber(numbers);
  }

  //기본 숫자 검사받기
  checkValidation() {
    this.#validate(this.#numbers);
  }

  addBonusNumber(bonusNumber) {
    this.#numbers.push(bonusNumber);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
