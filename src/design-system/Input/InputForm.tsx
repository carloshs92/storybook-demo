import React, {MutableRefObject} from "react";
import {IInputProps, InputBase} from "./InputBase";
import {styled, Small1, Small2, zBasic1} from "../theme" ;
import Icon from "../Icon";

export interface IInputFormProps extends IInputProps{
  icon?: string;
  error?: string;
  omitErrorMessage?: boolean;
  label?: string;
  option?: {
    icon: string;
    onClick(inputRef: MutableRefObject<HTMLInputElement>): any;
  };
  clearField?(): void;
};

const IconInputForm = styled(Icon)`
    height: 2.4em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.4em;
    z-index: ${zBasic1};
`;

const IconInputFormLeft = styled(IconInputForm)`
  left: 14px;
`;

export const IconInputFormRight = styled(IconInputForm)`
  right: 14px;
  cursor: pointer;
`;

const WrapperInputForm = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 4px;
  }
  input {
    & + ${IconInputFormLeft} {
      fill: ${props => props.theme.text01};
    }
    &[disabled] + ${IconInputFormLeft} {
      fill: ${props => props.theme.disabledText};
    }
    &:focus + ${IconInputFormLeft} {
      fill: ${props => props.theme.text02};
    }
  }
  button {
    border: 0;
    background: transparent;
  }
  ${Small2} {
    color: ${props => props.theme.supportError}
  }
  svg[name='Close'] {
    fill: ${props => props.theme.supportError}
  }
`;

export const InputForm: React.FC<IInputFormProps> = (props) => {
  const {
    icon,
    error,
    omitErrorMessage,
    label,
    className,
    clearField,
    option,
    ...inputProps} = props;

  const renderButton = (inputRef: MutableRefObject<HTMLInputElement>) => {
    return option ?
      <button type="button" onClick={option.onClick(inputRef)}>
        <IconInputFormRight name={option.icon} />
      </button>
      : null
  };

  const renderClearButton = (inputRef: MutableRefObject<HTMLInputElement>) => {
    return clearField ?
      <button type="button" onClick={clearField}>
        <IconInputFormRight name={'Close'} />
      </button>
      : null
  };

  return (
    <WrapperInputForm className={className}>
      {!!label && <label><Small1 alternative={true}>{label}</Small1></label>}
      <InputBase
        error={!!error}
        renderChildrenRight={!!error ? renderClearButton : renderButton}
        childrenLeft={icon ? <IconInputFormLeft name={icon} /> : null}
        {...inputProps} />
      {(!!props.error && !omitErrorMessage) && <Small2>{props.error}</Small2> }
    </WrapperInputForm>
  );
};
