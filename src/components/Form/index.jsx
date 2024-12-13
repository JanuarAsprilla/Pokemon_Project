const Form = ({ children, onSubmit, method, action }) => {
  return (
    <form method={method} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
