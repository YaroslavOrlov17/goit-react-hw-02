import { useState, useEffect } from "react"

import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import Notification from "./components/Notification/Notification"

function App() {
  // Установка состояния и загрузка данных с LocalStorage
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbackObj = window.localStorage.getItem("feedback object")
    if (savedFeedbackObj !== null) {
      return JSON.parse(savedFeedbackObj)
    }
    return { good: 0, neutral: 0, bad: 0 }
  })

  // Общее количество отзывов
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  // Обновление состояния (количества отзывов каждой отдельной категории)
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    })
  }

  // Сброс всех категорий на ноль
  const resetFeedback = () => {
    const resetFeedbackObject = {}
    for (let key in feedback) {
      resetFeedbackObject[key] = 0
    }

    setFeedback(resetFeedbackObject)
  }

  //Сохранение в локакльное хранилище
  useEffect(() => {
    window.localStorage.setItem("feedback object", JSON.stringify(feedback))
  }, [feedback])

  // Процент позитивных отзывов
  const positivFeedbacks =
    totalFeedback - feedback.neutral > 0
      ? Math.round((feedback.good / (totalFeedback - feedback.neutral)) * 100)
      : 0

  //Рендер компонентов в App
  return (
    <div className="container">
      <Description />
      <Options
        total={totalFeedback}
        onClick={updateFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          positive={positivFeedbacks}
          total={totalFeedback}
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  )
}

export default App
