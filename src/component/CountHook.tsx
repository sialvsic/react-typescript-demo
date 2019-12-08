import React, { useState, useEffect } from 'react'
import HelloButton from './Button';

function CountHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<null | string>('');

  useEffect(() => {
    if (count > 5) {
      console.log('click 5 times');
      setText("have a rest")
    }
  }, [count]);

  return (
    <div>
      <div>
        <p>you have click {count}, please {text}</p>
        <HelloButton name={'sialvsic'} click={() => setCount(count + 1)} />
      </div>
    </div>
  )
}

export default CountHook;
