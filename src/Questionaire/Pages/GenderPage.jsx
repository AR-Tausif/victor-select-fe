import React from "react";
import { Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
// import SvgIcon from "@material-ui/core/SvgIcon"
import { StandardPage, RadioGroup } from "../../_components";
import { RadioSubmit } from '../../_components/RadioSubmit'

const styles = theme => ({
  centerField: {
    display: "block",
    textAlign: "left",
    width: 325,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const validateGender = values => {
  const errors = { personal: {} };

  if (values.personal.gender !== "male") {
    errors.personal.gender = "Sorry, we can only offer this service to males.";
  }

  if (!values.personal.gender) {
    errors.personal.gender = "Please make a selection.";
  }

  return errors;
};

const validateEitherGender = values => {
  const errors = { personal: {} };

  if (!values.personal.gender) {
    errors.personal.gender = "Please make a selection.";
  }

  return errors;
};

const options = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" }
];

const questionText = "Tell us your gender";
const additionalText = "";

let GenderPage = props => {
  const { classes, handleSubmit, ...rest } = props;
  return (
    <StandardPage
      questionText={questionText}
      additionalText={additionalText}
      alignTitles="center"
      handleSubmit={handleSubmit}
      {...rest}
    >
      <div className={classes.centerField}>
        <Field
          component={RadioGroup}
          name="personal.gender"
          options={options}
          handleSubmit={handleSubmit}
          type="div"
        />
        <RadioSubmit 
          name="personal.gender"
          options={options}
          handleSubmit={handleSubmit}
        />
      </div>
    </StandardPage>
  );
};

GenderPage = withStyles(styles)(GenderPage);

export { GenderPage, validateGender, validateEitherGender };
