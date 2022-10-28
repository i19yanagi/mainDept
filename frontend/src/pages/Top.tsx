import type { Component } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { createSignal, JSX } from 'solid-js'
import '~/styles/Top.scss'

const Top: Component = () => {
  const navigate = useNavigate()
  const [name, setName] = createSignal('default')
  const onInputHandler: JSX.EventHandlerUnion<HTMLInputElement, Event> = (
    e
  ) => {
    setName((e.target as HTMLInputElement).value)
  }
  return (
    <>
      <form class='form'>
        <div class='container'>
          <input class='input' placeholder='名前を入力してください' onInput={onInputHandler} type='text'/>
          <p>UserName: {name()}</p>
          <button onClick={() => navigate('/game', {state: {name: name()}})}>次へ</button>
        </div>
      </form>
    </>
  )
}

export default Top
