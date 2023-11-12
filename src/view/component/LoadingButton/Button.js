import { ReactComponent as Loader } from '../../../assets/icons/loader.svg';

const Button = ({ className, onSubmit, text, loading = false, disabled }) => {
  return (
    <button className={className} onClick={onSubmit} disabled={disabled}>
      {!loading ? text : <Loader className="spinner" />}
    </button>
  )
}

export default Button