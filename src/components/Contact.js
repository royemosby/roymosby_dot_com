export default function Contact(){
  return(
    <div className="box">
      <h2 className="is-size-2 has-text-centered title">Contact me</h2>
      <form action="">
        <div className="field">
          <label htmlFor="form-name">Name</label>
          <div className="control">
            <input type="text" className="input" id="form-name" placeholder="Full Name"/>
          </div>
          <label htmlFor="form-email">Email</label>
          <div className="control">
            <input type="text" className="input" id="form-email" placeholder="Name"/>
          </div>
          <label htmlFor="form-message">Message</label>
          <div className="control">
            <textarea name="form-message" className="textarea" id="form-message" rows="10"></textarea>
          </div>
          <div className="control has-text-centered box">
            <button className="button is-info">Send message</button>
          </div>
        </div>
      </form>
    </div>
  )
}