import Option from './options'

const Options = ({ options, ...props }) => {
  return (
    <>
      {options.map((option, index) => (
        <Option key={index} value={option.value} {...props}>
          {option.label}
        </Option>
      ))}
    </>
  )
}

export default Options
