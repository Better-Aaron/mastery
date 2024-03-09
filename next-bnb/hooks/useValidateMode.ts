import { setValidateMode as validate } from '@/store/features/common/commonSlice';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';

const useValidateMode: any = () => {
  const dispatch = useDispatch();
  const validateMode = useAppSelector((state) => state.common.validateMode);

  const setValidateMode = (value: boolean) => {
    dispatch(validate(value));
  };
  return { validateMode, setValidateMode };
};

export default useValidateMode;
