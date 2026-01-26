
function Model({ onClose }) {
  return (
    <>
      <div className='backdrop' onClick={onClose}>
        <dialog 
          className='modal' 
          open 
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Login</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </dialog>
      </div>
    </>
  )
}

export default Model