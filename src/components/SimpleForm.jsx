import { FlexboxGrid, Panel, Form, ButtonToolbar, Button } from 'rsuite';

export const SimpleForm = () => {
  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={12}>
        <Panel header={<h3>Login2</h3>} bordered>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Username or email address</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Create</Button>
                <Button appearance="link">Forgot password?</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
