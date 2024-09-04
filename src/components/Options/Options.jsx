import s from "./Options.module.css"
import { BsEmojiNeutral } from "react-icons/bs"
import { BsEmojiSmile } from "react-icons/bs"
import { BsEmojiFrown } from "react-icons/bs"
import { GrPowerReset } from "react-icons/gr"

const Options = ({ total, onClick, onReset }) => {
  return (
    <div className={s.optionsWrapper}>
      <button onClick={() => onClick("good")}>
        Good <BsEmojiSmile />
      </button>
      <button onClick={() => onClick("neutral")}>
        Neutral <BsEmojiNeutral />
      </button>
      <button onClick={() => onClick("bad")}>
        Bad <BsEmojiFrown />
      </button>
      {total ? (
        <button className={s.goodBtn} onClick={onReset}>
          Reset <GrPowerReset />
        </button>
      ) : null}
    </div>
  )
}

export default Options
