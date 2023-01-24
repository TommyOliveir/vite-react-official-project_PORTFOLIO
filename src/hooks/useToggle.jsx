import React from 'react'

function useToggle() {
    const [toggle, setToggle] = React.useState("false")

    function handleToggle() {
        setToggle(prev => !prev)
    }


  return [toggle, handleToggle]
   
  
}

export default useToggle
