import { useState } from 'react'
import { v4 } from 'uuid'
const Edit = ({ add }) => {
  const [note, setNote] = useState('')
  function noteChange(e) {
    setNote(e.target.value)
  }

  const [date, setDate] = useState('')
  function dateChange(e) {
    setDate(e.target.value)
  }
  const [time, setTime] = useState('')
  function timeChange(e) {
    setTime(e.target.value)
  }

  function addItem() {
    add(function (preData) {
      return [{ id: v4(), note, date, time }, ...preData]
    })
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <label>記事:</label>
      <input type="text" value={note} onChange={noteChange} />
      <label>日期</label>
      <input type="date" value={date} onChange={dateChange} />
      <label>時間:</label>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  )
}
export default Edit
