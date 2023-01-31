import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


function React_modal() {
    const [isOpen, setOpen] = useState(false)

	return (
		<React.Fragment>
			<ModalVideo  channel='youtube' autoplay isOpen={isOpen} videoId="0UJYYkK4d8s" onClose={() => setOpen(false)} />

			{/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
			{!isOpen && <i class="ri-play-circle-line " onClick={()=> setOpen(true)}></i>}
		</React.Fragment>
	)
}

export default React_modal
