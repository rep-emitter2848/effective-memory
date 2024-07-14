import {useState} from "react"
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('')
  const [preview, setPreview] = useState('')
  const [story, setStory] = useState('')
  const [abnoID, setAbnoID] = useState('')
  const [isPending, setPending] = useState(false )
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {"title": name, preview, "body": story, "abno": abnoID} 
    setPending(true)
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      setPending(false)
      history.push('/')
    })
  }

    return (
      <div className="create">
        <h2>Update the Abnormality Log</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label> <input type="text" required value={name} onChange={(e) => setName(e.target.value)}></input>
          <label>Abno ID:</label><input type="text" required value={abnoID} onChange={(e) => setAbnoID(e.target.value)}></input>
          <label>Preview:</label> <input type="text" value={preview} onChange={(e) => setPreview(e.target.value)}></input>
          <label>Story:</label> <textarea required value={story} onChange={(e) => setStory(e.target.value)}></textarea>
          {!isPending && <button>Create New Entry</button>}
          {isPending && <button disabled>Updating Log...</button>}
        </form> 
      </div>
    );
  }
   
  export default Create;