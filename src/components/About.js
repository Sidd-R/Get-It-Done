import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>1. Press Add to add a task</h4>
        <h4>2. Double click a task to set reminder</h4>
        <br/>
        <h4>Version 1.0.0</h4>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About