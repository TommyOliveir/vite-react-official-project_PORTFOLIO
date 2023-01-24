import React from 'react'

function Form() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        comments: ''
    }) 

    function handleChange(event) {
        console.log(formData)
        const { name, value, checked, type } = event.target
        setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: value
          };
        });
      }

  return (
    <div className='form-container'>
        <form className="form" >
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
         <textarea
          name="comments"
          placeholder="Message"
          value={formData.comments}
          onChange={handleChange}
        />
        <button id='btn-submit' type='submit'>Send</button>

        </form>
    </div>
  )
}

export default Form
