import React from 'react';
import { Field } from 'formik';

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

function FilteredPropsButtonShowPassword({ className, valid, error, ...props }) {
  return <button className={className} {...props} />;
}
function FilteredPropsButtonShowConfirmPassword({ className, valid, error, ...props }) {
  return <button className={className} {...props} />;
}
function FilteredPropsIconShowPassword({ className, valid, error, ...props }) {
  return <svg className={className} {...props} />;
}

const AuthFormStyledHelpers = {
  FilteredPropsInputField,
  FilteredPropsButtonShowConfirmPassword,
  FilteredPropsButtonShowPassword,
  FilteredPropsIconShowPassword,
};

export default AuthFormStyledHelpers;
