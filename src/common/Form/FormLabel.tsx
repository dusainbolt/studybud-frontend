/* eslint-disable jsx-a11y/label-has-associated-control */
export const FormLabel = ({ label, fieldName = '' }) => {
  return label ? (
    <label id={`label-for-${fieldName}`} style={{ fontWeight: 600 }}>
      {label}
    </label>
  ) : (
    <></>
  );
};
