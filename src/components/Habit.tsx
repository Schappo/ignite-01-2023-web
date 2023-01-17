interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <>
      <p>Habit</p>
      <p>{props.completed}</p>
    </>
  )
}