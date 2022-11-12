import * as React from 'react';
import { Form, Button, Schema, Panel, Message, toaster, FlexboxGrid, InputPicker, InputNumber } from 'rsuite';
import Select from 'react-select';

const Field = React.forwardRef((props, ref) => {
  const { name, message, label, accepter, error, ...rest } = props;
  return (
    <Form.Group ref={ref} className={error ? 'has-error' : ''}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} errorMessage={error} {...rest} />
      <Form.HelpText>{message}</Form.HelpText>
    </Form.Group>
  );
});

const { StringType } = Schema.Types;
const model = Schema.Model({
  foods: StringType().isRequired('This field is required.')
});

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const dogs = [
  { value: 'dog1', label: 'Rex' },
  { value: 'dog2', label: 'Fluphy' },
  { value: 'dog3', label: 'Tarzan' }
];

const cats = [
  { value: 'cat1', label: 'Myau' },
  { value: 'cat2', label: 'Mizi' },
  { value: 'cat3', label: 'Gooliver' }
];

const data = [
  'Eugenia',
  'Bryan',
  'Linda',
  'Nancy',
  'Lloyd',
  'Alice',
  'Julia',
  'Albert',
  'Louisa',
  'Lester',
  'Lola',
  'Lydia',
  'Hal',
  'Hannah',
  'Harriet',
  'Hattie',
  'Hazel',
  'Hilda'
].map(item => ({ value: item, label: item }));

const CustomSelect = React.forwardRef((props, ref) => {
  const { value, onChange, ...rest } = props;
  return (
    <Select
      isClearable
      width={200}
      ref={ref}
      {...rest}
      onChange={option => {
        onChange(option?.value || null);
      }}
    />
  );
});

export const CreateLoan = () => {
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    foods: 'strawberry'
  });

  const handleSubmit = () => {
    console.log("handleSubmit. formValue: ", formValue);
    if (!formRef.current.check()) {
      toaster.push(
        <Message showIcon type="error">
          Error
        </Message>
      );
      return;
    }
    toaster.push(
      <Message showIcon type="success">
        Success
      </Message>
    );
  };

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={12}>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formDefaultValue={formValue}
          model={model}
        >
          <Field
            name="foods"
            label="Food"
            accepter={CustomSelect}
            options={options}
            error={formError.foods}
          />

          <Form.Group controlId="dogs">
            <Form.ControlLabel>Dogs</Form.ControlLabel>
            <Form.Control name="dogs" accepter={InputPicker} data={dogs} />
          </Form.Group>

          <Form.Group controlId="cats">
            <Form.ControlLabel>Cats</Form.ControlLabel>
            <Form.Control name="cats" accepter={InputPicker} data={cats} />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.ControlLabel>Price</Form.ControlLabel>
            <Form.Control name="price" accepter={InputNumber} />
          </Form.Group>

          <Form.Group controlId="inputPicker">
            <Form.ControlLabel>InputPicker</Form.ControlLabel>
            <Form.Control name="inputPicker" accepter={InputPicker} data={data} />
          </Form.Group>

          <Form.Group>
            <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
          </Form.Group>
        </Form>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
