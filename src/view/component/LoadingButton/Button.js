import { ReactComponent as Loader } from '../../../assets/icons/loader.svg';
import {Button} from "react-bootstrap";

const Buttons = ({ variant, onSubmit, text, loading = false, disabled }) => {
  return (
    <Button variant={variant} onClick={onSubmit} disabled={disabled}>
      {!loading ? text : <Loader className="spinner" />}
    </Button>
  )
}

export default {Buttons}