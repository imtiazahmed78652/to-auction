

import React from 'react'


interface InputTypes {
    value?:string
    onChange?:(newValue:string)=> void;
}
function InputField({value,onChange}:InputTypes) {

  //   const inputValue = useAppSelector((state: RootState) => state.input.inputValue);
  //   console.log(inputValue)
  // const dispatch = useDispatch();

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   dispatch(setInputValue(value));
  // };
  return (
    <div>
        <input type = 'text'  className='border-[1px] border-green outline-none w-[300px] ' value={value} onChange= {(e)=> onChange && onChange(e.target.value)}/>
    </div>
  )
}

export default InputField