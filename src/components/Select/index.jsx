import StyledSelect from './select'
import Options from './ComponentOptions'

const Select = ({ options = [], id, defaultValue = '', ...props }) => {
  return (
    <StyledSelect id={id} defaultValue={defaultValue} {...props}>
      <option value="" disabled>
        Selecciona una opción
      </option>
      <Options options={options} />
    </StyledSelect>
  )
}

export default Select
