import React from "react";
import Button from "./Button";
import End from "./End";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'not started',
      currentQuestion: null,
      questions: [
        'КАКОЕ ТВОЁ РЕШЕНИЕ БЫЛО САМЫМ ЗНАЧИМЫМ В ЭТОМ ГОДУ?',
        'КАКОЙ ПОЛЕЗНОЙ ПРИВЫЧКОЙ ТЫ ОБЗАВЁЛСЯ В ЭТОМ ГОДУ?',
        'КАКОЙ ПОЛЕЗНОЙ ПРИВЫЧКОЙ ТЫ ХОЧЕШЬ ОБЗАВЕСТИСЬ В СЛЕДУЮЩЕМ ГОДУ?',
        'КОМУ И ЗА ЧТО ТЫ БЛАГОДАРЕН?',
        'ЧТО В ТЕБЕ ИЗМЕНИЛОСЬ В ЭТОМ ГОДУ?',
        'ЧТО ТЕБЯ СЕЙЧАС БОЛЬШЕ ВСЕГО РАДУЕТ И ПОЧЕМУ?',
        'ЧЕМ ИЗ СДЕЛАННОГО ТОБОЙ В ЭТОМ ГОДУ ТЫ БОЛЬШЕ ВСЕГО ГОРДИШЬСЯ?',
        'ПРЕДСТАВЬ, ЧТО ТЫ УЧРЕДИТЕЛЬ ПРЕМИИ «ЧЕЛОВЕК ГОДА». КТО ТВОЙ ПЕРСОНАЛЬНЫЙ ЧЕЛОВЕК ГОДА?',
        'ПРЕДСТАВЬ, ЧТО ТЫ УЧРЕДИТЕЛЬ ПРЕМИИ «СОБЫТИЕ ГОДА». КАКОЕ ТВОЕ ПЕРСОНАЛЬНОЕ СОБЫТИЕ ГОДА?',
        'ЗА ЧТО ТЫ БЛАГОДАРЕН 2021 ГОДУ?',
        'ЧТО ТЕБЯ БОЛЬШЕ ВСЕГО УДИВИЛО В ЭТОМ ГОДУ?',
        'В КАКИХ НЕОБЫЧНЫХ МЕСТАХ ТЫ ПОБЫВАЛ?',
        'В КАКИХ ГОРОДАХ ТЫ ХОЧЕШЬ ПОБЫВАТЬ В СЛЕДУЮЩЕМ ГОДУ?',
        'ЧЕМУ ТЫ НАУЧИЛСЯ? У КОГО?',
        'ЧЕМУ ТЫ ХОЧЕШЬ НАУЧИТЬСЯ В СЛЕДУЮЩЕМ ГОДУ?',
        'ЧЕМУ ТЫ ХОЧЕШЬ НАУЧИТЬСЯ В СЛЕДУЮЩЕМ ГОДУ?',
        'ПРОСТО ПОХВАЛИ СЕБЯ',
        'КНИГА ИЛИ ФИЛЬМ, КОТОРЫЕ ТЕБЯ ВПЕЧАТЛИЛИ В ЭТОМ ГОДУ',
        'ОЦЕНИ, НАСКОЛЬКО УДАЧНЫМ БЫЛ ЭТОТ ГОД ПО ШКАОЛЕ ОТ 1 ДО 10. ЧТО СДЕЛАЛО ЕГО ТАКИМ?',
        'РАССКАЖИ О СВОЕЙ САМОЙ БОЛЬШОЙ ПОБЕДЕ В 2021 ГОДУ',
        'ЧТО ИЗ СДЕЛАННОГО ТОБОЙ В ЭТОМ ГОДУ ТЫ УДОВОЛЬСТВИЕМ ПОВТОРИШЬ В СЛЕДУЮЩЕМ?',
        'ПОДУМАЙ О САМОМ ПРИЯТНОМ МОМЕНТЕ ГОДА. ПОЧУВСТВУЙ СЕБЯ В НЁМ. ЧТО ЭТО ЗА МОМЕНТ?',
        'ЧЕГО ТЫ САМ СЕБЕ ЖЕЛАЕШЬ?',
        'ЧТО ТЫ ХОЧЕШЬ ПОЖЕЛАТЬ СВОИМ БЛИЗКИМ?',
        'КАКОЙ МЕСЯЦ БЫЛ САМЫМ СЧАСТЛИВЫМ В 2021 И ПОЧЕМУ?',
        'КТО ВДОХНОВЛЯЛ ТЕБЯ В ЭТОМ ГОДУ? ЧЕМ?',
        'ПОЯВИЛИСЬ ЛИ У ТЕБЯ НОВЫЕ МЕЧТЫ В ЭТОМ ГОДУ? О ЧЁМ ТЫ СЕЙЧАС МЕЧТАЕШЬ?',
        'ПОЯВИЛИСЬ ЛИ У ТЕБЯ НОВЫЕ ДРУЗЬЯ В ЭТОМ ГОДУ? КАК ВЫ ПОЗНАКОМИЛИСЬ?',
        'ЧТО НОВОГО О САМОМ СЕБЕ ТЫ УЗНАЛ В ЭТОМ ГОДУ?',
        'КАКОЕ СВОЁ КАЧЕСТВО ТЫ ХОЧЕШЬ РАЗВИВАТЬ?',
        'ЧТО ТЫ ПОДАРИШЬ СЕБЕ НА НОВЫЙ ГОД? ТВОЙ ИДЕАЛЬНЫЕ НОВОГОДНИЙ ПОДАРОК',
        'ОПИШИ ПРОШЕДШИЙ ГОД ТРЕМЯ СЛОВАМИ',
        'СЮРПРИЗ! ПРИДУМАЙ СВОЙ ВОПРОС :)'
      ],
    }
  }
  startGame = () => {
    this.setState({
      state: 'started',
      currentQuestion: Math.floor(Math.random() * (this.state.questions.length - 1))
    });
  }
  nextQuestion = () => {
    const { questions, currentQuestion } = this.state;
    const newQuestions = questions.filter((question, index) => index !== currentQuestion);
    if (newQuestions.length > 0) {
      this.setState({
        questions: [...newQuestions],
        currentQuestion: Math.floor(Math.random() * (this.state.questions.length - 1))
      });
    } else {
      this.setState({ state: 'ended' });
    }
  }
  render () {
    return (
      <div className="questionBox">
        {this.state.state === 'not started'
        ? <button onClick={this.startGame} className="button" style={{ width: '500px' }}>Начнём!</button>
        : this.state.state === 'started'
          ? <>
              <span className="question">{this.state.questions[this.state.currentQuestion]}</span>
              <Button nextQuestion={this.nextQuestion} />
            </>
          : <End />}
      </div>
    )
  }
}